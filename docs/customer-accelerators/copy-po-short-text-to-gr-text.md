# Copy PO Short Text to Goods Receipt Text

## Purpose

Copy the purchase order item short text into the goods receipt item text so the receiving document and follow-on accounting entry carry the same business description.

## Extensibility Type

In-App extensibility using custom logic.

## Implementation Notes

1. Create custom logic `YY1_GRDATACHANGE` with description `GR Data Change`.
2. Use extension point `MMIM_GR4XY_PROVIDE_DATA` - Change Header and Item Data in Goods Receipts.
3. Use affected business context `MMIM_GR4XY`.
4. For purchase-order-sourced goods receipt items, copy `PURCHASEORDERITEMTEXT` into `DOCUMENTITEMTEXT`.
5. Test the result in the Goods Receipt Item short text and the accounting entry Item Text.

## Published Logic

```abap
FIELD-SYMBOLS:
  <ls_gr_item>     LIKE LINE OF gr4xy_item,
  <ls_change_item> LIKE LINE OF change_item.

LOOP AT change_item ASSIGNING <ls_change_item>.
  READ TABLE gr4xy_item ASSIGNING <ls_gr_item> INDEX sy-tabix.
  IF sy-subrc <> 0.
    CONTINUE.
  ENDIF.

  CHECK <ls_gr_item>-sourceofgr = 'PURORD'.
  CHECK <ls_gr_item>-purchaseorderitemtext IS NOT INITIAL.

  <ls_change_item>-documentitemtext = <ls_gr_item>-purchaseorderitemtext.
ENDLOOP.
```

## Validation Evidence To Keep

- Purchase order item short text before posting.
- Goods Receipt Item short text after posting.
- Accounting entry Item Text after posting.
- Test cases for partial receipts, multiple PO items, changed PO text, and reversals.
