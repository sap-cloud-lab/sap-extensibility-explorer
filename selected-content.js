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
