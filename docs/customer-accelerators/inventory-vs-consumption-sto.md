# Inventory vs Consumption Indicator for STO

## Purpose

Classify a material as inventory or consumable at plant/district level, then use that indicator to control whether business users can provide a cost object, such as Cost Centre or WBS Element, during Stock Transport Order processing.

## Extensibility Type

In-App extensibility using a material master custom field and purchase order custom logic.

## Business Context

The customer had already implemented the system, so a clean master-data design using material group for consumption identification was no longer practical. A custom field on the material master was introduced as a more targeted retrofit.

The logic does not apply to SLC. The working notes also state that the code is set up for all listed plants except plant `2000`.

## Configuration And Data Setup

1. Create a custom field for `Consumption Indicator`.
2. Enable the field in CDS/API usage so in-app custom logic can read it.
3. Maintain the indicator as Yes/No in the material master at plant level.
4. Confirm configuration item `101655` for allowing Cost Centre/WBS combinations with item category `U` for Stock Transport Orders.
5. Review purchase order type configuration reference `102909`.

## BAdI Selection

Chosen BAdI:

- `MM_PUR_S4_PO_MODIFY_ACCOUNT` - Modify Purchase Order Account Assignment Data.

Rejected/limited BAdIs reviewed:

- `MM_PUR_S4_PO_MODIFY_ITEM` - exposes Account Assignment Indicator, but does not allow messages and did not allow access to `I_PRODUCTPLANT` in this scenario.
- `MM_PUR_S4_PO_CHECK_ALL_ITEMS` - did not expose the required fields for this validation.

## Implementation Draft

1. Read the material/plant consumption indicator in the purchase order account assignment logic.
2. Determine whether the STO item should behave as inventory or consumption.
3. For consumable materials, allow or require the relevant cost object, such as Cost Centre or WBS Element.
4. For inventory materials, prevent inappropriate cost-object behavior according to the business rule.
5. Document the caveat that this custom logic can trigger only after required screen parameters, including account assignment values, have been entered.
6. Test inventory materials, consumable materials, excluded plants, SLC exclusion, mass maintenance, and transport movement.

## Transport Reference

- `N2OK901863` - Inventory vs Consumption.
- `SC - Custom Logic - MM - Version 4`.
