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
        "id":  "ai-release-assurance-for-sap",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "AI Release Assurance for SAP",
        "detailAliases":  [
                              "ai-release-assurance-for-sap-side",
                              "ai-assisted-release-risk-assessment"
                          ],
        "status":  "Customer accelerator",
        "pattern":  "AI",
        "category":  "AI",
        "tagLabel":  "AI",
        "description":  "Customer-ready AI release assurance accelerator that connects SAP change impact, business-process risk, historical defects, test coverage, automation availability, and release approval evidence before regression starts.",
        "function":  "Build a governed SAP BTP, SAP Cloud ALM, and SAP AI Core release assurance layer that recommends, explains, and prioritizes regression scope while keeping high-risk exclusions and release approvals under human control.",
        "summary":  "AI Release Assurance for SAP is a customer-ready implementation accelerator for risk-based SAP release assurance. It analyzes SAP changes, historical defects, critical business processes, test assets, automation coverage, and release history to recommend the smallest defensible regression scope with transparent rationale, residual risk visibility, and auditable human governance.",
        "useCase":  [
                        {
                            "text":  "Create a reusable SAP release assurance layer that connects SAP Cloud ALM, transport and change data, testing, defects, incidents, process context, automation coverage, and governed AI recommendations."
                        },
                        {
                            "heading":  "It helps SAP release teams",
                            "items":  [
                                          "Connect transports, change records, defects, business processes, interfaces, roles, and test assets.",
                                          "Rank changes and impacted processes by release risk and business criticality.",
                                          "Recommend a smallest defensible regression scope with explainable inclusion and exclusion reasons.",
                                          "Highlight automation coverage, unused automation assets, weak test coverage, and untested high-risk areas.",
                                          "Create release confidence summaries for QA leads, application owners, release managers, and CAB-style approval forums.",
                                          "Record recommendation, override, approval, prompt, model-version, and final decision history for auditability.",
                                          "Establish a reusable operating pattern for implementation releases, hypercare stabilization, optimization cycles, AMS release trains, quarterly releases, and high-risk change windows."
                                      ]
                        }
                    ],
        "workingExample":  [
                               {
                                   "html":  `
                                     <div class="working-example">
                                       <div class="working-example-gallery" aria-label="AI Release Assurance reference architecture">
                                         <figure>
                                           <img src="assets/working-examples/ai-release-assurance/ai-release-assurance-reference-architecture.png" alt="AI Release Assurance for SAP reference architecture showing source inputs, risk and impact engine, SAP Cloud ALM, test automation, ITSM and DevOps integrations, and release assurance outputs." onerror="handleMissingExampleImage(this)" />
                                           <figcaption>Reference architecture for AI-assisted SAP release assurance across release inputs, AI orchestration, and governance outputs.</figcaption>
                                         </figure>
                                       </div>
                                       <p>A customer is preparing a quarterly SAP release with finance validation changes, payment terms configuration, purchase order approval workflow changes, bank payment interface updates, tax determination fixes, and a minor reporting enhancement.</p>
                                       <p>The QA team normally runs a broad finance and procurement regression pack of 400 test cases. The AI Release Assurance layer ingests the release scope, maps impacted processes, scores risk, checks defect and incident history, identifies available automation, and recommends a focused regression set.</p>
                                       <p>The resulting scope keeps mandatory tests for supplier invoice posting, payment proposal, payment file generation, bank interface validation, tax determination, GL posting validation, and PO approval workflow. It excludes unrelated sales, inventory, production planning, and HR/payroll tests with documented rationale and human approval.</p>
                                       <h3>How it is implemented in simple steps</h3>
                                       <ol class="working-example-steps">
                                         <li>Connect release, change, transport, test, defect, incident, and process sources.</li>
                                         <li>Normalize data into a canonical release assurance model.</li>
                                         <li>Apply deterministic mandatory-test and compliance rules before using AI.</li>
                                         <li>Use AI only to assist mapping, clustering, explanation, and memo drafting.</li>
                                         <li>Generate a recommended must-test, should-test, automated, manual, and excluded-with-rationale scope.</li>
                                         <li>Route exceptions, high-risk removals, CAB review, and final approval through human governance.</li>
                                         <li>Compare predicted risk with post-release incidents so the model improves after go-live.</li>
                                       </ol>
                                     </div>
                                   `
                               }
                           ],
        "whenToUse":  [
                          {
                              "text":  "Use this when SAP release teams need a repeatable, evidence-backed way to connect change impact, business-process risk, historical defects, test coverage, automation availability, and release approval evidence before regression starts."
                          },
                          {
                              "heading":  "Take this solution forward when",
                              "items":  [
                                            "SAP releases include multiple transports, configuration changes, integrations, or feature items, and regression scope is still selected through manual judgment or historical habit.",
                                            "SAP Cloud ALM, ITSM, DevOps, transport, deployment, defect, incident, or test data can be extracted or made available for release analysis.",
                                            "Historical defects, production incidents, or failed-test history can be linked to SAP modules, processes, components, releases, or test cases.",
                                            "Business process criticality is available through SAP Cloud ALM, SAP Signavio, solution documentation, control matrices, process owners, or a practical process-criticality workshop.",
                                            "Release governance requires transparent risk-based approval with human review of test exclusions, residual risk, and go/no-go recommendations.",
                                            "Automation exists or can be connected to release risk so automated tests are prioritized where they provide meaningful assurance.",
                                            "The objective is to improve confidence and focus regression effort on impacted, critical, and historically risky areas."
                                        ]
                          },
                          {
                              "heading":  "Pause or remediate first when",
                              "items":  [
                                            "No reliable test catalog or meaningful execution history exists.",
                                            "Change records and transports cannot be traced to release scope, technical objects, business impact, or ownership.",
                                            "Defect and incident records are not classified, lack closure quality, or cannot be linked to impacted process areas.",
                                            "Business process ownership is unclear or process mapping is unavailable.",
                                            "AI is expected to approve releases automatically without human review.",
                                            "The primary issue is poor test-case design rather than prioritization.",
                                            "Mandatory regulatory or control testing must run in full with no scope optimization permitted; in that case, use the dashboard for evidence and residual-risk visibility rather than reduction."
                                        ]
                          }
                      ],
        "implementation":  [
                               "Confirm release assurance scope, SAP domains, release governance points, data sources, and decision owners; produce the solution scope statement and release assurance decision model.",
                               "Inventory SAP Cloud ALM, transport, ITSM, defect, incident, test, automation, and process-criticality data sources; produce the data source inventory and access plan.",
                               "Define the canonical model linking releases, transports, changed objects, processes, tests, defects, incidents, recommendations, and approvals; produce the field mapping.",
                               "Create deterministic rules for critical processes, mandatory tests, regulatory controls, interfaces, known high-risk objects, and historical defect areas; produce the rules catalogue and threshold matrix.",
                               "Configure AI-assisted mapping for similar defects, similar prior releases, ambiguous changes, test relevance, and release-summary generation; produce the AI mapping and prompt design pack.",
                               "Build the risk scoring model using business criticality, change complexity, defect history, incident history, coverage strength, automation availability, and confidence; produce risk bands and score explanations.",
                               "Generate regression recommendations with must-test, should-test, optional, excluded, automation, manual validation, and coverage-gap categories.",
                               "Configure QA workbench review, override, reason-code capture, approval routing, residual-risk sign-off, and audit history.",
                               "Validate the release dashboard, automation coverage view, CAB memo, audit log, security model, integration failures, AI fallback behavior, and deterministic rule-based fallback.",
                               "Run go-live readiness checks, confirm support ownership, define post-release learning, and operationalize continuous tuning through a support runbook and learning loop."
                           ],
        "collapsibleSections":  [
                                    {
                                        "title":  "Customer-Ready Solution Overview",
                                        "html":  `
                                          <h3>Purpose</h3>
                                          <p>This accelerator defines the solution, decision conditions, architecture, implementation process, governance model, user stories, test scripts, evidence checklist, and go-live criteria for AI Release Assurance for SAP.</p>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Area</th><th>Accelerator Detail</th></tr></thead>
                                              <tbody>
                                                <tr><td>Topic</td><td>AI Release Assurance for SAP</td></tr>
                                                <tr><td>Audience</td><td>CIO operations teams, QA leadership, SAP release managers, application owners, S/4HANA program leads, and AMS release governance teams.</td></tr>
                                                <tr><td>Solution posture</td><td>Advisory, implementation-ready, assessment-based, and structured for direct reuse in solution planning and delivery.</td></tr>
                                                <tr><td>Primary outcome</td><td>Risk-based SAP release assurance with traceable regression recommendations and human-governed release decisions.</td></tr>
                                                <tr><td>Operating principle</td><td>Use AI to recommend, explain, and prioritize; keep release approval, high-risk exclusions, and governance decisions under human control.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Value Statement</h3>
                                          <p>The solution does not replace QA ownership or release approval. It strengthens both by giving release teams a clear view of what changed, what is impacted, what must be tested, what can be excluded with rationale, and what residual risk remains.</p>
                                          <h3>Functional Design</h3>
                                          <ul>
                                            <li>Change ingestion captures transports, features, work items, commits, deployment records, incidents, and release scope.</li>
                                            <li>Impact mapping links changed SAP objects to processes, interfaces, roles, controls, reports, and tests.</li>
                                            <li>Risk scoring ranks changes by business criticality, prior defects, object criticality, complexity, interface exposure, and coverage strength.</li>
                                            <li>Regression selector recommends a minimum defensible test set with inclusion and exclusion rationale.</li>
                                            <li>Automation optimizer prioritizes suitable automated tests and identifies manual coverage gaps.</li>
                                            <li>Release dashboard shows risk, recommended scope, gaps, exceptions, residual risk, and approval status.</li>
                                            <li>CAB memo generator creates concise release-readiness summaries in business language.</li>
                                            <li>Override workflow captures expert changes with reason codes, approval history, and audit traceability.</li>
                                            <li>Learning loop compares predicted risk against post-release incidents and defect leakage to improve future recommendations.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Cloud ALM Requirement And User Story Template",
                                        "exports":  [
                                                        "requirement",
                                                        "user-stories"
                                                    ],
                                        "html":  `
                                          <h3>Parent Requirement</h3>
                                          <dl class="field-list">
                                            <div><dt>Requirement ID</dt><dd><code class="detail-code">REQ-REL-AI-001</code></dd></div>
                                            <div><dt>Requirement Name</dt><dd><code class="detail-code">AI-Assisted Release Risk Assessment</code></dd></div>
                                            <div><dt>Business Process Area</dt><dd>Release Management / Test Management / Application Lifecycle Management</dd></div>
                                            <div><dt>SAP Scope</dt><dd>SAP Cloud ALM, SAP BTP, SAP AI Core / generative AI hub, optional SAP Signavio, and connected test automation tools</dd></div>
                                            <div><dt>Extensibility Lane</dt><dd>Side-by-Side / SAP BTP / AI</dd></div>
                                            <div><dt>Primary Capability</dt><dd>Risk-based regression recommendation and release decision support</dd></div>
                                            <div><dt>Business Owner</dt><dd>[Enter release governance owner]</dd></div>
                                            <div><dt>IT Owner</dt><dd>[Enter platform or ALM owner]</dd></div>
                                            <div><dt>Process Owner</dt><dd>[Enter QA or release process owner]</dd></div>
                                            <div><dt>Priority</dt><dd>High</dd></div>
                                            <div><dt>Release</dt><dd>[Enter SAP release, quarterly release train, sprint release, or AMS release window]</dd></div>
                                          </dl>
                                          <h3>Business Need</h3>
                                          <p>Release teams need a defensible way to reduce unnecessary regression effort while protecting critical SAP business processes and preserving human governance.</p>
                                          <h3>Problem Statement</h3>
                                          <p>Regression testing is often planned using broad packs and status slides rather than release-specific impact, defect history, automation coverage, process criticality, and auditable rationale.</p>
                                          <h3>Target Outcome</h3>
                                          <p>Create an AI-assisted, human-governed release assurance layer that recommends the smallest defensible regression scope, highlights residual risk, and prepares CAB-ready release evidence.</p>
                                          <h3>Starter Requirement Backlog</h3>
                                          <ul>
                                            <li><code class="detail-code">REQ-REL-AI-001</code> - AI-assisted release risk assessment.</li>
                                            <li><code class="detail-code">REQ-REL-AI-002</code> - Risk-based regression scope recommendation.</li>
                                            <li><code class="detail-code">REQ-REL-AI-003</code> - Release confidence dashboard.</li>
                                            <li><code class="detail-code">REQ-REL-AI-004</code> - CAB memo generation.</li>
                                            <li><code class="detail-code">REQ-REL-AI-005</code> - Recommendation audit trail.</li>
                                          </ul>
                                          <h3>User Stories</h3>
                                          <h4>US-REL-001: Ingest Release Scope</h4>
                                          <p>As a release manager, I want the system to ingest release features, changes, and transports so that all release scope is available in one place.</p>
                                          <ul>
                                            <li>Release ID can be selected.</li>
                                            <li>Features, changes, and transport/object metadata are retrieved.</li>
                                            <li>Missing transport mappings are flagged.</li>
                                            <li>Ingestion timestamp is visible.</li>
                                          </ul>
                                          <h4>US-REL-002: Map Changes To Business Processes</h4>
                                          <p>As an application owner, I want changed objects mapped to business processes so that I can understand business impact.</p>
                                          <ul>
                                            <li>Each change has process mapping where available.</li>
                                            <li>Unmapped changes are flagged.</li>
                                            <li>Manual mapping can be added.</li>
                                            <li>Mapping confidence and source are recorded.</li>
                                          </ul>
                                          <h4>US-REL-003: Link Changes To Test Cases</h4>
                                          <p>As a QA lead, I want impacted processes linked to test cases so that regression scope can be generated.</p>
                                          <ul>
                                            <li>Process-to-test mapping is visible.</li>
                                            <li>Test case type, automation status, and last execution result are shown.</li>
                                            <li>Missing test coverage is flagged.</li>
                                          </ul>
                                          <h4>US-REL-004: Calculate Risk Score</h4>
                                          <p>As a release manager, I want a risk score for each change and release so that I can prioritize governance effort.</p>
                                          <ul>
                                            <li>Change-level and release-level score is generated.</li>
                                            <li>Risk band is assigned.</li>
                                            <li>Score factors are visible.</li>
                                            <li>Score can be recalculated after data changes.</li>
                                          </ul>
                                          <h4>US-REL-005: Recommend Regression Scope</h4>
                                          <p>As a QA lead, I want the system to recommend a regression scope so that testing is focused and defensible.</p>
                                          <ul>
                                            <li>Must-test, should-test, optional, manual, and automation-preferred items are listed.</li>
                                            <li>Excluded items include reason.</li>
                                            <li>Manual testing gaps are visible.</li>
                                          </ul>
                                          <h4>US-REL-006: Review And Override Recommendations</h4>
                                          <p>As a QA lead, I want to accept or modify recommendations so that expert judgment can be applied.</p>
                                          <ul>
                                            <li>User can add tests.</li>
                                            <li>User can remove tests with reason.</li>
                                            <li>High-risk removals require approval.</li>
                                            <li>Override is logged.</li>
                                          </ul>
                                          <h4>US-REL-007: Generate CAB Memo</h4>
                                          <p>As a CAB approver, I want a generated release summary so that I can review readiness quickly.</p>
                                          <ul>
                                            <li>Summary includes release scope, key risks, completed testing, open blockers, residual risk, and recommended decision.</li>
                                            <li>Memo is reviewable before circulation.</li>
                                          </ul>
                                          <h4>US-REL-008: Audit Recommendation And Approval History</h4>
                                          <p>As an auditor, I want recommendation and approval history so that release decisions are traceable.</p>
                                          <ul>
                                            <li>Recommendation is logged.</li>
                                            <li>Override history is captured.</li>
                                            <li>Approver and timestamp are recorded.</li>
                                            <li>Prompt/model version is logged where AI is used.</li>
                                            <li>Final decision is traceable.</li>
                                          </ul>
                                          <h4>US-REL-009: Learn From Production Outcome</h4>
                                          <p>As an AMS lead, I want post-release incidents compared against predicted risks so that the model improves over time.</p>
                                          <ul>
                                            <li>Production incidents are linked to release.</li>
                                            <li>Leakage is identified.</li>
                                            <li>Missed process or test coverage is flagged.</li>
                                            <li>Risk model improvement item is created.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Reference Architecture And Data Model",
                                        "html":  `
                                          <h3>Confirmed SAP-Aligned Components</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Area</th><th>Preferred Component</th><th>Usage</th></tr></thead>
                                              <tbody>
                                                <tr><td>ALM backbone</td><td>SAP Cloud ALM</td><td>Features, requirements, user stories, testing, defects, and deployments.</td></tr>
                                                <tr><td>Test management</td><td>SAP Cloud ALM Test Preparation / Test Execution</td><td>Manual and automated test planning, execution, and result capture.</td></tr>
                                                <tr><td>Test automation</td><td>SAP Test Automation by Tricentis or equivalent automation tool</td><td>Automated regression execution and coverage reporting.</td></tr>
                                                <tr><td>AI runtime</td><td>SAP AI Core / generative AI hub</td><td>Risk explanation, summarization, classification support, prompt orchestration, and model governance.</td></tr>
                                                <tr><td>Application layer</td><td>SAP BTP / CAP</td><td>Canonical data model, scoring services, workflow integration, extensibility, and dashboard backend.</td></tr>
                                                <tr><td>Workflow</td><td>SAP Build Process Automation or SAP Cloud ALM workflow patterns</td><td>Approval, exception handling, and human override governance.</td></tr>
                                                <tr><td>Analytics</td><td>SAP HANA Cloud, SAP Datasphere, or BTP persistence</td><td>Risk mart, release scorecards, recommendation history, and audit reporting.</td></tr>
                                                <tr><td>Process context</td><td>SAP Cloud ALM process hierarchy and optional SAP Signavio</td><td>Process criticality, process mapping, and process risk enrichment.</td></tr>
                                                <tr><td>SAP Joule</td><td>Optional assistant experience</td><td>Release summaries, operator workflows, and guided explanation. Joule is not the core decision engine.</td></tr>
                                                <tr><td>External tools</td><td>Jira, ServiceNow, Git, CI/CD, monitoring, and ITSM systems</td><td>Release data, defect data, work items, deployment signals, and observability inputs.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Architecture Layers</h3>
                                          <ul>
                                            <li><strong>Experience:</strong> Release Assurance Dashboard, QA Workbench, CAB Memo Generator, Risk Exception Workflow, Test Scope Review, Automation Coverage, Residual Risk, and optional Joule interaction.</li>
                                            <li><strong>Application:</strong> Change Ingestion Service, Transport Metadata Service, Process Mapping Engine, Test Mapping Engine, Risk Scoring Engine, Regression Scope Selector, Approval Workflow, Evidence Capture, and Audit Logging.</li>
                                            <li><strong>AI:</strong> Similarity matching, classification, clustering, risk explanation, memo generation, confidence scoring, prompt orchestration, and model/prompt version tracking.</li>
                                            <li><strong>Data:</strong> Release package, changes, transports, tests, executions, defects, incidents, process catalog, criticality matrix, risk score history, recommendation history, and model feature store.</li>
                                            <li><strong>Integration:</strong> SAP Cloud ALM, SAP Test Automation by Tricentis, Jira, ServiceNow, Git/CI-CD, monitoring, and optional Signavio/API connectors.</li>
                                            <li><strong>Governance:</strong> RBAC, masking, prompt logging, recommendation logging, override logging, human approval gate, model monitoring, threshold configuration, and full audit trail.</li>
                                          </ul>
                                          <h3>Canonical Data Model</h3>
                                          <p>Minimum reusable entities are Release, Release Package, Feature / Change Item, Transport Request, Changed Object, Business Process, Process Step, Interface, Role / Authorization, Test Case, Test Package, Test Execution, Defect, Production Incident, Automation Asset, Risk Score, Recommendation, Approval / Override, and Evidence Artifact.</p>
                                          <p>Minimum relationships connect release to change, change to transport, transport to changed object, changed object to process, process to test case, test case to execution result, test case to automation asset, defect or incident to process/component/release/test case, recommendation to approval, and override to user and reason.</p>
                                        `
                                    },
                                    {
                                        "title":  "Risk Scoring And Governance Model",
                                        "html":  `
                                          <h3>Risk Inputs</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Risk Factor</th><th>Examples</th></tr></thead>
                                              <tbody>
                                                <tr><td>Business process criticality</td><td>Financial close relevance, regulatory relevance, business-impact level, and operational dependency.</td></tr>
                                                <tr><td>Change type and complexity</td><td>Configuration sensitivity, code complexity, security or role impact, data model, workflow, and interface dependency.</td></tr>
                                                <tr><td>Object criticality</td><td>High-use object, shared component, custom enhancement.</td></tr>
                                                <tr><td>Historical defects and incidents</td><td>Prior defects or production failures in the same process, module, object, or interface.</td></tr>
                                                <tr><td>Test and automation coverage</td><td>Strong, weak, missing, outdated, automated, or manual-only coverage.</td></tr>
                                                <tr><td>Interface dependency</td><td>Bank, tax, EDI, warehouse, or third-party API impact.</td></tr>
                                                <tr><td>Security and compliance impact</td><td>Role, authorization, SoD-sensitive, SOX, statutory reporting, payroll, or tax impact.</td></tr>
                                                <tr><td>Release timing and confidence</td><td>Release calendar sensitivity, blackout periods, parallel releases, dependency conflicts, business readiness, mapping certainty, and data completeness.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Risk Bands</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Score Range</th><th>Risk Band</th><th>Required Action</th></tr></thead>
                                              <tbody>
                                                <tr><td>80-100</td><td>Critical</td><td>Mandatory tests and explicit release owner sign-off.</td></tr>
                                                <tr><td>60-79</td><td>High</td><td>Must test or exception approval.</td></tr>
                                                <tr><td>40-59</td><td>Medium</td><td>Recommended regression.</td></tr>
                                                <tr><td>20-39</td><td>Low</td><td>Automated coverage preferred.</td></tr>
                                                <tr><td>0-19</td><td>Informational</td><td>Log only unless manually added.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Mandatory Governance Rules</h3>
                                          <ul>
                                            <li>Deterministic inclusion rules must run before AI recommendations.</li>
                                            <li>AI cannot remove mandatory tests without human approval.</li>
                                            <li>Every recommendation must have explanation, confidence, source reference, and audit trace.</li>
                                            <li>High-risk test removal must require reason and release owner approval.</li>
                                            <li>Approvals, overrides, prompt/model version, and final release decisions must be logged.</li>
                                            <li>The accelerator is release decision support, not automatic release approval.</li>
                                            <li>Deterministic rule-based recommendations must remain visible and usable if the AI service is unavailable.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Role And Authorization Matrix",
                                        "html":  `
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Role</th><th>Responsibility</th><th>Access Needed</th><th>Validation</th></tr></thead>
                                              <tbody>
                                                <tr><td>CIO / IT Sponsor</td><td>Owns release risk reduction outcome.</td><td>Dashboard summary.</td><td>Can see release confidence and trend summary.</td></tr>
                                                <tr><td>QA Director</td><td>Owns regression strategy.</td><td>Full dashboard and trend analytics.</td><td>Can review coverage, leakage, and optimization trends.</td></tr>
                                                <tr><td>Release Manager</td><td>Owns release decision process.</td><td>Release scope and approval workflow.</td><td>Can route decisions and capture final approval.</td></tr>
                                                <tr><td>QA Lead</td><td>Reviews and approves test recommendations.</td><td>QA workbench and override access.</td><td>Can accept, add, or remove tests with governed rationale.</td></tr>
                                                <tr><td>Application Owner</td><td>Validates process impact.</td><td>Process impact and sign-off view.</td><td>Can confirm impacted process mapping.</td></tr>
                                                <tr><td>Business Process Owner</td><td>Confirms criticality and residual risk.</td><td>Process risk view.</td><td>Can approve or challenge residual risk.</td></tr>
                                                <tr><td>Test Manager</td><td>Owns test catalog and execution.</td><td>Test mapping and execution view.</td><td>Can validate test readiness and execution status.</td></tr>
                                                <tr><td>Automation Lead</td><td>Owns automation coverage.</td><td>Automation mapping and execution view.</td><td>Can confirm automated tests and execution outcomes.</td></tr>
                                                <tr><td>SAP Basis / DevOps</td><td>Provides transport and deployment data.</td><td>Integration/admin view.</td><td>Can validate transport metadata and release movement.</td></tr>
                                                <tr><td>Security Lead</td><td>Validates roles and sensitive data.</td><td>Security audit view.</td><td>Can confirm RBAC, SoD-sensitive checks, and data masking.</td></tr>
                                                <tr><td>Auditor</td><td>Reviews decision traceability.</td><td>Read-only audit log.</td><td>Can inspect recommendations, overrides, approvals, and evidence.</td></tr>
                                                <tr><td>Data / AI Owner</td><td>Governs model, prompts, scoring, and monitoring.</td><td>Model governance console.</td><td>Can review prompt/model versions and data-quality controls.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Security And Governance",
                                        "html":  `
                                          <ul>
                                            <li>Apply role-based access for release managers, QA leads, application owners, business process owners, automation leads, auditors, and AI/data owners.</li>
                                            <li>Use least-privilege access to release, defect, transport, incident, and test data.</li>
                                            <li>Mask sensitive fields before AI processing where required, especially personal, financial, HR, payroll, security, or regulated payloads.</li>
                                            <li>Log prompts, responses, recommendations, confidence scores, overrides, approvals, and final release decisions.</li>
                                            <li>Maintain prompt templates and model versions under governance control.</li>
                                            <li>Review accuracy periodically by comparing predicted risks with actual test defects and post-release incidents.</li>
                                            <li>Define confidence thresholds for auto-suggestion, mandatory human review, and forced escalation.</li>
                                            <li>Retain deterministic rules as fallback when AI services are unavailable.</li>
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
                                                <tr><td>TC-REL-AI-001</td><td>Happy path</td><td>Release data, process mapping, test catalog, defect history, and QA lead access are available.</td><td>Ingest release changes, map objects to processes, match tests, calculate risk, recommend scope, show automation coverage, generate release summary, approve scope, and log the decision.</td><td>Risk score, impacted process view, recommended scope, automation coverage, release summary, approval, and audit log are created.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-002</td><td>Unmapped change</td><td>Release contains at least one changed object with no process mapping.</td><td>Create or ingest the unmapped change and run impact mapping before release approval.</td><td>The unmapped change is flagged for manual review and cannot be silently approved.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-003</td><td>Coverage gap</td><td>A high-risk impacted process has no mapped test.</td><td>Generate the recommendation and open the dashboard coverage-gap view.</td><td>The dashboard raises a coverage gap and prevents silent approval until review or remediation is captured.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-004</td><td>Low AI confidence</td><td>Change-to-process or change-to-test mapping is intentionally ambiguous.</td><td>Force ambiguous mapping and finalize the recommendation.</td><td>Human review is required before the recommendation is finalized.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-005</td><td>High-risk override</td><td>Recommendation includes at least one must-test case.</td><td>Remove a must-test case from the recommendation.</td><td>Reason code and release-owner approval are mandatory; final decision is logged.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-006</td><td>Fallback</td><td>Deterministic rules are configured and AI service can be disabled for test.</td><td>Disable AI service and regenerate release recommendation.</td><td>Deterministic rule-based recommendations remain visible and usable.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-007</td><td>Authorization</td><td>Users are assigned distinct release manager, QA lead, viewer, and auditor roles.</td><td>Attempt to access release, defect, process, test, approval, and scoring functions outside each role's permission.</td><td>Users see only permitted release, defect, process, and test data; unauthorized actions are blocked and logged.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-008</td><td>Auditability</td><td>Release recommendation is ready for approval.</td><td>Approve a release recommendation and inspect the audit log.</td><td>Recommendation, prompt, confidence, override, approver, timestamp, and final scope are logged.</td><td>Not Started</td></tr>
                                                <tr><td>TC-REL-AI-009</td><td>Post-release learning</td><td>Release is deployed and production incident data is available.</td><td>Load production incidents after deployment and compare them with predicted risks.</td><td>Model-improvement actions are created where predicted risk missed actual outcome.</td><td>Not Started</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Go-Live Acceptance And Evidence Checklist",
                                        "html":  `
                                          <h3>Go-Live Acceptance Criteria</h3>
                                          <ul>
                                            <li>Release data is ingested successfully from agreed sources.</li>
                                            <li>Transports, changes, features, defects, incidents, tests, and process context are mapped to the canonical model.</li>
                                            <li>Test catalog is mapped to business processes, automation status, and criticality.</li>
                                            <li>Risk scoring is explainable to QA, release owners, and business process owners.</li>
                                            <li>Recommended regression scope and exclusions are visible in the dashboard.</li>
                                            <li>High-risk untested areas are clearly flagged.</li>
                                            <li>Override, reason-code, and approval flows work as designed.</li>
                                            <li>Sensitive fields are masked and role-based access is enforced.</li>
                                            <li>Audit logs capture recommendations, prompts, confidence scores, overrides, approvals, and user actions.</li>
                                            <li>CAB memo is generated, reviewed, and accepted by release governance.</li>
                                            <li>Fallback behavior is validated for integration failure or AI service unavailability.</li>
                                            <li>Post-release learning process is active.</li>
                                          </ul>
                                          <h3>Evidence To Capture</h3>
                                          <ul>
                                            <li>Release package ingestion screenshot or extract.</li>
                                            <li>Change-to-process impact view.</li>
                                            <li>Process risk heatmap or ranked risk table.</li>
                                            <li>Recommended regression scope output.</li>
                                            <li>Automation coverage view.</li>
                                            <li>High-risk coverage gap list.</li>
                                            <li>Override and reason-code screen.</li>
                                            <li>Approval workflow evidence.</li>
                                            <li>CAB memo output.</li>
                                            <li>Test execution results.</li>
                                            <li>Defect summary and closure status.</li>
                                            <li>Audit log export.</li>
                                            <li>Prompt/model version reference.</li>
                                            <li>Post-release incident comparison report.</li>
                                          </ul>
                                          <h3>Known Limitations</h3>
                                          <ul>
                                            <li>No reliable test catalog or meaningful execution history exists: create a minimum viable test catalog and establish execution history before using the solution to reduce scope.</li>
                                            <li>Transport-to-process mapping is incomplete: run process mapping enrichment with application owners and process owners before production go-live.</li>
                                            <li>Defects and incidents are not classified consistently: normalize severity, module, process, component, and closure reason fields before using historical trends for scoring.</li>
                                            <li>Mandatory regulatory or control testing cannot be reduced: mark those tests as mandatory and use the solution for evidence, visibility, and residual-risk reporting.</li>
                                            <li>Automation assets are stale or unmapped: validate automation ownership, last execution date, coverage relevance, and target application version.</li>
                                            <li>Restricted SAP support content is required: use only authorized sources and approved access paths for SAP Notes, KBAs, SAP for Me, or restricted support records.</li>
                                            <li>AI confidence is low: route recommendation to human review and prevent silent acceptance.</li>
                                            <li>AI service is unavailable: use deterministic rule-based recommendations and queue model-generated summaries until service recovers.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Reusable Deliverables And SAP Evidence Base",
                                        "html":  `
                                          <h3>Reusable Deliverables</h3>
                                          <ul>
                                            <li>Solution overview and assessment-based fit-gap matrix.</li>
                                            <li>Data source inventory and canonical data model.</li>
                                            <li>Risk scoring model and process-to-test mapping template.</li>
                                            <li>Deterministic rules catalogue and AI prompt catalogue.</li>
                                            <li>Regression recommendation output design.</li>
                                            <li>Dashboard wireframe and QA workbench design.</li>
                                            <li>CAB memo template.</li>
                                            <li>Security and role matrix.</li>
                                            <li>Integration inventory and API access checklist.</li>
                                            <li>Cloud ALM-ready user stories and test scripts.</li>
                                            <li>Exception handling design.</li>
                                            <li>Audit and governance design.</li>
                                            <li>Go-live checklist and evidence capture checklist.</li>
                                            <li>Support handover guide and post-release learning loop.</li>
                                          </ul>
                                          <h3>SAP Evidence Base</h3>
                                          <p>Use these official SAP references to validate platform alignment during implementation. Availability and licensing must be confirmed against the target SAP tenant and contract scope.</p>
                                          <ul>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/applicationhelp/test-preparation" target="_blank" rel="noreferrer">SAP Cloud ALM Test Preparation</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/applicationhelp/test-execution" target="_blank" rel="noreferrer">SAP Cloud ALM Test Execution</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/test-cases-api" target="_blank" rel="noreferrer">SAP Cloud ALM Test Cases API</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/test-automation-api" target="_blank" rel="noreferrer">SAP Cloud ALM Test Automation API</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/tricentis-test-automation-for-sap/e66fb899e3f6432985061daba26936fc.html" target="_blank" rel="noreferrer">SAP Test Automation by Tricentis integrated with SAP Cloud ALM</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/what-is-sap-ai-core" target="_blank" rel="noreferrer">SAP AI Core - What Is SAP AI Core</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5" target="_blank" rel="noreferrer">Generative AI hub in SAP AI Core</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry" target="_blank" rel="noreferrer">Prompt Registry for generative AI hub</a></li>
                                            <li><a href="https://help.sap.com/docs/btp/sap-business-technology-platform/cloud-application-programming-model" target="_blank" rel="noreferrer">SAP BTP Cloud Application Programming Model</a></li>
                                          </ul>
                                        `
                                    }
                                ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "SAP Cloud ALM",
                                      "Release Assurance",
                                      "Regression Optimization",
                                      "AMS"
                                  ],
                         "businessProcess":  "Release Management / Test Management / Application Lifecycle Management",
                         "workstream":  "AI Release Assurance",
                         "requirement":  {
                                             "externalId":  "REQ-REL-AI-001",
                                             "title":  "AI-Assisted Release Risk Assessment",
                                             "description":  "<p>Implement a customer-ready AI-assisted SAP release assurance layer that connects change impact, business-process risk, historical defects, test coverage, automation availability, and release approval evidence before regression starts.</p><h2>Business Need</h2><p>Customers need risk-based SAP release assurance with traceable regression recommendations and human-governed release decisions.</p><h2>Implementation Scope</h2><ul><li>Ingest release scope, transports, changes, features, defects, incidents, tests, and process context.</li><li>Map changes to business processes, interfaces, roles, controls, reports, test cases, automation assets, and historical risk signals.</li><li>Generate explainable must-test, should-test, optional, excluded, coverage-gap, automation, manual-validation, and release-confidence outputs.</li><li>Route high-risk exclusions, low-confidence recommendations, residual risk, and go/no-go decisions through human governance.</li><li>Capture audit evidence, prompt/model version, overrides, approvals, fallback behavior, and post-release learning.</li></ul>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; SAP Cloud ALM; Release Assurance; Regression Optimization; AMS",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Release Management / Test Management / Application Lifecycle Management"
                                         },
                         "userStories":  [
                                             {
                                                 "externalId":  "US-REL-001",
                                                 "title":  "US-REL-001 - Ingest Release Scope",
                                                 "persona":  "a release manager",
                                                 "want":  "the system to ingest release features, changes, and transports",
                                                 "soThat":  "all release scope is available in one place",
                                                 "acceptanceCriteria":  [
                                                                            "Release ID can be selected.",
                                                                            "Features, changes, and transport/object metadata are retrieved.",
                                                                            "Missing transport mappings are flagged.",
                                                                            "Ingestion timestamp is visible."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-002",
                                                 "title":  "US-REL-002 - Map Changes To Business Processes",
                                                 "persona":  "an application owner",
                                                 "want":  "changed objects mapped to business processes",
                                                 "soThat":  "business impact is visible",
                                                 "acceptanceCriteria":  [
                                                                            "Each change has process mapping where available.",
                                                                            "Unmapped changes are flagged.",
                                                                            "Manual mapping can be added.",
                                                                            "Mapping confidence is shown.",
                                                                            "Mapping source is recorded."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-003",
                                                 "title":  "US-REL-003 - Link Changes To Test Cases",
                                                 "persona":  "a QA lead",
                                                 "want":  "impacted processes linked to test cases",
                                                 "soThat":  "regression scope can be generated",
                                                 "acceptanceCriteria":  [
                                                                            "Process-to-test mapping is visible.",
                                                                            "Test case type is shown.",
                                                                            "Automation status is shown.",
                                                                            "Last execution result is shown.",
                                                                            "Missing test coverage is flagged."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-004",
                                                 "title":  "US-REL-004 - Calculate Risk Score",
                                                 "persona":  "a release manager",
                                                 "want":  "a risk score for each change and release",
                                                 "soThat":  "governance effort can be prioritized",
                                                 "acceptanceCriteria":  [
                                                                            "Change-level score is generated.",
                                                                            "Release-level score is generated.",
                                                                            "Risk band is assigned.",
                                                                            "Score factors are visible.",
                                                                            "Score can be recalculated after data changes."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-005",
                                                 "title":  "US-REL-005 - Recommend Regression Scope",
                                                 "persona":  "a QA lead",
                                                 "want":  "the system to recommend a regression scope",
                                                 "soThat":  "testing is focused and defensible",
                                                 "acceptanceCriteria":  [
                                                                            "Must-test items are listed.",
                                                                            "Should-test items are listed.",
                                                                            "Optional items are listed.",
                                                                            "Excluded items include reason.",
                                                                            "Automation preference is visible.",
                                                                            "Manual testing gaps are visible."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-006",
                                                 "title":  "US-REL-006 - Review And Override Recommendations",
                                                 "persona":  "a QA lead",
                                                 "want":  "to accept or modify recommendations",
                                                 "soThat":  "expert judgment can be applied",
                                                 "acceptanceCriteria":  [
                                                                            "User can add tests.",
                                                                            "User can remove tests with reason.",
                                                                            "User can mark recommendation incorrect.",
                                                                            "High-risk removals require approval.",
                                                                            "Override is logged."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-007",
                                                 "title":  "US-REL-007 - Generate CAB Memo",
                                                 "persona":  "a CAB approver",
                                                 "want":  "a generated release summary",
                                                 "soThat":  "readiness can be reviewed quickly",
                                                 "acceptanceCriteria":  [
                                                                            "Summary includes release scope.",
                                                                            "Summary includes key risks.",
                                                                            "Summary includes testing completed.",
                                                                            "Summary includes open blockers.",
                                                                            "Summary includes residual risk.",
                                                                            "Summary includes recommended decision."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-008",
                                                 "title":  "US-REL-008 - Audit Recommendation And Approval History",
                                                 "persona":  "an auditor",
                                                 "want":  "recommendation and approval history",
                                                 "soThat":  "release decisions are traceable",
                                                 "acceptanceCriteria":  [
                                                                            "Recommendation is logged.",
                                                                            "Override history is captured.",
                                                                            "Approver and timestamp are recorded.",
                                                                            "Prompt/model version is logged where AI is used.",
                                                                            "Final decision is traceable."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-REL-009",
                                                 "title":  "US-REL-009 - Learn From Production Outcome",
                                                 "persona":  "an AMS lead",
                                                 "want":  "post-release incidents compared against predicted risks",
                                                 "soThat":  "the model improves over time",
                                                 "acceptanceCriteria":  [
                                                                            "Production incidents are linked to release.",
                                                                            "Leakage is identified.",
                                                                            "Missed process/test coverage is flagged.",
                                                                            "Risk model improvement item is created.",
                                                                            "Lessons learned are stored."
                                                                        ]
                                             }
                                         ],
                         "testCases":  [
                                           {
                                               "testCaseName":  "REL-AI-001 - Generate Recommended Regression Scope",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Generate risk-based regression recommendation",
                                               "actionTitle":  "Run release assurance happy path",
                                               "instructions":  [
                                                                    "Open Release Assurance Dashboard.",
                                                                    "Select release ID.",
                                                                    "Run ingestion.",
                                                                    "Validate features and transports are displayed.",
                                                                    "Run impact mapping.",
                                                                    "Review impacted processes.",
                                                                    "Run risk scoring.",
                                                                    "Generate regression recommendation.",
                                                                    "Validate must-test, should-test, and automation coverage.",
                                                                    "Accept recommendation."
                                                                ],
                                               "expectedResult":  "Release risk score is generated, impacted processes are visible, regression scope is recommended, mandatory tests are included, automation tests are identified, and approval action is logged."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-002 - Handle Unmapped Change",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Review unmapped changed object",
                                               "actionTitle":  "Map object manually and regenerate scope",
                                               "instructions":  [
                                                                    "Ingest a release with at least one unknown changed object.",
                                                                    "Run impact mapping.",
                                                                    "Open unmapped changes list.",
                                                                    "Assign manual process mapping.",
                                                                    "Recalculate risk.",
                                                                    "Regenerate regression scope."
                                                                ],
                                               "expectedResult":  "Unmapped object is flagged, manual mapping is allowed, mapping source is recorded, risk score updates, and recommendation updates."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-003 - Validate High-Risk Test Removal Governance",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Remove critical test with approval workflow",
                                               "actionTitle":  "Reject high-risk removal",
                                               "instructions":  [
                                                                    "Generate regression recommendation.",
                                                                    "Select a critical must-test case.",
                                                                    "Attempt to remove test.",
                                                                    "Enter removal reason.",
                                                                    "Submit for release owner approval.",
                                                                    "Reject removal as approver.",
                                                                    "Confirm test remains in scope."
                                                                ],
                                               "expectedResult":  "Removal is blocked without reason, approval workflow is triggered, rejection is logged, and test remains in final scope."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-004 - Validate QA Viewer Authorization",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Check restricted user behavior",
                                               "actionTitle":  "Attempt unauthorized approval and configuration change",
                                               "instructions":  [
                                                                    "Log in as QA viewer.",
                                                                    "Open release recommendation.",
                                                                    "Review scope.",
                                                                    "Attempt to approve release.",
                                                                    "Attempt to change risk threshold."
                                                                ],
                                               "expectedResult":  "User can view assigned scope, cannot approve release, cannot change scoring configuration, and unauthorized actions are blocked and logged."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-005 - Validate Defect History Influence",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Score defect-prone component",
                                               "actionTitle":  "Review score explanation and recommended tests",
                                               "instructions":  [
                                                                    "Load a change linked to a historically defect-prone component.",
                                                                    "Run risk scoring.",
                                                                    "Review score explanation.",
                                                                    "Generate test recommendation.",
                                                                    "Validate related regression tests are included."
                                                                ],
                                               "expectedResult":  "Historical defect factor is visible, risk score increases, relevant tests are recommended, and explanation includes defect history rationale."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-006 - Validate Automation Coverage Recommendation",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Recommend automated tests",
                                               "actionTitle":  "Trigger or mark automated test execution",
                                               "instructions":  [
                                                                    "Load release with impacted process having both manual and automated tests.",
                                                                    "Generate regression recommendation.",
                                                                    "Open automation coverage view.",
                                                                    "Trigger automated test set or mark it for execution.",
                                                                    "Review execution result."
                                                                ],
                                               "expectedResult":  "Automated tests are identified, automation-preferred tests are clearly marked, execution result is captured, and failed automation raises defect or follow-up action."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-007 - Generate CAB Memo",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Create CAB-ready evidence",
                                               "actionTitle":  "Generate and approve memo",
                                               "instructions":  [
                                                                    "Generate final recommended scope.",
                                                                    "Complete selected test execution.",
                                                                    "Open CAB Memo Generator.",
                                                                    "Generate memo.",
                                                                    "Review risk summary, open defects, residual risk, and recommendation.",
                                                                    "Approve memo for CAB."
                                                                ],
                                               "expectedResult":  "Memo is generated, understandable to business approvers, includes risk and testing evidence, and can be stored as audit evidence."
                                           },
                                           {
                                               "testCaseName":  "REL-AI-008 - Run Post-Go-Live Learning Loop",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Compare predicted risk with incidents",
                                               "actionTitle":  "Create model improvement action",
                                               "instructions":  [
                                                                    "Mark release as deployed.",
                                                                    "Import post-go-live incidents.",
                                                                    "Link incidents to release where applicable.",
                                                                    "Compare incidents with predicted risk.",
                                                                    "Create model improvement item."
                                                                ],
                                               "expectedResult":  "Post-release incident is linked, missed risk is identified, learning action is created, and future score logic can be adjusted."
                                           }
                                       ]
                     },
        "sources":  [
                        {
                            "label":  "Internal source document: AI_Release_Assurance_for_SAP_Customer_Ready_Accelerator.docx",
                            "note":  "Customer-provided customer-ready accelerator content from the Downloads folder.",
                            "url":  ""
                        },
                        {
                            "label":  "SAP Cloud ALM Test Preparation",
                            "note":  "Official SAP reference for Cloud ALM test preparation alignment.",
                            "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/test-preparation"
                        },
                        {
                            "label":  "SAP Cloud ALM Test Execution",
                            "note":  "Official SAP reference for Cloud ALM test execution alignment.",
                            "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/test-execution"
                        },
                        {
                            "label":  "SAP Cloud ALM Test Cases API",
                            "note":  "Official SAP API reference for manual test case integration.",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/test-cases-api"
                        },
                        {
                            "label":  "SAP Cloud ALM Test Automation API",
                            "note":  "Official SAP API reference for test automation integration.",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/test-automation-api"
                        },
                        {
                            "label":  "SAP Test Automation by Tricentis integrated with SAP Cloud ALM",
                            "note":  "Official SAP reference for Tricentis integration with SAP Cloud ALM.",
                            "url":  "https://help.sap.com/docs/cloud-alm/tricentis-test-automation-for-sap/e66fb899e3f6432985061daba26936fc.html"
                        },
                        {
                            "label":  "SAP AI Core - What Is SAP AI Core",
                            "note":  "Official SAP reference for SAP AI Core positioning.",
                            "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/what-is-sap-ai-core"
                        },
                        {
                            "label":  "Generative AI hub in SAP AI Core",
                            "note":  "Official SAP reference for generative AI hub capabilities.",
                            "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                        },
                        {
                            "label":  "Prompt Registry for generative AI hub",
                            "note":  "Official SAP reference for prompt lifecycle governance.",
                            "url":  "https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry"
                        },
                        {
                            "label":  "SAP BTP Cloud Application Programming Model",
                            "note":  "Official SAP reference for CAP-based application layer implementation.",
                            "url":  "https://help.sap.com/docs/btp/sap-business-technology-platform/cloud-application-programming-model"
                        }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Package the customer-ready AI Release Assurance offer: source inventory template, reference architecture, canonical data model, risk scoring starter model, deterministic rules catalog, Cloud ALM backlog, user stories, executable test scripts, role matrix, dashboard wireframe, CAB memo template, audit log specification, override workflow, demo scenario, and implementation/AMS operating model."
    },
    {
        "id":  "ai-hypercare-stabilization-command-center",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "AI Hypercare Stabilization Command Center",
        "detailAliases":  [
                              "ai-hypercare-stabilization-command-center-side",
                              "ai-hypercare-command-center"
                          ],
        "status":  "Customer accelerator",
        "pattern":  "AI",
        "category":  "AI",
        "tagLabel":  "AI",
        "description":  "Customer-ready SAP accelerator for an AI-assisted hypercare command center that clusters incidents, surfaces stabilization themes, manages owner actions, and prepares an evidence-based AMS handover.",
        "function":  "Create a governed hypercare command center using SAP Cloud ALM, SAP BTP, SAP AI Foundation, ITSM, monitoring, and collaboration inputs to turn daily go-live noise into prioritized stabilization decisions.",
        "summary":  "AI Hypercare Stabilization Command Center provides a structured post-go-live operating model for SAP programs. It ingests incidents, alerts, logs, notes, and feedback; clusters related issues; separates training, data, configuration, integration, security, performance, defect, and process-gap themes; generates daily packs and executive summaries; and converts unresolved stabilization work into a clean AMS transition backlog.",
        "useCase":  [
                        {
                            "text":  "Stabilize the first days and weeks after SAP go-live with clearer incident themes, owner actions, executive visibility, and AMS transition evidence."
                        },
                        {
                            "heading":  "It helps hypercare teams",
                            "items":  [
                                          "Cluster incidents by process, role, root-cause theme, severity, and owner.",
                                          "Separate symptoms from systemic causes such as training, master data, configuration, integration, security, and performance constraints.",
                                          "Prioritize war-room actions by impact, trend, severity, recurrence, and executive relevance.",
                                          "Generate daily command-center packs and sponsor updates from the same evidence base.",
                                          "Create an AMS handover backlog with stabilized ownership, evidence, and remaining actions."
                                      ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
                                    <p>A hypercare command center receives repeated procurement and finance incidents after go-live. AI clusters the noise into themes, links related alerts, separates training and master-data issues from integration failures, and creates the daily action queue.</p>
                                    <div class="detail-table-wrap">
                                      <table class="detail-table">
                                        <thead><tr><th>Area</th><th>Example output</th></tr></thead>
                                        <tbody>
                                          <tr><td>Observed noise</td><td>Many tickets mention blocked invoices, failed approvals, missing roles, and delayed goods receipts.</td></tr>
                                          <tr><td>AI clustering</td><td>Issues group into procurement approval, vendor master data, invoice posting, role access, and integration alert clusters.</td></tr>
                                          <tr><td>Theme split</td><td>Training gaps, master-data cleanup, configuration correction, integration fix, and security access follow-up.</td></tr>
                                          <tr><td>Daily action</td><td>Owner actions are assigned with priority, target date, blocker status, and evidence source.</td></tr>
                                          <tr><td>Executive view</td><td>Daily pack shows trend, top blockers, critical processes affected, recovery actions, and exit-readiness signal.</td></tr>
                                          <tr><td>AMS handover</td><td>Unresolved recurring themes become AMS backlog items with owner, evidence, severity, and recommended permanent fix.</td></tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "Use during major SAP go-live, rollout, migration, cutover rehearsal, dress rehearsal, or stabilization period.",
                         "Use when daily incidents, alerts, notes, feedback, and escalations need one trusted stabilization narrative.",
                         "Use when leadership needs process-level heatmaps, trend signals, blockers, owner actions, and exit criteria.",
                         "Use when AMS handover must be evidence-based instead of a manual backlog dump.",
                         "Stabilize prerequisites first if the customer has no agreed hypercare taxonomy, unclear ownership, inaccessible signals, or unapproved sensitive-data rules."
                     ],
        "implementation":  [
                              "Confirm hypercare scope, systems, process areas, time window, daily cadence, and exit criteria.",
                              "Inventory signal sources: incidents, Cloud ALM operations signals, ITSM tickets, monitoring alerts, war-room notes, email, chat, and feedback.",
                              "Define the hypercare taxonomy for process, role, severity, impact, owner, theme, action, and handover status.",
                              "Create the canonical hypercare data model and map source fields to incidents, alerts, themes, clusters, owners, actions, exit criteria, and evidence.",
                              "Configure ingestion, masking, RBAC, and deterministic rules for critical issues, sensitive data, and ownership routing.",
                              "Configure AI-assisted clustering, theme extraction, RCA suggestions, prioritization, summarization, and low-confidence human review.",
                              "Build the dashboard, process heatmap, cluster board, action queue, daily pack, executive summary, exit tracker, and AMS handover pack.",
                              "Validate happy path, duplicate clustering, theme classification, heatmap updates, owner action updates, masking, approval, and fallback behavior.",
                              "Run daily supervised hypercare operations, review recommendations, tune taxonomy and thresholds, and capture evidence.",
                              "Approve exit only when stabilization criteria, evidence, open actions, and AMS handover backlog are accepted."
                          ],
        "collapsibleSections":  [
                                    {
                                        "title":  "Purpose And Summary",
                                        "html":  `
                                          <h3>Purpose</h3>
                                          <p>This accelerator defines a structured hypercare command center using AI-assisted incident clustering, stabilization analytics, action governance, executive reporting, and AMS handover readiness.</p>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Area</th><th>Customer-ready summary</th></tr></thead>
                                              <tbody>
                                                <tr><td>Purpose</td><td>Stabilize first days/weeks after go-live with clearer incident themes, owner actions, executive visibility.</td></tr>
                                                <tr><td>Primary outcome</td><td>Separate training noise, data gaps, config issues, integration defects, security issues, performance constraints.</td></tr>
                                                <tr><td>Operating model</td><td>Daily command-center pack, process heatmap, action queue, exit criteria, AMS transition backlog.</td></tr>
                                                <tr><td>SAP foundation</td><td>SAP Cloud ALM, SAP BTP, SAP AI Foundation/generative AI hub, ITSM, monitoring, collaboration tools.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Business Gap Addressed</h3>
                                          <p>After go-live, the volume and noise of hypercare issues can overwhelm the program. Incidents, alerts, user feedback, war-room notes, and escalations often tell different stories. The command center creates one governed view and turns signals into actionable decisions.</p>
                                          <ul>
                                            <li>Clusters incidents by process, role, root-cause theme, severity, and owner.</li>
                                            <li>Separates symptoms from systemic causes such as training, master data, configuration, integration, security, and performance.</li>
                                            <li>Prioritizes war-room actions by impact, trend, severity, and recurrence.</li>
                                            <li>Generates executive updates from the same evidence base.</li>
                                            <li>Prepares a clean AMS handover backlog.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Solution Scope And Decision Conditions",
                                        "html":  `
                                          <h3>Solution We Are Providing</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Capability</th><th>What it does</th></tr></thead>
                                              <tbody>
                                                <tr><td>Signal intake</td><td>Incidents, alerts, logs, notes, feedback</td></tr>
                                                <tr><td>Issue clustering</td><td>Groups repeat and related issues</td></tr>
                                                <tr><td>Theme extraction</td><td>Finds root-cause themes</td></tr>
                                                <tr><td>Process heatmap</td><td>Shows impacted processes/roles</td></tr>
                                                <tr><td>Daily pack</td><td>Trends, blockers, actions</td></tr>
                                                <tr><td>Exit tracking</td><td>Measures stabilization readiness</td></tr>
                                                <tr><td>AMS handover</td><td>Creates transition backlog</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>When To Take Forward</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Decision</th><th>Condition</th></tr></thead>
                                              <tbody>
                                                <tr><td>Proceed</td><td>Major go-live, rollout, migration, or dress rehearsal active.</td></tr>
                                                <tr><td>Proceed</td><td>Incident, alert, war-room inputs available daily.</td></tr>
                                                <tr><td>Proceed</td><td>Process owners and resolver owners named.</td></tr>
                                                <tr><td>Proceed</td><td>Leadership needs one stabilization narrative.</td></tr>
                                                <tr><td>Proceed</td><td>AMS handover must be controlled/evidence-based.</td></tr>
                                                <tr><td>Stabilize first</td><td>No agreed hypercare taxonomy.</td></tr>
                                                <tr><td>Stabilize first</td><td>Incident ownership unclear.</td></tr>
                                                <tr><td>Stabilize first</td><td>System signals cannot be accessed.</td></tr>
                                                <tr><td>Stabilize first</td><td>Sensitive data rules not approved.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "SAP-Aligned Component Design",
                                        "html":  `
                                          <h3>Component Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Component</th><th>Role</th></tr></thead>
                                              <tbody>
                                                <tr><td>SAP Cloud ALM</td><td>Operations monitoring, process visibility, service signals</td></tr>
                                                <tr><td>SAP BTP / CAP</td><td>Command-center APIs and services</td></tr>
                                                <tr><td>SAP AI Foundation / genAI hub</td><td>Clustering, summaries, themes</td></tr>
                                                <tr><td>SAP Build Process Automation</td><td>Action routing and approvals</td></tr>
                                                <tr><td>SAP Joule</td><td>Optional assistant surface</td></tr>
                                                <tr><td>ITSM platform</td><td>Incident source and updates</td></tr>
                                                <tr><td>Monitoring tools</td><td>Alerts, logs, telemetry</td></tr>
                                                <tr><td>Collaboration tools</td><td>War-room notes and decisions</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Functional Architecture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Layer</th><th>Design decision</th></tr></thead>
                                              <tbody>
                                                <tr><td>Experience</td><td>Dashboard, heatmap, daily pack, executive summary</td></tr>
                                                <tr><td>Application</td><td>Ingestion, clustering, backlog, handover generator</td></tr>
                                                <tr><td>AI</td><td>Themes, anomaly cues, RCA suggestions, summarization</td></tr>
                                                <tr><td>Data</td><td>Incident mart, telemetry store, backlog, ownership map</td></tr>
                                                <tr><td>Integration</td><td>Cloud ALM, ITSM, monitoring, notes, email/chat</td></tr>
                                                <tr><td>Governance</td><td>RBAC, masking, approval, audit history</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Canonical Hypercare Data Model</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Entity</th><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>Incident</td><td>User or support issue created during hypercare.</td></tr>
                                                <tr><td>Alert</td><td>System or process signal from monitoring.</td></tr>
                                                <tr><td>Theme</td><td>Root-cause category such as training, data, configuration, or integration.</td></tr>
                                                <tr><td>Cluster</td><td>Group of repeated or related issues.</td></tr>
                                                <tr><td>Process</td><td>Business process affected by the issue.</td></tr>
                                                <tr><td>Owner</td><td>Named business, functional, technical, security, or AMS owner.</td></tr>
                                                <tr><td>Action</td><td>Tracked stabilization work item.</td></tr>
                                                <tr><td>Exit criterion</td><td>Measure used to decide readiness to leave hypercare.</td></tr>
                                                <tr><td>Handover item</td><td>Open issue or improvement moved into AMS.</td></tr>
                                                <tr><td>Evidence</td><td>Traceable source, decision, log, screenshot, report, or approval.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "AI Design, Taxonomy, And Rules",
                                        "html":  `
                                          <h3>Hypercare Taxonomy</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Theme</th><th>Meaning</th></tr></thead>
                                              <tbody>
                                                <tr><td>Training</td><td>User behavior, process misunderstanding, or adoption issue.</td></tr>
                                                <tr><td>Master data</td><td>Missing, incorrect, duplicated, or stale master data.</td></tr>
                                                <tr><td>Configuration</td><td>SAP configuration or setup issue.</td></tr>
                                                <tr><td>Integration</td><td>Interface, API, message, middleware, or timing issue.</td></tr>
                                                <tr><td>Security</td><td>Role, authorization, access, or segregation issue.</td></tr>
                                                <tr><td>Performance</td><td>Slow response, job duration, capacity, or throughput issue.</td></tr>
                                                <tr><td>Defect</td><td>Application behavior that needs code or product correction.</td></tr>
                                                <tr><td>Process gap</td><td>Unclear ownership, missing step, or operational design gap.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>AI Capability Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>AI function</th><th>Controlled use</th></tr></thead>
                                              <tbody>
                                                <tr><td>Clustering</td><td>Group repeat and related issues for human review.</td></tr>
                                                <tr><td>Theme extraction</td><td>Suggest root-cause themes from incident text, notes, and alerts.</td></tr>
                                                <tr><td>RCA suggestion</td><td>Suggest probable causes with evidence links and confidence.</td></tr>
                                                <tr><td>Prioritization</td><td>Rank issues by severity, trend, recurrence, and process impact.</td></tr>
                                                <tr><td>Summarization</td><td>Draft daily packs and executive updates for approval.</td></tr>
                                                <tr><td>Sentiment/theme cues</td><td>Identify adoption or confidence signals in feedback.</td></tr>
                                                <tr><td>Learning loop</td><td>Convert repeated fixes into AMS knowledge candidates.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Stabilization Decision Rules</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Rule</th><th>Action</th></tr></thead>
                                              <tbody>
                                                <tr><td>Repeat issue</td><td>Create or update a cluster and assign owner review.</td></tr>
                                                <tr><td>Critical process hit</td><td>Escalate to hypercare lead and process owner.</td></tr>
                                                <tr><td>Training theme</td><td>Route to business readiness or adoption owner.</td></tr>
                                                <tr><td>Data theme</td><td>Route to master data owner and track clean-up action.</td></tr>
                                                <tr><td>Integration failure</td><td>Route to integration or technical owner with alert evidence.</td></tr>
                                                <tr><td>Security issue</td><td>Restrict visibility and route to security/access owner.</td></tr>
                                                <tr><td>Low confidence</td><td>Require human classification before action.</td></tr>
                                                <tr><td>Executive pack</td><td>Require approval before sponsor distribution.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Implementation Cadence And Outputs",
                                        "html":  `
                                          <h3>Step-by-step Reusable Process</h3>
                                          <ol>
                                            <li>Confirm hypercare scope, systems, process areas, time window, daily cadence, and exit criteria.</li>
                                            <li>Inventory signal sources: incidents, Cloud ALM operations signals, ITSM tickets, monitoring alerts, war-room notes, email, chat, and feedback.</li>
                                            <li>Define the hypercare taxonomy for process, role, severity, impact, owner, theme, action, and handover status.</li>
                                            <li>Create the canonical hypercare data model and map source fields.</li>
                                            <li>Configure ingestion, masking, RBAC, and deterministic rules.</li>
                                            <li>Configure AI-assisted clustering, theme extraction, RCA suggestions, prioritization, summarization, and low-confidence human review.</li>
                                            <li>Build the dashboard, process heatmap, cluster board, action queue, daily pack, executive summary, exit tracker, and AMS handover pack.</li>
                                            <li>Validate happy path, duplicate clustering, theme classification, heatmap updates, owner action updates, masking, approval, and fallback behavior.</li>
                                            <li>Run daily supervised hypercare operations and tune taxonomy and thresholds.</li>
                                            <li>Approve exit once stabilization criteria, evidence, open actions, and AMS handover backlog are accepted.</li>
                                          </ol>
                                          <h3>Command-Center Operating Cadence</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Cadence</th><th>Output</th></tr></thead>
                                              <tbody>
                                                <tr><td>Start of day</td><td>Overnight trend, priority clusters, owner action check.</td></tr>
                                                <tr><td>War-room</td><td>Action decisions, blockers, escalation notes.</td></tr>
                                                <tr><td>Midday check</td><td>New critical issues, aging actions, SLA risk.</td></tr>
                                                <tr><td>End of day</td><td>Daily pack, unresolved risks, next-day priorities.</td></tr>
                                                <tr><td>Weekly</td><td>Exit readiness, trend reduction, AMS handover review.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Dashboards And Outputs</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Output</th><th>Content</th></tr></thead>
                                              <tbody>
                                                <tr><td>Hypercare dashboard</td><td>Incident volume, open actions, priority issues, owner status.</td></tr>
                                                <tr><td>Process heatmap</td><td>Impacted processes, roles, severity, and trend.</td></tr>
                                                <tr><td>Cluster board</td><td>Related issues, theme, owner, recurrence, evidence.</td></tr>
                                                <tr><td>Action queue</td><td>Owner actions, due dates, blockers, status.</td></tr>
                                                <tr><td>Daily pack</td><td>Trends, blockers, decisions, escalations, next steps.</td></tr>
                                                <tr><td>Executive summary</td><td>Business impact, risk posture, stabilization confidence.</td></tr>
                                                <tr><td>Exit tracker</td><td>Criteria status, trend reduction, unresolved blockers.</td></tr>
                                                <tr><td>AMS handover pack</td><td>Open backlog, knowledge candidates, ownership, evidence.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Cloud ALM-Ready Backlog And User Stories",
                                        "exports":  [
                                                        "requirement",
                                                        "user-stories"
                                                    ],
                                        "html":  `
                                          <h3>Cloud ALM-Ready Backlog</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Requirement</th><th>Outcome</th></tr></thead>
                                              <tbody>
                                                <tr><td>REQ-HYP-001</td><td>Signal intake</td><td>Incidents, alerts, notes, and feedback load into command center.</td></tr>
                                                <tr><td>REQ-HYP-002</td><td>Issue clustering</td><td>Related and repeated issues appear as clusters.</td></tr>
                                                <tr><td>REQ-HYP-003</td><td>Theme classification</td><td>Issues are classified by stabilization theme.</td></tr>
                                                <tr><td>REQ-HYP-004</td><td>Daily pack</td><td>Daily trend, blockers, actions, and escalations generated.</td></tr>
                                                <tr><td>REQ-HYP-005</td><td>Executive summary</td><td>Sponsor-ready summary generated with approval step.</td></tr>
                                                <tr><td>REQ-HYP-006</td><td>Action queue</td><td>Owner actions tracked with status and blocker notes.</td></tr>
                                                <tr><td>REQ-HYP-007</td><td>Exit tracker</td><td>Stabilization readiness criteria are measured.</td></tr>
                                                <tr><td>REQ-HYP-008</td><td>AMS handover</td><td>Transition backlog generated with evidence.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>User Stories</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Role</th><th>Need</th><th>Value</th></tr></thead>
                                              <tbody>
                                                <tr><td>US-HYP-001</td><td>Hypercare lead</td><td>daily top clusters</td><td>focus actions</td></tr>
                                                <tr><td>US-HYP-002</td><td>PMO lead</td><td>track owner actions</td><td>reduce unmanaged follow-ups</td></tr>
                                                <tr><td>US-HYP-003</td><td>Process owner</td><td>view process heatmap</td><td>prioritize support</td></tr>
                                                <tr><td>US-HYP-004</td><td>Technical lead</td><td>link incidents to alerts</td><td>find causes faster</td></tr>
                                                <tr><td>US-HYP-005</td><td>Sponsor</td><td>executive summary</td><td>understand stabilization status</td></tr>
                                                <tr><td>US-HYP-006</td><td>AMS lead</td><td>handover backlog</td><td>start steady-state cleanly</td></tr>
                                                <tr><td>US-HYP-007</td><td>Service owner</td><td>repeat incident rate</td><td>drive permanent fixes</td></tr>
                                                <tr><td>US-HYP-008</td><td>Security lead</td><td>control sensitive issue access</td><td>protect data</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Executable Test Script",
                                        "exports":  [
                                                        "test-cases"
                                                    ],
                                        "html":  `
                                          <h3>Test Scripts</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Scenario</th><th>Action</th><th>Expected result</th></tr></thead>
                                              <tbody>
                                                <tr><td>TS-HYP-001</td><td>Signal intake</td><td>Load incidents/alerts</td><td>Records appear</td></tr>
                                                <tr><td>TS-HYP-002</td><td>Cluster issues</td><td>Submit related issues</td><td>Single cluster</td></tr>
                                                <tr><td>TS-HYP-003</td><td>Classify theme</td><td>Run theme classification</td><td>Correct theme</td></tr>
                                                <tr><td>TS-HYP-004</td><td>Heatmap</td><td>Update process impact</td><td>Heatmap updates</td></tr>
                                                <tr><td>TS-HYP-005</td><td>Daily pack</td><td>Generate daily pack</td><td>Trends/blockers shown</td></tr>
                                                <tr><td>TS-HYP-006</td><td>Owner action</td><td>Create and update action</td><td>Action queue updates</td></tr>
                                                <tr><td>TS-HYP-007</td><td>Sensitive data</td><td>Submit sensitive content</td><td>Masked</td></tr>
                                                <tr><td>TS-HYP-008</td><td>Low confidence</td><td>Use ambiguous issue</td><td>Human review</td></tr>
                                                <tr><td>TS-HYP-009</td><td>Executive pack</td><td>Generate sponsor summary</td><td>Approval step logged</td></tr>
                                                <tr><td>TS-HYP-010</td><td>AMS handover</td><td>Generate transition backlog</td><td>Handover items</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Security, Readiness, Evidence, And Limitations",
                                        "html":  `
                                          <h3>Security, Governance And Controls</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Control</th><th>Implementation</th></tr></thead>
                                              <tbody>
                                                <tr><td>Access</td><td>Role-based views for hypercare, business, technical, security, executives, and AMS.</td></tr>
                                                <tr><td>Masking</td><td>Sensitive data masked before AI processing.</td></tr>
                                                <tr><td>Approval</td><td>Executive packs and sensitive summaries require review.</td></tr>
                                                <tr><td>Audit</td><td>Recommendations, actions, approvals, overrides, and evidence captured.</td></tr>
                                                <tr><td>Model control</td><td>Prompt, model, and threshold versions tracked.</td></tr>
                                                <tr><td>Fallback</td><td>Rules and manual triage remain available when AI is unavailable.</td></tr>
                                                <tr><td>Retention</td><td>Hypercare evidence retained according to project and customer policy.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Readiness Criteria</h3>
                                          <ul>
                                            <li>Hypercare taxonomy agreed and published.</li>
                                            <li>Signal sources connected and tested.</li>
                                            <li>Process and resolver owners named.</li>
                                            <li>RBAC and masking validated.</li>
                                            <li>Daily pack approved by hypercare lead.</li>
                                            <li>Executive summary review workflow accepted.</li>
                                            <li>Exit criteria agreed with program leadership.</li>
                                            <li>AMS handover format accepted by service owner.</li>
                                          </ul>
                                          <h3>Evidence To Capture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Evidence</th><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>Signal ingestion log</td><td>Source traceability.</td></tr>
                                                <tr><td>Cluster board screenshot</td><td>Related issue evidence.</td></tr>
                                                <tr><td>Theme classification output</td><td>AI/rule decision support.</td></tr>
                                                <tr><td>Heatmap</td><td>Process impact view.</td></tr>
                                                <tr><td>Action queue</td><td>Owner accountability.</td></tr>
                                                <tr><td>Daily pack</td><td>Hypercare governance record.</td></tr>
                                                <tr><td>Executive approval</td><td>Sponsor communication control.</td></tr>
                                                <tr><td>Exit tracker</td><td>Stabilization readiness.</td></tr>
                                                <tr><td>AMS handover pack</td><td>Transition evidence.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Known Limitations And Remediation</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Limitation</th><th>Remediation</th></tr></thead>
                                              <tbody>
                                                <tr><td>Poor incident descriptions</td><td>Use clarification checklist and mandatory fields.</td></tr>
                                                <tr><td>Unclear ownership</td><td>Agree resolver and process owner matrix before go-live.</td></tr>
                                                <tr><td>Signal access gaps</td><td>Start with available ITSM and manual war-room notes, then add Cloud ALM and monitoring feeds.</td></tr>
                                                <tr><td>Low AI confidence</td><td>Route to human review and capture corrected classification.</td></tr>
                                                <tr><td>Stale knowledge</td><td>Assign AMS owner to review knowledge candidates.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Reusable Deliverables</h3>
                                          <ul>
                                            <li>Hypercare taxonomy and canonical data model.</li>
                                            <li>Command-center dashboard and process heatmap design.</li>
                                            <li>Daily pack and executive summary template.</li>
                                            <li>Action queue, exit tracker, and AMS handover pack.</li>
                                            <li>Cloud ALM backlog, user stories, test scripts, security controls, and evidence checklist.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "SAP Evidence Base",
                                        "html":  `
                                          <h3>Reference Links</h3>
                                          <ul>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/applicationhelp/health-monitoring" target="_blank" rel="noreferrer">SAP Cloud ALM Health Monitoring</a></li>
                                            <li><a href="https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/business-process-monitoring.html" target="_blank" rel="noreferrer">SAP Cloud ALM Business Process Monitoring</a></li>
                                            <li><a href="https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/real-user-monitoring.html" target="_blank" rel="noreferrer">SAP Cloud ALM Real User Monitoring</a></li>
                                            <li><a href="https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/integration-monitoring.html" target="_blank" rel="noreferrer">SAP Cloud ALM Integration and Exception Monitoring</a></li>
                                            <li><a href="https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/calm-apis-for-operations.html" target="_blank" rel="noreferrer">SAP Cloud ALM APIs for Operations</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/service-requests-api" target="_blank" rel="noreferrer">SAP Cloud ALM Service Request API</a></li>
                                            <li><a href="https://help.sap.com/docs/ai-launchpad/sap-ai-launchpad-user-guide/generative-ai-hub" target="_blank" rel="noreferrer">SAP AI Core generative AI hub</a></li>
                                            <li><a href="https://help.sap.com/docs/build-process-automation/sap-build-process-automation/about" target="_blank" rel="noreferrer">SAP Build Process Automation</a></li>
                                          </ul>
                                        `
                                    }
                                ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "SAP Cloud ALM",
                                      "Hypercare",
                                      "Stabilization",
                                      "AMS"
                                  ],
                         "businessProcess":  "Hypercare / Operations / Stabilization",
                         "workstream":  "AI Hypercare Stabilization",
                         "requirement":  {
                                             "externalId":  "REQ-HYP-001",
                                             "title":  "AI Hypercare Stabilization Command Center",
                                             "description":  "<p>Implement a customer-ready AI-assisted hypercare command center that ingests incidents, alerts, logs, notes, and feedback; clusters related issues; extracts stabilization themes; manages owner actions; generates daily packs; tracks exit readiness; and prepares AMS handover evidence.</p><h2>Business Need</h2><p>SAP programs need one governed stabilization narrative after go-live so leadership, process owners, technical teams, and AMS can prioritize the right actions from the same evidence base.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; SAP Cloud ALM; Hypercare; Stabilization; AMS",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Hypercare / Operations / Stabilization"
                                         },
                         "userStories":  [
                                             {
                                                 "externalId":  "US-HYP-001",
                                                 "title":  "US-HYP-001 - Daily Top Clusters",
                                                 "persona":  "a hypercare lead",
                                                 "want":  "daily top clusters",
                                                 "soThat":  "I can focus stabilization actions",
                                                 "acceptanceCriteria":  [
                                                                            "Top issue clusters are visible by severity, recurrence, and process impact.",
                                                                            "Each cluster includes owner, theme, evidence, and confidence.",
                                                                            "Daily trend is refreshed from available signals."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-002",
                                                 "title":  "US-HYP-002 - Track Owner Actions",
                                                 "persona":  "a PMO lead",
                                                 "want":  "to track owner actions",
                                                 "soThat":  "unmanaged follow-ups are reduced",
                                                 "acceptanceCriteria":  [
                                                                            "Actions can be assigned, updated, blocked, and closed.",
                                                                            "Owner, due date, blocker, and evidence are captured.",
                                                                            "Aging actions are highlighted."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-003",
                                                 "title":  "US-HYP-003 - View Process Heatmap",
                                                 "persona":  "a process owner",
                                                 "want":  "a process heatmap",
                                                 "soThat":  "I can prioritize support",
                                                 "acceptanceCriteria":  [
                                                                            "Impacted processes and roles are visible.",
                                                                            "Severity and trend indicators are shown.",
                                                                            "Heatmap entries link back to clusters and incidents."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-004",
                                                 "title":  "US-HYP-004 - Link Incidents To Alerts",
                                                 "persona":  "a technical lead",
                                                 "want":  "incidents linked to alerts",
                                                 "soThat":  "I can find causes faster",
                                                 "acceptanceCriteria":  [
                                                                            "Related alerts and telemetry can be associated with issue clusters.",
                                                                            "Evidence links are visible.",
                                                                            "Low-confidence associations require review."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-005",
                                                 "title":  "US-HYP-005 - Executive Summary",
                                                 "persona":  "a sponsor",
                                                 "want":  "an executive summary",
                                                 "soThat":  "I can understand stabilization status",
                                                 "acceptanceCriteria":  [
                                                                            "Summary includes trend, business impact, blockers, risks, and decisions.",
                                                                            "Summary requires review before distribution.",
                                                                            "Approval is logged."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-006",
                                                 "title":  "US-HYP-006 - AMS Handover Backlog",
                                                 "persona":  "an AMS lead",
                                                 "want":  "a handover backlog",
                                                 "soThat":  "steady-state support starts cleanly",
                                                 "acceptanceCriteria":  [
                                                                            "Open recurring themes become handover items.",
                                                                            "Each handover item includes owner, evidence, severity, and recommended next action.",
                                                                            "Accepted handover items are exportable."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-007",
                                                 "title":  "US-HYP-007 - Repeat Incident Rate",
                                                 "persona":  "a service owner",
                                                 "want":  "repeat incident rate",
                                                 "soThat":  "I can drive permanent fixes",
                                                 "acceptanceCriteria":  [
                                                                            "Repeat rate is visible by process, theme, and owner.",
                                                                            "Permanent fix candidates are flagged.",
                                                                            "Resolved repeat issues can be linked to knowledge candidates."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-HYP-008",
                                                 "title":  "US-HYP-008 - Sensitive Issue Access",
                                                 "persona":  "a security lead",
                                                 "want":  "sensitive issue access controls",
                                                 "soThat":  "data is protected",
                                                 "acceptanceCriteria":  [
                                                                            "Sensitive issues are masked before AI use.",
                                                                            "Access is restricted by role.",
                                                                            "Access and approval decisions are logged."
                                                                        ]
                                             }
                                         ],
                         "testCases":  [
                                           {
                                               "externalId":  "TS-HYP-001",
                                               "testCaseName":  "TS-HYP-001 - Signal Intake",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Load hypercare signals",
                                               "actionTitle":  "Load incidents and alerts",
                                               "instructions":  [
                                                                    "Load incidents and alerts from the configured sources.",
                                                                    "Open the command-center intake view."
                                                                ],
                                               "expectedResult":  "Records appear with source, timestamp, status, and basic classification fields."
                                           },
                                           {
                                               "externalId":  "TS-HYP-002",
                                               "testCaseName":  "TS-HYP-002 - Cluster Issues",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Cluster related issues",
                                               "actionTitle":  "Submit related issues",
                                               "instructions":  [
                                                                    "Submit several related incidents with similar symptoms.",
                                                                    "Run clustering."
                                                                ],
                                               "expectedResult":  "Related incidents are grouped into a single cluster for review."
                                           },
                                           {
                                               "externalId":  "TS-HYP-003",
                                               "testCaseName":  "TS-HYP-003 - Classify Theme",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Classify stabilization theme",
                                               "actionTitle":  "Run theme classification",
                                               "instructions":  [
                                                                    "Select a cluster with known training, data, configuration, or integration cause.",
                                                                    "Run theme classification."
                                                                ],
                                               "expectedResult":  "The correct stabilization theme is assigned with confidence and evidence."
                                           },
                                           {
                                               "externalId":  "TS-HYP-004",
                                               "testCaseName":  "TS-HYP-004 - Heatmap Update",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Update process heatmap",
                                               "actionTitle":  "Update process impact",
                                               "instructions":  [
                                                                    "Map incidents to affected processes and roles.",
                                                                    "Refresh the heatmap."
                                                                ],
                                               "expectedResult":  "The process heatmap updates with severity and trend."
                                           },
                                           {
                                               "externalId":  "TS-HYP-005",
                                               "testCaseName":  "TS-HYP-005 - Daily Pack",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Generate daily pack",
                                               "actionTitle":  "Generate daily hypercare pack",
                                               "instructions":  [
                                                                    "Generate the daily pack from current clusters, actions, blockers, and trends.",
                                                                    "Review the generated pack."
                                                                ],
                                               "expectedResult":  "Trends, blockers, actions, and escalations are shown."
                                           },
                                           {
                                               "externalId":  "TS-HYP-006",
                                               "testCaseName":  "TS-HYP-006 - Owner Action Queue",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Update owner action",
                                               "actionTitle":  "Create and update action",
                                               "instructions":  [
                                                                    "Create an owner action from a cluster.",
                                                                    "Update status, blocker, due date, and evidence."
                                                                ],
                                               "expectedResult":  "The action queue updates and the action remains linked to the source cluster."
                                           },
                                           {
                                               "externalId":  "TS-HYP-007",
                                               "testCaseName":  "TS-HYP-007 - Sensitive Data Masking",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Validate masking",
                                               "actionTitle":  "Submit sensitive content",
                                               "instructions":  [
                                                                    "Submit an issue containing sensitive data.",
                                                                    "Run classification and summarization."
                                                                ],
                                               "expectedResult":  "Sensitive values are masked before AI processing and stored evidence does not expose restricted fields."
                                           },
                                           {
                                               "externalId":  "TS-HYP-008",
                                               "testCaseName":  "TS-HYP-008 - Low Confidence Review",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Route low-confidence issue",
                                               "actionTitle":  "Use ambiguous issue",
                                               "instructions":  [
                                                                    "Submit an ambiguous issue with insufficient context.",
                                                                    "Run classification."
                                                                ],
                                               "expectedResult":  "The issue is routed to human review."
                                           },
                                           {
                                               "externalId":  "TS-HYP-009",
                                               "testCaseName":  "TS-HYP-009 - Executive Pack Approval",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Approve executive pack",
                                               "actionTitle":  "Generate sponsor summary",
                                               "instructions":  [
                                                                    "Generate executive summary.",
                                                                    "Route it for review and approval."
                                                                ],
                                               "expectedResult":  "Approval step is logged before distribution."
                                           },
                                           {
                                               "externalId":  "TS-HYP-010",
                                               "testCaseName":  "TS-HYP-010 - AMS Handover",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Generate AMS handover",
                                               "actionTitle":  "Generate transition backlog",
                                               "instructions":  [
                                                                    "Select recurring open stabilization themes.",
                                                                    "Generate the AMS handover backlog."
                                                                ],
                                               "expectedResult":  "Handover items are created with owner, severity, evidence, and recommended next action."
                                           }
                                       ]
                     },
        "sources":  [
                        {
                            "label":  "SAP Cloud ALM Health Monitoring",
                            "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/health-monitoring"
                        },
                        {
                            "label":  "SAP Cloud ALM Business Process Monitoring",
                            "url":  "https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/business-process-monitoring.html"
                        },
                        {
                            "label":  "SAP Cloud ALM Real User Monitoring",
                            "url":  "https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/real-user-monitoring.html"
                        },
                        {
                            "label":  "SAP Cloud ALM Integration and Exception Monitoring",
                            "url":  "https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/integration-monitoring.html"
                        },
                        {
                            "label":  "SAP Cloud ALM APIs for Operations",
                            "url":  "https://support.sap.com/en/alm/sap-cloud-alm/operations/expert-portal/calm-apis-for-operations.html"
                        },
                        {
                            "label":  "SAP Cloud ALM Service Request API",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/service-requests-api"
                        },
                        {
                            "label":  "SAP AI Core generative AI hub",
                            "url":  "https://help.sap.com/docs/ai-launchpad/sap-ai-launchpad-user-guide/generative-ai-hub"
                        },
                        {
                            "label":  "SAP Build Process Automation",
                            "url":  "https://help.sap.com/docs/build-process-automation/sap-build-process-automation/about"
                        }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Package the customer-ready hypercare command center offer: hypercare taxonomy, source inventory, canonical data model, AI clustering configuration, daily pack template, process heatmap, action queue, exit tracker, AMS handover pack, Cloud ALM backlog, user stories, test scripts, security controls, and evidence checklist."
    },
    {
        "id":  "ai-powered-ams-control-tower",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "AI-Powered AMS Control Tower",
        "detailAliases":  [
                              "ai-powered-ams-control-tower-side",
                              "ai-ams-control-tower"
                          ],
        "status":  "Customer accelerator",
        "pattern":  "AI",
        "category":  "AI",
        "tagLabel":  "AI",
        "description":  "Customer-ready AMS control-tower accelerator for AI-assisted SAP ticket intake, classification, duplicate detection, resolver routing, resolution retrieval, SLA insight, learning, and audit governance.",
        "function":  "Build a governed AMS operating layer that improves L1 and L1.5 triage quality, context, routing, SLA visibility, and reusable knowledge while keeping high-risk actions under human approval.",
        "summary":  "AI-Powered AMS Control Tower defines the AMS control-tower solution, operating scope, architecture, triage model, routing governance, user stories, test scripts, evidence checklist, and go-live criteria for customer implementation. It captures incidents from SAP Cloud ALM and ITSM, classifies issue context, detects duplicates, recommends resolver groups, retrieves similar resolutions, drafts responses for review, flags SLA breach risk, and creates reusable AMS knowledge.",
        "useCase":  [
                        {
                            "text":  "Improve SAP support operations where ticket quality, routing, duplicate detection, first response, SLA focus, and knowledge reuse need a governed AI-assisted control tower."
                        },
                        {
                            "heading":  "It helps AMS teams",
                            "items":  [
                                          "Classify tickets by SAP module, process, urgency, and issue type.",
                                          "Detect duplicates and related incidents.",
                                          "Recommend resolver groups with rationale.",
                                          "Retrieve similar resolved tickets, knowledge articles, and runbooks.",
                                          "Draft first responses and resolver notes for human review.",
                                          "Flag SLA breach risk and aging backlog.",
                                          "Build reusable AMS knowledge from resolved incidents."
                                      ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
                                    <p>A user raises: Payment file failed again. Vendor payments blocked. Need urgent help. The control tower classifies the issue, checks related incidents, retrieves similar fixes, and proposes the next action for human approval.</p>
                                    <div class="detail-table-wrap">
                                      <table class="detail-table">
                                        <thead><tr><th>Control Tower output</th><th>Example</th></tr></thead>
                                        <tbody>
                                          <tr><td>Summary</td><td>Payment file failure affecting vendor payments</td></tr>
                                          <tr><td>Module</td><td>FI/AP payments</td></tr>
                                          <tr><td>Process</td><td>Procure-to-pay</td></tr>
                                          <tr><td>Impact</td><td>Payment delay risk</td></tr>
                                          <tr><td>Duplicate</td><td>Similar bank-file incidents found</td></tr>
                                          <tr><td>Resolver</td><td>FI payments plus integration watcher</td></tr>
                                          <tr><td>Missing info</td><td>Company code, run ID, error text</td></tr>
                                          <tr><td>Similar fix</td><td>Bank format mapping issue</td></tr>
                                          <tr><td>SLA risk</td><td>High until assigned</td></tr>
                                          <tr><td>Next action</td><td>Request details and route</td></tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "Use when SAP support operations need cleaner intake, faster routing, stronger SLA visibility, and consistent first responses.",
                         "Use when resolver ownership, SLA rules, ticket history, and knowledge repositories are reliable enough for governed AI assistance.",
                         "Use when the customer wants to improve L1/L1.5 triage while retaining human control over final resolution and high-risk actions.",
                         "Pause and remediate first when ticket history is unreliable, resolver ownership overlaps, SLA rules are unclear, KB content is stale, or PII controls are not approved."
                     ],
        "implementation":  [
                              "Confirm support towers, intake channels, SLA rules, resolver ownership, and escalation paths.",
                              "Inventory ticket sources, knowledge repositories, runbooks, SAP landscape metadata, and monitoring alerts.",
                              "Define the canonical AMS ticket schema and mandatory fields.",
                              "Clean historical ticket data and map categories to the approved taxonomy.",
                              "Configure deterministic routing rules for critical, sensitive, SLA, and ownership cases.",
                              "Index resolved tickets, KBs, and runbooks for semantic retrieval.",
                              "Configure AI classification, duplicate detection, resolver recommendation, draft response prompts, and breach-risk logic.",
                              "Set confidence thresholds for auto-route eligibility, human review, escalation, and clarification requests.",
                              "Build the service desk cockpit, resolver workspace, service manager insights dashboard, knowledge workbench, and governance console.",
                              "Test happy path, exception paths, role security, masking, ITSM updates, fallback behavior, and audit logging.",
                              "Run a supervised production pilot, tune classification, routing, retrieval, and SLA thresholds, then approve go-live."
                          ],
        "collapsibleSections":  [
                                    {
                                        "title":  "Purpose And Summary",
                                        "html":  `
                                          <h3>Purpose</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>This accelerator defines the AMS control-tower solution, operating scope, architecture, triage model, routing governance, user stories, test scripts, evidence checklist, and go-live criteria for customer implementation.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Summary</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Area</th><th>Detail</th></tr></thead>
                                              <tbody>
                                                <tr><td>Topic</td><td>AI-Powered AMS Control Tower</td></tr>
                                                <tr><td>Audience</td><td>AMS leads, service managers, CIO operations, shared services</td></tr>
                                                <tr><td>Posture</td><td>Customer-ready, assessment-led, implementation reusable</td></tr>
                                                <tr><td>Outcome</td><td>Cleaner intake, faster routing, better SLA visibility</td></tr>
                                                <tr><td>Control</td><td>AI recommends; humans approve high-risk actions</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Solution Positioning</h3>
                                          <p>This accelerator is recommended where SAP support operations need a structured way to improve ticket quality, routing, duplicate detection, first-response consistency, SLA focus, and knowledge reuse.</p>
                                          <p>The governed AMS layer captures incidents from SAP Cloud ALM and ITSM, classifies the issue by SAP module and process, detects duplicates, recommends the resolver, retrieves similar resolutions, drafts responses, and highlights SLA risk.</p>
                                          <p>It does not replace AMS ownership. It improves L1 and L1.5 triage quality, context, and the governed learning loop.</p>
                                        `
                                    },
                                    {
                                        "title":  "Solution Scope And Customer Readiness",
                                        "html":  `
                                          <h3>Customer Readiness Decision</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Decision</th><th>Condition</th><th>Action</th></tr></thead>
                                              <tbody>
                                                <tr><td>Take forward</td><td>Ticket history is usable</td><td>Load and classify</td></tr>
                                                <tr><td>Take forward</td><td>Resolver groups are clear</td><td>Configure routing</td></tr>
                                                <tr><td>Take forward</td><td>SLA rules are defined</td><td>Model breach risk</td></tr>
                                                <tr><td>Take forward</td><td>KB/runbooks are available</td><td>Index and retrieve</td></tr>
                                                <tr><td>Take forward</td><td>Sensitive fields are known</td><td>Mask before AI</td></tr>
                                                <tr><td>Pause/remediate</td><td>No reliable ticket history exists</td><td>Clean source data</td></tr>
                                                <tr><td>Pause/remediate</td><td>Resolver ownership overlaps</td><td>Fix taxonomy</td></tr>
                                                <tr><td>Pause/remediate</td><td>SLA rules are unclear</td><td>Codify policies</td></tr>
                                                <tr><td>Pause/remediate</td><td>KB content is stale</td><td>Assign owners</td></tr>
                                                <tr><td>Pause/remediate</td><td>PII rules are unapproved</td><td>Approve controls</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Solution Scope</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Capability</th><th>Delivered scope</th></tr></thead>
                                              <tbody>
                                                <tr><td>Ingestion</td><td>Tickets, emails, alerts, worklogs</td></tr>
                                                <tr><td>Normalization</td><td>One AMS ticket schema</td></tr>
                                                <tr><td>Classification</td><td>Module, process, issue type</td></tr>
                                                <tr><td>Deduplication</td><td>Duplicate and related cases</td></tr>
                                                <tr><td>Routing</td><td>Resolver recommendation</td></tr>
                                                <tr><td>Retrieval</td><td>Similar fixes and KBs</td></tr>
                                                <tr><td>Drafting</td><td>Response and resolver note</td></tr>
                                                <tr><td>SLA insight</td><td>Breach and aging risk</td></tr>
                                                <tr><td>Learning</td><td>KB candidates from fixes</td></tr>
                                                <tr><td>Audit</td><td>Prompt, action, override log</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "SAP Tooling And Functional Design",
                                        "html":  `
                                          <h3>SAP-Aligned Tooling</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Domain</th><th>Preferred choice</th><th>Use</th></tr></thead>
                                              <tbody>
                                                <tr><td>ITSM source</td><td>Cloud ALM / ServiceNow / JSM</td><td>Tickets and status</td></tr>
                                                <tr><td>App layer</td><td>SAP BTP / CAP</td><td>APIs and services</td></tr>
                                                <tr><td>Workflow</td><td>SAP Build Process Automation</td><td>Approvals and routing</td></tr>
                                                <tr><td>AI runtime</td><td>SAP AI Core / generative AI hub</td><td>Models and prompts</td></tr>
                                                <tr><td>Assistant</td><td>SAP Joule</td><td>Optional Q&amp;A</td></tr>
                                                <tr><td>Analytics</td><td>HANA Cloud / Datasphere</td><td>KPIs and history</td></tr>
                                                <tr><td>Integration</td><td>Integration Suite / APIs</td><td>Connectors</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Functional Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Function</th><th>What it does</th></tr></thead>
                                              <tbody>
                                                <tr><td>Ticket intake</td><td>Captures all channels</td></tr>
                                                <tr><td>Payload cleanup</td><td>Removes noise</td></tr>
                                                <tr><td>Module classifier</td><td>Predicts SAP area</td></tr>
                                                <tr><td>Impact enrichment</td><td>Adds business context</td></tr>
                                                <tr><td>Duplicate check</td><td>Finds similar open cases</td></tr>
                                                <tr><td>Resolver match</td><td>Suggests right queue</td></tr>
                                                <tr><td>Resolution search</td><td>Retrieves prior fixes</td></tr>
                                                <tr><td>Draft response</td><td>Prepares human-reviewed text</td></tr>
                                                <tr><td>SLA monitor</td><td>Flags risk early</td></tr>
                                                <tr><td>Learning loop</td><td>Improves future routing</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Canonical Ticket Model</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Entity</th><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>Ticket</td><td>Core incident record</td></tr>
                                                <tr><td>Channel</td><td>Source of intake</td></tr>
                                                <tr><td>Requester</td><td>User context</td></tr>
                                                <tr><td>System</td><td>SAP landscape</td></tr>
                                                <tr><td>Module</td><td>SAP support area</td></tr>
                                                <tr><td>Process</td><td>Business context</td></tr>
                                                <tr><td>Priority</td><td>Urgency and impact</td></tr>
                                                <tr><td>SLA</td><td>Response target</td></tr>
                                                <tr><td>Resolver group</td><td>Ownership</td></tr>
                                                <tr><td>Worklog</td><td>Support notes</td></tr>
                                                <tr><td>Attachment metadata</td><td>Evidence context</td></tr>
                                                <tr><td>KB article</td><td>Reusable guidance</td></tr>
                                                <tr><td>Runbook</td><td>Standard fix path</td></tr>
                                                <tr><td>Duplicate cluster</td><td>Related cases</td></tr>
                                                <tr><td>Recommendation</td><td>AI/rule output</td></tr>
                                                <tr><td>Override</td><td>Human decision</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Classification, Routing, And Governance",
                                        "html":  `
                                          <h3>Classification And Routing Model</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Input</th><th>Use in model</th></tr></thead>
                                              <tbody>
                                                <tr><td>Title/description</td><td>Intent and symptom</td></tr>
                                                <tr><td>Error text</td><td>Known pattern</td></tr>
                                                <tr><td>SAP app/tcode/API</td><td>Module clue</td></tr>
                                                <tr><td>System/client</td><td>Landscape impact</td></tr>
                                                <tr><td>Business impact</td><td>Priority signal</td></tr>
                                                <tr><td>Similar tickets</td><td>Resolver pattern</td></tr>
                                                <tr><td>Worklogs</td><td>Resolution clue</td></tr>
                                                <tr><td>SLA clock</td><td>Escalation risk</td></tr>
                                                <tr><td>Recent changes</td><td>Change linkage</td></tr>
                                                <tr><td>Known errors</td><td>Fix suggestion</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Confidence Band</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Band</th><th>Action</th></tr></thead>
                                              <tbody>
                                                <tr><td>High</td><td>Auto-route eligible</td></tr>
                                                <tr><td>Medium</td><td>Human review</td></tr>
                                                <tr><td>Low</td><td>Request details</td></tr>
                                                <tr><td>Critical impact</td><td>Escalate</td></tr>
                                                <tr><td>Repeated issue</td><td>KB candidate</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Rules And AI Responsibilities</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Layer</th><th>Responsibility</th></tr></thead>
                                              <tbody>
                                                <tr><td>Rules</td><td>Priority, SLA, queue ownership</td></tr>
                                                <tr><td>Rules</td><td>Sensitive-ticket handling</td></tr>
                                                <tr><td>Rules</td><td>Critical outage escalation</td></tr>
                                                <tr><td>AI</td><td>Classify vague tickets</td></tr>
                                                <tr><td>AI</td><td>Detect duplicates</td></tr>
                                                <tr><td>AI</td><td>Retrieve similar fixes</td></tr>
                                                <tr><td>AI</td><td>Draft first response</td></tr>
                                                <tr><td>AI</td><td>Predict breach risk</td></tr>
                                                <tr><td>Human</td><td>Approve risky actions</td></tr>
                                                <tr><td>Human</td><td>Own final resolution</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Implementation Process And Backlog",
                                        "exports":  [
                                                        "requirement"
                                                    ],
                                        "html":  `
                                          <h3>Step-by-step Implementation Process</h3>
                                          <ol>
                                            <li>Confirm support towers, intake channels, SLA rules, resolver ownership, and escalation paths.</li>
                                            <li>Inventory ticket sources, knowledge repositories, runbooks, SAP landscape metadata, and monitoring alerts.</li>
                                            <li>Define the canonical AMS ticket schema and mandatory fields.</li>
                                            <li>Clean historical ticket data and map categories to taxonomy.</li>
                                            <li>Configure deterministic routing rules for critical, sensitive, SLA, and ownership cases.</li>
                                            <li>Index resolved tickets, KBs, and runbooks for semantic retrieval.</li>
                                            <li>Configure AI classification, duplicate detection, resolver recommendation, draft response prompts, and breach-risk logic.</li>
                                            <li>Set confidence thresholds.</li>
                                            <li>Build service desk cockpit, resolver workspace, service manager insights dashboard, knowledge workbench, and governance console.</li>
                                            <li>Test happy path, exceptions, role security, masking, ITSM updates, audit logging, and AI fallback.</li>
                                            <li>Run supervised production pilot.</li>
                                            <li>Tune classification, routing, KB retrieval, and SLA thresholds.</li>
                                            <li>Approve go-live once accepted.</li>
                                          </ol>
                                          <h3>Cloud ALM / ITSM-Ready Backlog</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Requirement</th><th>Acceptance</th></tr></thead>
                                              <tbody>
                                                <tr><td>REQ-AMS-001</td><td>Ticket ingestion</td><td>Tickets load with source and status</td></tr>
                                                <tr><td>REQ-AMS-002</td><td>Ticket classification</td><td>Module, process, issue type shown</td></tr>
                                                <tr><td>REQ-AMS-003</td><td>Duplicate detection</td><td>Similar cases ranked</td></tr>
                                                <tr><td>REQ-AMS-004</td><td>Resolver recommendation</td><td>Queue and rationale shown</td></tr>
                                                <tr><td>REQ-AMS-005</td><td>Resolution retrieval</td><td>Prior fixes and KBs shown</td></tr>
                                                <tr><td>REQ-AMS-006</td><td>Draft response</td><td>Human-reviewed response created</td></tr>
                                                <tr><td>REQ-AMS-007</td><td>SLA risk</td><td>At-risk tickets flagged</td></tr>
                                                <tr><td>REQ-AMS-008</td><td>Audit trail</td><td>Prompt, action, override logged</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "User Stories",
                                        "exports":  [
                                                        "user-stories"
                                                    ],
                                        "html":  `
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Story</th><th>Acceptance</th></tr></thead>
                                              <tbody>
                                                <tr><td>US-AMS-001</td><td>As service desk agent need clean summary</td><td>Summary appears for each ticket.</td></tr>
                                                <tr><td>US-AMS-002</td><td>As AMS lead need module classification</td><td>Module and confidence shown.</td></tr>
                                                <tr><td>US-AMS-003</td><td>As resolver need similar fixes</td><td>Resolved cases ranked.</td></tr>
                                                <tr><td>US-AMS-004</td><td>As service manager need duplicate grouping</td><td>Duplicate candidates visible.</td></tr>
                                                <tr><td>US-AMS-005</td><td>As support lead need SLA risk</td><td>Breach-risk tickets flagged.</td></tr>
                                                <tr><td>US-AMS-006</td><td>As KB owner need KB candidates</td><td>Repeated fixes proposed.</td></tr>
                                                <tr><td>US-AMS-007</td><td>As auditor need traceability</td><td>Recommendations and overrides logged.</td></tr>
                                                <tr><td>US-AMS-008</td><td>As resolver owner need routing rationale</td><td>Queue reason displayed.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Executable Test Script",
                                        "exports":  [
                                                        "test-cases"
                                                    ],
                                        "html":  `
                                          <h3>Test Scripts</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Test</th><th>Steps</th><th>Expected result</th></tr></thead>
                                              <tbody>
                                                <tr><td>Happy path</td><td>Ingest ticket; classify; find duplicates; route.</td><td>Correct queue and rationale.</td></tr>
                                                <tr><td>Vague ticket</td><td>Submit short description.</td><td>Clarification checklist shown.</td></tr>
                                                <tr><td>Duplicate</td><td>Submit repeated issue.</td><td>Duplicate candidates ranked.</td></tr>
                                                <tr><td>Low confidence</td><td>Use ambiguous module text.</td><td>Human review required.</td></tr>
                                                <tr><td>Critical impact</td><td>Submit outage ticket.</td><td>Escalation path triggered.</td></tr>
                                                <tr><td>Draft response</td><td>Generate first response.</td><td>Human review required.</td></tr>
                                                <tr><td>PII masking</td><td>Include sensitive text.</td><td>Masked before AI processing.</td></tr>
                                                <tr><td>ITSM update</td><td>Approve route.</td><td>Source ticket updated.</td></tr>
                                                <tr><td>Override</td><td>Change suggested queue.</td><td>Reason captured.</td></tr>
                                                <tr><td>AI outage</td><td>Disable AI service.</td><td>Rule-based fallback works.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Security, Roles, Go-live, And Evidence",
                                        "html":  `
                                          <h3>Security And Governance</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Control</th><th>Implementation</th></tr></thead>
                                              <tbody>
                                                <tr><td>RBAC</td><td>Role-based views</td></tr>
                                                <tr><td>Least privilege</td><td>Scoped API access</td></tr>
                                                <tr><td>PII masking</td><td>Before model call</td></tr>
                                                <tr><td>Prompt logging</td><td>With sensitive fields masked</td></tr>
                                                <tr><td>Override logging</td><td>Mandatory reason</td></tr>
                                                <tr><td>KB approval</td><td>Owner review before publish</td></tr>
                                                <tr><td>Confidence gates</td><td>Human review thresholds</td></tr>
                                                <tr><td>Model versioning</td><td>Track changes</td></tr>
                                                <tr><td>Fallback</td><td>Rules when AI unavailable</td></tr>
                                                <tr><td>Audit export</td><td>Decision history</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Role Matrix</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Role</th><th>Responsibility</th><th>Access</th></tr></thead>
                                              <tbody>
                                                <tr><td>Service desk agent</td><td>Triage review</td><td>Ticket cockpit</td></tr>
                                                <tr><td>L1/L1.5 lead</td><td>Queue quality</td><td>Routing view</td></tr>
                                                <tr><td>Resolver</td><td>Fix execution</td><td>Assigned tickets</td></tr>
                                                <tr><td>Resolver owner</td><td>Queue governance</td><td>Override approval</td></tr>
                                                <tr><td>Service manager</td><td>SLA and backlog</td><td>Insights dashboard</td></tr>
                                                <tr><td>Knowledge owner</td><td>KB approval</td><td>KB workbench</td></tr>
                                                <tr><td>Security lead</td><td>Data controls</td><td>Policy view</td></tr>
                                                <tr><td>AI owner</td><td>Prompt/model control</td><td>Governance console</td></tr>
                                                <tr><td>Auditor</td><td>Traceability</td><td>Read-only logs</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Go-live Criteria</h3>
                                          <ul>
                                            <li>Ticket ingestion works for approved channels.</li>
                                            <li>Canonical ticket schema agreed and populated.</li>
                                            <li>Resolver taxonomy approved.</li>
                                            <li>Classification accuracy accepted for pilot scope.</li>
                                            <li>Duplicate detection is conservative and useful.</li>
                                            <li>Draft responses require human review.</li>
                                            <li>SLA-risk view is available.</li>
                                            <li>PII masking and RBAC are validated.</li>
                                            <li>Overrides require reason codes.</li>
                                            <li>Source ITSM updates tested.</li>
                                            <li>Audit logs capture prompt, recommendation, route, and override.</li>
                                            <li>Support team signs off procedures.</li>
                                          </ul>
                                          <h3>Evidence To Capture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Evidence</th><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>Ingestion log</td><td>Source trace</td></tr>
                                                <tr><td>Classification screen</td><td>Model output</td></tr>
                                                <tr><td>Duplicate view</td><td>Related cases</td></tr>
                                                <tr><td>Routing rationale</td><td>Queue decision</td></tr>
                                                <tr><td>Draft response</td><td>Review evidence</td></tr>
                                                <tr><td>SLA dashboard</td><td>Service insight</td></tr>
                                                <tr><td>Override log</td><td>Human decision</td></tr>
                                                <tr><td>Masking proof</td><td>Data control</td></tr>
                                                <tr><td>KB candidate</td><td>Learning loop</td></tr>
                                                <tr><td>ITSM update</td><td>Action completed</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Limitations And SAP Evidence Base",
                                        "html":  `
                                          <h3>Known Limitations</h3>
                                          <ul>
                                            <li>Poorly described tickets reduce classification quality and should trigger clarification prompts.</li>
                                            <li>Unclear resolver ownership causes routing ambiguity and should be remediated before automation.</li>
                                            <li>Stale KB content can produce weak retrieval results and requires assigned content owners.</li>
                                            <li>AI-generated responses remain draft-only until reviewed by accountable support staff.</li>
                                            <li>Fallback rules are required when AI services or retrieval indexes are unavailable.</li>
                                          </ul>
                                          <h3>Reference Links</h3>
                                          <ul>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/about" target="_blank" rel="noreferrer">SAP Cloud ALM APIs</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/itsm-api" target="_blank" rel="noreferrer">SAP Cloud ALM ITSM API</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/service-requests-api" target="_blank" rel="noreferrer">SAP Cloud ALM Service Requests API</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/what-is-sap-ai-core" target="_blank" rel="noreferrer">SAP AI Core</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5" target="_blank" rel="noreferrer">Generative AI hub in SAP AI Core</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry" target="_blank" rel="noreferrer">Prompt Registry</a></li>
                                            <li><a href="https://help.sap.com/docs/build-process-automation/sap-build-process-automation/about" target="_blank" rel="noreferrer">SAP Build Process Automation</a></li>
                                            <li><a href="https://help.sap.com/docs/build-process-automation/sap-build-process-automation/create-approval-form" target="_blank" rel="noreferrer">Approval forms</a></li>
                                          </ul>
                                        `
                                    }
                                ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "SAP Cloud ALM",
                                      "AMS",
                                      "Service Operations",
                                      "ITSM"
                                  ],
                         "businessProcess":  "AMS / IT Service Management / Application Operations",
                         "workstream":  "AI-Powered AMS Control Tower",
                         "requirement":  {
                                             "externalId":  "REQ-AMS-001",
                                             "title":  "AI-Powered AMS Control Tower",
                                             "description":  "<p>Implement a customer-ready AMS control tower that improves SAP support intake, classification, duplicate detection, resolver routing, first response, SLA visibility, knowledge retrieval, and audit governance.</p><h2>Business Need</h2><p>Customers need cleaner AMS triage, faster routing, better SLA visibility, and reusable knowledge without removing human accountability for high-risk actions and final resolution.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; SAP Cloud ALM; AMS; Service Operations; ITSM",
                                             "plannedRelease":  "",
                                             "businessProcess":  "AMS / IT Service Management / Application Operations"
                                         },
                         "userStories":  [
                                             {
                                                 "externalId":  "US-AMS-001",
                                                 "title":  "US-AMS-001 - Clean Ticket Summary",
                                                 "persona":  "a service desk agent",
                                                 "want":  "a clean summary",
                                                 "soThat":  "I can triage each ticket faster",
                                                 "acceptanceCriteria":  [
                                                                            "Summary appears for each ticket.",
                                                                            "Summary preserves key business impact and missing information.",
                                                                            "Summary can be reviewed before use."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-002",
                                                 "title":  "US-AMS-002 - Module Classification",
                                                 "persona":  "an AMS lead",
                                                 "want":  "module classification",
                                                 "soThat":  "ticket routing quality improves",
                                                 "acceptanceCriteria":  [
                                                                            "Module and confidence are shown.",
                                                                            "Low-confidence cases require review.",
                                                                            "Corrected classifications are logged."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-003",
                                                 "title":  "US-AMS-003 - Similar Fix Retrieval",
                                                 "persona":  "a resolver",
                                                 "want":  "similar fixes",
                                                 "soThat":  "I can resolve incidents faster",
                                                 "acceptanceCriteria":  [
                                                                            "Resolved cases are ranked.",
                                                                            "KBs and runbooks are shown when available.",
                                                                            "Resolver can open evidence links."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-004",
                                                 "title":  "US-AMS-004 - Duplicate Grouping",
                                                 "persona":  "a service manager",
                                                 "want":  "duplicate grouping",
                                                 "soThat":  "backlog noise is reduced",
                                                 "acceptanceCriteria":  [
                                                                            "Duplicate candidates are visible.",
                                                                            "Candidates show confidence and rationale.",
                                                                            "Human users can confirm or reject duplicate grouping."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-005",
                                                 "title":  "US-AMS-005 - SLA Risk",
                                                 "persona":  "a support lead",
                                                 "want":  "SLA risk visibility",
                                                 "soThat":  "breach risks are addressed early",
                                                 "acceptanceCriteria":  [
                                                                            "Breach-risk tickets are flagged.",
                                                                            "Aging and SLA clock are visible.",
                                                                            "Escalation actions are tracked."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-006",
                                                 "title":  "US-AMS-006 - KB Candidates",
                                                 "persona":  "a KB owner",
                                                 "want":  "KB candidates",
                                                 "soThat":  "repeated fixes become reusable knowledge",
                                                 "acceptanceCriteria":  [
                                                                            "Repeated fixes are proposed.",
                                                                            "KB owner approval is required before publish.",
                                                                            "Rejected candidates capture reason."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-007",
                                                 "title":  "US-AMS-007 - Traceability",
                                                 "persona":  "an auditor",
                                                 "want":  "traceability",
                                                 "soThat":  "AI recommendations and human decisions are explainable",
                                                 "acceptanceCriteria":  [
                                                                            "Recommendations and overrides are logged.",
                                                                            "Prompt and model version are captured where AI is used.",
                                                                            "Audit export can be generated."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-AMS-008",
                                                 "title":  "US-AMS-008 - Routing Rationale",
                                                 "persona":  "a resolver owner",
                                                 "want":  "routing rationale",
                                                 "soThat":  "queue decisions can be governed",
                                                 "acceptanceCriteria":  [
                                                                            "Queue reason is displayed.",
                                                                            "Override reason is mandatory.",
                                                                            "Ownership changes are logged."
                                                                        ]
                                             }
                                         ],
                         "testCases":  [
                                           {
                                               "externalId":  "TC-AMS-001",
                                               "testCaseName":  "TC-AMS-001 - Happy Path Triage And Route",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Run AMS control tower happy path",
                                               "actionTitle":  "Ingest, classify, find duplicates, and route",
                                               "instructions":  [
                                                                    "Ingest a sample AMS ticket.",
                                                                    "Run classification.",
                                                                    "Find duplicate candidates.",
                                                                    "Approve resolver route."
                                                                ],
                                               "expectedResult":  "Correct queue and rationale are shown."
                                           },
                                           {
                                               "externalId":  "TC-AMS-002",
                                               "testCaseName":  "TC-AMS-002 - Vague Ticket Clarification",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Handle vague ticket",
                                               "actionTitle":  "Submit short description",
                                               "instructions":  [
                                                                    "Submit a short vague ticket description.",
                                                                    "Run triage."
                                                                ],
                                               "expectedResult":  "Clarification checklist is shown."
                                           },
                                           {
                                               "externalId":  "TC-AMS-003",
                                               "testCaseName":  "TC-AMS-003 - Duplicate Detection",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Detect duplicate ticket",
                                               "actionTitle":  "Submit repeated issue",
                                               "instructions":  [
                                                                    "Submit a repeated issue with similar symptoms.",
                                                                    "Run duplicate detection."
                                                                ],
                                               "expectedResult":  "Duplicate candidates are ranked."
                                           },
                                           {
                                               "externalId":  "TC-AMS-004",
                                               "testCaseName":  "TC-AMS-004 - Low Confidence Review",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Route ambiguous module text",
                                               "actionTitle":  "Use ambiguous module text",
                                               "instructions":  [
                                                                    "Submit ambiguous issue text.",
                                                                    "Run module classification."
                                                                ],
                                               "expectedResult":  "Human review is required."
                                           },
                                           {
                                               "externalId":  "TC-AMS-005",
                                               "testCaseName":  "TC-AMS-005 - Critical Impact Escalation",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Escalate outage ticket",
                                               "actionTitle":  "Submit outage ticket",
                                               "instructions":  [
                                                                    "Submit a critical outage ticket.",
                                                                    "Run triage."
                                                                ],
                                               "expectedResult":  "Escalation path is triggered."
                                           },
                                           {
                                               "externalId":  "TC-AMS-006",
                                               "testCaseName":  "TC-AMS-006 - Draft Response Review",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Generate first response",
                                               "actionTitle":  "Generate draft response",
                                               "instructions":  [
                                                                    "Generate the first response for a sample ticket.",
                                                                    "Review generated text."
                                                                ],
                                               "expectedResult":  "Human review is required."
                                           },
                                           {
                                               "externalId":  "TC-AMS-007",
                                               "testCaseName":  "TC-AMS-007 - PII Masking",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Validate PII masking",
                                               "actionTitle":  "Include sensitive text",
                                               "instructions":  [
                                                                    "Submit a ticket with sensitive text.",
                                                                    "Run AI-assisted triage."
                                                                ],
                                               "expectedResult":  "Sensitive text is masked before AI processing."
                                           },
                                           {
                                               "externalId":  "TC-AMS-008",
                                               "testCaseName":  "TC-AMS-008 - ITSM Update",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Update source ITSM",
                                               "actionTitle":  "Approve route",
                                               "instructions":  [
                                                                    "Approve the recommended route.",
                                                                    "Sync the ticket update to source ITSM."
                                                                ],
                                               "expectedResult":  "Source ticket is updated."
                                           },
                                           {
                                               "externalId":  "TC-AMS-009",
                                               "testCaseName":  "TC-AMS-009 - Override Routing",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Override recommended queue",
                                               "actionTitle":  "Change suggested queue",
                                               "instructions":  [
                                                                    "Change the suggested resolver queue.",
                                                                    "Enter override reason."
                                                                ],
                                               "expectedResult":  "Reason is captured."
                                           },
                                           {
                                               "externalId":  "TC-AMS-010",
                                               "testCaseName":  "TC-AMS-010 - AI Outage Fallback",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Validate fallback",
                                               "actionTitle":  "Disable AI service",
                                               "instructions":  [
                                                                    "Disable or simulate unavailability of the AI service.",
                                                                    "Run triage for a sample ticket."
                                                                ],
                                               "expectedResult":  "Rule-based fallback works."
                                           }
                                       ]
                     },
        "sources":  [
                        {
                            "label":  "SAP Cloud ALM APIs",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/about"
                        },
                        {
                            "label":  "SAP Cloud ALM ITSM API",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/itsm-api"
                        },
                        {
                            "label":  "SAP Cloud ALM Service Requests API",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/service-requests-api"
                        },
                        {
                            "label":  "SAP AI Core",
                            "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/what-is-sap-ai-core"
                        },
                        {
                            "label":  "Generative AI hub in SAP AI Core",
                            "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                        },
                        {
                            "label":  "Prompt Registry",
                            "url":  "https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry"
                        },
                        {
                            "label":  "SAP Build Process Automation",
                            "url":  "https://help.sap.com/docs/build-process-automation/sap-build-process-automation/about"
                        },
                        {
                            "label":  "SAP Build Process Automation approval forms",
                            "url":  "https://help.sap.com/docs/build-process-automation/sap-build-process-automation/create-approval-form"
                        }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Package the customer-ready AMS control tower offer: support taxonomy, source inventory, canonical ticket schema, routing and SLA rules, retrieval index, prompts, dashboards, Cloud ALM backlog, user stories, test scripts, security controls, role matrix, go-live criteria, evidence checklist, and supervised pilot plan."
    },
    {
        "id":  "ai-integration-operations-shield",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "AI Integration Operations Shield",
        "detailAliases":  [
                              "ai-integration-operations-shield-side",
                              "integration-operations-shield"
                          ],
        "status":  "Customer accelerator",
        "pattern":  "AI",
        "category":  "AI",
        "tagLabel":  "AI",
        "description":  "Customer-ready SAP accelerator for an AI-enabled operations layer that correlates integration failures, ranks probable causes, retrieves runbooks, and reduces recurring failure patterns.",
        "function":  "Create an integration operations shield using SAP Integration Suite, SAP Cloud ALM, SAP BTP, SAP AI Core, HANA Cloud, and workflow controls to lower MTTR for critical interfaces.",
        "summary":  "AI Integration Operations Shield accelerates integration recovery by connecting message logs, monitoring alerts, ITSM incidents, interface ownership, dependencies, runbooks, prior cases, and business criticality into one governed operations view. It groups noisy errors, suggests probable cause and recovery steps, highlights SLA risk, and converts recurring failures into structural backlog items.",
        "useCase":  [
                        {
                            "text":  "Use this accelerator when SAP integration failures are distributed across logs, queues, alerts, and ITSM tickets, and support teams need a faster way to correlate failures with ownership, impact, runbooks, and prior recovery evidence."
                        },
                        {
                            "heading":  "It helps operations teams",
                            "items":  [
                                          "Surface critical interface failures with business context.",
                                          "Group noisy errors into actionable patterns.",
                                          "Suggest probable cause and recovery steps from prior cases and runbooks.",
                                          "Convert repeat failures into structural improvement backlog items.",
                                          "Give operations, integration, and business owners one evidence view."
                                      ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
                                    <p>Scenario: A sales-order replication interface from SAP S/4HANA to a warehouse platform starts failing during peak order volume. Multiple ITSM tickets are raised, but the same root cause is visible across several message failures.</p>
                                    <div class="detail-table-wrap">
                                      <table class="detail-table">
                                        <thead><tr><th>Area</th><th>Example output</th></tr></thead>
                                        <tbody>
                                          <tr><td>Detected pattern</td><td>Payload validation errors on delivery block field</td></tr>
                                          <tr><td>Impacted flow</td><td>Order-to-warehouse replication</td></tr>
                                          <tr><td>Business impact</td><td>Warehouse release delay for priority orders</td></tr>
                                          <tr><td>Likely cause</td><td>New field mapping not accepted by target API</td></tr>
                                          <tr><td>Suggested owner</td><td>Integration team plus warehouse API owner</td></tr>
                                          <tr><td>Runbook guidance</td><td>Pause replay, validate mapping, retry sample batch</td></tr>
                                          <tr><td>Backlog output</td><td>Add schema validation and alert threshold</td></tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "Use when critical SAP interfaces need faster recovery and lower MTTR.",
                         "Use when SAP Integration Suite or monitoring data is available.",
                         "Use when interface ownership, SLA tiers, recurring failures, runbooks, or prior fixes can be reused.",
                         "Stabilize first when there is no reliable interface catalog, message logs cannot be accessed, payload masking rules are missing, ownership is unclear, or automated retry rights are not approved."
                     ],
        "implementation":  [
                              "Set operations scope: critical interfaces, source systems, target systems, SLA tiers, and owner groups.",
                              "Create the interface catalog with flow name, business process, dependencies, owner, SLA, and runbook link.",
                              "Connect data sources: message logs, monitoring alerts, ITSM incidents, observability data, and prior recovery notes.",
                              "Apply masking to remove or suppress sensitive payload fields before AI processing and storage.",
                              "Normalize platform-specific logs into the canonical error ontology.",
                              "Correlate events by interface, dependency, time window, payload pattern, and business process.",
                              "Retrieve guidance from similar incidents, runbooks, and known recovery paths.",
                              "Generate the action view with probable cause, resolver group, recovery steps, SLA risk, and retry recommendation.",
                              "Review and act by routing to integration operations, executing approved recovery, or creating engineering backlog items.",
                              "Learn after closure by updating pattern library, runbook quality, recurring failure tracker, and structural fix backlog."
                          ],
        "collapsibleSections":  [
                                    {
                                        "title":  "Purpose And Summary",
                                        "html":  `
                                          <p>AI-enabled operations layer for SAP integrations, failure correlation, probable-cause guidance, runbook retrieval, and recurring-pattern reduction.</p>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Area</th><th>Customer-ready summary</th></tr></thead>
                                              <tbody>
                                                <tr><td>Purpose</td><td>Accelerate integration recovery.</td></tr>
                                                <tr><td>Primary outcome</td><td>Lower MTTR for critical interfaces.</td></tr>
                                                <tr><td>Operating model</td><td>Ops cockpit, runbook guidance, backlog feed.</td></tr>
                                                <tr><td>SAP foundation</td><td>Integration Suite, BTP, Cloud ALM, AI Core/genAI hub.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Business Gap Addressed</h3>
                                          <p>Integration failures are distributed across logs, queues, alerts, and ITSM tickets. The operations shield correlates failures with interface ownership, dependencies, runbooks, prior incidents, and business criticality so the support team can recover faster and prevent repeat failures.</p>
                                          <ul>
                                            <li>Critical interface failures are surfaced with business context.</li>
                                            <li>Noisy errors are grouped into actionable patterns.</li>
                                            <li>Probable cause and recovery steps are suggested from prior cases.</li>
                                            <li>Repeat failures are converted into structural improvement backlog items.</li>
                                            <li>Operations, integration, and business owners share one evidence view.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Solution Scope And Decision Conditions",
                                        "html":  `
                                          <h3>Solution We Are Providing</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Capability</th><th>What it does</th></tr></thead>
                                              <tbody>
                                                <tr><td>Failure capture</td><td>Logs, alerts, failed messages</td></tr>
                                                <tr><td>Correlation</td><td>Interface, dependency, process</td></tr>
                                                <tr><td>Error grouping</td><td>Cluster similar failures</td></tr>
                                                <tr><td>Runbook retrieval</td><td>Relevant fix steps</td></tr>
                                                <tr><td>Cause ranking</td><td>Likely cause and owner</td></tr>
                                                <tr><td>Health cockpit</td><td>Critical flow status</td></tr>
                                                <tr><td>Backlog feed</td><td>Recurring structural fixes</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>When To Take Forward</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Decision</th><th>Condition</th></tr></thead>
                                              <tbody>
                                                <tr><td>Proceed</td><td>Critical SAP interfaces need faster recovery.</td></tr>
                                                <tr><td>Proceed</td><td>SAP Integration Suite or monitoring data is available.</td></tr>
                                                <tr><td>Proceed</td><td>Interface ownership and SLA tiers are known.</td></tr>
                                                <tr><td>Proceed</td><td>Recurring failures are visible in tickets or logs.</td></tr>
                                                <tr><td>Proceed</td><td>Runbooks or prior fixes can be reused.</td></tr>
                                                <tr><td>Stabilize first</td><td>No reliable interface catalog exists.</td></tr>
                                                <tr><td>Stabilize first</td><td>Message logs cannot be accessed.</td></tr>
                                                <tr><td>Stabilize first</td><td>Payload masking rules are not defined.</td></tr>
                                                <tr><td>Stabilize first</td><td>Resolver ownership is unclear.</td></tr>
                                                <tr><td>Stabilize first</td><td>Automated retry rights are not approved.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "SAP-Aligned Component Design",
                                        "html":  `
                                          <h3>Component Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Component</th><th>Role</th></tr></thead>
                                              <tbody>
                                                <tr><td>SAP Integration Suite</td><td>iFlow and message monitoring</td></tr>
                                                <tr><td>Cloud Integration logs</td><td>Message failure evidence</td></tr>
                                                <tr><td>Advanced Event Mesh</td><td>Event-driven telemetry</td></tr>
                                                <tr><td>SAP Cloud ALM</td><td>Monitoring and ITSM context</td></tr>
                                                <tr><td>SAP BTP / CAP</td><td>Ops APIs and cockpit services</td></tr>
                                                <tr><td>SAP AI Core / genAI hub</td><td>Classifier and summaries</td></tr>
                                                <tr><td>SAP HANA Cloud</td><td>Operational mart and trends</td></tr>
                                                <tr><td>Build Process Automation</td><td>Approval and action workflow</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Functional Architecture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Layer</th><th>Design decision</th></tr></thead>
                                              <tbody>
                                                <tr><td>Experience</td><td>Cockpit, health view, alerts, backlog</td></tr>
                                                <tr><td>Application</td><td>Ingestion, masking, correlation, workflow</td></tr>
                                                <tr><td>AI</td><td>Classifier, similarity, summary, action advice</td></tr>
                                                <tr><td>Data</td><td>Log mart, interface catalog, runbook store</td></tr>
                                                <tr><td>Integration</td><td>Integration Suite, Cloud ALM, ITSM, observability</td></tr>
                                                <tr><td>Governance</td><td>RBAC, masking, audit, approval gates</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Canonical Model, Ontology, And AI Design",
                                        "html":  `
                                          <h3>Canonical Operations Data Model</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Entity</th><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>Interface</td><td>Named flow or API</td></tr>
                                                <tr><td>Message</td><td>Run, payload metadata, status</td></tr>
                                                <tr><td>Error event</td><td>Code, text, timestamp</td></tr>
                                                <tr><td>Dependency</td><td>Source, target, queue, API</td></tr>
                                                <tr><td>Business process</td><td>Impacted process</td></tr>
                                                <tr><td>SLA tier</td><td>Criticality and target</td></tr>
                                                <tr><td>Runbook</td><td>Approved recovery steps</td></tr>
                                                <tr><td>Incident</td><td>ITSM case and outcome</td></tr>
                                                <tr><td>Pattern</td><td>Recurring failure cluster</td></tr>
                                                <tr><td>Action</td><td>Retry, route, fix, backlog</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Interface And Error Ontology</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Error class</th><th>Meaning</th></tr></thead>
                                              <tbody>
                                                <tr><td>Connectivity</td><td>Timeout, DNS, TLS, endpoint</td></tr>
                                                <tr><td>Authentication</td><td>Token, certificate, credential</td></tr>
                                                <tr><td>Authorization</td><td>Permission or role issue</td></tr>
                                                <tr><td>Payload</td><td>Schema, mapping, mandatory field</td></tr>
                                                <tr><td>Master data</td><td>Missing customer, vendor, material</td></tr>
                                                <tr><td>Business rule</td><td>Validation or status conflict</td></tr>
                                                <tr><td>Throughput</td><td>Queue, volume, throttling</td></tr>
                                                <tr><td>Downstream</td><td>Target unavailable or rejecting</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>AI Capability Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>AI function</th><th>Controlled use</th></tr></thead>
                                              <tbody>
                                                <tr><td>Error classifier</td><td>Assigns error class</td></tr>
                                                <tr><td>Similarity search</td><td>Finds prior fixes</td></tr>
                                                <tr><td>Cause ranking</td><td>Suggests likely cause</td></tr>
                                                <tr><td>Runbook retrieval</td><td>Returns approved steps</td></tr>
                                                <tr><td>Anomaly detection</td><td>Flags unusual spikes</td></tr>
                                                <tr><td>Summary drafting</td><td>Creates ops brief</td></tr>
                                                <tr><td>Fix recommendation</td><td>Creates backlog item</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Implementation, Controls, And Outputs",
                                        "html":  `
                                          <h3>Step-by-Step Reusable Process</h3>
                                          <ol>
                                            <li>Set operations scope: critical interfaces, source systems, target systems, SLA tiers, and owner groups.</li>
                                            <li>Create interface catalog: flow name, business process, dependencies, owner, SLA, and runbook link.</li>
                                            <li>Connect data sources: message logs, monitoring alerts, ITSM incidents, observability data, and prior recovery notes.</li>
                                            <li>Apply masking: remove or suppress sensitive payload fields before AI processing and storage.</li>
                                            <li>Normalize errors: convert platform-specific logs into the canonical error ontology.</li>
                                            <li>Correlate events: group failures by interface, dependency, time window, payload pattern, and business process.</li>
                                            <li>Retrieve guidance: link similar incidents, runbooks, and known recovery paths to each failure cluster.</li>
                                            <li>Generate action view: show probable cause, resolver group, recovery steps, SLA risk, and retry recommendation.</li>
                                            <li>Review and act: route to integration operations, execute approved recovery, or create engineering backlog item.</li>
                                            <li>Learn after closure: update pattern library, runbook quality, recurring failure tracker, and structural fix backlog.</li>
                                          </ol>
                                          <h3>Decision Rules And Controls</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Signal</th><th>Action</th></tr></thead>
                                              <tbody>
                                                <tr><td>Critical flow failed</td><td>Escalate immediately</td></tr>
                                                <tr><td>Known transient error</td><td>Suggest controlled retry</td></tr>
                                                <tr><td>Payload error</td><td>Route to functional/data owner</td></tr>
                                                <tr><td>Mapping error</td><td>Route to integration team</td></tr>
                                                <tr><td>Auth error</td><td>Route to security/Basis owner</td></tr>
                                                <tr><td>Downstream outage</td><td>Notify dependency owner</td></tr>
                                                <tr><td>Repeat pattern</td><td>Create structural fix item</td></tr>
                                                <tr><td>Low confidence</td><td>Human review required</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Dashboards And Outputs</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Output</th><th>Content</th></tr></thead>
                                              <tbody>
                                                <tr><td>Ops cockpit</td><td>Failures by critical flow</td></tr>
                                                <tr><td>Health dashboard</td><td>Status, SLA, backlog</td></tr>
                                                <tr><td>Failure cluster view</td><td>Grouped errors and owners</td></tr>
                                                <tr><td>Runbook panel</td><td>Suggested recovery steps</td></tr>
                                                <tr><td>SLA risk view</td><td>At-risk interfaces</td></tr>
                                                <tr><td>Pattern report</td><td>Recurring failures</td></tr>
                                                <tr><td>Backlog tracker</td><td>Structural fixes</td></tr>
                                                <tr><td>Evidence export</td><td>Audit and review pack</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Cloud ALM-Ready Backlog And User Stories",
                                        "exports":  [
                                                        "requirement",
                                                        "user-stories"
                                                    ],
                                        "html":  `
                                          <h3>Cloud ALM-Ready Backlog</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Requirement</th><th>Outcome</th></tr></thead>
                                              <tbody>
                                                <tr><td>REQ-IOS-001</td><td>Interface catalog</td><td>Load critical flows</td></tr>
                                                <tr><td>REQ-IOS-002</td><td>Log ingestion</td><td>Capture failed messages</td></tr>
                                                <tr><td>REQ-IOS-003</td><td>Payload masking</td><td>Protect sensitive fields</td></tr>
                                                <tr><td>REQ-IOS-004</td><td>Error classification</td><td>Assign error class</td></tr>
                                                <tr><td>REQ-IOS-005</td><td>Runbook retrieval</td><td>Show recovery steps</td></tr>
                                                <tr><td>REQ-IOS-006</td><td>Cause ranking</td><td>Suggest likely cause</td></tr>
                                                <tr><td>REQ-IOS-007</td><td>Health cockpit</td><td>Show flow status</td></tr>
                                                <tr><td>REQ-IOS-008</td><td>Backlog feed</td><td>Create fix items</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>User Stories</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Role</th><th>Need</th><th>Value</th></tr></thead>
                                              <tbody>
                                                <tr><td>US-IOS-001</td><td>Ops analyst</td><td>See failed interfaces</td><td>Triage faster</td></tr>
                                                <tr><td>US-IOS-002</td><td>Integration lead</td><td>View error clusters</td><td>Reduce noise</td></tr>
                                                <tr><td>US-IOS-003</td><td>Resolver</td><td>Get runbook steps</td><td>Recover faster</td></tr>
                                                <tr><td>US-IOS-004</td><td>Service manager</td><td>See SLA risk</td><td>Act early</td></tr>
                                                <tr><td>US-IOS-005</td><td>Business owner</td><td>View process impact</td><td>Prioritize fixes</td></tr>
                                                <tr><td>US-IOS-006</td><td>Architect</td><td>See repeat patterns</td><td>Plan structural fixes</td></tr>
                                                <tr><td>US-IOS-007</td><td>Security lead</td><td>Confirm masking</td><td>Protect payload data</td></tr>
                                                <tr><td>US-IOS-008</td><td>Auditor</td><td>Review actions</td><td>Trace decisions</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Executable Test Script",
                                        "exports":  [
                                                        "test-cases"
                                                    ],
                                        "html":  `
                                          <h3>Test Scripts</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Scenario</th><th>Action</th><th>Expected result</th></tr></thead>
                                              <tbody>
                                                <tr><td>TS-IOS-001</td><td>Log ingestion</td><td>Load failed message</td><td>Failure appears</td></tr>
                                                <tr><td>TS-IOS-002</td><td>Masking</td><td>Load sensitive payload</td><td>Fields masked</td></tr>
                                                <tr><td>TS-IOS-003</td><td>Classification</td><td>Run classifier</td><td>Error class assigned</td></tr>
                                                <tr><td>TS-IOS-004</td><td>Correlation</td><td>Load related errors</td><td>Cluster created</td></tr>
                                                <tr><td>TS-IOS-005</td><td>Runbook</td><td>Open failure</td><td>Relevant steps shown</td></tr>
                                                <tr><td>TS-IOS-006</td><td>Routing</td><td>Assign resolver</td><td>Correct group suggested</td></tr>
                                                <tr><td>TS-IOS-007</td><td>Retry control</td><td>Suggest retry</td><td>Approval required</td></tr>
                                                <tr><td>TS-IOS-008</td><td>SLA risk</td><td>Age critical failure</td><td>Risk alert shown</td></tr>
                                                <tr><td>TS-IOS-009</td><td>Backlog</td><td>Repeat failure</td><td>Fix item created</td></tr>
                                                <tr><td>TS-IOS-010</td><td>Audit</td><td>Override action</td><td>Reason logged</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Governance, Readiness, Evidence, And Risks",
                                        "html":  `
                                          <h3>Security, Governance And Controls</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Control</th><th>Design</th></tr></thead>
                                              <tbody>
                                                <tr><td>Access</td><td>Role-based ops and owner views</td></tr>
                                                <tr><td>Payload safety</td><td>Mask before AI processing</td></tr>
                                                <tr><td>Action control</td><td>Approval for retries/actions</td></tr>
                                                <tr><td>Audit</td><td>Prompts, outputs, actions logged</td></tr>
                                                <tr><td>Model control</td><td>Prompt and model versions tracked</td></tr>
                                                <tr><td>Fallback</td><td>Rules work without AI service</td></tr>
                                                <tr><td>Retention</td><td>Logs kept by policy</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Operations Readiness Criteria</h3>
                                          <ul>
                                            <li>Critical interface catalog is loaded and owner-validated.</li>
                                            <li>Message logs and failure events are ingested reliably.</li>
                                            <li>Sensitive payload fields are masked before AI use.</li>
                                            <li>Error ontology and resolver mapping are approved.</li>
                                            <li>Runbooks are linked to priority interfaces and known errors.</li>
                                            <li>Failure clusters are explainable to integration operations.</li>
                                            <li>Controlled retry and automated action rules are approved.</li>
                                            <li>Health dashboard shows status, SLA risk, and open patterns.</li>
                                            <li>Override and action history is captured for audit.</li>
                                            <li>Recurring-pattern backlog is reviewed by engineering owners.</li>
                                          </ul>
                                          <h3>Evidence To Capture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Evidence</th><th>Capture method</th></tr></thead>
                                              <tbody>
                                                <tr><td>Interface catalog</td><td>Flow, owner, SLA, process</td></tr>
                                                <tr><td>Failure cluster</td><td>Grouped error screenshot</td></tr>
                                                <tr><td>Masking proof</td><td>Payload safety evidence</td></tr>
                                                <tr><td>Runbook link</td><td>Recovery guidance shown</td></tr>
                                                <tr><td>Health view</td><td>Dashboard screenshot/export</td></tr>
                                                <tr><td>Action log</td><td>Retry or route decision</td></tr>
                                                <tr><td>Backlog item</td><td>Structural fix created</td></tr>
                                                <tr><td>Pattern report</td><td>Recurring failure summary</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Known Limitations And Remediation</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Limitation</th><th>Remediation</th></tr></thead>
                                              <tbody>
                                                <tr><td>Incomplete catalog</td><td>Start with top critical flows</td></tr>
                                                <tr><td>Noisy logs</td><td>Normalize error classes first</td></tr>
                                                <tr><td>Sensitive payloads</td><td>Use metadata-only processing</td></tr>
                                                <tr><td>Weak runbooks</td><td>Approve minimum recovery steps</td></tr>
                                                <tr><td>False grouping</td><td>Use human confirmation</td></tr>
                                                <tr><td>Unsafe retries</td><td>Require approval workflow</td></tr>
                                                <tr><td>Tool fragmentation</td><td>Use canonical model and connectors</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Reusable Deliverables</h3>
                                          <ul>
                                            <li>Integration operations shield overview</li>
                                            <li>Critical interface catalog template</li>
                                            <li>Canonical operations data model</li>
                                            <li>Error ontology and resolver map</li>
                                            <li>Payload masking checklist</li>
                                            <li>Runbook and knowledge template</li>
                                            <li>Correlation and routing rules</li>
                                            <li>SLA risk model</li>
                                            <li>Operations cockpit wireframe</li>
                                            <li>Cloud ALM backlog items, user stories, test scripts, security checklist, evidence checklist, and limitations guide</li>
                                          </ul>
                                          <h3>Shared Dependencies And Risks</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Risk</th><th>Mitigation</th></tr></thead>
                                              <tbody>
                                                <tr><td>Data quality</td><td>Clean logs and catalog first</td></tr>
                                                <tr><td>Over-automation</td><td>Use approval gates</td></tr>
                                                <tr><td>Fragmented tools</td><td>Normalize into one model</td></tr>
                                                <tr><td>Payload privacy</td><td>Mask and restrict access</td></tr>
                                                <tr><td>Runbook gaps</td><td>Start with priority flows</td></tr>
                                                <tr><td>Ownership gaps</td><td>Confirm resolver matrix</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "SAP Evidence Base",
                                        "html":  `
                                          <h3>Reference Links</h3>
                                          <ul>
                                            <li><a href="https://help.sap.com/docs/integration-suite/sap-integration-suite/message-processing-logs" target="_blank" rel="noreferrer">SAP Integration Suite - Message Processing Logs</a></li>
                                            <li><a href="https://help.sap.com/docs/integration-suite/sap-integration-suite/monitor-message-processing" target="_blank" rel="noreferrer">SAP Integration Suite - Monitor Message Processing</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/applicationhelp/integration-exception-monitoring" target="_blank" rel="noreferrer">SAP Cloud ALM - Integration and Exception Monitoring</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/apis/integration-monitoring-analytics-api" target="_blank" rel="noreferrer">SAP Cloud ALM - Integration Monitoring Analytics API</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-integration-suite/advanced-event-mesh/what-is-sap-integration-suite-advanced-event-mesh" target="_blank" rel="noreferrer">SAP Integration Suite - Advanced Event Mesh Overview</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5" target="_blank" rel="noreferrer">SAP AI Core - Generative AI Hub</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry" target="_blank" rel="noreferrer">SAP AI Core - Prompt Registry</a></li>
                                            <li><a href="https://help.sap.com/docs/btp/sap-business-technology-platform/developing-with-sap-cloud-application-programming-model" target="_blank" rel="noreferrer">SAP BTP - CAP Development</a></li>
                                          </ul>
                                        `
                                    }
                                ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "SAP Integration Suite",
                                      "SAP Cloud ALM",
                                      "Operations",
                                      "Integration"
                                  ],
                         "businessProcess":  "Integration Operations / Application Operations",
                         "workstream":  "AI Integration Operations Shield",
                         "requirement":  {
                                             "externalId":  "REQ-IOS-001",
                                             "title":  "AI Integration Operations Shield",
                                             "description":  "<p>Implement a customer-ready AI-enabled integration operations shield for SAP interfaces, failure correlation, probable-cause guidance, runbook retrieval, SLA-risk visibility, and recurring-pattern reduction.</p><h2>Business Need</h2><p>Customers need faster recovery and lower MTTR for critical SAP integrations by connecting logs, alerts, ITSM tickets, runbooks, ownership, and business context into one governed operations view.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; SAP Integration Suite; SAP Cloud ALM; Operations; Integration",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Integration Operations / Application Operations"
                                         },
                         "userStories":  [
                                             {
                                                 "externalId":  "US-IOS-001",
                                                 "title":  "US-IOS-001 - See Failed Interfaces",
                                                 "persona":  "an ops analyst",
                                                 "want":  "to see failed interfaces",
                                                 "soThat":  "I can triage faster",
                                                 "acceptanceCriteria":  [
                                                                            "Failed critical interfaces are visible with timestamp, owner, and SLA tier.",
                                                                            "Failures link to message evidence.",
                                                                            "Business impact is visible where mapped."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-002",
                                                 "title":  "US-IOS-002 - View Error Clusters",
                                                 "persona":  "an integration lead",
                                                 "want":  "to view error clusters",
                                                 "soThat":  "I can reduce noise",
                                                 "acceptanceCriteria":  [
                                                                            "Similar failures are grouped by interface, dependency, and error class.",
                                                                            "Cluster confidence and evidence are shown.",
                                                                            "Human users can confirm or split a cluster."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-003",
                                                 "title":  "US-IOS-003 - Get Runbook Steps",
                                                 "persona":  "a resolver",
                                                 "want":  "runbook steps",
                                                 "soThat":  "I can recover faster",
                                                 "acceptanceCriteria":  [
                                                                            "Relevant runbooks are shown for a failure cluster.",
                                                                            "Runbook source and approval status are visible.",
                                                                            "Recovery steps can be copied into an action."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-004",
                                                 "title":  "US-IOS-004 - See SLA Risk",
                                                 "persona":  "a service manager",
                                                 "want":  "SLA risk visibility",
                                                 "soThat":  "I can act early",
                                                 "acceptanceCriteria":  [
                                                                            "At-risk interfaces are highlighted.",
                                                                            "Age, SLA tier, and owner are visible.",
                                                                            "Escalation status is tracked."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-005",
                                                 "title":  "US-IOS-005 - View Process Impact",
                                                 "persona":  "a business owner",
                                                 "want":  "process impact visibility",
                                                 "soThat":  "I can prioritize fixes",
                                                 "acceptanceCriteria":  [
                                                                            "Impacted process is shown for mapped interfaces.",
                                                                            "Critical process failures are escalated.",
                                                                            "Evidence links are available."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-006",
                                                 "title":  "US-IOS-006 - See Repeat Patterns",
                                                 "persona":  "an architect",
                                                 "want":  "repeat pattern visibility",
                                                 "soThat":  "I can plan structural fixes",
                                                 "acceptanceCriteria":  [
                                                                            "Recurring failures are tracked over time.",
                                                                            "Structural fix candidates are created.",
                                                                            "Backlog items include evidence and owner."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-007",
                                                 "title":  "US-IOS-007 - Confirm Masking",
                                                 "persona":  "a security lead",
                                                 "want":  "to confirm masking",
                                                 "soThat":  "payload data is protected",
                                                 "acceptanceCriteria":  [
                                                                            "Sensitive payload fields are masked before AI processing.",
                                                                            "Masking proof is captured.",
                                                                            "Restricted users cannot view protected fields."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-IOS-008",
                                                 "title":  "US-IOS-008 - Review Actions",
                                                 "persona":  "an auditor",
                                                 "want":  "to review actions",
                                                 "soThat":  "decisions are traceable",
                                                 "acceptanceCriteria":  [
                                                                            "Prompts, outputs, actions, approvals, and overrides are logged.",
                                                                            "Override reasons are mandatory.",
                                                                            "Evidence export is available."
                                                                        ]
                                             }
                                         ],
                         "testCases":  [
                                           {
                                               "externalId":  "TS-IOS-001",
                                               "testCaseName":  "TS-IOS-001 - Log Ingestion",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Load failed message",
                                               "actionTitle":  "Load failed message",
                                               "instructions":  [
                                                                    "Load a failed message from the configured source.",
                                                                    "Open the operations cockpit."
                                                                ],
                                               "expectedResult":  "Failure appears."
                                           },
                                           {
                                               "externalId":  "TS-IOS-002",
                                               "testCaseName":  "TS-IOS-002 - Payload Masking",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Validate masking",
                                               "actionTitle":  "Load sensitive payload",
                                               "instructions":  [
                                                                    "Load a failed message with sensitive payload fields.",
                                                                    "Run ingestion and classification."
                                                                ],
                                               "expectedResult":  "Fields are masked."
                                           },
                                           {
                                               "externalId":  "TS-IOS-003",
                                               "testCaseName":  "TS-IOS-003 - Error Classification",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Run classifier",
                                               "actionTitle":  "Run classifier",
                                               "instructions":  [
                                                                    "Select a failed message.",
                                                                    "Run error classification."
                                                                ],
                                               "expectedResult":  "Error class is assigned."
                                           },
                                           {
                                               "externalId":  "TS-IOS-004",
                                               "testCaseName":  "TS-IOS-004 - Failure Correlation",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Correlate related errors",
                                               "actionTitle":  "Load related errors",
                                               "instructions":  [
                                                                    "Load multiple related errors.",
                                                                    "Run correlation."
                                                                ],
                                               "expectedResult":  "Cluster is created."
                                           },
                                           {
                                               "externalId":  "TS-IOS-005",
                                               "testCaseName":  "TS-IOS-005 - Runbook Retrieval",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Open failure runbook",
                                               "actionTitle":  "Open failure",
                                               "instructions":  [
                                                                    "Open a failure cluster with a known runbook.",
                                                                    "Review suggested guidance."
                                                                ],
                                               "expectedResult":  "Relevant steps are shown."
                                           },
                                           {
                                               "externalId":  "TS-IOS-006",
                                               "testCaseName":  "TS-IOS-006 - Resolver Routing",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Assign resolver",
                                               "actionTitle":  "Assign resolver",
                                               "instructions":  [
                                                                    "Assign a resolver for a classified failure.",
                                                                    "Review suggested group."
                                                                ],
                                               "expectedResult":  "Correct group is suggested."
                                           },
                                           {
                                               "externalId":  "TS-IOS-007",
                                               "testCaseName":  "TS-IOS-007 - Retry Control",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Suggest controlled retry",
                                               "actionTitle":  "Suggest retry",
                                               "instructions":  [
                                                                    "Open a known transient error.",
                                                                    "Request retry recommendation."
                                                                ],
                                               "expectedResult":  "Approval is required."
                                           },
                                           {
                                               "externalId":  "TS-IOS-008",
                                               "testCaseName":  "TS-IOS-008 - SLA Risk",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Age critical failure",
                                               "actionTitle":  "Age critical failure",
                                               "instructions":  [
                                                                    "Set a critical failure near SLA threshold.",
                                                                    "Refresh health cockpit."
                                                                ],
                                               "expectedResult":  "Risk alert is shown."
                                           },
                                           {
                                               "externalId":  "TS-IOS-009",
                                               "testCaseName":  "TS-IOS-009 - Recurring Backlog",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Create fix item",
                                               "actionTitle":  "Repeat failure",
                                               "instructions":  [
                                                                    "Load repeat failure pattern.",
                                                                    "Generate backlog recommendation."
                                                                ],
                                               "expectedResult":  "Fix item is created."
                                           },
                                           {
                                               "externalId":  "TS-IOS-010",
                                               "testCaseName":  "TS-IOS-010 - Audit Override",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Override action",
                                               "actionTitle":  "Override action",
                                               "instructions":  [
                                                                    "Override a suggested route or retry.",
                                                                    "Enter reason."
                                                                ],
                                               "expectedResult":  "Reason is logged."
                                           }
                                       ]
                     },
        "sources":  [
                        {
                            "label":  "SAP Integration Suite - Message Processing Logs",
                            "url":  "https://help.sap.com/docs/integration-suite/sap-integration-suite/message-processing-logs"
                        },
                        {
                            "label":  "SAP Integration Suite - Monitor Message Processing",
                            "url":  "https://help.sap.com/docs/integration-suite/sap-integration-suite/monitor-message-processing"
                        },
                        {
                            "label":  "SAP Cloud ALM - Integration and Exception Monitoring",
                            "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/integration-exception-monitoring"
                        },
                        {
                            "label":  "SAP Cloud ALM - Integration Monitoring Analytics API",
                            "url":  "https://help.sap.com/docs/cloud-alm/apis/integration-monitoring-analytics-api"
                        },
                        {
                            "label":  "SAP Integration Suite - Advanced Event Mesh Overview",
                            "url":  "https://help.sap.com/docs/sap-integration-suite/advanced-event-mesh/what-is-sap-integration-suite-advanced-event-mesh"
                        },
                        {
                            "label":  "SAP AI Core - Generative AI Hub",
                            "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                        },
                        {
                            "label":  "SAP AI Core - Prompt Registry",
                            "url":  "https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry"
                        },
                        {
                            "label":  "SAP BTP - CAP Development",
                            "url":  "https://help.sap.com/docs/btp/sap-business-technology-platform/developing-with-sap-cloud-application-programming-model"
                        }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Package the customer-ready Integration Operations Shield offer: interface catalog, canonical operations model, error ontology, masking checklist, runbook template, correlation rules, routing controls, SLA risk model, operations cockpit, Cloud ALM backlog, user stories, test scripts, evidence checklist, and governance controls."
    },
    {
        "id":  "clean-core-ai-governance-service",
        "laneKey":  "side",
        "source":  "Customer",
        "sourceType":  "Customer Accelerator",
        "title":  "Clean Core AI Governance Service",
        "detailAliases":  [
                              "clean-core-ai-governance-service-side",
                              "ai-clean-core-governance-service"
                          ],
        "status":  "Customer accelerator",
        "pattern":  "AI",
        "category":  "AI",
        "tagLabel":  "AI",
        "description":  "Customer-ready SAP accelerator for architecture governance, clean-core risk scoring, extension review, waiver control, and modernization backlog planning.",
        "function":  "Build a governed clean-core service that inventories custom artifacts, classifies extension patterns, scores deviations, routes waiver decisions, and creates a prioritized remediation roadmap.",
        "summary":  "Clean Core AI Governance Service creates an evidence-based governance layer for SAP custom code, enhancements, interfaces, and extension patterns. It groups artifacts by type, usage, owner, and risk; classifies clean-core policy fit; scores high-risk deviations; generates board-ready decisions; and keeps modernization backlog visibility for release, upgrade, and transformation planning.",
        "useCase":  [
                        {
                            "text":  "Use this accelerator when SAP landscapes have accumulated custom code, enhancements, interfaces, and extension patterns over many project cycles and architecture teams need a structured clean-core view based on evidence rather than opinion."
                        },
                        {
                            "heading":  "It helps governance teams",
                            "items":  [
                                          "Inventory custom artifacts and group them by type, usage, owner, and risk.",
                                          "Classify extensions against clean-core policy and allowed extensibility patterns.",
                                          "Score high-risk deviations and route remediation, waiver, or retain decisions.",
                                          "Generate architecture board packs with business impact, technical risk, and proposed path.",
                                          "Keep the modernization backlog visible for release, upgrade, and transformation planning."
                                      ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
                                    <p>Scenario: A S/4HANA transformation program reviews finance and sales customizations before the next release cycle. The governance service imports custom objects, usage metrics, transport history, incident links, and architecture standards.</p>
                                    <div class="detail-table-wrap">
                                      <table class="detail-table">
                                        <thead><tr><th>Area</th><th>Example output</th></tr></thead>
                                        <tbody>
                                          <tr><td>Inventory finding</td><td>184 artifacts; 37 unused; 22 high deviation</td></tr>
                                          <tr><td>High-risk theme</td><td>Classic enhancements in pricing and billing</td></tr>
                                          <tr><td>Usage insight</td><td>Several Z reports have no recent usage</td></tr>
                                          <tr><td>Support signal</td><td>One interface causes recurring AMS incidents</td></tr>
                                          <tr><td>Recommendation</td><td>Retire unused reports, redesign pricing extension, stabilize interface</td></tr>
                                          <tr><td>Board decision</td><td>Approve two waivers, create six remediation work packages</td></tr>
                                          <tr><td>Roadmap output</td><td>Wave 1: retire/quick fixes; Wave 2: redesign high-risk extensions</td></tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "Use when a RISE, GROW, S/4HANA, or clean-core program is active.",
                         "Use when custom objects, enhancements, transports, interfaces, or extension patterns are in scope.",
                         "Use when the architecture board needs a ranked remediation view and upgradeability or cloud readiness is a governance priority.",
                         "Use when LeanIX, Cloud ALM, code analysis, repository data, or usage data can be used.",
                         "Stabilize first when artifact inventory is unreliable, usage data is unavailable, policy is not approved, waiver ownership is undefined, or code metadata access is not cleared."
                     ],
        "implementation":  [
                              "Set governance scope: landscape, business domain, custom object classes, extension types, and architecture board ownership.",
                              "Approve clean-core policy: allowed patterns, restricted patterns, waiver rules, and target extensibility model.",
                              "Collect inventory: custom code, enhancements, interfaces, transports, repositories, usage, incidents, and architecture decisions.",
                              "Normalize into the canonical model: artifact, object type, owner, usage, criticality, findings, dependencies, and support burden.",
                              "Classify artifacts by policy class, deviation type, confidence, and source evidence.",
                              "Score risk using clean-core deviation, usage, business criticality, incidents, complexity, and upgrade sensitivity.",
                              "Generate remediation paths: retire, replace with standard, convert to key-user extension, redesign with ABAP Cloud, move to BTP, or retain with waiver.",
                              "Review with architects to validate high-risk items, correct classifications, and approve waiver or remediation decisions.",
                              "Build roadmap waves by business priority, dependency, effort band, and release window.",
                              "Operate the governance cycle by refreshing findings, tracking new deviations, reviewing expiring waivers, and updating the architecture board pack."
                          ],
        "collapsibleSections":  [
                                    {
                                        "title":  "Purpose And Summary",
                                        "html":  `
                                          <p>Architecture governance service for clean-core risk scoring, extension review, waiver control, and modernization backlog planning.</p>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Area</th><th>Customer-ready summary</th></tr></thead>
                                              <tbody>
                                                <tr><td>Purpose</td><td>Identify high-risk SAP customizations and extensions.</td></tr>
                                                <tr><td>Primary outcome</td><td>Prioritized clean-core remediation backlog.</td></tr>
                                                <tr><td>Operating model</td><td>Governance cockpit, waiver workflow, architecture board pack.</td></tr>
                                                <tr><td>SAP foundation</td><td>SAP BTP, ABAP Cloud, SAP Cloud ALM, SAP LeanIX, AI Core/genAI hub.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Business Gap Addressed</h3>
                                          <p>SAP landscapes accumulate custom code, enhancements, interfaces, and extension patterns over many project cycles. The governance service creates a structured view of clean-core deviation, usage, business criticality, support burden, and remediation priority so that architecture decisions are based on evidence rather than opinion.</p>
                                          <ul>
                                            <li>Custom artifacts are inventoried and grouped by type, usage, owner, and risk.</li>
                                            <li>Extensions are classified against clean-core policy and allowed extensibility patterns.</li>
                                            <li>High-risk deviations are scored and routed into remediation, waiver, or retain decisions.</li>
                                            <li>Architecture board packs show business impact, technical risk, and proposed path.</li>
                                            <li>Modernization backlog is kept visible for release, upgrade, and transformation planning.</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "Solution Scope And Decision Conditions",
                                        "html":  `
                                          <h3>Solution We Are Providing</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Capability</th><th>What it does</th></tr></thead>
                                              <tbody>
                                                <tr><td>Inventory</td><td>Custom code, enhancements, interfaces</td></tr>
                                                <tr><td>Classification</td><td>Clean-core pattern and deviation</td></tr>
                                                <tr><td>Risk scoring</td><td>Usage, impact, support burden</td></tr>
                                                <tr><td>Remediation path</td><td>Retire, redesign, migrate, retain</td></tr>
                                                <tr><td>Waiver workflow</td><td>Approved exceptions with expiry</td></tr>
                                                <tr><td>Governance cockpit</td><td>Heatmap, backlog, decisions</td></tr>
                                                <tr><td>Board pack</td><td>Architecture decision summary</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>When To Take Forward</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Decision</th><th>Condition</th></tr></thead>
                                              <tbody>
                                                <tr><td>Proceed</td><td>RISE, GROW, S/4HANA, or clean-core program is active.</td></tr>
                                                <tr><td>Proceed</td><td>Custom objects, enhancements, transports, or interfaces are in scope.</td></tr>
                                                <tr><td>Proceed</td><td>Architecture board needs a ranked remediation view.</td></tr>
                                                <tr><td>Proceed</td><td>Upgradeability or cloud readiness is a known governance priority.</td></tr>
                                                <tr><td>Proceed</td><td>LeanIX, Cloud ALM, code analysis, or repository data can be used.</td></tr>
                                                <tr><td>Stabilize first</td><td>No reliable artifact inventory exists.</td></tr>
                                                <tr><td>Stabilize first</td><td>Usage data is unavailable or not trusted.</td></tr>
                                                <tr><td>Stabilize first</td><td>Clean-core policy is not approved.</td></tr>
                                                <tr><td>Stabilize first</td><td>Waiver ownership is not defined.</td></tr>
                                                <tr><td>Stabilize first</td><td>Code metadata access is not cleared.</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "SAP-Aligned Component Design",
                                        "html":  `
                                          <h3>Component Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Component</th><th>Role</th></tr></thead>
                                              <tbody>
                                                <tr><td>SAP BTP / CAP</td><td>Governance APIs and cockpit services</td></tr>
                                                <tr><td>SAP AI Core / genAI hub</td><td>Classification and summaries</td></tr>
                                                <tr><td>ABAP Cloud</td><td>Target model for upgrade-stable extensions</td></tr>
                                                <tr><td>SAP Cloud ALM</td><td>Clean-core dashboards and lifecycle context</td></tr>
                                                <tr><td>SAP LeanIX</td><td>Architecture and application context</td></tr>
                                                <tr><td>Custom Code Migration</td><td>Usage and migration analysis input</td></tr>
                                                <tr><td>ABAP Test Cockpit</td><td>Code finding and compliance signals</td></tr>
                                                <tr><td>SAP Build Process Automation</td><td>Waiver and approval workflow</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Functional Architecture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Layer</th><th>Design decision</th></tr></thead>
                                              <tbody>
                                                <tr><td>Experience</td><td>Cockpit, heatmap, backlog, board pack</td></tr>
                                                <tr><td>Application</td><td>Inventory, policy rules, waiver, planner</td></tr>
                                                <tr><td>AI</td><td>Pattern classifier, explanation, recommendation</td></tr>
                                                <tr><td>Data</td><td>Artifact mart, policy library, waiver store</td></tr>
                                                <tr><td>Integration</td><td>Cloud ALM, LeanIX, code tools, transports</td></tr>
                                                <tr><td>Governance</td><td>RBAC, audit, approvals, metadata controls</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Canonical Model, Policy, And AI Design",
                                        "html":  `
                                          <h3>Canonical Governance Data Model</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Entity</th><th>Purpose</th></tr></thead>
                                              <tbody>
                                                <tr><td>Artifact</td><td>Custom object or extension</td></tr>
                                                <tr><td>Object type</td><td>Report, class, BAdI, table, API, interface</td></tr>
                                                <tr><td>Owner</td><td>Business and technical accountability</td></tr>
                                                <tr><td>Usage metric</td><td>Frequency, users, last use</td></tr>
                                                <tr><td>Finding</td><td>ATC, migration, policy, support signal</td></tr>
                                                <tr><td>Deviation</td><td>Clean-core policy gap</td></tr>
                                                <tr><td>Criticality</td><td>Business and operational impact</td></tr>
                                                <tr><td>Recommendation</td><td>Target remediation path</td></tr>
                                                <tr><td>Waiver</td><td>Approved exception</td></tr>
                                                <tr><td>Backlog item</td><td>Remediation work package</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Clean-Core Policy Taxonomy</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Policy class</th><th>Meaning</th></tr></thead>
                                              <tbody>
                                                <tr><td>Standard fit</td><td>Use SAP standard without extension</td></tr>
                                                <tr><td>Key-user extension</td><td>In-app extension, released surface</td></tr>
                                                <tr><td>Developer extension</td><td>ABAP Cloud and released APIs</td></tr>
                                                <tr><td>Side-by-side</td><td>BTP extension, loose coupling</td></tr>
                                                <tr><td>Integration pattern</td><td>API/event-based integration</td></tr>
                                                <tr><td>Classic custom ABAP</td><td>Review and modernize path</td></tr>
                                                <tr><td>Modification/enhancement</td><td>High scrutiny, waiver or redesign</td></tr>
                                                <tr><td>Unused candidate</td><td>Retire or archive decision</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>AI Capability Design</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>AI function</th><th>Controlled use</th></tr></thead>
                                              <tbody>
                                                <tr><td>Pattern classification</td><td>Groups artifacts by extension type</td></tr>
                                                <tr><td>Code explanation</td><td>Summarizes purpose and dependencies</td></tr>
                                                <tr><td>Policy reasoning</td><td>Maps artifact to rule outcome</td></tr>
                                                <tr><td>Risk narrative</td><td>Explains deviation and impact</td></tr>
                                                <tr><td>Remediation suggestion</td><td>Proposes target path</td></tr>
                                                <tr><td>Board summary</td><td>Creates decision-ready narrative</td></tr>
                                                <tr><td>Learning loop</td><td>Improves tags after architect feedback</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Implementation, Decision Rules, And Outputs",
                                        "html":  `
                                          <h3>Step-by-Step Reusable Process</h3>
                                          <ol>
                                            <li>Set governance scope: landscape, business domain, custom object classes, extension types, and architecture board ownership.</li>
                                            <li>Approve clean-core policy: allowed patterns, restricted patterns, waiver rules, and target extensibility model.</li>
                                            <li>Collect inventory: custom code, enhancements, interfaces, transports, repositories, usage, incidents, and architecture decisions.</li>
                                            <li>Normalize into the canonical model: artifact, object type, owner, usage, criticality, findings, dependencies, and support burden.</li>
                                            <li>Classify artifacts: assign policy class, deviation type, confidence, and source evidence.</li>
                                            <li>Score risk: combine clean-core deviation, usage, business criticality, incidents, complexity, and upgrade sensitivity.</li>
                                            <li>Generate remediation path: retire, replace with standard, convert to key-user extension, redesign with ABAP Cloud, move to BTP, or retain with waiver.</li>
                                            <li>Review with architects: validate high-risk items, correct classifications, and approve waiver or remediation decisions.</li>
                                            <li>Build roadmap: group backlog into waves by business priority, dependency, effort band, and release window.</li>
                                            <li>Operate governance cycle: refresh findings, track new deviations, review expiring waivers, and update the architecture board pack.</li>
                                          </ol>
                                          <h3>Risk Scoring And Decision Rules</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Signal</th><th>Action</th></tr></thead>
                                              <tbody>
                                                <tr><td>Unused object</td><td>Retire or archive candidate</td></tr>
                                                <tr><td>High usage + high deviation</td><td>Priority remediation review</td></tr>
                                                <tr><td>Critical process object</td><td>Architecture board decision</td></tr>
                                                <tr><td>Direct standard dependency</td><td>Released API or wrapper review</td></tr>
                                                <tr><td>Modification/enhancement</td><td>Redesign or controlled waiver</td></tr>
                                                <tr><td>No owner</td><td>Assign accountability first</td></tr>
                                                <tr><td>Incident-linked artifact</td><td>Increase support-burden score</td></tr>
                                                <tr><td>Low confidence result</td><td>Human architect review</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Dashboards And Outputs</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Output</th><th>Content</th></tr></thead>
                                              <tbody>
                                                <tr><td>Governance cockpit</td><td>Overall clean-core score</td></tr>
                                                <tr><td>Risk heatmap</td><td>Deviation by domain/object type</td></tr>
                                                <tr><td>Artifact workbench</td><td>Findings and remediation path</td></tr>
                                                <tr><td>Waiver queue</td><td>Exceptions, owners, expiry</td></tr>
                                                <tr><td>Remediation backlog</td><td>Prioritized work packages</td></tr>
                                                <tr><td>Board pack</td><td>Decision-ready summary</td></tr>
                                                <tr><td>Trend view</td><td>New, closed, and aged deviations</td></tr>
                                                <tr><td>Evidence export</td><td>Audit and review evidence</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Cloud ALM-Ready Backlog And User Stories",
                                        "exports":  [
                                                        "requirement",
                                                        "user-stories"
                                                    ],
                                        "html":  `
                                          <h3>Cloud ALM-Ready Backlog</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Requirement</th><th>Outcome</th></tr></thead>
                                              <tbody>
                                                <tr><td>REQ-CCG-001</td><td>Artifact inventory</td><td>Load custom object data</td></tr>
                                                <tr><td>REQ-CCG-002</td><td>Policy library</td><td>Maintain clean-core rules</td></tr>
                                                <tr><td>REQ-CCG-003</td><td>Classification</td><td>Assign pattern and deviation</td></tr>
                                                <tr><td>REQ-CCG-004</td><td>Risk scoring</td><td>Score artifacts and domains</td></tr>
                                                <tr><td>REQ-CCG-005</td><td>Remediation planner</td><td>Create prioritized backlog</td></tr>
                                                <tr><td>REQ-CCG-006</td><td>Waiver workflow</td><td>Approve and track exceptions</td></tr>
                                                <tr><td>REQ-CCG-007</td><td>Board pack</td><td>Generate decision summary</td></tr>
                                                <tr><td>REQ-CCG-008</td><td>Governance refresh</td><td>Track new and closed deviations</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>User Stories</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Role</th><th>Need</th><th>Value</th></tr></thead>
                                              <tbody>
                                                <tr><td>US-CCG-001</td><td>Enterprise architect</td><td>See clean-core heatmap</td><td>Target the biggest risks</td></tr>
                                                <tr><td>US-CCG-002</td><td>SAP platform owner</td><td>Review custom inventory</td><td>Control upgrade exposure</td></tr>
                                                <tr><td>US-CCG-003</td><td>Developer lead</td><td>See code findings</td><td>Plan remediation</td></tr>
                                                <tr><td>US-CCG-004</td><td>Design authority</td><td>Approve waivers</td><td>Govern exceptions</td></tr>
                                                <tr><td>US-CCG-005</td><td>Transformation lead</td><td>View roadmap waves</td><td>Sequence modernization</td></tr>
                                                <tr><td>US-CCG-006</td><td>Application owner</td><td>Confirm business usage</td><td>Avoid wrong retirement</td></tr>
                                                <tr><td>US-CCG-007</td><td>Auditor</td><td>View decisions and evidence</td><td>Trace governance</td></tr>
                                                <tr><td>US-CCG-008</td><td>AMS lead</td><td>See support-linked artifacts</td><td>Reduce recurring support load</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Executable Test Script",
                                        "exports":  [
                                                        "test-cases"
                                                    ],
                                        "html":  `
                                          <h3>Test Scripts</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>ID</th><th>Scenario</th><th>Action</th><th>Expected result</th></tr></thead>
                                              <tbody>
                                                <tr><td>TS-CCG-001</td><td>Inventory load</td><td>Import artifact extract</td><td>Artifacts appear in cockpit</td></tr>
                                                <tr><td>TS-CCG-002</td><td>Classification</td><td>Run policy classification</td><td>Pattern and deviation appear</td></tr>
                                                <tr><td>TS-CCG-003</td><td>Risk score</td><td>Score high-use artifact</td><td>High-risk band assigned</td></tr>
                                                <tr><td>TS-CCG-004</td><td>Unused object</td><td>Load no-usage object</td><td>Retire candidate shown</td></tr>
                                                <tr><td>TS-CCG-005</td><td>Waiver</td><td>Submit exception</td><td>Approval and expiry captured</td></tr>
                                                <tr><td>TS-CCG-006</td><td>Remediation</td><td>Generate target path</td><td>Backlog item created</td></tr>
                                                <tr><td>TS-CCG-007</td><td>Low confidence</td><td>Classify ambiguous artifact</td><td>Architect review required</td></tr>
                                                <tr><td>TS-CCG-008</td><td>Sensitive metadata</td><td>Load restricted code info</td><td>Access is controlled</td></tr>
                                                <tr><td>TS-CCG-009</td><td>Board pack</td><td>Generate summary</td><td>Risks and decisions appear</td></tr>
                                                <tr><td>TS-CCG-010</td><td>Refresh cycle</td><td>Load new scan</td><td>Trend view updates</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        `
                                    },
                                    {
                                        "title":  "Governance, Readiness, And Evidence",
                                        "html":  `
                                          <h3>Security, Governance And Controls</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Control</th><th>Design</th></tr></thead>
                                              <tbody>
                                                <tr><td>Access</td><td>Architect, developer, owner, auditor views</td></tr>
                                                <tr><td>Metadata control</td><td>Code metadata handled securely</td></tr>
                                                <tr><td>Approval</td><td>Waivers require named authority</td></tr>
                                                <tr><td>Audit</td><td>Scores, prompts, decisions logged</td></tr>
                                                <tr><td>Model control</td><td>Prompt and model versions tracked</td></tr>
                                                <tr><td>Fallback</td><td>Rules work when AI is unavailable</td></tr>
                                                <tr><td>Retention</td><td>Evidence retained by governance policy</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Governance Readiness Criteria</h3>
                                          <ul>
                                            <li>Artifact inventory is loaded and reconciled with known systems.</li>
                                            <li>Clean-core policy taxonomy is approved by architecture governance.</li>
                                            <li>Usage and business criticality are available for priority artifacts.</li>
                                            <li>Risk scoring is explainable and reviewed by architects.</li>
                                            <li>High-risk artifacts have remediation, waiver, or retain decisions.</li>
                                            <li>Waiver workflow captures owner, rationale, expiry, and review date.</li>
                                            <li>Remediation backlog is grouped into executable waves.</li>
                                            <li>Architecture board pack is generated from current evidence.</li>
                                            <li>Security roles are validated for code metadata and governance data.</li>
                                            <li>Governance refresh cycle is agreed for new customizations and deviations.</li>
                                          </ul>
                                          <h3>Evidence To Capture</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Evidence</th><th>Capture method</th></tr></thead>
                                              <tbody>
                                                <tr><td>Inventory extract</td><td>Custom objects and extensions</td></tr>
                                                <tr><td>Usage evidence</td><td>Frequency and last-use data</td></tr>
                                                <tr><td>Code findings</td><td>ATC or migration results</td></tr>
                                                <tr><td>Risk heatmap</td><td>Dashboard screenshot/export</td></tr>
                                                <tr><td>Waiver log</td><td>Approval and expiry evidence</td></tr>
                                                <tr><td>Backlog</td><td>Remediation work packages</td></tr>
                                                <tr><td>Board pack</td><td>Approved decision summary</td></tr>
                                                <tr><td>Refresh report</td><td>New/closed deviations</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Known Limitations And Remediation</h3>
                                          <div class="detail-table-wrap">
                                            <table class="detail-table">
                                              <thead><tr><th>Limitation</th><th>Remediation</th></tr></thead>
                                              <tbody>
                                                <tr><td>Incomplete inventory</td><td>Start with priority systems first</td></tr>
                                                <tr><td>No usage data</td><td>Use owner review and support signals</td></tr>
                                                <tr><td>Unclear policy</td><td>Approve taxonomy before scoring</td></tr>
                                                <tr><td>False classification</td><td>Architect review loop required</td></tr>
                                                <tr><td>Missing API</td><td>Evaluate wrapper or side-by-side pattern</td></tr>
                                                <tr><td>No owner</td><td>Hold decision until ownership is assigned</td></tr>
                                                <tr><td>Sensitive code</td><td>Use metadata-only AI processing where required</td></tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <h3>Reusable Deliverables</h3>
                                          <ul>
                                            <li>Clean-core governance overview</li>
                                            <li>Artifact inventory template</li>
                                            <li>Clean-core policy taxonomy</li>
                                            <li>Canonical governance data model</li>
                                            <li>Risk scoring model</li>
                                            <li>Remediation decision matrix</li>
                                            <li>Waiver workflow template</li>
                                            <li>Architecture board pack template</li>
                                            <li>Remediation backlog template</li>
                                            <li>Cloud ALM backlog items, user stories, test scripts, security checklist, evidence checklist, and limitations guide</li>
                                          </ul>
                                        `
                                    },
                                    {
                                        "title":  "SAP Evidence Base",
                                        "html":  `
                                          <h3>Reference Links</h3>
                                          <ul>
                                            <li><a href="https://help.sap.com/docs/abap-cloud/developer-guide-from-classic-abap-to-abap-cloud/clean-core-extensibility-and-abap-based-extensions" target="_blank" rel="noreferrer">SAP Clean Core Extensibility and ABAP-Based Extensions</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/applicationhelp/extensibility" target="_blank" rel="noreferrer">SAP Cloud ALM Extensibility and Clean Core Level Overview</a></li>
                                            <li><a href="https://help.sap.com/docs/cloud-alm/applicationhelp/customer-objects" target="_blank" rel="noreferrer">SAP Cloud ALM Customer Objects Deep Dive</a></li>
                                            <li><a href="https://help.sap.com/docs/ABAP_PLATFORM_NEW/9a281eac983f4f688d0deedc96b3c61c/f3b749efe0674d669fb1ecf9704fcfd3.html" target="_blank" rel="noreferrer">SAP Custom Code Migration App</a></li>
                                            <li><a href="https://help.sap.com/docs/btp/btp-developers-guide/abap-cloud" target="_blank" rel="noreferrer">ABAP Cloud on SAP BTP</a></li>
                                            <li><a href="https://help.sap.com/docs/abap-cloud/abap-cloud/public-released-apis" target="_blank" rel="noreferrer">ABAP Cloud Public Released APIs</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-btp-guidance-framework/extension-architecture-guide/what-is-extension-architecture-guide" target="_blank" rel="noreferrer">SAP BTP Extension Architecture Guide</a></li>
                                            <li><a href="https://help.sap.com/docs/leanix/ea/clean-core-extensibility-for-sap-cloud-erp" target="_blank" rel="noreferrer">SAP LeanIX Clean Core Extensibility for SAP Cloud ERP</a></li>
                                            <li><a href="https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5" target="_blank" rel="noreferrer">SAP AI Core generative AI hub</a></li>
                                          </ul>
                                        `
                                    }
                                ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "Clean Core",
                                      "SAP Cloud ALM",
                                      "SAP BTP",
                                      "Governance"
                                  ],
                         "businessProcess":  "Architecture Governance / Clean Core / Transformation",
                         "workstream":  "Clean Core AI Governance",
                         "requirement":  {
                                             "externalId":  "REQ-CCG-001",
                                             "title":  "Clean Core AI Governance Service",
                                             "description":  "<p>Implement a customer-ready clean-core AI governance service for custom artifact inventory, policy classification, risk scoring, waiver control, architecture board decisions, and modernization backlog planning.</p><h2>Business Need</h2><p>Customers need an evidence-based view of clean-core deviation, usage, business criticality, support burden, and remediation priority so architecture decisions are traceable and modernization work can be sequenced.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; Clean Core; SAP Cloud ALM; SAP BTP; Governance",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Architecture Governance / Clean Core / Transformation"
                                         },
                         "userStories":  [
                                             {
                                                 "externalId":  "US-CCG-001",
                                                 "title":  "US-CCG-001 - Clean-Core Heatmap",
                                                 "persona":  "an enterprise architect",
                                                 "want":  "to see a clean-core heatmap",
                                                 "soThat":  "I can target the biggest risks",
                                                 "acceptanceCriteria":  [
                                                                            "Heatmap shows deviations by domain and object type.",
                                                                            "High-risk areas can be opened to artifact detail.",
                                                                            "Score rationale is visible."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-002",
                                                 "title":  "US-CCG-002 - Custom Inventory Review",
                                                 "persona":  "an SAP platform owner",
                                                 "want":  "to review custom inventory",
                                                 "soThat":  "I can control upgrade exposure",
                                                 "acceptanceCriteria":  [
                                                                            "Custom objects, enhancements, and interfaces are loaded.",
                                                                            "Inventory includes owner, usage, and finding fields where available.",
                                                                            "Unreconciled items are flagged."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-003",
                                                 "title":  "US-CCG-003 - Code Findings",
                                                 "persona":  "a developer lead",
                                                 "want":  "to see code findings",
                                                 "soThat":  "I can plan remediation",
                                                 "acceptanceCriteria":  [
                                                                            "ATC, migration, policy, and support signals are visible.",
                                                                            "Findings link to artifacts.",
                                                                            "Remediation path is suggested."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-004",
                                                 "title":  "US-CCG-004 - Waiver Approval",
                                                 "persona":  "a design authority",
                                                 "want":  "to approve waivers",
                                                 "soThat":  "exceptions are governed",
                                                 "acceptanceCriteria":  [
                                                                            "Waiver request captures rationale, owner, expiry, and review date.",
                                                                            "Approval is routed to named authority.",
                                                                            "Decision history is logged."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-005",
                                                 "title":  "US-CCG-005 - Roadmap Waves",
                                                 "persona":  "a transformation lead",
                                                 "want":  "to view roadmap waves",
                                                 "soThat":  "modernization can be sequenced",
                                                 "acceptanceCriteria":  [
                                                                            "Backlog items are grouped by wave.",
                                                                            "Grouping includes priority, dependency, effort band, and release window.",
                                                                            "Wave view is exportable."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-006",
                                                 "title":  "US-CCG-006 - Business Usage Confirmation",
                                                 "persona":  "an application owner",
                                                 "want":  "to confirm business usage",
                                                 "soThat":  "wrong retirement decisions are avoided",
                                                 "acceptanceCriteria":  [
                                                                            "Usage evidence is visible.",
                                                                            "Owner confirmation can be captured.",
                                                                            "Retirement recommendations require review."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-007",
                                                 "title":  "US-CCG-007 - Decision Evidence",
                                                 "persona":  "an auditor",
                                                 "want":  "to view decisions and evidence",
                                                 "soThat":  "governance is traceable",
                                                 "acceptanceCriteria":  [
                                                                            "Scores, prompts, recommendations, waivers, and decisions are logged.",
                                                                            "Evidence export is available.",
                                                                            "Access is read-only for auditor role."
                                                                        ]
                                             },
                                             {
                                                 "externalId":  "US-CCG-008",
                                                 "title":  "US-CCG-008 - Support-Linked Artifacts",
                                                 "persona":  "an AMS lead",
                                                 "want":  "to see support-linked artifacts",
                                                 "soThat":  "recurring support load is reduced",
                                                 "acceptanceCriteria":  [
                                                                            "Incident-linked artifacts are visible.",
                                                                            "Support-burden score is shown.",
                                                                            "Recurring support items can become backlog candidates."
                                                                        ]
                                             }
                                         ],
                         "testCases":  [
                                           {
                                               "externalId":  "TS-CCG-001",
                                               "testCaseName":  "TS-CCG-001 - Inventory Load",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Import artifact extract",
                                               "actionTitle":  "Import artifact extract",
                                               "instructions":  [
                                                                    "Import the artifact extract.",
                                                                    "Open the governance cockpit."
                                                                ],
                                               "expectedResult":  "Artifacts appear in cockpit."
                                           },
                                           {
                                               "externalId":  "TS-CCG-002",
                                               "testCaseName":  "TS-CCG-002 - Classification",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Run policy classification",
                                               "actionTitle":  "Run policy classification",
                                               "instructions":  [
                                                                    "Select imported artifacts.",
                                                                    "Run clean-core policy classification."
                                                                ],
                                               "expectedResult":  "Pattern and deviation appear."
                                           },
                                           {
                                               "externalId":  "TS-CCG-003",
                                               "testCaseName":  "TS-CCG-003 - Risk Score",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Score high-use artifact",
                                               "actionTitle":  "Score high-use artifact",
                                               "instructions":  [
                                                                    "Select a high-use artifact with deviation signals.",
                                                                    "Run risk scoring."
                                                                ],
                                               "expectedResult":  "High-risk band is assigned."
                                           },
                                           {
                                               "externalId":  "TS-CCG-004",
                                               "testCaseName":  "TS-CCG-004 - Unused Object",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Load no-usage object",
                                               "actionTitle":  "Load no-usage object",
                                               "instructions":  [
                                                                    "Load an artifact with no recent usage.",
                                                                    "Run classification and scoring."
                                                                ],
                                               "expectedResult":  "Retire candidate is shown."
                                           },
                                           {
                                               "externalId":  "TS-CCG-005",
                                               "testCaseName":  "TS-CCG-005 - Waiver",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Submit waiver exception",
                                               "actionTitle":  "Submit exception",
                                               "instructions":  [
                                                                    "Submit an exception for a high-risk artifact.",
                                                                    "Complete approval fields."
                                                                ],
                                               "expectedResult":  "Approval and expiry are captured."
                                           },
                                           {
                                               "externalId":  "TS-CCG-006",
                                               "testCaseName":  "TS-CCG-006 - Remediation",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Generate target path",
                                               "actionTitle":  "Generate target path",
                                               "instructions":  [
                                                                    "Select an artifact requiring modernization.",
                                                                    "Generate target path."
                                                                ],
                                               "expectedResult":  "Backlog item is created."
                                           },
                                           {
                                               "externalId":  "TS-CCG-007",
                                               "testCaseName":  "TS-CCG-007 - Low Confidence",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Classify ambiguous artifact",
                                               "actionTitle":  "Classify ambiguous artifact",
                                               "instructions":  [
                                                                    "Select an ambiguous artifact.",
                                                                    "Run classification."
                                                                ],
                                               "expectedResult":  "Architect review is required."
                                           },
                                           {
                                               "externalId":  "TS-CCG-008",
                                               "testCaseName":  "TS-CCG-008 - Sensitive Metadata",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Validate restricted metadata access",
                                               "actionTitle":  "Load restricted code info",
                                               "instructions":  [
                                                                    "Load restricted code metadata.",
                                                                    "Review access with authorized and unauthorized roles."
                                                                ],
                                               "expectedResult":  "Access is controlled."
                                           },
                                           {
                                               "externalId":  "TS-CCG-009",
                                               "testCaseName":  "TS-CCG-009 - Board Pack",
                                               "priority":  "High",
                                               "status":  "Prepared",
                                               "activityTitle":  "Generate board summary",
                                               "actionTitle":  "Generate summary",
                                               "instructions":  [
                                                                    "Generate the architecture board pack.",
                                                                    "Review risks and decisions."
                                                                ],
                                               "expectedResult":  "Risks and decisions appear."
                                           },
                                           {
                                               "externalId":  "TS-CCG-010",
                                               "testCaseName":  "TS-CCG-010 - Refresh Cycle",
                                               "priority":  "Medium",
                                               "status":  "Prepared",
                                               "activityTitle":  "Load new scan",
                                               "actionTitle":  "Load new scan",
                                               "instructions":  [
                                                                    "Load a new scan extract.",
                                                                    "Refresh governance trend view."
                                                                ],
                                               "expectedResult":  "Trend view updates."
                                           }
                                       ]
                     },
        "sources":  [
                        {
                            "label":  "SAP Clean Core Extensibility and ABAP-Based Extensions",
                            "url":  "https://help.sap.com/docs/abap-cloud/developer-guide-from-classic-abap-to-abap-cloud/clean-core-extensibility-and-abap-based-extensions"
                        },
                        {
                            "label":  "SAP Cloud ALM Extensibility and Clean Core Level Overview",
                            "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/extensibility"
                        },
                        {
                            "label":  "SAP Cloud ALM Customer Objects Deep Dive",
                            "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/customer-objects"
                        },
                        {
                            "label":  "SAP Custom Code Migration App",
                            "url":  "https://help.sap.com/docs/ABAP_PLATFORM_NEW/9a281eac983f4f688d0deedc96b3c61c/f3b749efe0674d669fb1ecf9704fcfd3.html"
                        },
                        {
                            "label":  "ABAP Cloud on SAP BTP",
                            "url":  "https://help.sap.com/docs/btp/btp-developers-guide/abap-cloud"
                        },
                        {
                            "label":  "ABAP Cloud Public Released APIs",
                            "url":  "https://help.sap.com/docs/abap-cloud/abap-cloud/public-released-apis"
                        },
                        {
                            "label":  "SAP BTP Extension Architecture Guide",
                            "url":  "https://help.sap.com/docs/sap-btp-guidance-framework/extension-architecture-guide/what-is-extension-architecture-guide"
                        },
                        {
                            "label":  "SAP LeanIX Clean Core Extensibility for SAP Cloud ERP",
                            "url":  "https://help.sap.com/docs/leanix/ea/clean-core-extensibility-for-sap-cloud-erp"
                        },
                        {
                            "label":  "SAP AI Core generative AI hub",
                            "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                        }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Package the customer-ready Clean Core AI Governance Service offer: artifact inventory template, policy taxonomy, canonical governance model, risk scoring model, remediation decision matrix, waiver workflow, architecture board pack, modernization backlog, Cloud ALM backlog, user stories, test scripts, security controls, and evidence checklist."
    },
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
