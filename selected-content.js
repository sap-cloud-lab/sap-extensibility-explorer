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
        "title":  "Custom Layout for Review Booklets using Manage KPIs and Reports app",
        "detailAliases":  [
                              "custom-layout-for-review-booklets-using-manage-kpi-and-reports-app"
                          ],
        "status":  "Customer accelerator",
        "pattern":  "Review Booklet",
        "description":  "Create a customer-specific Review Booklet layout in SAP S/4HANA Cloud Public Edition so business users can consume multiple analytical reports in one guided SAP Fiori experience.",
        "function":  "Build a governed Review Booklet reporting pack using Manage KPIs and Reports, Review Booklet Designer, released analytical queries, and software collections.",
        "summary":  "This customer accelerator defines how to create a customer-specific Review Booklet layout in SAP S/4HANA Cloud Public Edition so business users can consume multiple analytical reports in one guided SAP Fiori experience instead of relying on manual Excel packs or disconnected reports.",
        "useCase":  [
                        {
                            "text":  "Create a structured customer reporting pack using Manage KPIs and Reports and Review Booklet Designer."
                        },
                        {
                            "heading":  "It helps business users",
                            "items":  [
                                          "Review live SAP S/4HANA analytical data in one place.",
                                          "Combine multiple analytical queries into one guided reporting booklet.",
                                          "Replace manual Excel reporting packs with governed SAP Fiori reporting.",
                                          "Use common filters such as company code, fiscal year, period, ledger, currency, customer, supplier, cost center, profit center, or project.",
                                          "Switch between row sets, column sets, and page layouts without rebuilding reports.",
                                          "Drill from summary pages into detailed analytical apps or related SAP Fiori apps.",
                                          "Keep reporting layout changes inside clean-core in-app extensibility.",
                                          "Move the reporting asset through design, test, and production using SAP Cloud ALM and software collections."
                                      ]
                        }
                    ],
        "workingExample":  [
                               {
                                   "html":  `
                                     <div class="working-example">
                                       <p>The finance team needed a reporting pack that matched the monthly review process, but the standard SAP Review Booklet did not fully reflect its internal balance sheet, P&amp;L, variance, and drilldown structure.</p>
                                       <p>Instead of building a custom app or relying on Excel, the team used the Review Booklet Designer inside Manage KPIs and Reports. They copied the SAP-delivered Review Booklet, adapted the layout, configured business pages, rows, columns, filters, variables, styles, and navigation, then published it as a Fiori reporting tile.</p>
                                       <p>The result was a clean-core, key-user extensibility solution where finance users could open one guided booklet, apply common filters, review live SAP data, and drill into details during month-end reporting.</p>
                                       <div class="working-example-gallery" aria-label="Review Booklet working example screenshots">
                                         <figure>
                                           <img src="assets/working-examples/review-booklet/01-specialized-group-financial-statements.png" alt="Specialized Group Financial Statements Review Booklet with common filters and mirror report tabs." onerror="handleMissingExampleImage(this)" />
                                           <figcaption>Review Booklet opened as a guided Fiori reporting tile with shared filters.</figcaption>
                                         </figure>
                                         <figure>
                                           <img src="assets/working-examples/review-booklet/02-review-pages-overview.png" alt="Review Booklet pages showing overview, profit and loss by time, margin waterfall, and profit center waterfall views." onerror="handleMissingExampleImage(this)" />
                                           <figcaption>Business pages arranged for overview, P&amp;L, variance, and drilldown review.</figcaption>
                                         </figure>
                                         <figure>
                                           <img src="assets/working-examples/review-booklet/03-chart-and-layout-options.png" alt="Review Booklet examples with chart type selection, assets and liabilities layout, and separate rows and columns." onerror="handleMissingExampleImage(this)" />
                                           <figcaption>Layout options for tables, charts, row sets, column sets, and split reporting views.</figcaption>
                                         </figure>
                                       </div>
                                       <h3>How it was implemented in simple steps</h3>
                                       <ol class="working-example-steps">
                                         <li>Confirmed the reporting gap: the standard booklet layout did not match business review needs.</li>
                                         <li>Selected Review Booklet Designer as the standard SAP in-app extensibility option.</li>
                                         <li>Copied the SAP-delivered Group Financial Statements Review Booklet.</li>
                                         <li>Configured custom business pages for Balance Sheet, P&amp;L, Variance Review, and Drilldown.</li>
                                         <li>Assigned analytical queries, row sets, column sets, filters, variables, semantic styles, and navigation targets.</li>
                                         <li>Tested the booklet with real reporting periods, authorizations, filters, and reconciled totals.</li>
                                         <li>Published the final version as a Fiori tile for business users.</li>
                                       </ol>
                                     </div>
                                   `
                               }
                           ],
        "whenToUse":  [
                          {
                              "text":  "Use this when finance, procurement, sales, operations, or management reporting teams need a custom analytical reporting layout inside SAP Fiori."
                          },
                          {
                              "heading":  "Choose this when",
                              "items":  [
                                            "The requirement is mainly a reporting layout or reporting pack gap.",
                                            "The customer needs one guided review experience instead of many separate reports.",
                                            "The required data is available through released SAP analytical queries or custom analytical queries.",
                                            "Business users need pages, page groups, filters, variables, row sets, column sets, formatting, and navigation.",
                                            "The solution should stay clean-core using SAP-delivered in-app extensibility.",
                                            "The customer wants reusable reporting design without custom code.",
                                            "The reporting pack is consumed interactively by business users in SAP Fiori."
                                        ]
                          },
                          {
                              "heading":  "Do not choose this when",
                              "items":  [
                                            "The requirement needs transactional updates or write-back.",
                                            "The customer needs custom ABAP logic inside the reporting app.",
                                            "The data is not available through released analytical content.",
                                            "The customer needs complex cross-system reporting or external data blending.",
                                            "The customer needs SAC planning, BW-style modelling, scheduled story distribution, or pixel-perfect statutory forms.",
                                            "The calculation must be created inside the Review Booklet itself instead of in the underlying analytical query."
                                        ]
                          }
                      ],
        "implementation":  [
                               "Confirm the reporting requirement, business owner, target users, reporting frequency, key KPIs, required filters, and whether the scope is an as-is Excel/report replacement or a to-be analytical redesign.",
                               "Confirm the SAP scope and release: SAP S/4HANA Cloud Public Edition, Review Booklet Designer availability, Manage KPIs and Reports access, and whether required Review Booklet features are available in the customer tenant release.",
                               "Map the current process in Signavio: Excel packs, standard reports, manual filters, reconciliation steps, offline adjustments, review meetings, approval points, and downstream reporting consumers.",
                               "Design the to-be process in Signavio: user opens Review Booklet tile, enters variables, reviews page groups, drills into details, exports if allowed, records follow-up actions, and completes management review.",
                               "Create the SAP Cloud ALM requirement, for example: REQ-ANA-RB-001 - Custom Review Booklet Layout for Customer Reporting Requirements.",
                               "Create SAP Cloud ALM user stories for analytical query validation, booklet layout design, filter design, variable design, navigation, authorization, transport, testing, training, and go-live.",
                               "Confirm the analytical source for each booklet page using released SAP analytical queries, Query Browser, View Browser, or Custom Analytical Queries and Services.",
                               "If standard queries are not sufficient, create or copy a custom analytical query using released data sources only. Put restricted measures, calculated measures, filters, hierarchies, and parameters in the query layer, not in the Review Booklet.",
                               "Define the Review Booklet naming convention, for example: RB_FIN_REVIEW_V1 - Finance Review Booklet - Monthly Management Pack.",
                               {
                                   "text":  "Define page groups, for example:",
                                   "items":  [
                                                 "PG_10_Executive Summary",
                                                 "PG_20_Revenue and Margin",
                                                 "PG_30_Cost Review",
                                                 "PG_40_Customer Analysis",
                                                 "PG_50_Project or Service Review",
                                                 "PG_90_Detail Drilldown"
                                             ]
                               },
                               {
                                   "text":  "Define business pages, for example:",
                                   "items":  [
                                                 "BP_110_KPI Overview",
                                                 "BP_210_Revenue by Customer",
                                                 "BP_220_Margin by Product Group",
                                                 "BP_310_Cost by Cost Center",
                                                 "BP_410_Customer Profitability",
                                                 "BP_510_Project Financial Review",
                                                 "BP_910_Line Item Drilldown"
                                             ]
                               },
                               "Create or copy the Review Booklet in Manage KPIs and Reports -> Review Booklets.",
                               "Maintain booklet ID, name, description, owner, version, change reason, business area, and SAP Cloud ALM requirement reference.",
                               "Add analytical queries as data providers. Use one data provider per underlying analytical query.",
                               {
                                   "text":  "Define row sets, for example:",
                                   "items":  [
                                                 "Company code",
                                                 "Profit center",
                                                 "Cost center",
                                                 "Customer",
                                                 "Customer group",
                                                 "Product group",
                                                 "Segment",
                                                 "Project",
                                                 "Supplier",
                                                 "G/L account hierarchy"
                                             ]
                               },
                               {
                                   "text":  "Define column sets, for example:",
                                   "items":  [
                                                 "Actual current period",
                                                 "Actual year-to-date",
                                                 "Prior period",
                                                 "Prior year",
                                                 "Budget or plan, only if available",
                                                 "Absolute variance",
                                                 "Variance percentage",
                                                 "Quantity and amount view",
                                                 "Local currency and group currency view"
                                             ]
                               },
                               "Define global variables and filters such as company code, fiscal year, posting period, ledger, currency, controlling area, sales organization, purchasing organization, profit center, or project.",
                               "Keep mandatory variables visible unless a safe default is agreed with the business owner. Hide only non-mandatory variables where this improves usability.",
                               "Use booklet-level variables for values that must apply across all pages. Use page-level filters only when the filter applies to one specific reporting page.",
                               "Configure formatting for totals, subtotals, actuals, plans, variances, negative values, exception values, and contribution margin levels.",
                               "Configure navigation targets only where the user needs to move from summary analysis to a detailed analytical app or related SAP Fiori app.",
                               "Create the Fiori tile or assign the booklet to the relevant business catalog, depending on the available release and launchpad setup.",
                               {
                                   "text":  "Confirm business roles for:",
                                   "items":  [
                                                 "Analytics specialist / key user",
                                                 "Business report viewer",
                                                 "Security administrator",
                                                 "Test user",
                                                 "Release or transport owner",
                                                 "Business process owner"
                                             ]
                               },
                               "Validate authorization prerequisites, especially Review Booklet Designer access and business catalog assignment such as SAP_CORE_BC_EXT_RVB_PC where applicable.",
                               "Test happy path: user opens tile, enters variables, reviews pages, switches row and column sets, applies filters, validates totals, drills down, and exits cleanly.",
                               "Test exception paths: missing mandatory variables, unauthorized data, empty result set, invalid filter combinations, large data volume, failed navigation, and unavailable query.",
                               "Test security: user can only access the tile, booklet, reports, pages, and data they are authorized to see.",
                               "Test reconciliation: totals must match the agreed source analytical query, standard SAP report, or business-approved reconciliation baseline.",
                               "Test export behavior if Excel or PDF export is allowed. Confirm export from the final customer-created app, not only from preview mode.",
                               "Test transport and release movement: custom analytical queries, Review Booklet, tile or catalog assignment, and role changes must move in the correct sequence.",
                               "Test downstream impact: confirm no finance, procurement, sales, or operational process is changed unintentionally because this is a reporting-only asset.",
                               "Prepare go-live checklist: approved design, activated queries, tested booklet, security assigned, Cloud ALM test cases passed, defects closed, software collection imported, smoke test complete, and business owner sign-off captured.",
                               "Create final setup notes with screenshots, design workbook, data provider matrix, page matrix, filter matrix, test evidence, security matrix, transport sequence, and known limitations.",
                               "Link the GitHub source code only if developer extensibility or BTP code is introduced. For pure in-app extensibility, use GitHub only for documentation, templates, screenshots, setup notes, and Cloud ALM import files."
                           ],
        "collapsibleSections":  [
                                    {
                                        "title":  "Cloud ALM Requirement And User Story Template",
                                        "exports":  [
                                                        "requirement",
                                                        "user-stories"
                                                    ],
                                        "html":  `
                                          <h3>Requirement</h3>
                                          <dl class="field-list">
                                            <div><dt>Requirement ID</dt><dd><code class="detail-code">REQ-ANA-RB-001</code></dd></div>
                                            <div><dt>Requirement Name</dt><dd><code class="detail-code">Custom Review Booklet Layout for Customer Reporting Requirements</code></dd></div>
                                            <div><dt>Business Process Area</dt><dd>Analytics / Embedded Analytics / Management Reporting</dd></div>
                                            <div><dt>SAP Scope</dt><dd>SAP S/4HANA Cloud Public Edition</dd></div>
                                            <div><dt>Extensibility Lane</dt><dd>In-App Extensibility / Embedded Analytics</dd></div>
                                            <div><dt>Primary App</dt><dd>Manage KPIs and Reports</dd></div>
                                            <div><dt>Primary Capability</dt><dd>Review Booklet Designer</dd></div>
                                            <div><dt>Related Capability</dt><dd>Custom Analytical Queries and Services</dd></div>
                                            <div><dt>Business Owner</dt><dd>[Enter business owner]</dd></div>
                                            <div><dt>IT Owner</dt><dd>[Enter IT owner]</dd></div>
                                            <div><dt>Process Owner</dt><dd>[Enter process owner]</dd></div>
                                            <div><dt>Priority</dt><dd>High / Medium / Low</dd></div>
                                            <div><dt>Release</dt><dd>[Enter SAP release or project release]</dd></div>
                                          </dl>
                                          <h3>Business Need</h3>
                                          <p>Business users need a guided SAP Fiori reporting booklet that combines multiple analytical pages, filters, variables, row sets, column sets, formatting, and navigation into one governed reporting experience.</p>
                                          <h3>Problem Statement</h3>
                                          <p>Current reporting is performed using manual Excel packs, disconnected analytical reports, repeated filter entry, offline adjustments, and inconsistent reconciliation. This creates delays, manual effort, data inconsistency, and weak governance over management reporting.</p>
                                          <h3>Target Outcome</h3>
                                          <p>Create a clean-core Review Booklet in SAP S/4HANA Cloud Public Edition that allows users to open one Fiori tile, enter common variables, review structured reporting pages, drill into details, and reconcile figures to approved analytical sources.</p>
                                          <h3>User Stories</h3>
                                          <h4>US-RB-001: Analytical Source Validation</h4>
                                          <p>As an analytics specialist, I want to confirm the analytical query for each booklet page so that every page uses released and approved SAP analytical content.</p>
                                          <ul>
                                            <li>Source query is identified for every page.</li>
                                            <li>Query is available in Query Browser, View Browser, or Custom Analytical Queries and Services.</li>
                                            <li>Required fields, measures, variables, and filters are confirmed.</li>
                                            <li>Query results reconcile to the agreed source report.</li>
                                          </ul>
                                          <h4>US-RB-002: Custom Analytical Query Creation</h4>
                                          <p>As an analytics specialist, I want to create a custom analytical query where standard content is insufficient so that the Review Booklet can show customer-specific measures and dimensions.</p>
                                          <ul>
                                            <li>Only released data sources are used.</li>
                                            <li>Calculated and restricted measures are created in the query layer.</li>
                                            <li>Query preview returns expected data.</li>
                                            <li>Query is exposed for analytical consumption where required.</li>
                                            <li>Query authorization is validated for business users.</li>
                                          </ul>
                                          <h4>US-RB-003: Review Booklet Layout Design</h4>
                                          <p>As a business report owner, I want a structured Review Booklet layout so that users can review key reporting areas in a guided sequence.</p>
                                          <ul>
                                            <li>Booklet has approved name, description, owner, and version.</li>
                                            <li>Page groups are created according to the design.</li>
                                            <li>Business pages are created under the correct page groups.</li>
                                            <li>Row sets and column sets are assigned.</li>
                                            <li>Layout is approved by the business owner.</li>
                                          </ul>
                                          <h4>US-RB-004: Filters And Variables</h4>
                                          <p>As a report consumer, I want common variables and filters so that I can run the booklet for the correct reporting context.</p>
                                          <ul>
                                            <li>Mandatory variables are visible.</li>
                                            <li>Default values are documented and approved.</li>
                                            <li>Booklet-level variables apply consistently across pages.</li>
                                            <li>Page-level filters apply only to intended pages.</li>
                                            <li>Invalid or missing variable handling is tested.</li>
                                          </ul>
                                          <h4>US-RB-005: Navigation And Drilldown</h4>
                                          <p>As a report consumer, I want to drill from summary pages into detailed analytical views or related SAP Fiori apps so that I can investigate variances.</p>
                                          <ul>
                                            <li>Navigation target is defined for each drilldown requirement.</li>
                                            <li>Semantic object and action are confirmed where applicable.</li>
                                            <li>Navigation works for authorized users.</li>
                                            <li>Navigation fails safely for unauthorized users.</li>
                                            <li>Context transfer is tested and documented.</li>
                                          </ul>
                                          <h4>US-RB-006: Authorization And Access</h4>
                                          <p>As a security administrator, I want correct role assignments so that only authorized users can design, test, transport, or consume the Review Booklet.</p>
                                          <ul>
                                            <li>Designer role is assigned only to key users.</li>
                                            <li>Business viewer role is assigned to consumers.</li>
                                            <li>Data restrictions are validated.</li>
                                            <li>Review Booklet access is visible in Manage KPIs and Reports for designers.</li>
                                            <li>Unauthorized users cannot access restricted data.</li>
                                          </ul>
                                          <h4>US-RB-007: Transport And Release Movement</h4>
                                          <p>As a release owner, I want the Review Booklet and dependent objects moved through the landscape in the correct sequence so that production deployment is controlled.</p>
                                          <ul>
                                            <li>Software collection includes required extension items.</li>
                                            <li>Dependencies are checked before export.</li>
                                            <li>Import sequence is documented.</li>
                                            <li>Test tenant import is validated before production.</li>
                                            <li>Production smoke test is completed.</li>
                                          </ul>
                                          <h4>US-RB-008: Business Testing And Go-Live</h4>
                                          <p>As a business owner, I want end-to-end testing and sign-off so that the reporting booklet is ready for production use.</p>
                                          <ul>
                                            <li>Happy-path test is passed.</li>
                                            <li>Exception-path test is passed.</li>
                                            <li>Reconciliation test is passed.</li>
                                            <li>Authorization test is passed.</li>
                                            <li>Export test is passed if export is allowed.</li>
                                            <li>Business sign-off is captured in SAP Cloud ALM.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Role And Authorization Matrix",
                                        "html":  `
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Role</th><th>Responsibility</th><th>Required Access</th><th>Validation</th></tr></thead>
                                              <tbody>
                                                <tr><td>Analytics Specialist / Key User</td><td>Creates or copies Review Booklet, configures pages, variables, row sets, column sets, formatting, and navigation.</td><td>Manage KPIs and Reports, Review Booklet Designer, relevant analytics catalogs such as Review Booklet catalog where applicable.</td><td>User can see Review Booklets area and edit booklet.</td></tr>
                                                <tr><td>Custom Analytical Query Designer</td><td>Creates or adapts custom analytical queries using released data sources.</td><td>Custom Analytical Queries and Services, Query Browser, View Browser.</td><td>User can create, preview, and expose query.</td></tr>
                                                <tr><td>Business Report Viewer</td><td>Consumes the final Review Booklet from SAP Fiori launchpad.</td><td>Assigned tile/catalog for the customer-created app and authorization for underlying analytical data.</td><td>User can open tile and view only authorized data.</td></tr>
                                                <tr><td>Security Administrator</td><td>Maintains business roles, catalogs, restrictions, and user assignments.</td><td>Maintain Business Roles / Identity and access administration.</td><td>User access matches role design.</td></tr>
                                                <tr><td>Test User</td><td>Executes business test cases using representative business authorization.</td><td>Same access as intended business consumer.</td><td>Test results reflect real business access.</td></tr>
                                                <tr><td>Release / Transport Owner</td><td>Moves extension items through software collection and import process.</td><td>Export Software Collection / Import Collection.</td><td>Software collection export/import completed without unresolved dependencies.</td></tr>
                                                <tr><td>Business Process Owner</td><td>Approves report design, reconciliation, and go-live readiness.</td><td>Viewer access plus approval responsibility in SAP Cloud ALM.</td><td>Sign-off captured.</td></tr>
                                                <tr><td>Support Owner</td><td>Supports post-go-live issues and known limitations.</td><td>Display access to setup notes, test evidence, and role design.</td><td>Support handover completed.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Authorization checks to include</h3>
                                          <ul>
                                            <li>Designer can access Manage KPIs and Reports.</li>
                                            <li>Designer can access Review Booklet Designer.</li>
                                            <li>Designer can maintain or copy Review Booklet.</li>
                                            <li>Query designer can maintain custom analytical queries.</li>
                                            <li>Viewer can access final tile but cannot edit design.</li>
                                            <li>Viewer sees only authorized company codes, ledgers, profit centers, or other restricted data.</li>
                                            <li>Unauthorized user cannot access tile or underlying query data.</li>
                                            <li>Transport owner can export and import software collections.</li>
                                            <li>Role changes are documented and approved.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Executable Test Script",
                                        "exports":  [
                                                        "test-cases"
                                                    ],
                                        "html":  `
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Test ID</th><th>Test Scenario</th><th>Preconditions</th><th>Steps</th><th>Expected Result</th><th>Status</th></tr></thead>
                                              <tbody>
                                                <tr><td>TC-RB-001</td><td>Open Review Booklet Designer</td><td>Designer role assigned</td><td>Open Manage KPIs and Reports and navigate to Review Booklets.</td><td>Review Booklets area is visible and accessible.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-002</td><td>Create or copy Review Booklet</td><td>Source booklet or design available</td><td>Create new booklet or copy existing booklet.</td><td>Booklet shell is created with name, description, and owner.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-003</td><td>Add data provider</td><td>Analytical query identified</td><td>Add approved analytical query as data provider.</td><td>Query is added without error.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-004</td><td>Validate query result</td><td>Query contains test data</td><td>Preview query or related page.</td><td>Results match source analytical query.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-005</td><td>Configure page groups</td><td>Design approved</td><td>Create page groups in agreed sequence.</td><td>Page groups appear in correct order.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-006</td><td>Configure business pages</td><td>Page matrix approved</td><td>Create pages under each page group.</td><td>Pages are assigned to correct groups.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-007</td><td>Configure row sets</td><td>Required dimensions available</td><td>Add row sets such as company code, customer, product, cost center.</td><td>Row set switching works.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-008</td><td>Configure column sets</td><td>Required measures available</td><td>Add column sets such as actual, YTD, prior year, variance.</td><td>Column set switching works.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-009</td><td>Configure global variables</td><td>Variables identified</td><td>Add fiscal year, period, company code, ledger, currency.</td><td>Variables appear at runtime.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-010</td><td>Mandatory variable validation</td><td>Mandatory variables configured</td><td>Run booklet without required value.</td><td>System prevents execution or prompts for required value.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-011</td><td>Page-level filter validation</td><td>Page-level filter configured</td><td>Open filtered page and compare to unfiltered page.</td><td>Filter affects only intended page.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-012</td><td>Formatting validation</td><td>Formatting rules configured</td><td>Review totals, subtotals, variances, negative values.</td><td>Formatting appears as designed.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-013</td><td>Navigation validation</td><td>Navigation target configured</td><td>Select relevant value and trigger navigation.</td><td>Correct target app opens where authorized.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-014</td><td>Unauthorized navigation</td><td>Restricted user available</td><td>Trigger navigation without target authorization.</td><td>Access is blocked safely.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-015</td><td>Viewer access</td><td>Viewer role assigned</td><td>Open final Fiori tile as business user.</td><td>Booklet opens in display mode.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-016</td><td>Data restriction</td><td>Restricted test user available</td><td>Run booklet for restricted company code/profit center.</td><td>User sees only authorized data.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-017</td><td>Empty result set</td><td>Filter combination with no data</td><td>Run booklet with no-data filter.</td><td>Empty state appears without failure.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-018</td><td>Invalid filter combination</td><td>Invalid values available</td><td>Run booklet with invalid combination.</td><td>System handles error clearly.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-019</td><td>Large data volume</td><td>High-volume filter available</td><td>Run booklet for broad data range.</td><td>Booklet loads within acceptable performance threshold.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-020</td><td>Reconciliation</td><td>Source report available</td><td>Compare totals against source analytical query or approved report.</td><td>Values match or variance is explained.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-021</td><td>Export behavior</td><td>Export allowed</td><td>Export from final customer-created app.</td><td>Export works according to agreed policy.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-022</td><td>Transport dependency check</td><td>Software collection prepared</td><td>Add booklet and dependencies, run dependency check.</td><td>No unresolved dependencies remain.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-023</td><td>Test tenant import</td><td>Export completed</td><td>Import software collection into test tenant.</td><td>Booklet and dependencies are available.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-024</td><td>Production smoke test</td><td>Production import completed</td><td>Open tile, run default variable set, check key page.</td><td>Booklet works in production.</td><td>Not Started</td></tr>
                                                <tr><td>TC-RB-025</td><td>Downstream process check</td><td>Business users available</td><td>Confirm no transactional or operational process changed.</td><td>Reporting-only scope is confirmed.</td><td>Not Started</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Defect severity guide</h3>
                                          <ul>
                                            <li>High: Booklet cannot open, data is incorrect, unauthorized data is visible, transport fails.</li>
                                            <li>Medium: One page, filter, navigation, or export function fails but core booklet works.</li>
                                            <li>Low: Label, formatting, ordering, or documentation issue.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Transport / Release Checklist",
                                        "html":  `
                                          <h3>Before Export</h3>
                                          <ul>
                                            <li>Confirm all custom analytical queries are activated.</li>
                                            <li>Confirm Review Booklet is saved as final or ready for release according to tenant process.</li>
                                            <li>Confirm Fiori tile or application assignment is complete.</li>
                                            <li>Confirm role and catalog changes are documented.</li>
                                            <li>Confirm dependencies are known: queries, booklet, tile, catalogs, roles, custom fields if any.</li>
                                            <li>Confirm SAP Cloud ALM user stories and test cases are linked.</li>
                                            <li>Confirm business owner has approved movement to test.</li>
                                          </ul>
                                          <h3>Software Collection</h3>
                                          <ul>
                                            <li>Create or update software collection.</li>
                                            <li>Add custom analytical queries.</li>
                                            <li>Add Review Booklet object where available as transportable extension item.</li>
                                            <li>Add related tile/application configuration where applicable.</li>
                                            <li>Add dependent custom fields or analytical objects if used.</li>
                                            <li>Run dependency check.</li>
                                            <li>Resolve missing dependencies.</li>
                                            <li>Record collection name, version, export date, source tenant, and owner.</li>
                                          </ul>
                                          <h3>Test Tenant Import</h3>
                                          <ul>
                                            <li>Import software collection into test tenant.</li>
                                            <li>Confirm import log has no unresolved errors.</li>
                                            <li>Assign test users and roles.</li>
                                            <li>Open Manage KPIs and Reports and confirm booklet exists.</li>
                                            <li>Open final Fiori tile and confirm booklet is accessible.</li>
                                            <li>Run smoke test with default variables.</li>
                                            <li>Run reconciliation test.</li>
                                            <li>Run authorization test.</li>
                                            <li>Record evidence in SAP Cloud ALM.</li>
                                          </ul>
                                          <h3>Production Import</h3>
                                          <ul>
                                            <li>Confirm change approval.</li>
                                            <li>Confirm production import window.</li>
                                            <li>Confirm rollback or mitigation plan.</li>
                                            <li>Import software collection.</li>
                                            <li>Validate import log.</li>
                                            <li>Assign or confirm production roles.</li>
                                            <li>Open tile as business viewer.</li>
                                            <li>Run production smoke test.</li>
                                            <li>Capture screenshot evidence.</li>
                                            <li>Notify business owner and support owner.</li>
                                          </ul>
                                          <h3>Post Import</h3>
                                          <ul>
                                            <li>Confirm SAP Cloud ALM deployment task is complete.</li>
                                            <li>Close transport task only after smoke test passes.</li>
                                            <li>Update final setup notes.</li>
                                            <li>Record known limitations and support contacts.</li>
                                            <li>Move unresolved minor defects to hypercare backlog.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Go-Live Acceptance Criteria",
                                        "html":  `
                                          <h3>Functional Readiness</h3>
                                          <ul>
                                            <li>Review Booklet is created or copied successfully.</li>
                                            <li>All required page groups and pages are available.</li>
                                            <li>All required data providers are assigned.</li>
                                            <li>Row sets and column sets work as designed.</li>
                                            <li>Booklet-level and page-level filters work correctly.</li>
                                            <li>Mandatory variables are visible and validated.</li>
                                            <li>Formatting is applied for totals, subtotals, variances, and exceptions.</li>
                                            <li>Navigation targets work for authorized users.</li>
                                            <li>Export behavior is tested if export is allowed.</li>
                                          </ul>
                                          <h3>Data Readiness</h3>
                                          <ul>
                                            <li>All values reconcile to approved analytical query or source report.</li>
                                            <li>Variances are documented and approved.</li>
                                            <li>Currency, ledger, fiscal year, period, and company code logic are validated.</li>
                                            <li>Authorization-based data restrictions are confirmed.</li>
                                            <li>No unauthorized data exposure is found.</li>
                                          </ul>
                                          <h3>Security Readiness</h3>
                                          <ul>
                                            <li>Designer access is restricted to authorized key users.</li>
                                            <li>Viewer access is assigned to business consumers.</li>
                                            <li>Security administrator has approved role design.</li>
                                            <li>Test user results match expected production access.</li>
                                            <li>Access to underlying analytical queries is validated.</li>
                                          </ul>
                                          <h3>Release Readiness</h3>
                                          <ul>
                                            <li>Software collection is exported and imported successfully.</li>
                                            <li>Dependencies are checked and resolved.</li>
                                            <li>Production import is completed.</li>
                                            <li>Production smoke test is passed.</li>
                                            <li>Cloud ALM deployment task is updated.</li>
                                            <li>Business owner is notified.</li>
                                          </ul>
                                          <h3>Business Readiness</h3>
                                          <ul>
                                            <li>Business owner approves layout and content.</li>
                                            <li>Process owner confirms the to-be process.</li>
                                            <li>Test cases are passed or accepted with documented exceptions.</li>
                                            <li>Training or quick reference material is available.</li>
                                            <li>Support owner accepts handover.</li>
                                            <li>Hypercare process is confirmed.</li>
                                          </ul>
                                          <h3>Final Sign-Off</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Sign-Off Area</th><th>Owner</th><th>Evidence Required</th><th>Status</th></tr></thead>
                                              <tbody>
                                                <tr><td>Functional Design</td><td>Business Owner</td><td>Approved page matrix and layout screenshots.</td><td>Pending</td></tr>
                                                <tr><td>Data Reconciliation</td><td>Process Owner</td><td>Reconciliation workbook or test evidence.</td><td>Pending</td></tr>
                                                <tr><td>Security</td><td>Security Owner</td><td>Role matrix and user test evidence.</td><td>Pending</td></tr>
                                                <tr><td>Transport</td><td>Release Owner</td><td>Import logs and smoke test evidence.</td><td>Pending</td></tr>
                                                <tr><td>Support Handover</td><td>Support Owner</td><td>Setup notes and known limitations.</td><td>Pending</td></tr>
                                                <tr><td>Go-Live Approval</td><td>Project Owner</td><td>SAP Cloud ALM approval or sign-off record.</td><td>Pending</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Go-live decision</h3>
                                          <ul>
                                            <li>Go: all high-severity tests passed, no unauthorized data exposure, reconciliation approved, production smoke test passed.</li>
                                            <li>Conditional Go: only low-severity cosmetic issues remain and business owner accepts them.</li>
                                            <li>No-Go: incorrect data, missing authorization control, failed import, failed smoke test, or unresolved high-severity defect.</li>
                                          </ul>
                                        `
                                    }
                                ],
        "cloudAlm":  {
                         "businessProcess":  "Analytics / Embedded Analytics / Management Reporting",
                         "workstream":  "Analytics / Embedded Analytics",
                         "tags":  [
                                      "Review Booklet",
                                      "Manage KPIs and Reports",
                                      "In-App Extensibility",
                                      "Embedded Analytics"
                                  ],
                         "requirement":  {
                                             "externalId":  "REQ-ANA-RB-001",
                                             "title":  "Custom Review Booklet Layout for Customer Reporting Requirements",
                                             "description":  "<p>Create a customer-specific Review Booklet in SAP S/4HANA Cloud Public Edition using Manage KPIs and Reports and Review Booklet Designer.</p><h2>Business Need</h2><p>Business users need one guided SAP Fiori reporting pack that replaces manual Excel packs and disconnected analytical reports.</p><h2>Target Outcome</h2><p>Users open one Fiori tile, enter common variables, review approved page groups, drill into details, and reconcile figures to approved analytical sources.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "source":  "External",
                                             "businessProcess":  "Analytics / Embedded Analytics / Management Reporting"
                                         },
                         "userStories":  [
                                             {
                                                 "externalId":  "US-RB-001",
                                                 "title":  "US-RB-001 - Analytical source validation",
                                                 "persona":  "an analytics specialist",
                                                 "want":  "to confirm the analytical query for each booklet page",
                                                 "soThat":  "every page uses released and approved SAP analytical content",
                                                 "acceptanceCriteria":  [
                                                                            "Source query is identified for every page.",
                                                                            "Query is available in Query Browser, View Browser, or Custom Analytical Queries and Services.",
                                                                            "Required fields, measures, variables, and filters are confirmed.",
                                                                            "Query result reconciles to the approved baseline."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-002",
                                                 "title":  "US-RB-002 - Custom analytical query creation",
                                                 "persona":  "an analytics specialist",
                                                 "want":  "to create a custom analytical query where standard content is insufficient",
                                                 "soThat":  "the Review Booklet can show customer-specific measures and dimensions",
                                                 "acceptanceCriteria":  [
                                                                            "Only released data sources are used.",
                                                                            "Calculated and restricted measures are created in the query layer.",
                                                                            "Query preview returns expected data.",
                                                                            "Query authorization is validated for business users."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-003",
                                                 "title":  "US-RB-003 - Review Booklet layout design",
                                                 "persona":  "a business report owner",
                                                 "want":  "a structured Review Booklet layout",
                                                 "soThat":  "users can review key reporting areas in a guided sequence",
                                                 "acceptanceCriteria":  [
                                                                            "Booklet has approved name, description, owner, and version.",
                                                                            "Page groups are created according to design.",
                                                                            "Business pages are assigned to correct page groups.",
                                                                            "Row sets and column sets are assigned.",
                                                                            "Layout is approved by business owner."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-004",
                                                 "title":  "US-RB-004 - Filters and variables",
                                                 "persona":  "a report consumer",
                                                 "want":  "common variables and filters",
                                                 "soThat":  "I can run the booklet for the correct reporting context",
                                                 "acceptanceCriteria":  [
                                                                            "Mandatory variables are visible.",
                                                                            "Default values are documented and approved.",
                                                                            "Booklet-level variables apply consistently across pages.",
                                                                            "Page-level filters apply only to intended pages.",
                                                                            "Invalid or missing variable behavior is tested."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-005",
                                                 "title":  "US-RB-005 - Navigation and drilldown",
                                                 "persona":  "a report consumer",
                                                 "want":  "to drill from summary pages into detailed analytical views or related SAP Fiori apps",
                                                 "soThat":  "I can investigate variances",
                                                 "acceptanceCriteria":  [
                                                                            "Navigation target is defined for each drilldown requirement.",
                                                                            "Semantic object/action or target app is confirmed where applicable.",
                                                                            "Navigation works for authorized users.",
                                                                            "Navigation fails safely for unauthorized users.",
                                                                            "Context transfer is tested and documented."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-006",
                                                 "title":  "US-RB-006 - Authorization and access",
                                                 "persona":  "a security administrator",
                                                 "want":  "correct role assignments",
                                                 "soThat":  "only authorized users can design, test, transport, or consume the Review Booklet",
                                                 "acceptanceCriteria":  [
                                                                            "Designer role is assigned only to key users.",
                                                                            "Business viewer role is assigned to consumers.",
                                                                            "Data restrictions are validated.",
                                                                            "Review Booklet access is visible in Manage KPIs and Reports for designers.",
                                                                            "Unauthorized users cannot access restricted data."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-007",
                                                 "title":  "US-RB-007 - Transport and release movement",
                                                 "persona":  "a release owner",
                                                 "want":  "the Review Booklet and dependent objects moved through the landscape in the correct sequence",
                                                 "soThat":  "production deployment is controlled",
                                                 "acceptanceCriteria":  [
                                                                            "Software collection includes required extension items.",
                                                                            "Dependencies are checked before export.",
                                                                            "Import sequence is documented.",
                                                                            "Test tenant import is validated before production.",
                                                                            "Production smoke test is completed."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-RB-008",
                                                 "title":  "US-RB-008 - Business testing and go-live",
                                                 "persona":  "a business owner",
                                                 "want":  "end-to-end testing and sign-off",
                                                 "soThat":  "the reporting booklet is ready for production use",
                                                 "acceptanceCriteria":  [
                                                                            "Happy-path test is passed.",
                                                                            "Exception-path test is passed.",
                                                                            "Reconciliation test is passed.",
                                                                            "Authorization test is passed.",
                                                                            "Export test is passed if export is allowed.",
                                                                            "Business sign-off is captured in SAP Cloud ALM."
                                                                        ]
                                             }
                                         ],
                         "testCases":  [
                                           {
                                               "testCaseName":  "RB-001 - Validate Review Booklet Prerequisites and Access",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Confirm tenant and release scope",
                                               "actionTitle":  "Confirm product scope",
                                               "instructions":  [
                                                                    "Log on to the SAP S/4HANA Cloud Public Edition tenant.",
                                                                    "Confirm the project release and target tenant: development, test, or production.",
                                                                    "Confirm Manage KPIs and Reports is available in SAP Fiori launchpad.",
                                                                    "Confirm Review Booklet Designer access is available for the designer role."
                                                                ],
                                               "expectedResult":  "Tenant, release, Manage KPIs and Reports access, and Review Booklet Designer access are confirmed."
                                           },
                                           {
                                               "testCaseName":  "RB-002 - Create or Copy Customer Review Booklet",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Create booklet shell",
                                               "actionTitle":  "Create or copy booklet",
                                               "instructions":  [
                                                                    "Open Manage KPIs and Reports.",
                                                                    "Navigate to Review Booklets.",
                                                                    "Copy the closest SAP-delivered booklet or create a new booklet.",
                                                                    "Maintain the approved booklet ID, name, owner, version, business area, and Cloud ALM requirement reference."
                                                                ],
                                               "expectedResult":  "Customer booklet shell is created and traceable to REQ-ANA-RB-001."
                                           },
                                           {
                                               "testCaseName":  "RB-003 - Add Data Providers and Validate Queries",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Configure analytical queries",
                                               "actionTitle":  "Add and validate data providers",
                                               "instructions":  [
                                                                    "Add one data provider per underlying analytical query.",
                                                                    "Assign the approved analytical query for each provider.",
                                                                    "Preview query results and validate fields, measures, variables, filters, currency, and unit handling.",
                                                                    "Compare totals with the agreed source analytical report."
                                                                ],
                                               "expectedResult":  "All required data providers are assigned and query results reconcile to the approved baseline."
                                           },
                                           {
                                               "testCaseName":  "RB-004 - Configure Page Groups, Pages, Row Sets, and Column Sets",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Configure booklet structure",
                                               "actionTitle":  "Create reporting layout structure",
                                               "instructions":  [
                                                                    "Create approved page groups such as executive summary, revenue and margin, cost review, customer analysis, and detail drilldown.",
                                                                    "Create business pages and assign each page to the correct page group.",
                                                                    "Create row sets and column sets required for the reporting pack.",
                                                                    "Confirm the layout sequence with the business owner."
                                                                ],
                                               "expectedResult":  "Page groups, business pages, row sets, and column sets are available in the approved order."
                                           },
                                           {
                                               "testCaseName":  "RB-005 - Configure Variables, Filters, Formatting, and Navigation",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Configure runtime behavior",
                                               "actionTitle":  "Validate filters, formatting, and navigation",
                                               "instructions":  [
                                                                    "Add global variables such as company code, fiscal year, posting period, ledger, and currency.",
                                                                    "Apply booklet-level filters where values must apply across all pages.",
                                                                    "Apply page-level filters only where a filter is specific to one page.",
                                                                    "Configure totals, subtotals, variances, negative values, and exception formatting.",
                                                                    "Configure navigation targets where users need drilldown."
                                                                ],
                                               "expectedResult":  "Runtime prompts, filters, formatting, and navigation behave as designed."
                                           },
                                           {
                                               "testCaseName":  "RB-006 - Execute Business Viewer Happy Path",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Run end-to-end business flow",
                                               "actionTitle":  "Open tile and review booklet pages",
                                               "instructions":  [
                                                                    "Log on as a business report viewer.",
                                                                    "Open the customer Review Booklet tile from SAP Fiori launchpad.",
                                                                    "Enter approved reporting variables.",
                                                                    "Review the page groups and pages.",
                                                                    "Switch row sets and column sets, apply allowed filters, and drill into details where configured."
                                                                ],
                                               "expectedResult":  "The business user can consume the Review Booklet end to end without design access."
                                           },
                                           {
                                               "testCaseName":  "RB-007 - Validate Security, Exceptions, and Export",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Validate negative and security paths",
                                               "actionTitle":  "Run exception and authorization checks",
                                               "instructions":  [
                                                                    "Run the booklet with a missing mandatory variable.",
                                                                    "Run the booklet as a restricted test user.",
                                                                    "Run the booklet using an invalid or no-data filter combination.",
                                                                    "Test export from the final customer-created app if export is allowed."
                                                                ],
                                               "expectedResult":  "Mandatory variables are enforced, unauthorized data is not exposed, empty or invalid result sets are handled safely, and export follows the agreed policy."
                                           },
                                           {
                                               "testCaseName":  "RB-008 - Transport, Import, and Go-Live Smoke Test",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Move through release path",
                                               "actionTitle":  "Validate transport and go-live readiness",
                                               "instructions":  [
                                                                    "Add custom analytical queries, Review Booklet object, tile/application configuration, and dependent extension items to the software collection where applicable.",
                                                                    "Run dependency check and resolve missing dependencies.",
                                                                    "Import into the test tenant and run smoke testing.",
                                                                    "Import into production after approval.",
                                                                    "Run production smoke test and capture business sign-off."
                                                                ],
                                               "expectedResult":  "Transport movement completes successfully and production smoke test passes."
                                           }
                                       ]
                     },
        "sources":  [
                        {
                            "label":  "Open source",
                            "note":  "SAP Help source for creating and maintaining Review Booklets in Manage KPIs and Reports.",
                            "url":  "https://help.sap.com/docs/SAP_S4HANA_CLOUD/a630d57fc5004c6383e7a81efee7a8bb/68b8107b923a4538b42920caa2dee102.html"
                        },
                        {
                            "label":  "Open reference",
                            "note":  "SAP Help reference for the related Review Booklet setup path.",
                            "url":  "https://help.sap.com/docs/SAP_S4HANA_CLOUD/a630d57fc5004c6383e7a81efee7a8bb/d4d4101b03754a84a7d26893911f7dbc.html",
                            "actionLabel":  "Open reference"
                        },
                        {
                            "label":  "SAP Help: Review Booklet Designer",
                            "note":  "Use this to confirm the Review Booklet Designer wizard and maintenance flow.",
                            "url":  "https://help.sap.com/docs/SAP_S4HANA_CLOUD/a630d57fc5004c6383e7a81efee7a8bb/2acb23f7cabc472a8aec1988ed15b1ac.html"
                        },
                        {
                            "label":  "SAP Learning: Creating Review Booklets",
                            "note":  "Use this to understand the Review Booklet structure: data providers, pages, page groups, row sets, column sets, variables, formatting, and navigation.",
                            "url":  "https://learning.sap.com/courses/discovering-sap-s-4hana-embedded-analytics/creating-review-booklets"
                        },
                        {
                            "label":  "SAP Help: Custom Analytical Queries and Services",
                            "note":  "Use this when standard analytical queries do not satisfy the customer reporting requirement.",
                            "url":  "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/4ef099d254cd4f8a96df001496f53952.html"
                        },
                        {
                            "label":  "SAP Help: Export and Import Software Collections",
                            "note":  "Use this to plan movement from development or customizing tenant to test and production.",
                            "url":  "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/f0d605f1bddb471ba1de8a3b5a41d71f.html"
                        },
                        {
                            "label":  "SAP KBA preview: Review Booklet tab missing",
                            "note":  "Use this for troubleshooting authorization issues, especially missing Review Booklet access in Manage KPIs and Reports.",
                            "url":  "https://userapps.support.sap.com/sap/support/knowledge/en/3521484"
                        }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Create the customer-ready accelerator pack: design workbook, Review Booklet page matrix, data provider matrix, executable test script, security matrix, transport checklist, go-live checklist, setup notes, screenshots, and Cloud ALM story import template."
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
