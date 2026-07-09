---
name: sap-asset-valview-bulk-config
description: Bulk maintain SAP S/4HANA Cloud asset-class valuation-view settings in SSCUI FAA_ACL_VALV. Use when Codex needs to parse valuation-view rows from a screenshot or table, add or correct those rows for asset classes matching a filter, save with a supplied transport/customizing request, and verify row values including depreciation key.
---

# SAP Asset Valview Bulk Config

## Purpose

Use this skill to repeat SAP S/4HANA Cloud Public Edition asset-class valuation-view setup through SSCUI `FAA_ACL_VALV`.

Treat this as a controlled live-system change. Keep the user loop tight, make all customer-specific values explicit, and verify field values after saving.

## Required Inputs

Ask for any missing required input before changing SAP:

- Customer base URL
- Customizing request or transport
- Asset class filter, default `starts_with: Z`
- Entries to add or correct, supplied as a screenshot or table

Default SSCUI hash:

```text
/ui#IMGActivity-execute?IMGActivity=FAA_ACL_VALV&CustomizingObject=VC_FAA_ACLS_VALV&CustomizingObjectType=C&CustomizingProject=&CustomizingTransaction=S_ER9_56000037&Type=SSCUI
```

## Workflow

1. Convert the user's screenshot or table into structured valuation-view rows.
2. Summarize interpreted rows before saving when any value is inferred.
3. Open the customer URL plus the default SSCUI hash unless a full URL is supplied.
4. Check editability and object locks.
5. For each matching asset class, open `Asset Class: Settings for Valview`.
6. Add missing target rows and correct existing target rows when compared fields differ.
7. Set `DepKy` after SAP validates the accounting principle and valuation view.
8. Save with the supplied transport/customizing request if SAP prompts.
9. Reopen every changed or inspected asset class and verify all target rows.

## Critical SAP Details

- Use SAP's top-left Back arrow, not browser back.
- Use `Position...` on the parent asset class list for reliable navigation.
- Compare actual field values, not just row existence.
- Do not publish customer URLs, transports, screenshots, credentials, or system-specific values in this repository.

Read `references/field-mapping.md` for the supported row format and verification rules.
