# Aging Report With Specific Key Date

## Purpose

Create a custom AP aging app that allows finance users to run aging for a specific key date when the original SAP app flow and linked analysis options do not meet the business requirement.

## Extensibility Type

In-App extensibility for reporting and analytical app configuration.

## SAP Apps Reviewed

- `F4401` - Aging Report for Accounts Payable.
- `C_F5240` - Analyze KPI Details.
- `F1733` - Aging Analysis (S/4HANA), based on CDS `C_APFLEXIBLEAGING`.

## Implementation Draft

1. Reproduce the key-date limitation in `F4401` and document the exact business scenario that fails.
2. Review `C_F5240` and `F1733` to confirm whether any linked app or analytical view already satisfies the requirement.
3. Create a custom analytical app or report variant that exposes a clear key-date parameter.
4. Retain the aging interval inputs, display currency, and exchange-rate type options required by finance users.
5. Validate current-date output against the standard app, then validate historical key-date runs.
6. Publish the app tile and assign it to the relevant finance business role.

## Notes

The core design decision is to keep the solution inside SAP S/4HANA Cloud where possible, rather than creating a side-by-side app, because the requirement is a reporting parameter and usability gap.
