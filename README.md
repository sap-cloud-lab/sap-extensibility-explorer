# SAP Extensibility Explorer Research Repository

This workspace is a local catalogue for understanding what is possible with SAP S/4HANA extensibility across:

- In-app / key user extensibility
- Developer extensibility
- Side-by-side extensibility

## Current State

Checked on 2026-06-25:

- The original SAP Extensibility Explorer application at https://www.sap.com/extends4 now says it has been sunsetted and points users to SAP GitHub for the remaining sample scenarios.
- The historical support/index repository, https://github.com/SAP-archive/cloud-s4-sample-ext, was archived by SAP and is read-only.
- Many Extensibility Explorer sample repositories are also archived. Treat them as learning references and pattern examples, not production-ready accelerators.
- Current developer extensibility guidance is better represented by SAP ABAP Cloud / RAP workshop repositories such as `SAP-samples/abap-platform-rap-workshops`, `SAP-samples/teched2024-DT280`, and `SAP-samples/teched2025-DT261`.

## Files

- [Local Extensibility Explorer](index.html) - clean browser-based replacement with three choices: In-App, Developer, and Side-by-Side.
- [SAP Extensibility Decision Guide](SAP-Extensibility-Decision-Guide.md) - plain-English map of what belongs in in-app, developer, or side-by-side extensibility.
- [SAP Extensibility Sample Catalogue](SAP-Extensibility-Sample-Catalogue.md) - curated links to SAP sample repositories and historical Extensibility Explorer scenarios.
- [sap-extensibility-repos.csv](sap-extensibility-repos.csv) - spreadsheet-friendly list for slide preparation, filtering, and follow-up research.

## Quick Read

Use in-app extensibility when the change is close to standard SAP behavior: custom fields, simple custom logic, forms, email templates, UI adaptation, custom analytical queries, and key-user-controlled extension points.

Use developer extensibility when ABAP developers need to build upgrade-stable code on the SAP S/4HANA stack with released SAP APIs, CDS views, BAdIs, RAP business object extensions, or custom RAP objects.

Use side-by-side extensibility when the extension should live outside S/4HANA, usually on SAP BTP, and integrate through released APIs, events, destinations, workflows, CAP, SAP Build, Kyma, or the SAP BTP ABAP Environment.

## Sources

- SAP Extensibility Explorer sunset notice: https://www.sap.com/extends4
- Historical Extensibility Explorer support repository: https://github.com/SAP-archive/cloud-s4-sample-ext
- SAP Learning, in-app vs side-by-side explanation: https://learning.sap.com/courses/expanding-sap-s-4hana-using-key-user-side-by-side-extensibility/side-by-side-extensibility-in-a-nutshell
- SAP ABAP / RAP workshops: https://github.com/SAP-samples/abap-platform-rap-workshops
