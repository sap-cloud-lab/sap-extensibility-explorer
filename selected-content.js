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
    }
];

window.unmappedCustomerAccelerators = {
    "id":  "acc-028",
    "title":  "Asset History Sheet for Multiple Company Codes"
};
