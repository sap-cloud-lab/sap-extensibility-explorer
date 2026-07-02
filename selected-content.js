// Generated from the Website Inclusion Checklist selections.
// SAP-provided sample cards live in app.js and render with a SAP tag; these customer items intentionally render without that tag.
window.customerAssetItems = [
    {
        "id":  "checklist-acc-001",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Scoping",
        "title":  "Public Cloud Pre-requisites",
        "shortDescription":  "Capture the public-cloud decisions that must be locked before activation, including scope items, ledgers, group valuation, and profit center valuation.",
        "useCase":  "Develop a centralized pre-requisites checklist mapping required scope items, ledger decisions, valuation choices, and business processes before initial activation.",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "If we have parallel ledgers, the Scope items are to be finalised in the DDA stage itself. Once scope items are deployed and the config is moved to DEV, there is no chance of adding new scope items.",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Parallel Ledgers in Public Cloud: decide IFRS, Local GAAP, US GAAP, and non-leading ledger requirements before the scope and provisioning path is locked.",
                               "Group Valuation in Public Cloud: confirm whether additional parallel ledger or Universal Parallel Accounting choices are required before activation.",
                               "Profit Center Valuation in Public Cloud: confirm whether profit center valuation is required and record the dependency before scope items and configuration are frozen.",
                               "Additional Depreciation Area in AA using 5HG \u0026 6KF: confirm the additional depreciation area requirement before initial scoping, because the related scope decision cannot be added later without re-provisioning.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-001",
                            "url":  ""
                        },
                        {
                            "label":  "Merged notes from checklist row acc-003: Parallel Ledgers in Public Cloud",
                            "url":  ""
                        },
                        {
                            "label":  "Merged notes from checklist row acc-004: Group Valuation in Public Cloud",
                            "url":  ""
                        },
                        {
                            "label":  "Merged notes from checklist row acc-027: Additional Depreciation Area in AA using 5HG \u0026 6KF",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-005",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Data Migration using Staging Tables approach",
        "title":  "Data Migration",
        "shortDescription":  "Leverage knowledge gained from recent data migration and create a comprehensive document \"General Data Migration Design\" helps accelerating future im...",
        "useCase":  "Leverage knowledge gained from recent data migration and  create a comprehensive document \"General Data Migration Design\" helps accelerating future implementations across different data  migrations. \nEx..\nGL Balances \u0026 Open Item  \nHistorical Balances \u0026 Movements \nAsset Master \u0026 Transactions\nMaterial Inventory Balances\nTax GL Balances\nForex Balances\nAUC Assets \u0026 Transactions\nCash Balances at Liquidity \u0026 Forecasting Level",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Data Migration Design for S4H PC",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-005",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-006",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Data Migration using Staging Tables approach",
        "title":  "Data Migration - REFX",
        "shortDescription":  "A Document with comprehensive REFX Data Migration approach, including product bug fixes \u0026 best practices which ensure accurate, efficient lease data...",
        "useCase":  "A Document with comprehensive REFX Data Migration approach, including product bug fixes \u0026 best practices which ensure accurate, efficient lease data transfer in future implementations",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Lease Data Migration by SAP has no relevant details required to support Data Mig",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-006",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-010",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "FI-GL",
        "title":  "Standard Hierarchies vs Global Hierarchies",
        "shortDescription":  "Create detailed documentation on Global Hierarchies and Standard Hierarchy setup options in the Cloud, highlighting how to leverage Global Hierarchie...",
        "useCase":  "Create detailed documentation on Global Hierarchies and Standard Hierarchy setup options in the Cloud, highlighting how to leverage Global Hierarchies to support reporting requirements effectively",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Lack of Documentation on Usage of Global Hierarchies in GL, PCA, CCA \u0026 how Global hierarchies work in Tandem with Standard Hierarchies",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-010",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-012",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "FI-GL",
        "title":  "Reset Transaction Data",
        "shortDescription":  "Detailed documentation on how to Reset Transaction Data in cloud \u0026 overcome the Bugs for subsequent system use",
        "useCase":  "Detailed documentation on how to Reset Transaction Data in cloud \u0026 overcome the Bugs for subsequent system use",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Product GAP on using Transaction Reset in Cloud \u0026 bugs",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-012",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-013",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Taxation",
        "title":  "Tax Engine setup for Brazil using 43D",
        "shortDescription":  "S/4HANA Cloud’s native tax engine has limited capabilities for complex, multi-jurisdiction tax scenarios, creating a gap for automated calculation, e...",
        "useCase":  "S/4HANA Cloud’s native tax engine has limited capabilities for complex, multi-jurisdiction tax scenarios, creating a gap for automated calculation, e‑invoicing, and real-time compliance.",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Product GAP on Implementation of Tax Engine",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-013",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-019",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Taxation",
        "title":  "Tax Engine setup for USA using 4Q2",
        "shortDescription":  "Product GAP on Implementation of Tax Engine",
        "useCase":  "Product GAP on Implementation of Tax Engine",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Product GAP on Implementation of Tax Engine",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-019",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-014",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Taxation",
        "title":  "Tax Localisation - Brazil",
        "shortDescription":  "Product GAP on Implementation of Tax Engine",
        "useCase":  "Product GAP on Implementation of Tax Engine",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Product GAP on Implementation of Tax Engine",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-014",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-020",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "Taxation",
        "title":  "Tax Localisation USA",
        "shortDescription":  "Product GAP on Implementation of Tax Engine",
        "useCase":  "Product GAP on Implementation of Tax Engine",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Product GAP on Implementation of Tax Engine",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-020",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-030",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "FI-BAM",
        "title":  "Posting Rules vs Processing Rules",
        "shortDescription":  "Incoming Bank Statements (OT83) is replaced by new Processing rules in SAP which includes deprecation of Posting rules (restricted) \u0026 unavailable fun...",
        "useCase":  "Incoming Bank Statements (OT83) is replaced by new Processing rules in SAP which includes deprecation of Posting rules (restricted) \u0026 unavailable functionality - Search Strings",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Incoming Bank Statements (OT83) is replaced by new Processing rules in SAP which includes deprecation of Posting rules (restricted) \u0026 unavailable functionality - Search Strings",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-030",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-037",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "FI-BAM",
        "title":  "Automate Payment Reversal using Pain Files \u0026 BCM Rejections",
        "shortDescription":  "SAP has disabled the option to auto reverse the payment files up on BCM rejection of Bank Rejections (PAIN.002 files).",
        "useCase":  "SAP has disabled the option to auto reverse the payment files up on BCM rejection of Bank Rejections (PAIN.002 files).",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "SAP has disabled the option to auto reverse the payment files up on BCM rejection of Bank Rejections (PAIN.002 files).",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-037",
                            "url":  ""
                        }
                    ]
    },
    {
        "id":  "checklist-acc-048",
        "laneKey":  "asset",
        "lane":  "Asset",
        "sourceType":  "Customer Asset",
        "category":  "GR",
        "title":  "GRDC Implementation",
        "shortDescription":  "Missing Documentation required for Implementation",
        "useCase":  "Missing Documentation required for Implementation",
        "whenToUse":  "Use this as a design and readiness checkpoint before SAP S/4HANA Cloud scope, configuration, migration, or activation decisions are locked in.",
        "summary":  "Missing Documentation required for Implementation",
        "implementation":  [
                               "Confirm the decision point with the process owner during discovery or fit-to-standard workshops.",
                               "Document the scope item, configuration, migration, or reporting dependency and the consequence of choosing incorrectly.",
                               "Validate the decision in the customer tenant before activation, provisioning, or transport movement makes it difficult to change.",
                               "Store the final recommendation, screenshots, and sign-off notes with the implementation evidence."
                           ],
        "sources":  [
                        {
                            "label":  "Internal accelerator notes from checklist row acc-048",
                            "url":  ""
                        }
                    ]
    }
];

window.customerSampleItems = [
    {
        "id":  "checklist-acc-016-developer",
        "laneKey":  "developer",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Brazil NFe Integration with SEFAZ \u0026 E-Document Cockpit",
        "status":  "Customer accelerator",
        "pattern":  "Taxation",
        "description":  "Product GAP for Inbound Nota Fiscal (Electronic)",
        "function":  "Product GAP for Inbound Nota Fiscal (Electronic)",
        "summary":  "Product GAP for Inbound Nota Fiscal (Electronic)",
        "useCase":  "Product GAP for Inbound Nota Fiscal (Electronic)",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through Developer extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected Developer lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-016",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-021-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Custom Layout for Review Booklets using Manage KPI \u0026 Reports app",
        "status":  "Customer accelerator",
        "pattern":  "CAP",
        "description":  "GAP on how to utilise this to Enhance Customer reporting requirements",
        "function":  "GAP on how to utilise this to Enhance Customer reporting requirements",
        "summary":  "GAP on how to utilise this to Enhance Customer reporting requirements",
        "useCase":  "GAP on how to utilise this to Enhance Customer reporting requirements",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through In-App extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected In-App lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-021",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-023-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Journal Upload for Currencies \u0026 Taxes",
        "status":  "Customer accelerator",
        "pattern":  "CAP",
        "description":  "Upload Journal Entries",
        "function":  "Upload Journal Entries",
        "summary":  "Upload Journal Entries",
        "useCase":  "Upload Journal Entries",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through Side-by-Side extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected Side-by-Side lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-023",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-026-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Asset History Sheet for Multiple Company Codes",
        "status":  "Customer accelerator",
        "pattern":  "FI-AA",
        "description":  "Asset history Sheet - There is no app that allows us to run the report for multiple company codes. Allows only single company code.",
        "function":  "Asset history Sheet - There is no app that allows us to run the report for multiple company codes. Allows only single company code.",
        "summary":  "Asset history Sheet - There is no app that allows us to run the report for multiple company codes. Allows only single company code.",
        "useCase":  "Asset history Sheet - There is no app that allows us to run the report for multiple company codes. Allows only single company code.",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through In-App extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected In-App lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-026",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-032-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Outgoing Bank Statement - SWIFT/FILE/API Integration using 2YM",
        "status":  "Customer accelerator",
        "pattern":  "Integration",
        "description":  "Missing documentation from SAP as well as misleading documentation about the use of MBC for every customer as it carries a hefty licensing \u0026 Maintenance costs",
        "function":  "Missing documentation from SAP as well as misleading documentation about the use of MBC for every customer as it carries a hefty licensing \u0026 Maintenance costs",
        "summary":  "Missing documentation from SAP as well as misleading documentation about the use of MBC for every customer as it carries a hefty licensing \u0026 Maintenance costs",
        "useCase":  "Missing documentation from SAP as well as misleading documentation about the use of MBC for every customer as it carries a hefty licensing \u0026 Maintenance costs",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through Side-by-Side extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected Side-by-Side lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-032",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-033-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Incoming Bank Statement - SWIFT/FILE/API",
        "status":  "Customer accelerator",
        "pattern":  "Integration",
        "description":  "Enable Custom Fiori which will use the IFLOWS to connect to the BANK API\u0027s to pull the required information",
        "function":  "Enable Custom Fiori which will use the IFLOWS to connect to the BANK API\u0027s to pull the required information",
        "summary":  "Enable Custom Fiori which will use the IFLOWS to connect to the BANK API\u0027s to pull the required information",
        "useCase":  "Enable Custom Fiori which will use the IFLOWS to connect to the BANK API\u0027s to pull the required information",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through Side-by-Side extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected Side-by-Side lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-033",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-038-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Lease Contracts - reporting requirements",
        "status":  "Customer accelerator",
        "pattern":  "REFX",
        "description":  "No Sunch functionality exists in Cloud",
        "function":  "No Sunch functionality exists in Cloud",
        "summary":  "No Sunch functionality exists in Cloud",
        "useCase":  "No Sunch functionality exists in Cloud",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through In-App extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected In-App lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-038",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-040-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Lease liability movement reports - multiple contracts",
        "status":  "Customer accelerator",
        "pattern":  "REFX",
        "description":  "Leasing Liabilities Movement Report fr multiple leasing contracts",
        "function":  "Leasing Liabilities Movement Report  fr multiple leasing contracts",
        "summary":  "Leasing Liabilities Movement Report  fr multiple leasing contracts",
        "useCase":  "Leasing Liabilities Movement Report  fr multiple leasing contracts",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through In-App extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected In-App lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-040",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-041-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "FAGL3KEH for PC Defaults in Public Cloud",
        "status":  "Customer accelerator",
        "pattern":  "CO-PCA",
        "description":  "Using, FAGL3KEH we can only do bank accounts and bank clearing accounts",
        "function":  "Using, FAGL3KEH we can only do bank accounts and bank clearing accounts",
        "summary":  "Using, FAGL3KEH we can only do bank accounts and bank clearing accounts",
        "useCase":  "Using, FAGL3KEH we can only do bank accounts and bank clearing accounts",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through In-App extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected In-App lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-041",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-049-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "GRDC API - GL_LINEITEMSREAD extended with WBS fields to support GR requirements",
        "status":  "Customer accelerator",
        "pattern":  "GR",
        "description":  "Missing fields in API GL Line Item Read required for Consolidations in GR",
        "function":  "Missing fields in API GL Line Item Read required for Consolidations in GR",
        "summary":  "Missing fields in API GL Line Item Read required for Consolidations in GR",
        "useCase":  "Missing fields in API GL Line Item Read required for Consolidations in GR",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through In-App extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected In-App lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-049",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-050-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Market Rates Management",
        "status":  "Customer accelerator",
        "pattern":  "Integration",
        "description":  "Missing Documentation required for Implementation",
        "function":  "Missing Documentation required for Implementation",
        "summary":  "Missing Documentation required for Implementation",
        "useCase":  "Missing Documentation required for Implementation",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through Side-by-Side extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected Side-by-Side lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-050",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "checklist-acc-051-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Blackline",
        "status":  "Customer accelerator",
        "pattern":  "Integration",
        "description":  "Missing Documentation required for Implementation",
        "function":  "Missing Documentation required for Implementation",
        "summary":  "Missing Documentation required for Implementation",
        "useCase":  "Missing Documentation required for Implementation",
        "whenToUse":  "Choose this when the requirement matches the listed public-cloud gap and should be solved through Side-by-Side extensibility.",
        "implementation":  [
                               "Confirm the exact SAP business object, app, API, BAdI, workflow, or reporting surface involved.",
                               "Map the required extension approach to the selected Side-by-Side lane and document why this lane is the right fit.",
                               "Build the accelerator with released public-cloud extension points, APIs, or BTP services only.",
                               "Test happy path, exceptions, authorizations, transport/release movement, and any downstream finance/procurement/reporting impact.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Internal accelerator notes from checklist row acc-051",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "additional-mass-goods-movement-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Mass Goods Movement",
        "status":  "Customer accelerator",
        "pattern":  "CAP",
        "description":  "Mass goods movement processing through a custom accelerator.",
        "function":  "Supports high-volume goods movement scenarios where users need a controlled upload or processing layer.",
        "summary":  "A BTP/CAP accelerator concept for mass goods movement execution and validation.",
        "useCase":  "Use this when business users need to process many goods movements with validation, controlled upload, and clear processing feedback.",
        "whenToUse":  "Choose this when the requirement needs a custom BTP/CAP app or service around SAP S/4HANA goods movement APIs.",
        "implementation":  [
                               "Confirm the goods movement types, plants, storage locations, materials, and validation rules.",
                               "Design a CAP service or app to upload, validate, and stage mass goods movement records.",
                               "Connect to released SAP S/4HANA Cloud APIs or integration services for posting and status feedback.",
                               "Test successful postings, rejected records, authorization, error logging, and reconciliation back to SAP.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Additional scenario requested for the accelerator library",
                            "url":  ""
                        }
                    ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "additional-mass-upload-po-sto-side",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Mass Upload - PO \u0026 STO",
        "status":  "Customer accelerator",
        "pattern":  "CAP",
        "description":  "Mass upload accelerator for Purchase Orders and Stock Transport Orders.",
        "function":  "Provides a controlled upload and validation layer for high-volume PO and STO creation or changes.",
        "summary":  "A BTP/CAP accelerator concept for uploading, validating, and processing PO and STO records.",
        "useCase":  "Use this when procurement teams need structured mass upload capability for Purchase Orders or Stock Transport Orders with clear validation and posting feedback.",
        "whenToUse":  "Choose this when the requirement needs a custom BTP/CAP app or service around SAP S/4HANA Cloud PO and STO APIs.",
        "implementation":  [
                               "Confirm the PO and STO business scenarios, required fields, document types, plants, suppliers, and validation rules.",
                               "Design a CAP upload service with templates, staging, validation status, and correction workflow.",
                               "Connect to released SAP S/4HANA Cloud APIs for PO/STO creation or updates.",
                               "Test successful creation, rejected rows, duplicate checks, authorization, error logging, and reconciliation back to SAP.",
                               "Link the GitHub source code and final setup notes when your implementation repository is ready."
                           ],
        "sources":  [
                        {
                            "label":  "Source code pending in your GitHub accelerator repository",
                            "url":  ""
                        },
                        {
                            "label":  "Additional scenario requested for the accelerator library",
                            "url":  ""
                        }
        ],
        "url":  "",
        "linkLabel":  "Source code pending"
    },
    {
        "id":  "customer-aging-report-key-date-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Aging Report with Specific Key Date",
        "status":  "Customer accelerator",
        "pattern":  "Finance Reporting",
        "description":  "Custom AP aging app that allows users to select a specific key date where the standard app flow did not meet the requirement.",
        "function":  "Provides a controlled key-date parameter for accounts payable aging so finance users can run the report for the exact date they need.",
        "summary":  "A custom in-app reporting accelerator for AP aging where the original SAP app and linked analysis options did not provide the required key-date behavior.",
        "useCase":  "Use this when Accounts Payable aging must be reviewed for a specific historical or business key date and the standard app flow does not give users enough control.",
        "whenToUse":  "Choose this when the requirement is reporting-focused, can be solved with released analytical content/custom app configuration, and should stay inside SAP S/4HANA Cloud.",
        "implementation":  [
                               "Confirm the reporting gap against SAP app F4401, Aging Report for Accounts Payable, and document the missing key-date behavior.",
                               "Review linked analysis options such as C_F5240 Analyze KPI Details and F1733 Aging Analysis with CDS C_APFLEXIBLEAGING to confirm they do not solve the required key-date selection.",
                               "Create a custom analytical app or report variant that exposes a clear key-date parameter for the AP aging logic.",
                               "Validate the output against the standard report for current-date scenarios, then test historical key dates, currency display, interval buckets, and exchange-rate type.",
                               "Publish the custom app tile with role access, final filter defaults, and implementation notes for finance users."
                           ],
        "technicalNotes":  {
                               "title":  "App References and Design Notes",
                               "bullets":  [
                                               "Standard app reviewed: F4401 - Aging Report for Accounts Payable.",
                                               "Linked app reviewed: C_F5240 - Analyze KPI Details.",
                                               "Related SAP app/CDS reviewed: F1733 - Aging Analysis (S/4HANA), CDS C_APFLEXIBLEAGING.",
                                               "Design decision: create a new custom app because the standard/linked app path did not provide the required specific key-date selection."
                                           ]
                           },
        "sources":  [
                        {
                            "label":  "Customer implementation notes: Aging report key date custom app",
                            "url":  "https://github.com/sap-cloud-lab/sap-extensibility-explorer/blob/content-updates/docs/customer-accelerators/aging-report-key-date-custom-app.md"
                        },
                        {
                            "label":  "Reusable public-cloud accelerator playbook",
                            "url":  "https://github.com/sap-cloud-lab/sap-extensibility-explorer/blob/content-updates/docs/customer-accelerators/reusable-public-cloud-accelerator-playbook.md"
                        },
                        {
                            "label":  "SAP Fiori Apps Library: F4401 Aging Report for Accounts Payable",
                            "url":  "https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F4401')"
                        },
                        {
                            "label":  "SAP Fiori Apps Library: F1733 Aging Analysis",
                            "url":  "https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1733')"
                        }
                    ],
        "url":  "https://github.com/sap-cloud-lab/sap-extensibility-explorer/blob/content-updates/docs/customer-accelerators/aging-report-key-date-custom-app.md",
        "linkLabel":  "Open implementation notes"
    },
    {
        "id":  "customer-inventory-consumption-sto-inapp",
        "laneKey":  "inapp",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Inventory vs Consumption Indicator for STO",
        "status":  "Customer accelerator",
        "pattern":  "Procurement Control",
        "description":  "Plant-level material master custom field used to control whether STO processing should allow cost object entry for consumption.",
        "function":  "Introduces a consumption indicator on the material master so the STO flow can distinguish inventory and consumable materials after the system is already live.",
        "summary":  "An in-app extensibility workaround for a live customer system where material group design could no longer be used cleanly to identify consumption materials.",
        "useCase":  "Use this when material master data needs an explicit inventory/consumption indicator by plant or district, and STO account assignment behavior should follow that indicator.",
        "whenToUse":  "Choose this when the customer has already implemented the system and a clean master-data redesign, such as material group classification, is no longer practical.",
        "implementation":  [
                               "Create a material master custom field for Consumption Indicator and enable it for the relevant CDS/API usage so custom logic can read it.",
                               "Maintain the indicator as Yes/No at material plant level for the relevant district plants, excluding SLC or plant 2000 where the logic does not apply.",
                               "Enable the field for API_PRODUCT_SRV, A_ProductPlantType, and I_PRODUCTPLANT so the BAdI can read the product plant value.",
                               "Confirm configuration for item category U and allowed Cost Centre/WBS combinations for Stock Transport Orders.",
                               "Implement the check through BAdI MM_PUR_S4_PO_MODIFY_ACCOUNT because it allows the logic to read material information and control the account-assignment fields.",
                               "Document the caveat that the logic triggers after users enter all required screen parameters, including account assignment values.",
                               "Test inventory materials, consumable materials, cost centre entry, WBS entry, excluded plants, mass maintenance, and transport movement."
                           ],
        "technicalNotes":  {
                               "title":  "BAdI Selection Notes",
                               "bullets":  [
                                               "Chosen BAdI: MM_PUR_S4_PO_MODIFY_ACCOUNT - Modify Purchase Order Account Assignment Data.",
                                               "Implementation name from source PDF: YY1_MM_PUR_S4_PO_MODIFY_ACC.",
                                               "Custom field: Consumption Indicator, checkbox, Product Plant business context, generated field YY1_CONSUMPTIONINDICAT_PLT.",
                                               "Enabled access shown in the source PDF: API_PRODUCT_SRV / A_ProductPlantType and CDS view I_PRODUCTPLANT.",
                                               "Rejected option: MM_PUR_S4_PO_MODIFY_ITEM exposes Account Assignment Indicator but does not allow messages and could not access I_PRODUCTPLANT in this scenario.",
                                               "Rejected option: MM_PUR_S4_PO_CHECK_ALL_ITEMS did not expose the fields required for the validation.",
                                               "Transport reference from the working notes: N2OK901863 - Inventory vs Consumption.",
                                               "Related configuration references from the notes: 101655 Allow Cost Centre/WBS combination with Item Category U for STO, and 102909 Purchase Order Types.",
                                               "Runtime rule from the PDF: for PO types UB, UD, or ZUD, plant not equal to 2000, and account assignment K or P, read I_PRODUCTPLANT and block if the consumption indicator is initial."
                                           ],
                               "codeTitle":  "Published customer logic from source PDF",
                               "code":  `* This enhancement is to check if the Material is Consumption or Inventory
* & throw an error if Account Assignment K or P is selected for Material Marked as
* Inventory at the districts

DATA ls_message     LIKE LINE OF messages.
DATA lv_consumption TYPE abap_boolean.

READ TABLE purchaseorderitem_table
  WITH KEY purchaseorder     = purchaseordaccountchange-purchaseorder
           purchaseorderitem = purchaseordaccountchange-purchaseorderitem
  ASSIGNING FIELD-SYMBOL(<ls_pur_item>).

IF <ls_pur_item> IS ASSIGNED.

  IF ( purchaseorder-purchaseordertype = 'UB'
    OR purchaseorder-purchaseordertype = 'UD'
    OR purchaseorder-purchaseordertype = 'ZUD' )
  AND <ls_pur_item>-plant <> '2000'
  AND ( <ls_pur_item>-accountassignmentcategory = 'K'
     OR <ls_pur_item>-accountassignmentcategory = 'P' ).

    CLEAR lv_consumption.

    SELECT SINGLE yy1_consumptionindicat_plt
      FROM i_productplant
      WHERE product = @<ls_pur_item>-material
        AND plant   = @<ls_pur_item>-plant
      INTO @lv_consumption.

    IF lv_consumption IS INITIAL.

      CLEAR ls_message.
      ls_message-messagetype = 'E'.
      ls_message-messageid = '00'.
      ls_message-messagenumber = '001'.
      ls_message-messagevariable1 =
        'K/P Acc Asgmt not allowed for Inv. Mat at District'.

      APPEND ls_message TO messages.

    ENDIF.

  ENDIF.

ENDIF.`
                           },
        "sources":  [
                        {
                            "label":  "Customer implementation notes: Inventory vs consumption STO control",
                            "url":  "https://github.com/sap-cloud-lab/sap-extensibility-explorer/blob/content-updates/docs/customer-accelerators/inventory-vs-consumption-sto.md"
                        },
                        {
                            "label":  "Reusable public-cloud accelerator playbook",
                            "url":  "https://github.com/sap-cloud-lab/sap-extensibility-explorer/blob/content-updates/docs/customer-accelerators/reusable-public-cloud-accelerator-playbook.md"
                        },
                        {
                            "label":  "Source document: inv vs consumption.pdf",
                            "url":  ""
                        }
                    ],
        "url":  "https://github.com/sap-cloud-lab/sap-extensibility-explorer/blob/content-updates/docs/customer-accelerators/inventory-vs-consumption-sto.md",
        "linkLabel":  "Open implementation notes"
    }
];

window.unmappedCustomerAccelerators = {
    "id":  "acc-028",
    "title":  "Asset History Sheet for Multiple Company Codes"
};
