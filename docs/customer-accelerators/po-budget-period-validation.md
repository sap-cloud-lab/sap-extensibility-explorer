# PO Budget Period Validation for Public Sector

## Accelerator Summary

This accelerator implements a purchase order change validation for public-sector customers where `Budget Period` must not be earlier than the current fiscal year.

The source example is CFA. CFA follows a July-to-June fiscal year, so a save date of 5 July 2026 belongs to FY2027. Under that rule, Budget Period `2026` must be blocked and Budget Period `2027` or later is allowed.

The pattern is reusable for other public-sector customers that maintain budgetary control dimensions such as Fund, Grant, Functional Area, Budget Period, Cost Center, Profit Center, WBS, and related account assignment fields.

## Extensibility Classification

- Extensibility option: In-App extensibility
- SAP capability: Custom Fields and Custom Logic
- Business process: Purchase Order processing
- Primary object: Purchase Order
- Process object: Purchase Order account assignment
- Customer source type: Customer accelerator
- Completed source example: Purchase Order change validation
- Deferred source example: Purchase Order create and Purchase Requisition validation

## Business Problem

Business users can amend or progress historical purchase orders where one or more account assignments still carry a prior-year Budget Period. Public-sector customers often need a hard control that prevents open/relevant PO lines from being saved with Budget Period earlier than the current fiscal year.

The rule must not block the entire purchase order simply because older lines exist on the document. For example:

- A PO has five line items.
- Four old line items have Budget Period `2026`.
- Those old lines may be delivered, finally invoiced, or not part of the current change.
- The user changes only line item 5.
- The validation should apply only to the relevant open line/account assignment, not every historical line on the PO.

## Business Requirement

For the source CFA scenario:

- Determine current fiscal year from the system save/change date.
- CFA fiscal year runs July to June.
- July 2026 to June 2027 is FY2027.
- If current fiscal year is FY2027, Budget Period `2026` must be blocked.
- Budget Period `2027` or later must be allowed by the custom validation.
- PO line items that are delivery completed or finally invoiced must be skipped.
- Deleted account assignment rows must be skipped.
- The custom error must be clearly distinguishable from SAP standard budget consumption date messages.

## Reuse Checklist For Another Customer

Capture these decisions before implementation:

| Decision Area | Customer-Specific Question | Example From CFA |
| --- | --- | --- |
| Fiscal-year basis | Should the rule use system save date, document date, delivery date, posting date, or company-code fiscal-year variant? | Use system save date/change date. |
| Fiscal-year calendar | What fiscal year pattern applies? | July to June. |
| Company-code scope | Does the rule apply to all company codes or selected public-sector entities only? | CFA company code/scope. |
| Document types | Which PO document types are in scope? | Confirm per customer. |
| Account assignment categories | Should the rule apply to all account assignments or only selected categories such as K, P, or F? | Confirm per customer. |
| Budget Period mandatory behavior | If Budget Period is blank, should custom logic skip it or block it? | Source example skips initial values because SAP/field control handles mandatory entry separately. |
| Closed line behavior | Should delivered/finally invoiced items be skipped? | Yes. |
| Historical unchanged lines | Should old untouched lines be ignored? | Yes. |
| Multi-account assignment | Should every active account assignment split be checked? | Yes. |
| Message wording | What customer prefix and text should users see? | `CFA custom check:`. |
| Translation | Is a translatable message/code list required? | Not in source build; consider for production reuse. |
| Create path | Does the selected BAdI expose account assignments during create? | No in tested source path; handle separately. |
| PR path | Is Purchase Requisition required? | Yes later, but separate object/BAdI. |

## Recommended SAP Public Cloud Implementation Path

1. Confirm the exact business rule and fiscal-year derivation.
2. Confirm that the PO and PR requirements are implemented separately.
3. Start with PO change validation if the business issue is change/progressing existing purchase orders.
4. Use Custom Logic and BAdI `BD_MMPUR_FINAL_CHECK_PO` for the PO change final-check pattern.
5. Confirm field availability in the BAdI import parameters:
   - `PURCHASEORDERITEMS`
   - `PURCHASEORDERITEMS_DB`
   - `PURCHASEORDERACCOUNTING`
6. Confirm that `BUDGETPERIOD` exists under `PURCHASEORDERACCOUNTING`.
7. Confirm that item status fields such as `ISCOMPLETELYDELIVERED` and `ISFINALLYINVOICED` exist under `PURCHASEORDERITEMS`.
8. Do not use `ISDELETED` on the PO item unless it is exposed in the target tenant. In the source example, item-level `ISDELETED` was not available.
9. Use account assignment `ISDELETED` to skip deleted account assignment rows.
10. Compare current PO item values with `PURCHASEORDERITEMS_DB` to decide whether an item changed.
11. For account-assignment-only changes, compare current Budget Period with saved account assignment Budget Period.
12. If the BAdI does not expose `PURCHASEORDERACCOUNTING_DB`, read saved Budget Period from released CDS view `I_PurOrdAccountAssignmentAPI01`.
13. Append an error message when the Budget Period is less than the current fiscal year.
14. Prefix the custom message so users can identify it as the customer-specific rule.
15. Test old, current, and future Budget Period values.
16. Test delivered, finally invoiced, deleted, unchanged, and multi-account assignment lines.
17. Test SAP standard budget consumption date messages and confirm they do not clash with the custom message.
18. Document create-path behavior separately because the PO final-check BAdI may trigger during create without account assignment rows.

## Objects And References

| Area | Value |
| --- | --- |
| Custom Logic implementation example | `YY1_BD_MMPUR_FINAL_CHECK_PO` |
| BAdI | `BD_MMPUR_FINAL_CHECK_PO` |
| Completed source scope | Purchase Order change |
| Deferred source scope | Purchase Order create, Purchase Requisition |
| Current item table | `PURCHASEORDERITEMS` |
| Database item table | `PURCHASEORDERITEMS_DB` |
| Account assignment table | `PURCHASEORDERACCOUNTING` |
| Budget Period field | `BUDGETPERIOD` |
| Account assignment delete indicator | `ISDELETED` |
| Item close indicators | `ISCOMPLETELYDELIVERED`, `ISFINALLYINVOICED` |
| Saved account assignment read | `I_PurOrdAccountAssignmentAPI01` |
| Custom message prefix example | `CFA custom check:` |

## Why This BAdI Was Used

`BD_MMPUR_FINAL_CHECK_PO` is useful for PO change validation because it runs during PO save/check processing and allows the implementation to append error messages to block saving.

The source testing showed that the same BAdI can be triggered during PO create, but `PURCHASEORDERACCOUNTING` had zero rows in the tested create path. Because Budget Period was not available in that create context, create validation should be designed separately using a create/account-assignment hook where Budget Period is populated.

## Implementation Logic

The rule has two layers:

1. Relevance detection
   - Skip closed items.
   - Detect changed or newly present items by comparing to `PURCHASEORDERITEMS_DB`.
   - Detect account-assignment-only Budget Period changes by comparing current account assignment value to saved value from `I_PurOrdAccountAssignmentAPI01`.

2. Budget Period validation
   - Loop active account assignments for relevant items.
   - Skip deleted rows and blank Budget Period values.
   - Convert Budget Period to integer.
   - If Budget Period is less than current fiscal year, append an error message.

## ABAP Template

```abap
DATA: ls_message LIKE LINE OF messages.
DATA: lv_db_budgetperiod TYPE c LENGTH 10.

* Change-only logic. PO create should be designed separately if account rows
* are not available during create in this BAdI.
IF purchaseorder_db-purchaseorder IS INITIAL.
  RETURN.
ENDIF.

DATA(lv_today) = cl_abap_context_info=>get_system_date( ).
DATA(lv_current_fy) = CONV i( lv_today(4) ).

* Example: July to June fiscal year. Replace this with customer-specific
* fiscal-year derivation when required.
IF lv_today+4(2) >= '07'.
  lv_current_fy = lv_current_fy + 1.
ENDIF.

LOOP AT purchaseorderitems INTO DATA(ls_po_item).

  DATA(lv_item_relevant) = ''.

  IF ls_po_item-iscompletelydelivered = 'X'
     OR ls_po_item-isfinallyinvoiced = 'X'.
    CONTINUE.
  ENDIF.

  READ TABLE purchaseorderitems_db INTO DATA(ls_po_item_db)
    WITH KEY purchaseorderitem = ls_po_item-purchaseorderitem.

  IF sy-subrc <> 0.
    lv_item_relevant = 'X'.
  ELSEIF ls_po_item <> ls_po_item_db.
    lv_item_relevant = 'X'.
  ENDIF.

  IF lv_item_relevant IS INITIAL.

    LOOP AT purchaseorderaccounting INTO DATA(ls_acc_check)
      WHERE purchaseorderitem = ls_po_item-purchaseorderitem.

      IF ls_acc_check-isdeleted = 'X'.
        CONTINUE.
      ENDIF.

      CLEAR lv_db_budgetperiod.

      SELECT SINGLE FROM i_purordaccountassignmentapi01
        FIELDS budgetperiod
        WHERE purchaseorder = @ls_acc_check-purchaseorder
          AND purchaseorderitem = @ls_acc_check-purchaseorderitem
          AND accountassignmentnumber = @ls_acc_check-accountassignmentnumber
        INTO @lv_db_budgetperiod.

      IF sy-subrc <> 0
         OR ls_acc_check-budgetperiod <> lv_db_budgetperiod.
        lv_item_relevant = 'X'.
        EXIT.
      ENDIF.

    ENDLOOP.

  ENDIF.

  IF lv_item_relevant IS INITIAL.
    CONTINUE.
  ENDIF.

  LOOP AT purchaseorderaccounting INTO DATA(ls_po_accounting)
    WHERE purchaseorderitem = ls_po_item-purchaseorderitem.

    IF ls_po_accounting-isdeleted = 'X'
       OR ls_po_accounting-budgetperiod IS INITIAL.
      CONTINUE.
    ENDIF.

    IF CONV i( ls_po_accounting-budgetperiod ) < lv_current_fy.

      CLEAR ls_message.
      ls_message-messagetype = 'E'.
      ls_message-messagevariable1 =
        |CFA custom check: PO item { ls_po_accounting-purchaseorderitem } Budget Period { ls_po_accounting-budgetperiod } < FY { lv_current_fy }|.

      APPEND ls_message TO messages.

    ENDIF.

  ENDLOOP.

ENDLOOP.
```

## Customer Adaptation Points

| Code Area | What To Adapt | Why |
| --- | --- | --- |
| Fiscal-year derivation | Replace July-to-June logic if customer uses a different fiscal calendar. | Avoid hardcoding CFA-specific behavior for other customers. |
| Company-code selection | Add company code or purchasing organization scope if needed. | Some customers may only need the rule for public-sector entities. |
| Document types | Restrict by PO type if required. | Avoid applying rule to unrelated PO processes. |
| Account assignment categories | Restrict by category if required. | Some customers may only require cost center, WBS, asset, or fund-related checks. |
| Initial Budget Period handling | Decide whether blank Budget Period should be skipped or blocked. | Depends on field control and business process. |
| Message prefix | Replace `CFA custom check:` with customer-specific wording. | Helps users distinguish custom rules from SAP standard errors. |
| Translation | Use code list/message approach where required. | Hardcoded text may not be suitable for multilingual tenants. |
| Create handling | Use a different create-time BAdI/context if account rows are missing. | The PO change BAdI may not have complete create data. |

## Known Failed Paths From Source Build

These findings are useful when reimplementing the accelerator:

| Attempt | Result | Corrective Action |
| --- | --- | --- |
| Read `purchaseorderaccounting-budgetperiod` directly | Failed because `PURCHASEORDERACCOUNTING` is a table without a header line. | Loop into a work area first. |
| Use `ls_po_item-isdeleted` | Failed because PO item structure did not expose `ISDELETED`. | Use account assignment `ISDELETED` instead. |
| Compare against `purchaseorderaccounting_db` | Failed because the BAdI did not expose that table. | Read saved value from `I_PurOrdAccountAssignmentAPI01`. |
| Implement create validation in the same final-check path | BAdI triggered, but `PURCHASEORDERACCOUNTING` had zero rows in the tested create path. | Design create validation separately. |
| Use an unlabelled custom message | Hard to distinguish from SAP standard validation. | Prefix the message, for example `CFA custom check:`. |

## Message Design

Custom message example:

```text
CFA custom check: PO item 00010 Budget Period 2026 < FY 2027
```

SAP standard messages can still appear in the same message list. Example observed in the source scenario:

```text
Budget period 2026 is not valid for the consumption date 07/05/2026
```

Do not suppress the SAP standard message unless the customer has a separate approved design for SAP standard message control. This accelerator only adds the customer-specific fiscal-year guardrail.

## Test Script

| Test ID | Scenario | Expected Result |
| --- | --- | --- |
| BP-001 | Change existing open PO line with Budget Period earlier than current FY | Save blocked with custom error |
| BP-002 | Change existing open PO line with Budget Period equal to current FY | Save allowed by custom logic |
| BP-003 | Change existing open PO line with Budget Period greater than current FY | Save allowed by custom logic |
| BP-004 | Existing old PO line is completely delivered | Item skipped |
| BP-005 | Existing old PO line is finally invoiced | Item skipped |
| BP-006 | Deleted account assignment row exists | Row skipped |
| BP-007 | Unchanged historical line has old Budget Period | Line skipped unless relevant to current save |
| BP-008 | Relevant multi-account assignment item has one old Budget Period split | Save blocked |
| BP-009 | User changes only account assignment Budget Period, not item-level fields | Save blocked if new Budget Period is earlier than current FY |
| BP-010 | SAP standard budget consumption message appears | Custom message remains distinguishable |
| BP-011 | PO create in the same BAdI | Confirm whether account assignment rows are populated; if not, defer to create-specific design |
| BP-012 | Purchase Requisition equivalent | Implement and test separately using PR BAdI/context |

## Evidence To Capture For Another Customer

Capture these screenshots or records before moving to production:

- BAdI implementation header and published status.
- Import parameter list showing available PO item/account assignment fields.
- `BUDGETPERIOD` under `PURCHASEORDERACCOUNTING`.
- Item close indicators under `PURCHASEORDERITEMS`.
- Evidence that item-level `ISDELETED` is or is not available.
- Final ABAP code.
- Test PO blocked for prior Budget Period.
- Test PO allowed for current/future Budget Period.
- Test skipped delivered/finally invoiced lines.
- Test unchanged historical lines do not block unrelated changes.
- Message list showing the customer prefix and any SAP standard messages separately.
- Transport/software collection evidence.

## Deployment Notes

1. Build in the development/customizing tenant.
2. Save and publish the Custom Logic implementation.
3. Run the test script with representative POs.
4. Move through the normal SAP Public Cloud software collection process.
5. Retest after import.
6. Keep the open item for PO create and PR validation separate from the completed PO change scope.

## Rollback Plan

1. Unpublish or deactivate the Custom Logic implementation.
2. If required, remove/comment only the Budget Period validation block and republish.
3. Retest PO change to confirm the custom message no longer appears.
4. Confirm SAP standard budget validations still behave as before.

## Open Items

- Identify the correct PO create extensibility context where Budget Period is populated during create.
- Implement Purchase Requisition validation separately.
- Decide whether to replace hardcoded fiscal-year logic with fiscal-year variant derivation by company code.
- Decide whether the message should be translatable.
- Decide whether blank Budget Period should be skipped or blocked for each customer.
