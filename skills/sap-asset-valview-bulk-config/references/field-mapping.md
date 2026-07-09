# Field Mapping And Checks

## Input Shape

```yaml
customer_base_url: https://customer-system.s4hana.cloud.sap
customizing_request: CUSTOMER_REQUEST
asset_class_filter:
  type: starts_with
  value: Z
entries:
  - accounting_principle: PEAP
    accounting_principle_name: Peru GAAP
    valuation_view: 0PE_0001
    valuation_view_name: Book Deprctn
    valid_from: 01.01.1900
    valid_to: 31.12.9999
    depreciation_key: "0000"
    useful_life: ""
    periods: ""
    negative_values: false
    lva_check: No maximum amount check
```

## Screenshot Parsing

Extract these columns from the supplied screenshot or table:

- Accounting principle code and name
- Valuation view code and name
- Valid From and Valid To
- DepKy
- Useful life and periods, when present
- Negative values checkbox
- LVA Check text

## Verification

For each asset class and each target entry, verify:

- Accounting principle equals the target code.
- Valuation view equals the target valuation view.
- Valid From and Valid To match.
- DepKy equals the target depreciation key.
- LVA Check matches when supplied.
- Useful life, periods, and negative values match when supplied.

Return exceptions for missing rows, wrong values, SAP validation messages, and values that were unclear in the source screenshot.
