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
        "shortDescription":  "Leverage knowledge gained from recent data migration and create a comprehensive document \"General Data Migration Design\" helps accelerating future im..",
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
        "shortDescription":  "A Document with comprehensive REFX Data Migration approach, including product bug fixes \u0026 best practices which ensure accurate, efficient lease data..",
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
        "shortDescription":  "Create detailed documentation on Global Hierarchies and Standard Hierarchy setup options in the Cloud, highlighting how to leverage Global Hierarchie..",
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
        "shortDescription":  "S/4HANA Cloud’s native tax engine has limited capabilities for complex, multi-jurisdiction tax scenarios, creating a gap for automated calculation, e..",
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
        "shortDescription":  "Incoming Bank Statements (OT83) is replaced by new Processing rules in SAP which includes deprecation of Posting rules (restricted) \u0026 unavailable fun..",
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
        "description":  "SAP release and QA teams need risk-based regression scope, release confidence, better automation usage, and clearer QA/CAB decision support based on connected release, transport, defect, test, and process data.",
        "function":  "Deliver AI Release Assurance for SAP by connecting release, transport, defect, test, and process data; applying deterministic rules first; and using AI to rank, explain, and summarize release risk while keeping exclusions, low-confidence mappings, and release approval under human review.",
        "summary":  "Help SAP release and QA teams prioritize regression testing using actual change impact, process criticality, historical defects, and test coverage.",
        "useCase":  [
                        {
                            "text":  "Help SAP release and QA teams prioritize regression testing using actual change impact, process criticality, historical defects, and test coverage."
                        },
                        {
                            "heading":  "Customer-ready outcome",
                            "items":  [
                                          "Risk-based regression scope.",
                                          "Release confidence view.",
                                          "Better automation usage.",
                                          "Clearer QA and CAB decision support."
                                          ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
<p>The customer starts with one SAP domain, one release train, and representative history for changes, tests, and defects. The service connects release evidence, applies rules for mandatory and high-risk tests, then uses AI to rank candidate tests and explain residual risk.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Delivery lens</th><th>Customer-ready view</th></tr></thead>
    <tbody>
      <tr><td>Recommended first scope</td><td>One SAP domain, one release train, and a representative history of changes, tests, and defects.</td></tr>
      <tr><td>Governance</td><td>AI remains assistive. Test exclusions, low-confidence mappings, residual risk, and release approval stay under human review.</td></tr>
    </tbody>
  </table>
</div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "Release scope, transport, defect, test, and process-criticality data can be connected from approved sources.",
                         "Regression cycles are broad, copied from prior releases, or not shaped by current change risk.",
                         "Technical changes are not consistently translated into business-process impact.",
                         "QA, release owners, or CAB need a defensible residual-risk view before go/no-go decisions."
                         ],
        "implementation":  [
                              "Confirm pilot scope, release train, users, and decision owners.",
                              "Assess release, test, defect, transport, and process data maturity.",
                              "Define the canonical entity model.",
                              "Stand up SAP BTP application shell.",
                              "Configure SAP Cloud ALM, test, defect, and DevOps connectors.",
                              "Implement deterministic rules first.",
                              "Add AI-assisted ranking and recommendation explanation.",
                              "Build release dashboard and QA workbench.",
                              "Validate against a historical release.",
                              "Run live pilot with human review."
                              ],
        "roadmapImage":  {
                             "src":  "assets/working-examples/ai-release-assurance/Implementation%20Roadmap_AI%20Release%20Assurance%20for%20SAP.png",
                             "alt":  "AI Release Assurance for SAP implementation roadmap",
                             "caption":  "AI Release Assurance for SAP implementation roadmap from the customer-ready solution design pack."
                         },
        "collapsibleSections":  [
                {
                    "title":  "Business Problem",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Problem area</th><th>Current situation</th><th>Business impact</th></tr></thead>
    <tbody>
      <tr><td>Fragmented release evidence</td><td>Release scope, transports, tests, defects, and process criticality sit across separate tools or spreadsheets.</td><td>Slow impact assessment and inconsistent release decisions.</td></tr>
      <tr><td>Broad regression cycles</td><td>Regression packs are often copied from prior releases instead of being shaped by current change risk.</td><td>Longer test cycles and avoidable QA effort.</td></tr>
      <tr><td>Weak change-to-process traceability</td><td>Technical changes are not always connected to the business process they may affect.</td><td>High-risk process impact can be missed.</td></tr>
      <tr><td>Automation not impact-led</td><td>Automated tests may exist, but selection is not always driven by release impact.</td><td>Lower automation value and repeated manual effort.</td></tr>
      <tr><td>Unclear residual risk</td><td>Untested areas and accepted risks are not always visible to QA, release owners, or CAB.</td><td>Go/no-go decisions are harder to defend.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Solution Overview",
                    "html":  `
<h3>What We Are Providing</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Solution component</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td>Risk &amp; Impact Engine</td><td>Central engine that links changes to process impact, test coverage, historical issues, and release risk.</td></tr>
      <tr><td>Rules layer</td><td>Protects mandatory testing and creates an explainable baseline before AI recommendations are used.</td></tr>
      <tr><td>AI-assisted layer</td><td>Classifies ambiguous changes, ranks candidate tests, finds similar past issues, and drafts release rationale.</td></tr>
      <tr><td>Human review layer</td><td>Routes exclusions, low-confidence mappings, and residual-risk acceptance to accountable owners.</td></tr>
      <tr><td>Release decision view</td><td>Provides release dashboard, recommended regression scope, coverage gaps, and CAB/QA summary.</td></tr>
    </tbody>
  </table>
</div>
<h3>What The Solution Delivers</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Deliverable</th><th>Customer value</th></tr></thead>
    <tbody>
      <tr><td>Release risk view</td><td>One view of release-level, change-level, and process-level risk.</td></tr>
      <tr><td>Prioritized regression scope</td><td>Tests grouped as must-test, should-test, optional, or excluded with rationale.</td></tr>
      <tr><td>Impacted process view</td><td>Changed objects linked to business processes, interfaces, roles, and test coverage.</td></tr>
      <tr><td>Coverage visibility</td><td>Manual and automated coverage shown against impacted processes and critical changes.</td></tr>
      <tr><td>Residual risk explanation</td><td>Untested high-risk areas, reasons, and required approvals are visible.</td></tr>
      <tr><td>CAB / QA recommendation pack</td><td>Business-readable release summary for governance and go/no-go discussion.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Design Dimensions",
                    "html":  `
<p>Customer-facing solution dimensions from the AI Release Assurance solution design pack.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Design dimension</th><th>Solution detail</th></tr></thead>
    <tbody>
      <tr><td>Benefits</td><td>Reduce unnecessary regression effort; improve release confidence; increase automation usage; support transparent QA/CAB decisions.</td></tr>
      <tr><td>Target customers</td><td>CIO; QA Director; Release Manager; Application Owner; S/4HANA Program Lead; AMS Release Governance Lead.</td></tr>
      <tr><td>Problem solved</td><td>Regression scope is broad because change, test, defect, and process-risk data are not connected in one decision view.</td></tr>
      <tr><td>SAP / technology tools</td><td>SAP Cloud ALM; SAP BTP; SAP AI Core / generative AI hub; SAP Test Automation by Tricentis; optional Jira, ServiceNow, Git, CI/CD, and Signavio.</td></tr>
      <tr><td>Data required</td><td>Release scope; transports; change records; test catalog; test execution history; defect history; process criticality; production incidents; automation coverage.</td></tr>
      <tr><td>AI capability used</td><td>Change classification; impact mapping; test ranking; defect-risk scoring; release summary generation; recommendation explanation.</td></tr>
      <tr><td>Initial deployment focus</td><td>One SAP domain, one release train, and usable history for changes, tests, and defects.</td></tr>
      <tr><td>Target operating model</td><td>Reusable release assurance layer with scoring templates, dashboards, governance workflow, and release-learning feedback loop.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Architecture And Component Design",
                    "html":  `
<h3>Architecture Summary</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Flow step</th><th>What happens</th></tr></thead>
    <tbody>
      <tr><td>1. Ingest</td><td>Collect release scope, transports, changes, tests, defects, incidents, and process criticality from approved sources.</td></tr>
      <tr><td>2. Connect</td><td>Map changes and transports to SAP objects, processes, interfaces, roles, and candidate tests.</td></tr>
      <tr><td>3. Score</td><td>Apply mandatory rules first, then AI-assisted ranking for risk, relevance, and similarity.</td></tr>
      <tr><td>4. Recommend</td><td>Produce risk-based regression scope with rationale, confidence, and residual-risk view.</td></tr>
      <tr><td>5. Govern</td><td>Route exclusions, low-confidence mappings, and release summaries through human review.</td></tr>
    </tbody>
  </table>
</div>
<div class="working-example-gallery" aria-label="AI Release Assurance for SAP reference architecture">
  <figure>
    <img src="assets/working-examples/ai-release-assurance/AI_Release_Assurance_for_SAP.png" alt="AI Release Assurance for SAP reference architecture" onerror="handleMissingExampleImage(this)" />
    <figcaption>AI Release Assurance for SAP reference architecture from the customer-ready solution design pack.</figcaption>
  </figure>
</div>
<h3>Reference Architecture Alignment</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Architecture area</th><th>Content to align with the customer-generated image</th></tr></thead>
    <tbody>
      <tr><td>Source / Inputs</td><td>Transport / Change Requests; Historical Defects &amp; Test Results; Critical Business Process Catalog.</td></tr>
      <tr><td>AI &amp; Orchestration</td><td>Risk &amp; Impact Engine using SAP BTP app services, AI models, deterministic rules, and governance workflow.</td></tr>
      <tr><td>Outputs / Actions</td><td>Prioritized Regression Scope; Release Risk Dashboard; CAB / QA Recommendations.</td></tr>
      <tr><td>Platform / tool context</td><td>SAP Cloud ALM; SAP Test Automation by Tricentis; Jira / ServiceNow / Git / CI-CD as applicable.</td></tr>
    </tbody>
  </table>
</div>
<h3>Logical Component Design</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Layer</th><th>Purpose</th><th>Key components</th></tr></thead>
    <tbody>
      <tr><td>Experience Layer</td><td>Decision view for release, QA, and CAB stakeholders.</td><td>Release risk dashboard; QA workbench; impacted-process view; CAB summary; exception review.</td></tr>
      <tr><td>Application Layer</td><td>Orchestrates release assurance logic and workflow.</td><td>Change ingestion; release-scope service; process mapping; risk scoring; regression selector.</td></tr>
      <tr><td>AI Layer</td><td>Supports classification, ranking, similarity, and explanation.</td><td>Change classifier; similar-defect matching; test relevance ranking; release summary; confidence scoring.</td></tr>
      <tr><td>Data Layer</td><td>Maintains connected release evidence and recommendation history.</td><td>Release store; transport metadata; process catalog; test repository mirror; defect history mart.</td></tr>
      <tr><td>Integration Layer</td><td>Connects SAP and non-SAP source systems.</td><td>SAP Cloud ALM; Tricentis; Jira / ServiceNow / Git; CI/CD tools; optional Signavio.</td></tr>
      <tr><td>Governance Layer</td><td>Controls trust, access, approvals, and auditability.</td><td>RBAC; sensitive-field masking; approval workflow; prompt/model logging; audit trail.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "SAP Capability Alignment",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>SAP capability</th><th>Role in solution</th><th>Customer validation needed</th><th>Official validation source</th></tr></thead>
    <tbody>
      <tr><td>SAP Cloud ALM</td><td>Lifecycle context for release scope, requirements, features, tests, defects, and deployment evidence.</td><td>Confirm tenant, scope, API access, object usage, test maturity, and deployment/transport integration.</td><td>SAP Cloud ALM APIs; Test Preparation; Test Execution.</td></tr>
      <tr><td>SAP Test Automation by Tricentis</td><td>Automated test asset and execution source for automation-aware regression recommendations.</td><td>Confirm integration, asset quality, process mapping, execution history, and ownership.</td><td>SAP Cloud ALM Tricentis setup.</td></tr>
      <tr><td>SAP BTP / CAP</td><td>Application foundation for APIs, orchestration, persistence, destination management, and extensibility.</td><td>Confirm BTP entitlements, runtime, identity model, network path, and persistence strategy.</td><td>SAP BTP CAP guidance.</td></tr>
      <tr><td>SAP AI Core / generative AI hub</td><td>Governed AI runtime for classification, summarization, ranking support, and recommendation explanation.</td><td>Confirm model availability, residency, logging policy, evaluation process, and approved AI-use patterns.</td><td>SAP AI Core / generative AI hub; Prompt Registry.</td></tr>
      <tr><td>SAP Build Process Automation</td><td>Optional workflow layer for approvals, exceptions, and human-in-the-loop review.</td><td>Confirm whether approvals belong in SAP Build, SAP Cloud ALM, or customer ITSM.</td><td>SAP Build Process Automation approval guidance.</td></tr>
      <tr><td>SAP Signavio</td><td>Optional process map and criticality enrichment for business-process context.</td><td>Confirm availability, process IDs, API access, and ability to link process context to tests and changes.</td><td>SAP Signavio and Cloud ALM integration guidance.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "AI Capability Design",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>AI capability</th><th>Recommended use</th><th>Guardrail</th></tr></thead>
    <tbody>
      <tr><td>Change classification</td><td>Classify change into module, process, interface, role, report, or data area.</td><td>Show confidence and mapping source.</td></tr>
      <tr><td>Similarity matching</td><td>Find prior defects, incidents, and tests similar to the current change.</td><td>Display matched evidence; avoid silent recommendations.</td></tr>
      <tr><td>Test relevance ranking</td><td>Rank candidate tests into must-test, should-test, optional, or excluded categories.</td><td>Require approval for high-risk exclusions.</td></tr>
      <tr><td>Defect-risk scoring</td><td>Use criticality, history, coverage, complexity, and recurrence to raise or lower risk.</td><td>Keep mandatory and compliance-driven tests deterministic.</td></tr>
      <tr><td>Release summarization</td><td>Generate QA/CAB summary and residual-risk narrative.</td><td>Human review before circulation.</td></tr>
      <tr><td>Recommendation explanation</td><td>Explain why each test is included or excluded.</td><td>Reason, evidence, confidence, and override path must be visible.</td></tr>
    </tbody>
  </table>
</div>
<h3>Key Design Decisions</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Decision</th><th>Design guidance</th></tr></thead>
    <tbody>
      <tr><td>Risk optimizer, not test minimizer</td><td>Recommend the smallest justified risk-based scope, not the smallest possible test set.</td></tr>
      <tr><td>Rules first, AI second</td><td>Use rules for mandatory and high-risk tests; use AI for enrichment, ranking, and explanation.</td></tr>
      <tr><td>Business-process orientation</td><td>Translate technical changes into business impact for QA, process owners, and CAB.</td></tr>
      <tr><td>Human approval gate</td><td>Route exclusions, low-confidence mappings, and residual-risk acceptance to accountable owners.</td></tr>
      <tr><td>Automation-aware selection</td><td>Prefer relevant automated coverage, but do not assume automation alone is enough.</td></tr>
      <tr><td>Residual-risk transparency</td><td>Always show untested high-risk areas and the reason they remain open.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Governance And Human Review Model",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Governance point</th><th>Recommended owner</th><th>Control</th></tr></thead>
    <tbody>
      <tr><td>Recommendation review</td><td>QA Lead</td><td>Reviews proposed regression scope before execution.</td></tr>
      <tr><td>Residual risk</td><td>Release Manager</td><td>Owns residual risk and CAB escalation.</td></tr>
      <tr><td>Business-process impact</td><td>Process Owner</td><td>Validates impact to critical business processes.</td></tr>
      <tr><td>Technical mapping</td><td>Application Owner</td><td>Validates object, interface, and role mappings.</td></tr>
      <tr><td>AI controls</td><td>AI / Platform Owner</td><td>Manages prompt versions, model versions, thresholds, and evaluation.</td></tr>
      <tr><td>Override control</td><td>QA Lead + Release Manager</td><td>Removing high-risk or mandatory tests requires reason and approval.</td></tr>
      <tr><td>CAB communication</td><td>Release Manager</td><td>AI-generated summary is reviewed before circulation.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Implementation Roadmap Detail",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Stage</th><th>Focus</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>1. Discovery and Data Baseline</td><td>Confirm scope, release train, stakeholders, data sources, and current regression process.</td><td>Pilot scope and data-readiness view.</td></tr>
      <tr><td>2. Foundation Build</td><td>Create BTP shell, canonical model, access controls, and connectors.</td><td>Working release-data foundation.</td></tr>
      <tr><td>3. Rules and AI Configuration</td><td>Configure mapping rules, risk scoring, AI ranking, and explanation logic.</td><td>Explainable recommendation engine.</td></tr>
      <tr><td>4. Pilot Release Assurance</td><td>Run the solution on one release with QA and release-owner review.</td><td>Validated regression recommendation.</td></tr>
      <tr><td>5. Service Maturity</td><td>Expand domains, refine scoring, and improve reusable templates.</td><td>Repeatable release-assurance model.</td></tr>
    </tbody>
  </table>
</div>
<p><strong>Validation principle:</strong> Use historical release data first to calibrate scoring and recommendation logic before relying on the solution in a live release window.</p>
                    `
                },
                {
                    "title":  "Data Foundation Required",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Data area</th><th>Why it matters</th></tr></thead>
    <tbody>
      <tr><td>Release and change scope</td><td>Defines what is moving into production.</td></tr>
      <tr><td>Transport / object data</td><td>Identifies impacted SAP components and technical objects.</td></tr>
      <tr><td>Test catalog and execution history</td><td>Shows available coverage, prior outcomes, and execution trend.</td></tr>
      <tr><td>Defect and incident history</td><td>Highlights recurring risk areas and escaped defects.</td></tr>
      <tr><td>Business process criticality</td><td>Prioritizes testing based on business impact.</td></tr>
      <tr><td>Automation coverage</td><td>Identifies where automated regression can be used safely.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Non-Functional Requirements",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Non-functional area</th><th>Requirement</th></tr></thead>
    <tbody>
      <tr><td>Security</td><td>RBAC; least privilege; secure destinations; masking of sensitive fields.</td></tr>
      <tr><td>Auditability</td><td>Log recommendation, score drivers, prompt version, model version, override, approver, and timestamp.</td></tr>
      <tr><td>Performance</td><td>Near-real-time refresh during active release windows; batch analytics outside release windows.</td></tr>
      <tr><td>Resilience</td><td>Retry handling; connector monitoring; queue-based ingestion; graceful fallback if AI service is unavailable.</td></tr>
      <tr><td>Model governance</td><td>Thresholds; prompt templates; version control; human-review rules; periodic evaluation.</td></tr>
      <tr><td>Privacy</td><td>Mask incident notes, user identifiers, payload-like text, and confidential defect details before AI processing.</td></tr>
      <tr><td>Explainability</td><td>Every recommendation shows reason, evidence, confidence, and override path.</td></tr>
      <tr><td>Extensibility</td><td>Modular connectors for SAP Cloud ALM, Tricentis, Jira, ServiceNow, Git, CI/CD, and Signavio.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Suggested Build Stack",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Domain</th><th>Preferred choice</th><th>Role in solution</th></tr></thead>
    <tbody>
      <tr><td>App / orchestration</td><td>SAP BTP with CAP</td><td>APIs, orchestration, persistence, and extensibility.</td></tr>
      <tr><td>AI runtime</td><td>SAP AI Core / generative AI hub</td><td>Governed model access, prompt lifecycle, and AI orchestration.</td></tr>
      <tr><td>SAP lifecycle context</td><td>SAP Cloud ALM</td><td>Preferred source where release, test, and defect context exists.</td></tr>
      <tr><td>Test automation</td><td>SAP Test Automation by Tricentis</td><td>Automation coverage and execution evidence.</td></tr>
      <tr><td>Workflow</td><td>SAP Build Process Automation or existing ITSM</td><td>Approval and exception-routing layer.</td></tr>
      <tr><td>Data / persistence</td><td>SAP HANA Cloud or BTP persistence</td><td>Start simple; scale if analytics needs expand.</td></tr>
      <tr><td>Experience</td><td>Fiori-style web UI; optional Joule interaction</td><td>Dashboard is primary; Joule can support Q&amp;A or summaries.</td></tr>
      <tr><td>External integration</td><td>Jira, ServiceNow, Git, CI/CD</td><td>Retain the customer toolchain; do not force replacement.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Cloud ALM Export Package",
                    "exports":  [
                                    "requirement",
                                    "user-stories",
                                    "test-cases"
                                ],
                    "html":  `
<p>Use these exports to seed the implementation backlog, user stories, and validation scripts for this offering.</p><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th>Export</th><th>Purpose</th></tr></thead><tbody><tr><td>Requirement</td><td>Creates the parent Cloud ALM requirement for the service offering.</td></tr><tr><td>User stories</td><td>Creates delivery-ready stories based on customer-ready deliverables.</td></tr><tr><td>Test cases</td><td>Creates validation scripts aligned to the ten-step implementation plan.</td></tr></tbody></table></div>
                    `
                },
                {
                    "title":  "Customer Readiness Checks",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Readiness area</th><th>Validation check</th><th>Action if gap exists</th></tr></thead>
    <tbody>
      <tr><td>Cloud ALM scope and API access</td><td>Tenant, entitlements, API credentials, and object coverage confirmed.</td><td>Resolve access and API authorizations before build.</td></tr>
      <tr><td>Release/change discipline</td><td>Release IDs, change IDs, and transport references can be linked.</td><td>Standardize IDs and ownership in the first pilot scope.</td></tr>
      <tr><td>Test inventory</td><td>Test ownership, process mapping, and recent execution history exist.</td><td>Clean up or create the minimum viable test catalog.</td></tr>
      <tr><td>Defect history quality</td><td>Severity, module, process, and root-cause classification are usable.</td><td>Normalize historical defects for the pilot domain.</td></tr>
      <tr><td>Business-process criticality</td><td>Critical processes and business owners are confirmed.</td><td>Create a lightweight criticality matrix.</td></tr>
      <tr><td>Automation coverage</td><td>Automated tests are identifiable and linked to process or feature scope.</td><td>Map automation assets to impacted processes.</td></tr>
      <tr><td>Data protection</td><td>Masking rules for user data, defect text, and incident notes are agreed.</td><td>Define masking before AI processing.</td></tr>
      <tr><td>Decision governance</td><td>Approvers for exclusions, residual risk, and CAB publication are known.</td><td>Confirm human-review path before live pilot.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Data And Integration Detail",
                    "html":  `
<h3>Core Data Objects</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Core data object</th><th>Minimum fields</th></tr></thead>
    <tbody>
      <tr><td>Release</td><td>Release ID; release train; date; owner; deployment window; scope status.</td></tr>
      <tr><td>Change / feature</td><td>Change ID; title; source system; owner; status; linked transport.</td></tr>
      <tr><td>Transport</td><td>Transport ID; object list; source/target system; import status; package/component.</td></tr>
      <tr><td>Changed object</td><td>Object name; type; component; module; changed date; owner.</td></tr>
      <tr><td>Business process</td><td>Process ID; process name; owner; criticality; compliance flag.</td></tr>
      <tr><td>Test case</td><td>Test ID; title; manual/automated flag; mapped process; priority; owner.</td></tr>
      <tr><td>Test execution</td><td>Test ID; cycle; execution date; pass/fail; duration; defect link.</td></tr>
      <tr><td>Defect / incident</td><td>ID; severity; module; process; root cause; release link; business impact.</td></tr>
      <tr><td>Recommendation</td><td>Risk score; included tests; excluded tests; confidence; reason; approver.</td></tr>
    </tbody>
  </table>
</div>
<h3>Required Join Keys</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Join</th><th>Why required</th></tr></thead>
    <tbody>
      <tr><td>Release ID - change / feature</td><td>Establish release scope.</td></tr>
      <tr><td>Change ID - transport</td><td>Tie functional scope to technical movement.</td></tr>
      <tr><td>Transport - changed object</td><td>Identify impacted SAP objects.</td></tr>
      <tr><td>Changed object - business process</td><td>Translate technical change into business impact.</td></tr>
      <tr><td>Business process - test case</td><td>Identify candidate regression coverage.</td></tr>
      <tr><td>Test case - execution history</td><td>Use recent outcome, duration, and defect history for ranking.</td></tr>
      <tr><td>Defect / incident - process / release</td><td>Raise risk where escaped issues cluster.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Next Steps And Sources",
                    "html":  `
<h3>Recommended Next Steps</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Step</th><th>Action</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Select one SAP domain and one release train.</td><td>Pilot scope agreed.</td></tr>
      <tr><td>2</td><td>Run a short data-readiness and traceability assessment.</td><td>Known gaps and remediation actions.</td></tr>
      <tr><td>3</td><td>Extract a representative sample of releases, transports, tests, and defects.</td><td>Baseline data pack.</td></tr>
      <tr><td>4</td><td>Define mandatory-test rules and process-criticality model.</td><td>Explainable rules baseline.</td></tr>
      <tr><td>5</td><td>Validate recommendations against a completed historical release.</td><td>Calibrated scoring and trust baseline.</td></tr>
      <tr><td>6</td><td>Launch a governed live pilot with QA and release-owner review.</td><td>Measured pilot outcome and scale decision.</td></tr>
    </tbody>
  </table>
</div>
                    `
                }
                            ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "AI Release Assurance for SAP",
                                      "SAP BTP",
                                      "SAP Cloud ALM"
                                  ],
                         "businessProcess":  "Release Management / Test Management / Application Lifecycle Management",
                         "workstream":  "AI Release Assurance for SAP",
                         "requirement":  {
                                             "externalId":  "REQ-REL-001",
                                             "title":  "AI Release Assurance for SAP",
                                             "description":  "<p>Deliver AI Release Assurance for SAP by connecting release, transport, defect, test, and process data; applying deterministic rules first; and using AI to rank, explain, and summarize release risk while keeping exclusions, low-confidence mappings, and release approval under human review.</p><h2>Problem Solved</h2><p>SAP regression cycles are often broad because release evidence, technical change impact, business-process criticality, test assets, automation coverage, and defect history are not connected in one defensible decision view.</p><h2>Data Required</h2><p>Release scope, change and transport records, changed object metadata, process criticality, test catalog, automation coverage, execution history, defect and incident history, recommendation rationale, and approval status.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; AI Release Assurance for SAP; SAP BTP; SAP Cloud ALM",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Release Management / Test Management / Application Lifecycle Management"
                                         },
                         "userStories":  [
                            {
                                "externalId":  "US-REL-001",
                                "title":  "US-REL-001 - A release-risk view that connects transports, change records, business processes, defects, and test assets",
                                "persona":  "an implementation owner",
                                "want":  "A release-risk view that connects transports, change records, business processes, defects, and test assets",
                                "soThat":  "Cuts regression effort; improves release quality; supports transparent risk-based release decisions; raises automation asset utilization",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-REL-002",
                                "title":  "US-REL-002 - A recommended regression scope split into mandatory, recommended, optional, and excluded-with-rationale tests",
                                "persona":  "an implementation owner",
                                "want":  "A recommended regression scope split into mandatory, recommended, optional, and excluded-with-rationale tests",
                                "soThat":  "Cuts regression effort; improves release quality; supports transparent risk-based release decisions; raises automation asset utilization",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-REL-003",
                                "title":  "US-REL-003 - Automation coverage visibility so available automated regression assets are used before manual effort is assigned",
                                "persona":  "an implementation owner",
                                "want":  "Automation coverage visibility so available automated regression assets are used before manual effort is assigned",
                                "soThat":  "Cuts regression effort; improves release quality; supports transparent risk-based release decisions; raises automation asset utilization",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-REL-004",
                                "title":  "US-REL-004 - A release confidence view for QA leads, application owners, release managers, and CAB stakeholders",
                                "persona":  "an implementation owner",
                                "want":  "A release confidence view for QA leads, application owners, release managers, and CAB stakeholders",
                                "soThat":  "Cuts regression effort; improves release quality; supports transparent risk-based release decisions; raises automation asset utilization",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-REL-005",
                                "title":  "US-REL-005 - An audit-ready rationale showing why each high-risk process or test was included, excluded, or escalated",
                                "persona":  "an implementation owner",
                                "want":  "An audit-ready rationale showing why each high-risk process or test was included, excluded, or escalated",
                                "soThat":  "Cuts regression effort; improves release quality; supports transparent risk-based release decisions; raises automation asset utilization",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            }
                                         ],
                         "testCases":  [
                            {
                                "externalId":  "TC-REL-001",
                                "testCaseName":  "TC-REL-001 - Validate Build Step 1",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Confirm pilot scope, release train, users, and decision owners",
                                "instructions":  [
                                                     "Confirm pilot scope, release train, users, and decision owners.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-002",
                                "testCaseName":  "TC-REL-002 - Validate Build Step 2",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Assess release, test, defect, transport, and process data maturity",
                                "instructions":  [
                                                     "Assess release, test, defect, transport, and process data maturity.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-003",
                                "testCaseName":  "TC-REL-003 - Validate Build Step 3",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Define the canonical entity model",
                                "instructions":  [
                                                     "Define the canonical entity model.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-004",
                                "testCaseName":  "TC-REL-004 - Validate Build Step 4",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Stand up SAP BTP application shell",
                                "instructions":  [
                                                     "Stand up SAP BTP application shell.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-005",
                                "testCaseName":  "TC-REL-005 - Validate Build Step 5",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Configure SAP Cloud ALM, test, defect, and DevOps connectors",
                                "instructions":  [
                                                     "Configure SAP Cloud ALM, test, defect, and DevOps connectors.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-006",
                                "testCaseName":  "TC-REL-006 - Validate Build Step 6",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Implement deterministic rules first",
                                "instructions":  [
                                                     "Implement deterministic rules first.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-007",
                                "testCaseName":  "TC-REL-007 - Validate Build Step 7",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Add AI-assisted ranking and recommendation explanation",
                                "instructions":  [
                                                     "Add AI-assisted ranking and recommendation explanation.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-008",
                                "testCaseName":  "TC-REL-008 - Validate Build Step 8",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Build release dashboard and QA workbench",
                                "instructions":  [
                                                     "Build release dashboard and QA workbench.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-009",
                                "testCaseName":  "TC-REL-009 - Validate Build Step 9",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Validate against a historical release",
                                "instructions":  [
                                                     "Validate against a historical release.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            },
                            {
                                "externalId":  "TC-REL-010",
                                "testCaseName":  "TC-REL-010 - Validate Build Step 10",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Release Assurance for SAP",
                                "actionTitle":  "Run live pilot with human review",
                                "instructions":  [
                                                     "Run live pilot with human review.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Release Assurance for SAP with traceable evidence."
                            }
                                      ]
                     },
        "sources":  [
                    {
                        "label":  "Internal source document: AI_Release_Assurance_for_SAP_Customer_Ready_Solution_Design_v2_No_Images.md",
                        "note":  "Customer-ready AI Release Assurance for SAP solution design pack extracted from the attached zip.",
                        "url":  ""
                    }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Select one SAP domain and one release train, run a short data-readiness assessment, extract representative release evidence, define mandatory-test rules and process criticality, validate recommendations against a historical release, then launch a governed live pilot with QA and release-owner review."
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
        "description":  "Tickets enter support with inconsistent quality and often bounce across teams, increasing cost-to-serve and delaying resolution.",
        "function":  "Deliver AI-Powered AMS Control Tower on SAP Cloud ALM or enterprise ITSM, SAP BTP, SAP AI Foundation / generative AI hub, SAP Joule, KB platform, analytics store, optional SAP Build Process Automation. AI capabilities: Classification, duplicate detection, semantic retrieval, response drafting, resolver recommendation, SLA-risk prediction, pattern mining.",
        "summary":  "A premium AMS layer that triages, deduplicates, routes, and enriches SAP incidents using SAP-module-aware AI and a governed resolution knowledge system.",
        "useCase":  [
                        {
                            "text":  "A premium AMS layer that triages, deduplicates, routes, and enriches SAP incidents using SAP-module-aware AI and a governed resolution knowledge system."
                        },
                        {
                            "heading":  "Solution Provides",
                            "items":  [
                                          "A service-desk cockpit that summarizes incoming tickets and identifies missing information.",
                                          "SAP module, process, urgency, impact, and resolver-group classification.",
                                          "Duplicate and related-ticket detection across current and historical incidents.",
                                          "Similar-resolution retrieval from ticket history, KB articles, and runbooks.",
                                          "Draft resolver notes and first responses with confidence thresholds and human review."
                                          ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
<p>The updated design pack positions this as a customer-ready service offering with a practical MVP path and a productized expansion path.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Delivery lens</th><th>Design-pack view</th></tr></thead>
    <tbody>
      <tr><td>MVP target</td><td>One or two support towers with historical tickets, routing recommendations, enrichment, and duplicate detection.</td></tr>
      <tr><td>Productized version</td><td>Reusable AMS accelerator with packaged service metrics, managed support analytics, and semi-autonomous L1/L1.5 operating mode.</td></tr>
    </tbody>
  </table>
</div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "Ticket volume is high enough for repeat patterns, misroutes, SLA aging, and knowledge reuse to matter.",
                         "Resolved-ticket history, KB articles, worklogs, and resolver group taxonomy are available for analysis.",
                         "The AMS organization uses SAP Cloud ALM, ServiceNow, Jira Service Management, or a comparable ITSM backbone.",
                         "The operating model allows AI to recommend and enrich while humans retain control of closure, escalation, and customer communication."
                         ],
        "implementation":  [
                              "Define AMS service taxonomy and canonical ticket schema aligned to SAP modules, processes, towers, priorities, and SLAs.",
                              "Build ticket ingestion and enrichment connectors from ITSM, email/chat intake, monitoring alerts, KB sources, and SAP landscape inventory.",
                              "Configure classifiers and duplicate detection using resolved tickets and known resolver-group outcomes.",
                              "Implement routing rules and human-in-the-loop review for low-confidence or high-risk recommendations.",
                              "Enable recommended resolution drafts, missing-information prompts, and service manager reporting.",
                              "Measure and tune using misroute rate, first-response quality, backlog aging, duplicate clusters, and SLA-risk prediction accuracy."
                              ],
        "roadmapImage":  {
                             "src":  "assets/working-examples/ai-release-assurance/Implementation%20Roadmap_AI-Powered%20AMS%20Control%20Tower.png",
                             "alt":  "AI-Powered AMS Control Tower implementation roadmap",
                             "caption":  "AI-Powered AMS Control Tower implementation roadmap from the updated design pack."
                         },
        "collapsibleSections":  [
                {
                    "title":  "Design Dimensions",
                    "html":  `
<p>A premium AMS layer that triages, deduplicates, routes, and enriches SAP incidents using SAP-module-aware AI and a governed resolution knowledge system.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Design dimension</th><th>Solution detail</th></tr></thead>
    <tbody>
      <tr><td>Benefits</td><td>Improves first response; reduces misrouting and backlog aging; raises consultant productivity and SLA attainment; builds reusable resolution IP.</td></tr>
      <tr><td>Target customers</td><td>AMS leaders, service delivery managers, CIO operations teams, shared service centers, managed service buyers with multi-module SAP estates.</td></tr>
      <tr><td>Problem solved</td><td>Tickets enter support with inconsistent quality and often bounce across teams, increasing cost-to-serve and delaying resolution.</td></tr>
      <tr><td>Required SAP / technology tools</td><td>SAP Cloud ALM or enterprise ITSM, SAP BTP, SAP AI Foundation / generative AI hub, SAP Joule, KB platform, analytics store, optional SAP Build Process Automation.</td></tr>
      <tr><td>Data required</td><td>Ticket history, worklogs, resolver taxonomy, SLA rules, KB articles, runbooks, module/landscape metadata, impact fields.</td></tr>
      <tr><td>AI capability used</td><td>Classification, duplicate detection, semantic retrieval, response drafting, resolver recommendation, SLA-risk prediction, pattern mining.</td></tr>
      <tr><td>MVP target</td><td>One or two support towers with historical tickets, routing recommendations, enrichment, and duplicate detection.</td></tr>
      <tr><td>Productized version</td><td>Reusable AMS accelerator with packaged service metrics, managed support analytics, and semi-autonomous L1/L1.5 operating mode.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Solution Provides And Applicability",
                    "html":  `
<h3>Solution Provides</h3>
<ul><li>A service-desk cockpit that summarizes incoming tickets and identifies missing information.</li><li>SAP module, process, urgency, impact, and resolver-group classification.</li><li>Duplicate and related-ticket detection across current and historical incidents.</li><li>Similar-resolution retrieval from ticket history, KB articles, and runbooks.</li><li>Draft resolver notes and first responses with confidence thresholds and human review.</li></ul>
<h3>Applicability</h3>
<ul><li>Ticket volume is high enough for repeat patterns, misroutes, SLA aging, and knowledge reuse to matter.</li><li>Resolved-ticket history, KB articles, worklogs, and resolver group taxonomy are available for analysis.</li><li>The AMS organization uses SAP Cloud ALM, ServiceNow, Jira Service Management, or a comparable ITSM backbone.</li><li>The operating model allows AI to recommend and enrich while humans retain control of closure, escalation, and customer communication.</li></ul>
                    `
                },
                {
                    "title":  "Readiness Conditions",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Readiness condition observed</th><th>Recommended action before activation</th></tr></thead>
    <tbody>
      <tr><td>No stable resolver-group taxonomy exists.</td><td>Define towers, queues, ownership, escalation paths, and module/process labels before routing automation.</td></tr>
      <tr><td>Ticket descriptions and closure notes are weak.</td><td>Start with summarization, missing-information prompts, and KB cleanup before relying on resolution recommendation.</td></tr>
      <tr><td>SLA rules differ by customer, tower, and priority.</td><td>Normalize SLA policy, clock rules, escalation thresholds, and exception handling into the ticket schema.</td></tr>
      <tr><td>Knowledge content is unapproved or stale.</td><td>Add a knowledge approval workflow and mark draft recommendations as assistive until approved by the knowledge owner.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Architecture And Component Design",
                    "html":  `
<h3>Architecture Summary</h3>
<ul><li>Capture incidents from ITSM channels and normalize ticket payloads.</li><li>Classify module, process, urgency, and probable resolver team.</li><li>Retrieve similar historical resolutions and draft structured responses.</li><li>Route tickets through workflow with confidence thresholds and human review.</li></ul>
<div class="working-example-gallery" aria-label="AI-Powered AMS Control Tower reference architecture">
  <figure>
    <img src="assets/working-examples/ai-release-assurance/AI_Powered_AMS_Control_Tower.png" alt="AI-Powered AMS Control Tower reference architecture" onerror="handleMissingExampleImage(this)" />
    <figcaption>AI-Powered AMS Control Tower reference architecture from the updated design pack.</figcaption>
  </figure>
</div>
<h3>Logical Component Design</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Layer</th><th>Key design decisions</th></tr></thead>
    <tbody>
      <tr><td>Experience layer</td><td>Service desk cockpit, resolver workspace, service manager insights, executive SLA dashboard.</td></tr>
      <tr><td>Application layer</td><td>Ticket ingestion API, taxonomy engine, deduplication service, routing orchestrator, resolution recommendation service.</td></tr>
      <tr><td>AI layer</td><td>Intent classifier, similarity search, LLM drafting service, breach-risk model, continuous learning feedback loop.</td></tr>
      <tr><td>Data layer</td><td>Ticket lakehouse, vector index for prior cases, KB store, resolver performance mart.</td></tr>
      <tr><td>Integration layer</td><td>Cloud ALM/ServiceNow/JSM, email/chat channels, monitoring alerts, SAP landscape inventory.</td></tr>
      <tr><td>Security &amp; governance</td><td>PII filtering, RBAC, prompt/response logging, knowledge approval workflow, confidence-based human override.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Non-Functional Requirements",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Requirement</th><th>Customer-ready control</th></tr></thead>
    <tbody>
      <tr><td>Security</td><td>Role-based access control, least-privilege access, and masking for sensitive operational data.</td></tr>
      <tr><td>Auditability</td><td>Recommendation, prompt, override, approval, and user-action logging for governed decisions.</td></tr>
      <tr><td>Performance</td><td>Near-real-time ingestion for operational use cases; scheduled refresh is acceptable for governance analytics.</td></tr>
      <tr><td>Resilience</td><td>Retry logic, queue-based integration, monitoring for connector failures, and fallback paths when AI services are unavailable.</td></tr>
      <tr><td>Model governance</td><td>Human-review thresholds, prompt templates, model version control, and periodic accuracy review.</td></tr>
      <tr><td>Extensibility</td><td>Modular connectors for SAP and non-SAP ALM, ITSM, CI/CD, observability, and collaboration platforms.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Suggested Build Stack",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Domain</th><th>Preferred choice</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>App/orchestration</td><td>SAP BTP (CAP / Build Code / Build Process Automation)</td><td>Core APIs, workflows, orchestration, and extension services.</td></tr>
      <tr><td>AI runtime</td><td>SAP AI Foundation / generative AI hub</td><td>Governed model access, prompt management, and AI lifecycle control.</td></tr>
      <tr><td>SAP process context</td><td>SAP Cloud ALM / relevant SAP line-of-business apps</td><td>Keep SAP-native process and lifecycle context where available.</td></tr>
      <tr><td>Analytics</td><td>SAP HANA Cloud / Datasphere or BTP persistence</td><td>Operational mart, scorecards, trend views, and audit-friendly reporting.</td></tr>
      <tr><td>Experience</td><td>Fiori-style web UI / Joule integration where justified</td><td>Use Joule as an assisted experience, not as the only operating surface.</td></tr>
      <tr><td>ITSM/Ops integration</td><td>ServiceNow / Jira / monitoring tools / Integration Suite</td><td>Integrate into the customer ecosystem rather than replacing it.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Cloud ALM Export Package",
                    "exports":  [
                                    "requirement",
                                    "user-stories",
                                    "test-cases"
                                ],
                    "html":  `
<p>Use these exports to seed the implementation backlog, user stories, and validation scripts for this offering.</p><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th>Export</th><th>Purpose</th></tr></thead><tbody><tr><td>Requirement</td><td>Creates the parent Cloud ALM requirement for the service offering.</td></tr><tr><td>User stories</td><td>Creates delivery-ready stories based on the updated design pack capabilities.</td></tr><tr><td>Test cases</td><td>Creates validation scripts aligned to the build approach and controls.</td></tr></tbody></table></div>
                    `
                },
                {
                    "title":  "Next Steps And Sources",
                    "html":  `
<h3>Next Steps</h3>
<ul><li>Confirm ticket-source access, ticket fields, worklog availability, and closure-code reliability.</li><li>Validate the resolver group taxonomy and clarify ownership for cross-module issues.</li><li>Define which ticket categories can be auto-routed, which need human review, and which must always escalate.</li><li>Review PII, HR, payroll, security, and executive-impact tickets for stricter handling rules.</li></ul>
                    `
                }
                            ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "AI-Powered AMS Control Tower",
                                      "SAP BTP",
                                      "SAP Cloud ALM"
                                  ],
                         "businessProcess":  "AMS / IT Service Management / Application Operations",
                         "workstream":  "AI-Powered AMS Control Tower",
                         "requirement":  {
                                             "externalId":  "REQ-AMS-001",
                                             "title":  "AI-Powered AMS Control Tower",
                                             "description":  "<p>A premium AMS layer that triages, deduplicates, routes, and enriches SAP incidents using SAP-module-aware AI and a governed resolution knowledge system.</p><h2>Problem Solved</h2><p>Tickets enter support with inconsistent quality and often bounce across teams, increasing cost-to-serve and delaying resolution.</p><h2>Data Required</h2><p>Ticket history, worklogs, resolver taxonomy, SLA rules, KB articles, runbooks, module/landscape metadata, impact fields.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; AI-Powered AMS Control Tower; SAP BTP; SAP Cloud ALM",
                                             "plannedRelease":  "",
                                             "businessProcess":  "AMS / IT Service Management / Application Operations"
                                         },
                         "userStories":  [
                            {
                                "externalId":  "US-AMS-001",
                                "title":  "US-AMS-001 - A service-desk cockpit that summarizes incoming tickets and identifies missing information",
                                "persona":  "an implementation owner",
                                "want":  "A service-desk cockpit that summarizes incoming tickets and identifies missing information",
                                "soThat":  "Improves first response; reduces misrouting and backlog aging; raises consultant productivity and SLA attainment; builds reusable resolution IP",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-AMS-002",
                                "title":  "US-AMS-002 - SAP module, process, urgency, impact, and resolver-group classification",
                                "persona":  "an implementation owner",
                                "want":  "SAP module, process, urgency, impact, and resolver-group classification",
                                "soThat":  "Improves first response; reduces misrouting and backlog aging; raises consultant productivity and SLA attainment; builds reusable resolution IP",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-AMS-003",
                                "title":  "US-AMS-003 - Duplicate and related-ticket detection across current and historical incidents",
                                "persona":  "an implementation owner",
                                "want":  "Duplicate and related-ticket detection across current and historical incidents",
                                "soThat":  "Improves first response; reduces misrouting and backlog aging; raises consultant productivity and SLA attainment; builds reusable resolution IP",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-AMS-004",
                                "title":  "US-AMS-004 - Similar-resolution retrieval from ticket history, KB articles, and runbooks",
                                "persona":  "an implementation owner",
                                "want":  "Similar-resolution retrieval from ticket history, KB articles, and runbooks",
                                "soThat":  "Improves first response; reduces misrouting and backlog aging; raises consultant productivity and SLA attainment; builds reusable resolution IP",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-AMS-005",
                                "title":  "US-AMS-005 - Draft resolver notes and first responses with confidence thresholds and human review",
                                "persona":  "an implementation owner",
                                "want":  "Draft resolver notes and first responses with confidence thresholds and human review",
                                "soThat":  "Improves first response; reduces misrouting and backlog aging; raises consultant productivity and SLA attainment; builds reusable resolution IP",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            }
                                         ],
                         "testCases":  [
                            {
                                "externalId":  "TC-AMS-001",
                                "testCaseName":  "TC-AMS-001 - Validate Build Step 1",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI-Powered AMS Control Tower",
                                "actionTitle":  "Define AMS service taxonomy and canonical ticket schema aligned to SAP modules, processes, towers, priorities, and SLAs",
                                "instructions":  [
                                                     "Define AMS service taxonomy and canonical ticket schema aligned to SAP modules, processes, towers, priorities, and SLAs.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI-Powered AMS Control Tower with traceable evidence."
                            },
                            {
                                "externalId":  "TC-AMS-002",
                                "testCaseName":  "TC-AMS-002 - Validate Build Step 2",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI-Powered AMS Control Tower",
                                "actionTitle":  "Build ticket ingestion and enrichment connectors from ITSM, email/chat intake, monitoring alerts, KB sources, and SAP landscape inventory",
                                "instructions":  [
                                                     "Build ticket ingestion and enrichment connectors from ITSM, email/chat intake, monitoring alerts, KB sources, and SAP landscape inventory.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI-Powered AMS Control Tower with traceable evidence."
                            },
                            {
                                "externalId":  "TC-AMS-003",
                                "testCaseName":  "TC-AMS-003 - Validate Build Step 3",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI-Powered AMS Control Tower",
                                "actionTitle":  "Configure classifiers and duplicate detection using resolved tickets and known resolver-group outcomes",
                                "instructions":  [
                                                     "Configure classifiers and duplicate detection using resolved tickets and known resolver-group outcomes.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI-Powered AMS Control Tower with traceable evidence."
                            },
                            {
                                "externalId":  "TC-AMS-004",
                                "testCaseName":  "TC-AMS-004 - Validate Build Step 4",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI-Powered AMS Control Tower",
                                "actionTitle":  "Implement routing rules and human-in-the-loop review for low-confidence or high-risk recommendations",
                                "instructions":  [
                                                     "Implement routing rules and human-in-the-loop review for low-confidence or high-risk recommendations.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI-Powered AMS Control Tower with traceable evidence."
                            },
                            {
                                "externalId":  "TC-AMS-005",
                                "testCaseName":  "TC-AMS-005 - Validate Build Step 5",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI-Powered AMS Control Tower",
                                "actionTitle":  "Enable recommended resolution drafts, missing-information prompts, and service manager reporting",
                                "instructions":  [
                                                     "Enable recommended resolution drafts, missing-information prompts, and service manager reporting.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI-Powered AMS Control Tower with traceable evidence."
                            },
                            {
                                "externalId":  "TC-AMS-006",
                                "testCaseName":  "TC-AMS-006 - Validate Build Step 6",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI-Powered AMS Control Tower",
                                "actionTitle":  "Measure and tune using misroute rate, first-response quality, backlog aging, duplicate clusters, and SLA-risk prediction accuracy",
                                "instructions":  [
                                                     "Measure and tune using misroute rate, first-response quality, backlog aging, duplicate clusters, and SLA-risk prediction accuracy.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI-Powered AMS Control Tower with traceable evidence."
                            }
                                      ]
                     },
        "sources":  [
                    {
                        "label":  "Internal source document: Top_5_AI_Powered_SAP_Service_Offerings_Codex_Ready_Design_Pack_v2.md",
                        "note":  "AI-Powered AMS Control Tower design pack from the updated Downloads design pack.",
                        "url":  ""
                    },
                    {
                        "label":  "SAP Cloud ALM API Guide",
                        "url":  "https://help.sap.com/docs/cloud-alm/apis/about"
                    },
                    {
                        "label":  "SAP Cloud ALM Service Level Reporting",
                        "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/service-level-reporting"
                    },
                    {
                        "label":  "SAP Build Process Automation",
                        "url":  "https://help.sap.com/docs/build-process-automation/sap-build-process-automation/using-sap-build-process-automation"
                    },
                    {
                        "label":  "SAP AI Core / generative AI hub",
                        "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                    },
                    {
                        "label":  "SAP AI Core Prompt Registry",
                        "url":  "https://help.sap.com/docs/sap-ai-core/generative-ai/prompt-registry"
                    }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Confirm ticket-source access, ticket fields, worklog availability, and closure-code reliability. Validate the resolver group taxonomy and clarify ownership for cross-module issues. Define which ticket categories can be auto-routed, which need human review, and which must always escalate. Review PII, HR, payroll, security, and executive-impact tickets for stricter handling rules."
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
        "description":  "Hypercare generates incident volume, fragmented communication, and competing narratives; teams struggle to separate training, data, configuration, integration, and performance causes.",
        "function":  "Deliver AI Hypercare Stabilization Command Center on SAP Cloud ALM, SAP BTP, SAP AI Foundation / generative AI hub, SAP Joule, monitoring/observability tools, ITSM, collaboration tools, optional Signavio context. AI capabilities: Incident clustering, thematic root-cause analysis, sentiment/theme extraction, action prioritization, narrative summarization.",
        "summary":  "A structured hypercare command center that uses AI to cluster incidents, separate symptoms from systemic causes, and drive daily stabilization decisions after go-live.",
        "useCase":  [
                        {
                            "text":  "A structured hypercare command center that uses AI to cluster incidents, separate symptoms from systemic causes, and drive daily stabilization decisions after go-live."
                        },
                        {
                            "heading":  "Solution Provides",
                            "items":  [
                                          "A single hypercare dashboard combining incidents, alerts, notes, and process impact.",
                                          "AI clustering that groups symptoms into actionable root-cause themes.",
                                          "Daily stabilization packs for war-room, sponsor, and executive consumption.",
                                          "A process heatmap showing impacted business areas, owners, and severity trends.",
                                          "A structured transition-to-AMS backlog with priority, owner, root cause, and recommended action."
                                          ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
<p>The updated design pack positions this as a customer-ready service offering with a practical MVP path and a productized expansion path.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Delivery lens</th><th>Design-pack view</th></tr></thead>
    <tbody>
      <tr><td>MVP target</td><td>One go-live wave or dress rehearsal focused on dashboarding, clustering, and daily stabilization packs.</td></tr>
      <tr><td>Productized version</td><td>Premium hypercare managed service bundle with command-center methods, standardized metrics, and handover automation.</td></tr>
    </tbody>
  </table>
</div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "The customer is preparing for, executing, or exiting a major SAP go-live or rollout wave.",
                         "Incident, alert, feedback, and meeting-note sources can be consolidated for daily stabilization review.",
                         "Leadership needs a trusted narrative that separates volume noise from systemic blockers.",
                         "The program wants to hand over a clean backlog to AMS rather than a fragmented issue list."
                         ],
        "implementation":  [
                              "Create a common hypercare taxonomy covering training, master data, configuration, integration, security, performance, and defect causes.",
                              "Integrate incident, alert, log, collaboration-note, and user-feedback feeds into a BTP-based stabilization mart.",
                              "Implement clustering and theme extraction logic with daily dashboard refresh and manual correction controls.",
                              "Define stabilization KPIs such as volume burn-down, repeat incident rate, critical-process impact, and owner accountability.",
                              "Generate structured daily packs for war-room and sponsor consumption with human review before distribution.",
                              "Close hypercare with an AI-assisted transition report and prioritized AMS backlog."
                              ],
        "roadmapImage":  {
                             "src":  "assets/working-examples/ai-release-assurance/Implementation%20Roadmap_AI%20Hypercare%20Stabilization%20Command%20Center.png",
                             "alt":  "AI Hypercare Stabilization Command Center implementation roadmap",
                             "caption":  "AI Hypercare Stabilization Command Center implementation roadmap from the updated design pack."
                         },
        "collapsibleSections":  [
                {
                    "title":  "Design Dimensions",
                    "html":  `
<p>A structured hypercare command center that uses AI to cluster incidents, separate symptoms from systemic causes, and drive daily stabilization decisions after go-live.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Design dimension</th><th>Solution detail</th></tr></thead>
    <tbody>
      <tr><td>Benefits</td><td>Speeds stabilization; reduces war-room noise; improves executive transparency; creates a clean transition backlog for AMS handover.</td></tr>
      <tr><td>Target customers</td><td>Program sponsors, PMOs, hypercare leads, transformation directors, CIOs managing S/4HANA or major rollout go-lives.</td></tr>
      <tr><td>Problem solved</td><td>Hypercare generates incident volume, fragmented communication, and competing narratives; teams struggle to separate training, data, configuration, integration, and performance causes.</td></tr>
      <tr><td>Required SAP / technology tools</td><td>SAP Cloud ALM, SAP BTP, SAP AI Foundation / generative AI hub, SAP Joule, monitoring/observability tools, ITSM, collaboration tools, optional Signavio context.</td></tr>
      <tr><td>Data required</td><td>Incidents, monitoring alerts, logs, system health metrics, war-room notes, user feedback, cutover plan, defect backlog, ownership model.</td></tr>
      <tr><td>AI capability used</td><td>Incident clustering, thematic root-cause analysis, sentiment/theme extraction, action prioritization, narrative summarization.</td></tr>
      <tr><td>MVP target</td><td>One go-live wave or dress rehearsal focused on dashboarding, clustering, and daily stabilization packs.</td></tr>
      <tr><td>Productized version</td><td>Premium hypercare managed service bundle with command-center methods, standardized metrics, and handover automation.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Solution Provides And Applicability",
                    "html":  `
<h3>Solution Provides</h3>
<ul><li>A single hypercare dashboard combining incidents, alerts, notes, and process impact.</li><li>AI clustering that groups symptoms into actionable root-cause themes.</li><li>Daily stabilization packs for war-room, sponsor, and executive consumption.</li><li>A process heatmap showing impacted business areas, owners, and severity trends.</li><li>A structured transition-to-AMS backlog with priority, owner, root cause, and recommended action.</li></ul>
<h3>Applicability</h3>
<ul><li>The customer is preparing for, executing, or exiting a major SAP go-live or rollout wave.</li><li>Incident, alert, feedback, and meeting-note sources can be consolidated for daily stabilization review.</li><li>Leadership needs a trusted narrative that separates volume noise from systemic blockers.</li><li>The program wants to hand over a clean backlog to AMS rather than a fragmented issue list.</li></ul>
                    `
                },
                {
                    "title":  "Readiness Conditions",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Readiness condition observed</th><th>Recommended action before activation</th></tr></thead>
    <tbody>
      <tr><td>Hypercare taxonomy is not agreed.</td><td>Create common categories for training, master data, configuration, integration, security, performance, and defect causes.</td></tr>
      <tr><td>War-room notes are inconsistent.</td><td>Standardize capture fields for owner, process, blocker, decision, due date, and escalation path.</td></tr>
      <tr><td>Monitoring and incident data are disconnected.</td><td>Build a daily stabilization mart that connects incident records, monitoring alerts, and process ownership.</td></tr>
      <tr><td>Executive packs are manually created with conflicting views.</td><td>Use AI summarization with human approval to produce a single governed stabilization narrative.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Architecture And Component Design",
                    "html":  `
<h3>Architecture Summary</h3>
<ul><li>Ingest incidents and operating signals every hour or day depending on hypercare criticality.</li><li>Cluster issues by process, role, root-cause theme, and severity.</li><li>Generate daily stabilization packs with trends, blockers, and suggested actions.</li><li>Track exit criteria and handover backlog into AMS.</li></ul>
<div class="working-example-gallery" aria-label="AI Hypercare Stabilization Command Center reference architecture">
  <figure>
    <img src="assets/working-examples/ai-release-assurance/AI_Hypercare_Stabilization_Command_Center.png" alt="AI Hypercare Stabilization Command Center reference architecture" onerror="handleMissingExampleImage(this)" />
    <figcaption>AI Hypercare Stabilization Command Center reference architecture from the updated design pack.</figcaption>
  </figure>
</div>
<h3>Logical Component Design</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Layer</th><th>Key design decisions</th></tr></thead>
    <tbody>
      <tr><td>Experience layer</td><td>Hypercare dashboard, daily war-room pack, process heatmap, executive stabilization summary.</td></tr>
      <tr><td>Application layer</td><td>Incident clustering service, issue-theme tracker, stabilization backlog manager, handover pack generator.</td></tr>
      <tr><td>AI layer</td><td>Theme extraction, anomaly detection, root-cause suggestion, summarization and prioritization models.</td></tr>
      <tr><td>Data layer</td><td>Incident history mart, telemetry store, handover backlog database, role/process mapping tables.</td></tr>
      <tr><td>Integration layer</td><td>Cloud ALM, monitoring tools, collaboration notes, email/chat, AMS onboarding repository.</td></tr>
      <tr><td>Security &amp; governance</td><td>Controlled access for project vs operations teams, issue tagging standards, audit history, approval for executive packs.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Non-Functional Requirements",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Requirement</th><th>Customer-ready control</th></tr></thead>
    <tbody>
      <tr><td>Security</td><td>Role-based access control, least-privilege access, and masking for sensitive operational data.</td></tr>
      <tr><td>Auditability</td><td>Recommendation, prompt, override, approval, and user-action logging for governed decisions.</td></tr>
      <tr><td>Performance</td><td>Near-real-time ingestion for operational use cases; scheduled refresh is acceptable for governance analytics.</td></tr>
      <tr><td>Resilience</td><td>Retry logic, queue-based integration, monitoring for connector failures, and fallback paths when AI services are unavailable.</td></tr>
      <tr><td>Model governance</td><td>Human-review thresholds, prompt templates, model version control, and periodic accuracy review.</td></tr>
      <tr><td>Extensibility</td><td>Modular connectors for SAP and non-SAP ALM, ITSM, CI/CD, observability, and collaboration platforms.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Suggested Build Stack",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Domain</th><th>Preferred choice</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>App/orchestration</td><td>SAP BTP (CAP / Build Code / Build Process Automation)</td><td>Core APIs, workflows, orchestration, and extension services.</td></tr>
      <tr><td>AI runtime</td><td>SAP AI Foundation / generative AI hub</td><td>Governed model access, prompt management, and AI lifecycle control.</td></tr>
      <tr><td>SAP process context</td><td>SAP Cloud ALM / relevant SAP line-of-business apps</td><td>Keep SAP-native process and lifecycle context where available.</td></tr>
      <tr><td>Analytics</td><td>SAP HANA Cloud / Datasphere or BTP persistence</td><td>Operational mart, scorecards, trend views, and audit-friendly reporting.</td></tr>
      <tr><td>Experience</td><td>Fiori-style web UI / Joule integration where justified</td><td>Use Joule as an assisted experience, not as the only operating surface.</td></tr>
      <tr><td>ITSM/Ops integration</td><td>ServiceNow / Jira / monitoring tools / Integration Suite</td><td>Integrate into the customer ecosystem rather than replacing it.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Cloud ALM Export Package",
                    "exports":  [
                                    "requirement",
                                    "user-stories",
                                    "test-cases"
                                ],
                    "html":  `
<p>Use these exports to seed the implementation backlog, user stories, and validation scripts for this offering.</p><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th>Export</th><th>Purpose</th></tr></thead><tbody><tr><td>Requirement</td><td>Creates the parent Cloud ALM requirement for the service offering.</td></tr><tr><td>User stories</td><td>Creates delivery-ready stories based on the updated design pack capabilities.</td></tr><tr><td>Test cases</td><td>Creates validation scripts aligned to the build approach and controls.</td></tr></tbody></table></div>
                    `
                },
                {
                    "title":  "Next Steps And Sources",
                    "html":  `
<h3>Next Steps</h3>
<ul><li>Confirm hypercare period, go-live wave scope, critical process list, and owner matrix.</li><li>Validate availability of incident, monitoring, notes, and feedback data sources.</li><li>Agree executive pack approval flow and stakeholder distribution list.</li><li>Define exit criteria, unresolved issue handover rules, and AMS onboarding format.</li></ul>
                    `
                }
                            ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "AI Hypercare Stabilization Command Center",
                                      "SAP BTP",
                                      "SAP Cloud ALM"
                                  ],
                         "businessProcess":  "Hypercare / Operations / Stabilization",
                         "workstream":  "AI Hypercare Stabilization Command Center",
                         "requirement":  {
                                             "externalId":  "REQ-HYP-001",
                                             "title":  "AI Hypercare Stabilization Command Center",
                                             "description":  "<p>A structured hypercare command center that uses AI to cluster incidents, separate symptoms from systemic causes, and drive daily stabilization decisions after go-live.</p><h2>Problem Solved</h2><p>Hypercare generates incident volume, fragmented communication, and competing narratives; teams struggle to separate training, data, configuration, integration, and performance causes.</p><h2>Data Required</h2><p>Incidents, monitoring alerts, logs, system health metrics, war-room notes, user feedback, cutover plan, defect backlog, ownership model.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; AI Hypercare Stabilization Command Center; SAP BTP; SAP Cloud ALM",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Hypercare / Operations / Stabilization"
                                         },
                         "userStories":  [
                            {
                                "externalId":  "US-HYP-001",
                                "title":  "US-HYP-001 - A single hypercare dashboard combining incidents, alerts, notes, and process impact",
                                "persona":  "an implementation owner",
                                "want":  "A single hypercare dashboard combining incidents, alerts, notes, and process impact",
                                "soThat":  "Speeds stabilization; reduces war-room noise; improves executive transparency; creates a clean transition backlog for AMS handover",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-HYP-002",
                                "title":  "US-HYP-002 - AI clustering that groups symptoms into actionable root-cause themes",
                                "persona":  "an implementation owner",
                                "want":  "AI clustering that groups symptoms into actionable root-cause themes",
                                "soThat":  "Speeds stabilization; reduces war-room noise; improves executive transparency; creates a clean transition backlog for AMS handover",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-HYP-003",
                                "title":  "US-HYP-003 - Daily stabilization packs for war-room, sponsor, and executive consumption",
                                "persona":  "an implementation owner",
                                "want":  "Daily stabilization packs for war-room, sponsor, and executive consumption",
                                "soThat":  "Speeds stabilization; reduces war-room noise; improves executive transparency; creates a clean transition backlog for AMS handover",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-HYP-004",
                                "title":  "US-HYP-004 - A process heatmap showing impacted business areas, owners, and severity trends",
                                "persona":  "an implementation owner",
                                "want":  "A process heatmap showing impacted business areas, owners, and severity trends",
                                "soThat":  "Speeds stabilization; reduces war-room noise; improves executive transparency; creates a clean transition backlog for AMS handover",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-HYP-005",
                                "title":  "US-HYP-005 - A structured transition-to-AMS backlog with priority, owner, root cause, and recommended action",
                                "persona":  "an implementation owner",
                                "want":  "A structured transition-to-AMS backlog with priority, owner, root cause, and recommended action",
                                "soThat":  "Speeds stabilization; reduces war-room noise; improves executive transparency; creates a clean transition backlog for AMS handover",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            }
                                         ],
                         "testCases":  [
                            {
                                "externalId":  "TC-HYP-001",
                                "testCaseName":  "TC-HYP-001 - Validate Build Step 1",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Hypercare Stabilization Command Center",
                                "actionTitle":  "Create a common hypercare taxonomy covering training, master data, configuration, integration, security, performance, and defect causes",
                                "instructions":  [
                                                     "Create a common hypercare taxonomy covering training, master data, configuration, integration, security, performance, and defect causes.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Hypercare Stabilization Command Center with traceable evidence."
                            },
                            {
                                "externalId":  "TC-HYP-002",
                                "testCaseName":  "TC-HYP-002 - Validate Build Step 2",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Hypercare Stabilization Command Center",
                                "actionTitle":  "Integrate incident, alert, log, collaboration-note, and user-feedback feeds into a BTP-based stabilization mart",
                                "instructions":  [
                                                     "Integrate incident, alert, log, collaboration-note, and user-feedback feeds into a BTP-based stabilization mart.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Hypercare Stabilization Command Center with traceable evidence."
                            },
                            {
                                "externalId":  "TC-HYP-003",
                                "testCaseName":  "TC-HYP-003 - Validate Build Step 3",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Hypercare Stabilization Command Center",
                                "actionTitle":  "Implement clustering and theme extraction logic with daily dashboard refresh and manual correction controls",
                                "instructions":  [
                                                     "Implement clustering and theme extraction logic with daily dashboard refresh and manual correction controls.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Hypercare Stabilization Command Center with traceable evidence."
                            },
                            {
                                "externalId":  "TC-HYP-004",
                                "testCaseName":  "TC-HYP-004 - Validate Build Step 4",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Hypercare Stabilization Command Center",
                                "actionTitle":  "Define stabilization KPIs such as volume burn-down, repeat incident rate, critical-process impact, and owner accountability",
                                "instructions":  [
                                                     "Define stabilization KPIs such as volume burn-down, repeat incident rate, critical-process impact, and owner accountability.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Hypercare Stabilization Command Center with traceable evidence."
                            },
                            {
                                "externalId":  "TC-HYP-005",
                                "testCaseName":  "TC-HYP-005 - Validate Build Step 5",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Hypercare Stabilization Command Center",
                                "actionTitle":  "Generate structured daily packs for war-room and sponsor consumption with human review before distribution",
                                "instructions":  [
                                                     "Generate structured daily packs for war-room and sponsor consumption with human review before distribution.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Hypercare Stabilization Command Center with traceable evidence."
                            },
                            {
                                "externalId":  "TC-HYP-006",
                                "testCaseName":  "TC-HYP-006 - Validate Build Step 6",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Hypercare Stabilization Command Center",
                                "actionTitle":  "Close hypercare with an AI-assisted transition report and prioritized AMS backlog",
                                "instructions":  [
                                                     "Close hypercare with an AI-assisted transition report and prioritized AMS backlog.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Hypercare Stabilization Command Center with traceable evidence."
                            }
                                      ]
                     },
        "sources":  [
                    {
                        "label":  "Internal source document: Top_5_AI_Powered_SAP_Service_Offerings_Codex_Ready_Design_Pack_v2.md",
                        "note":  "AI Hypercare Stabilization Command Center design pack from the updated Downloads design pack.",
                        "url":  ""
                    },
                    {
                        "label":  "SAP Cloud ALM API Guide",
                        "url":  "https://help.sap.com/docs/cloud-alm/apis/about"
                    },
                    {
                        "label":  "SAP Cloud ALM Monitoring and Alerting",
                        "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/alert-event-management"
                    },
                    {
                        "label":  "SAP Cloud ALM Service Level Reporting",
                        "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/service-level-reporting"
                    },
                    {
                        "label":  "SAP AI Core / generative AI hub",
                        "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                    },
                    {
                        "label":  "SAP Build Process Automation",
                        "url":  "https://help.sap.com/docs/build-process-automation/sap-build-process-automation/using-sap-build-process-automation"
                    }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Confirm hypercare period, go-live wave scope, critical process list, and owner matrix. Validate availability of incident, monitoring, notes, and feedback data sources. Agree executive pack approval flow and stakeholder distribution list. Define exit criteria, unresolved issue handover rules, and AMS onboarding format."
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
        "description":  "Organizations accumulate custom code and non-standard extensions that increase upgrade cost, operational fragility, and AMS complexity.",
        "function":  "Deliver Clean Core AI Governance Service on SAP BTP, ABAP Cloud, SAP AI Foundation / generative AI hub, SAP Joule, SAP LeanIX, SAP Cloud ALM, code analysis utilities, transport metadata, architecture repository. AI capabilities: Pattern classification, code/extension categorization, policy reasoning, remediation recommendation, executive summarization.",
        "summary":  "An architecture governance service that identifies high-risk customizations and extensions, scores clean-core deviations, and prioritizes remediation pathways aligned with SAP's extensibility model.",
        "useCase":  [
                        {
                            "text":  "An architecture governance service that identifies high-risk customizations and extensions, scores clean-core deviations, and prioritizes remediation pathways aligned with SAP's extensibility model."
                        },
                        {
                            "heading":  "Solution Provides",
                            "items":  [
                                          "A clean-core governance cockpit showing custom-code and extension risk by domain, system, owner, and usage criticality.",
                                          "A policy-based deviation score for extensions, custom code, interfaces, and architecture decisions.",
                                          "AI-assisted categorization of artifacts against clean-core patterns and allowed extensibility options.",
                                          "A prioritized remediation backlog with target patterns such as retire, redesign, side-by-side extension, or retain with waiver.",
                                          "Architecture-board packs that convert technical inventory into modernization decisions."
                                          ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
<p>The updated design pack positions this as a customer-ready service offering with a practical MVP path and a productized expansion path.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Delivery lens</th><th>Design-pack view</th></tr></thead>
    <tbody>
      <tr><td>MVP target</td><td>One landscape or business domain with artifact inventory, risk scoring, and remediation backlog.</td></tr>
      <tr><td>Productized version</td><td>Reusable governance service with policy templates, benchmark reporting, and recurring clean-core review cycles.</td></tr>
    </tbody>
  </table>
</div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "The customer is moving toward RISE, GROW, S/4HANA modernization, or cloud-aligned extension governance.",
                         "Custom objects, enhancements, transports, usage data, and architecture decisions can be inventoried.",
                         "A design authority or enterprise architecture function is accountable for clean-core policy enforcement.",
                         "The customer needs a recurring governance process, not a one-time custom-code report."
                         ],
        "implementation":  [
                              "Define clean-core policy taxonomy based on target architecture principles and allowed extensibility patterns.",
                              "Build collectors or importers for custom code, enhancements, transports, usage data, and architecture metadata.",
                              "Configure deterministic rules and AI classification to score artifacts by policy deviation, business criticality, usage, and support burden.",
                              "Develop remediation workflow with suggested target pattern, ownership, waiver path, and effort band.",
                              "Produce architecture board packs and remediation roadmaps by risk band, value, dependency, and release window.",
                              "Run periodic review cycles to refresh inventory, re-score artifacts, close waivers, and track modernization progress."
                              ],
        "roadmapImage":  {
                             "src":  "assets/working-examples/ai-release-assurance/Implementation%20Roadmap_Clean%20Core%20AI%20Governance%20Service.png",
                             "alt":  "Clean Core AI Governance Service implementation roadmap",
                             "caption":  "Clean Core AI Governance Service implementation roadmap from the updated design pack."
                         },
        "collapsibleSections":  [
                {
                    "title":  "Design Dimensions",
                    "html":  `
<p>An architecture governance service that identifies high-risk customizations and extensions, scores clean-core deviations, and prioritizes remediation pathways aligned with SAP's extensibility model.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Design dimension</th><th>Solution detail</th></tr></thead>
    <tbody>
      <tr><td>Benefits</td><td>Protects upgradeability and cloud fit; quantifies custom and extension risk; creates remediation backlog; strengthens architecture governance.</td></tr>
      <tr><td>Target customers</td><td>CIOs, enterprise architects, SAP platform owners, transformation architects, design authorities, RISE/GROW program leaders.</td></tr>
      <tr><td>Problem solved</td><td>Organizations accumulate custom code and non-standard extensions that increase upgrade cost, operational fragility, and AMS complexity.</td></tr>
      <tr><td>Required SAP / technology tools</td><td>SAP BTP, ABAP Cloud, SAP AI Foundation / generative AI hub, SAP Joule, SAP LeanIX, SAP Cloud ALM, code analysis utilities, transport metadata, architecture repository.</td></tr>
      <tr><td>Data required</td><td>Custom code inventory, enhancements, transport history, usage metadata, architecture decisions, standards, interface dependencies, incident correlation.</td></tr>
      <tr><td>AI capability used</td><td>Pattern classification, code/extension categorization, policy reasoning, remediation recommendation, executive summarization.</td></tr>
      <tr><td>MVP target</td><td>One landscape or business domain with artifact inventory, risk scoring, and remediation backlog.</td></tr>
      <tr><td>Productized version</td><td>Reusable governance service with policy templates, benchmark reporting, and recurring clean-core review cycles.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Solution Provides And Applicability",
                    "html":  `
<h3>Solution Provides</h3>
<ul><li>A clean-core governance cockpit showing custom-code and extension risk by domain, system, owner, and usage criticality.</li><li>A policy-based deviation score for extensions, custom code, interfaces, and architecture decisions.</li><li>AI-assisted categorization of artifacts against clean-core patterns and allowed extensibility options.</li><li>A prioritized remediation backlog with target patterns such as retire, redesign, side-by-side extension, or retain with waiver.</li><li>Architecture-board packs that convert technical inventory into modernization decisions.</li></ul>
<h3>Applicability</h3>
<ul><li>The customer is moving toward RISE, GROW, S/4HANA modernization, or cloud-aligned extension governance.</li><li>Custom objects, enhancements, transports, usage data, and architecture decisions can be inventoried.</li><li>A design authority or enterprise architecture function is accountable for clean-core policy enforcement.</li><li>The customer needs a recurring governance process, not a one-time custom-code report.</li></ul>
                    `
                },
                {
                    "title":  "Readiness Conditions",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Readiness condition observed</th><th>Recommended action before activation</th></tr></thead>
    <tbody>
      <tr><td>Clean-core policy is not documented.</td><td>Define allowed and restricted patterns across in-app extension, developer extensibility, BTP side-by-side extension, integration, and classic custom code.</td></tr>
      <tr><td>Custom code inventory is incomplete.</td><td>Collect object, usage, transport, dependency, owner, and incident-correlation data before scoring remediation priority.</td></tr>
      <tr><td>Architecture waivers are informal.</td><td>Create waiver workflow, expiry dates, accountable owners, and review cadence.</td></tr>
      <tr><td>No modernization decision forum exists.</td><td>Establish design authority review, decision records, and remediation wave planning.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Architecture And Component Design",
                    "html":  `
<h3>Architecture Summary</h3>
<ul><li>Inventory custom objects and extension patterns from the SAP estate.</li><li>Classify each artifact against clean-core policy and usage criticality.</li><li>Generate remediation options such as retire, redesign on BTP, convert to side-by-side extension, or retain with waiver.</li><li>Feed outcomes into architecture board and modernization roadmap.</li></ul>
<div class="working-example-gallery" aria-label="Clean Core AI Governance Service reference architecture">
  <figure>
    <img src="assets/working-examples/ai-release-assurance/Clean_Core_AI_Governance_Service.png" alt="Clean Core AI Governance Service reference architecture" onerror="handleMissingExampleImage(this)" />
    <figcaption>Clean Core AI Governance Service reference architecture from the updated design pack.</figcaption>
  </figure>
</div>
<h3>Logical Component Design</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Layer</th><th>Key design decisions</th></tr></thead>
    <tbody>
      <tr><td>Experience layer</td><td>Architecture governance cockpit, risk heatmap, remediation wave planner, design authority pack.</td></tr>
      <tr><td>Application layer</td><td>Artifact inventory service, policy rules engine, remediation planner, waiver workflow.</td></tr>
      <tr><td>AI layer</td><td>Pattern classifier, code explanation service, remediation recommendation and narrative generator.</td></tr>
      <tr><td>Data layer</td><td>Artifact inventory mart, policy library, waiver repository, cost/risk benchmark tables.</td></tr>
      <tr><td>Integration layer</td><td>Source/code repositories, Cloud ALM, LeanIX, transport systems, BTP services.</td></tr>
      <tr><td>Security &amp; governance</td><td>Segregated architect/developer views, audit logs, waiver approvals, secure code metadata handling.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Non-Functional Requirements",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Requirement</th><th>Customer-ready control</th></tr></thead>
    <tbody>
      <tr><td>Security</td><td>Role-based access control, least-privilege access, and masking for sensitive operational data.</td></tr>
      <tr><td>Auditability</td><td>Recommendation, prompt, override, approval, and user-action logging for governed decisions.</td></tr>
      <tr><td>Performance</td><td>Near-real-time ingestion for operational use cases; scheduled refresh is acceptable for governance analytics.</td></tr>
      <tr><td>Resilience</td><td>Retry logic, queue-based integration, monitoring for connector failures, and fallback paths when AI services are unavailable.</td></tr>
      <tr><td>Model governance</td><td>Human-review thresholds, prompt templates, model version control, and periodic accuracy review.</td></tr>
      <tr><td>Extensibility</td><td>Modular connectors for SAP and non-SAP ALM, ITSM, CI/CD, observability, and collaboration platforms.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Suggested Build Stack",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Domain</th><th>Preferred choice</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>App/orchestration</td><td>SAP BTP (CAP / Build Code / Build Process Automation)</td><td>Core APIs, workflows, orchestration, and extension services.</td></tr>
      <tr><td>AI runtime</td><td>SAP AI Foundation / generative AI hub</td><td>Governed model access, prompt management, and AI lifecycle control.</td></tr>
      <tr><td>SAP process context</td><td>SAP Cloud ALM / relevant SAP line-of-business apps</td><td>Keep SAP-native process and lifecycle context where available.</td></tr>
      <tr><td>Analytics</td><td>SAP HANA Cloud / Datasphere or BTP persistence</td><td>Operational mart, scorecards, trend views, and audit-friendly reporting.</td></tr>
      <tr><td>Experience</td><td>Fiori-style web UI / Joule integration where justified</td><td>Use Joule as an assisted experience, not as the only operating surface.</td></tr>
      <tr><td>ITSM/Ops integration</td><td>ServiceNow / Jira / monitoring tools / Integration Suite</td><td>Integrate into the customer ecosystem rather than replacing it.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Cloud ALM Export Package",
                    "exports":  [
                                    "requirement",
                                    "user-stories",
                                    "test-cases"
                                ],
                    "html":  `
<p>Use these exports to seed the implementation backlog, user stories, and validation scripts for this offering.</p><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th>Export</th><th>Purpose</th></tr></thead><tbody><tr><td>Requirement</td><td>Creates the parent Cloud ALM requirement for the service offering.</td></tr><tr><td>User stories</td><td>Creates delivery-ready stories based on the updated design pack capabilities.</td></tr><tr><td>Test cases</td><td>Creates validation scripts aligned to the build approach and controls.</td></tr></tbody></table></div>
                    `
                },
                {
                    "title":  "Next Steps And Sources",
                    "html":  `
<h3>Next Steps</h3>
<ul><li>Confirm scope: system, landscape, business domain, and transformation objective.</li><li>Validate availability of code inventory, transport history, usage metrics, and architecture standards.</li><li>Agree deviation scoring rules and waiver authority before presenting risk heatmaps.</li><li>Define output format for design authority decisions, modernization backlog, and owner accountability.</li></ul>
                    `
                }
                            ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "Clean Core AI Governance Service",
                                      "SAP BTP",
                                      "SAP Cloud ALM"
                                  ],
                         "businessProcess":  "Architecture Governance / Clean Core / Transformation",
                         "workstream":  "Clean Core AI Governance Service",
                         "requirement":  {
                                             "externalId":  "REQ-CCG-001",
                                             "title":  "Clean Core AI Governance Service",
                                             "description":  "<p>An architecture governance service that identifies high-risk customizations and extensions, scores clean-core deviations, and prioritizes remediation pathways aligned with SAP's extensibility model.</p><h2>Problem Solved</h2><p>Organizations accumulate custom code and non-standard extensions that increase upgrade cost, operational fragility, and AMS complexity.</p><h2>Data Required</h2><p>Custom code inventory, enhancements, transport history, usage metadata, architecture decisions, standards, interface dependencies, incident correlation.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; Clean Core AI Governance Service; SAP BTP; SAP Cloud ALM",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Architecture Governance / Clean Core / Transformation"
                                         },
                         "userStories":  [
                            {
                                "externalId":  "US-CCG-001",
                                "title":  "US-CCG-001 - A clean-core governance cockpit showing custom-code and extension risk by domain, system, owner, and usage criticality",
                                "persona":  "an implementation owner",
                                "want":  "A clean-core governance cockpit showing custom-code and extension risk by domain, system, owner, and usage criticality",
                                "soThat":  "Protects upgradeability and cloud fit; quantifies custom and extension risk; creates remediation backlog; strengthens architecture governance",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-CCG-002",
                                "title":  "US-CCG-002 - A policy-based deviation score for extensions, custom code, interfaces, and architecture decisions",
                                "persona":  "an implementation owner",
                                "want":  "A policy-based deviation score for extensions, custom code, interfaces, and architecture decisions",
                                "soThat":  "Protects upgradeability and cloud fit; quantifies custom and extension risk; creates remediation backlog; strengthens architecture governance",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-CCG-003",
                                "title":  "US-CCG-003 - AI-assisted categorization of artifacts against clean-core patterns and allowed extensibility options",
                                "persona":  "an implementation owner",
                                "want":  "AI-assisted categorization of artifacts against clean-core patterns and allowed extensibility options",
                                "soThat":  "Protects upgradeability and cloud fit; quantifies custom and extension risk; creates remediation backlog; strengthens architecture governance",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-CCG-004",
                                "title":  "US-CCG-004 - A prioritized remediation backlog with target patterns such as retire, redesign, side-by-side extension, or retain with waiver",
                                "persona":  "an implementation owner",
                                "want":  "A prioritized remediation backlog with target patterns such as retire, redesign, side-by-side extension, or retain with waiver",
                                "soThat":  "Protects upgradeability and cloud fit; quantifies custom and extension risk; creates remediation backlog; strengthens architecture governance",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-CCG-005",
                                "title":  "US-CCG-005 - Architecture-board packs that convert technical inventory into modernization decisions",
                                "persona":  "an implementation owner",
                                "want":  "Architecture-board packs that convert technical inventory into modernization decisions",
                                "soThat":  "Protects upgradeability and cloud fit; quantifies custom and extension risk; creates remediation backlog; strengthens architecture governance",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            }
                                         ],
                         "testCases":  [
                            {
                                "externalId":  "TC-CCG-001",
                                "testCaseName":  "TC-CCG-001 - Validate Build Step 1",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate Clean Core AI Governance Service",
                                "actionTitle":  "Define clean-core policy taxonomy based on target architecture principles and allowed extensibility patterns",
                                "instructions":  [
                                                     "Define clean-core policy taxonomy based on target architecture principles and allowed extensibility patterns.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for Clean Core AI Governance Service with traceable evidence."
                            },
                            {
                                "externalId":  "TC-CCG-002",
                                "testCaseName":  "TC-CCG-002 - Validate Build Step 2",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate Clean Core AI Governance Service",
                                "actionTitle":  "Build collectors or importers for custom code, enhancements, transports, usage data, and architecture metadata",
                                "instructions":  [
                                                     "Build collectors or importers for custom code, enhancements, transports, usage data, and architecture metadata.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for Clean Core AI Governance Service with traceable evidence."
                            },
                            {
                                "externalId":  "TC-CCG-003",
                                "testCaseName":  "TC-CCG-003 - Validate Build Step 3",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate Clean Core AI Governance Service",
                                "actionTitle":  "Configure deterministic rules and AI classification to score artifacts by policy deviation, business criticality, usage, and support burden",
                                "instructions":  [
                                                     "Configure deterministic rules and AI classification to score artifacts by policy deviation, business criticality, usage, and support burden.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for Clean Core AI Governance Service with traceable evidence."
                            },
                            {
                                "externalId":  "TC-CCG-004",
                                "testCaseName":  "TC-CCG-004 - Validate Build Step 4",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate Clean Core AI Governance Service",
                                "actionTitle":  "Develop remediation workflow with suggested target pattern, ownership, waiver path, and effort band",
                                "instructions":  [
                                                     "Develop remediation workflow with suggested target pattern, ownership, waiver path, and effort band.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for Clean Core AI Governance Service with traceable evidence."
                            },
                            {
                                "externalId":  "TC-CCG-005",
                                "testCaseName":  "TC-CCG-005 - Validate Build Step 5",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate Clean Core AI Governance Service",
                                "actionTitle":  "Produce architecture board packs and remediation roadmaps by risk band, value, dependency, and release window",
                                "instructions":  [
                                                     "Produce architecture board packs and remediation roadmaps by risk band, value, dependency, and release window.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for Clean Core AI Governance Service with traceable evidence."
                            },
                            {
                                "externalId":  "TC-CCG-006",
                                "testCaseName":  "TC-CCG-006 - Validate Build Step 6",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate Clean Core AI Governance Service",
                                "actionTitle":  "Run periodic review cycles to refresh inventory, re-score artifacts, close waivers, and track modernization progress",
                                "instructions":  [
                                                     "Run periodic review cycles to refresh inventory, re-score artifacts, close waivers, and track modernization progress.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for Clean Core AI Governance Service with traceable evidence."
                            }
                                      ]
                     },
        "sources":  [
                    {
                        "label":  "Internal source document: Top_5_AI_Powered_SAP_Service_Offerings_Codex_Ready_Design_Pack_v2.md",
                        "note":  "Clean Core AI Governance Service design pack from the updated Downloads design pack.",
                        "url":  ""
                    },
                    {
                        "label":  "SAP Clean Core Extensibility and ABAP-Based Extensions",
                        "url":  "https://help.sap.com/docs/abap-cloud/developer-guide-from-classic-abap-to-abap-cloud/clean-core-extensibility-and-abap-based-extensions"
                    },
                    {
                        "label":  "SAP Cloud ALM Extensibility / Clean Core Level",
                        "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/extensibility"
                    },
                    {
                        "label":  "SAP Cloud ALM System View",
                        "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/system-view"
                    },
                    {
                        "label":  "SAP LeanIX and SAP Cloud ALM Integration",
                        "url":  "https://help.sap.com/docs/cloud-alm/setup-administration/integrating-sap-leanix"
                    },
                    {
                        "label":  "SAP AI Core / generative AI hub",
                        "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                    }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Confirm scope: system, landscape, business domain, and transformation objective. Validate availability of code inventory, transport history, usage metrics, and architecture standards. Agree deviation scoring rules and waiver authority before presenting risk heatmaps. Define output format for design authority decisions, modernization backlog, and owner accountability."
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
        "description":  "Integration failures are noisy, cross-system, and hard to triage; logs are distributed and recurring errors lack pattern intelligence.",
        "function":  "Deliver AI Integration Operations Shield on SAP Integration Suite, Advanced Event Mesh where applicable, SAP BTP, SAP AI Foundation / generative AI hub, SAP Cloud ALM or ITSM, observability/log tools, optional API telemetry. AI capabilities: Error clustering, probable-cause ranking, runbook retrieval, anomaly detection, summarization, structural improvement recommendation.",
        "summary":  "An AI-enabled operations layer for SAP integrations that correlates message failures, probable causes, dependency context, and runbooks to accelerate recovery and reduce repeat incidents.",
        "useCase":  [
                        {
                            "text":  "An AI-enabled operations layer for SAP integrations that correlates message failures, probable causes, dependency context, and runbooks to accelerate recovery and reduce repeat incidents."
                        },
                        {
                            "heading":  "Solution Provides",
                            "items":  [
                                          "An integration operations cockpit for message failures, interface health, critical-flow impact, and recurring patterns.",
                                          "Correlation of failure symptoms across SAP Integration Suite, monitoring tools, ITSM, and surrounding systems.",
                                          "Probable-cause ranking enriched by interface catalog, dependency graph, prior incidents, and runbooks.",
                                          "Recovery guidance and resolver recommendation for faster triage and restoration.",
                                          "A structural-fix backlog that converts repeat operational failures into engineering improvements."
                                          ]
                        }
                    ],
        "workingExample":  [
                              {
                                  "html":  `
<p>The updated design pack positions this as a customer-ready service offering with a practical MVP path and a productized expansion path.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Delivery lens</th><th>Design-pack view</th></tr></thead>
    <tbody>
      <tr><td>MVP target</td><td>Critical interface set with failure classification, runbook retrieval, and health dashboard.</td></tr>
      <tr><td>Productized version</td><td>Managed integration operations accelerator with reusable connectors, service packs, and recurring optimization reporting.</td></tr>
    </tbody>
  </table>
</div>
                                  `
                              }
                          ],
        "whenToUse":  [
                         "The customer runs critical SAP and non-SAP interfaces where failures impact order, finance, supply chain, HR, or customer operations.",
                         "Message logs, error codes, interface catalogs, runbooks, and incident records can be consolidated.",
                         "Operations teams need a business-impact view, not only technical error logs.",
                         "Recurring failures need to be converted into backlog items for durable fixes."
                         ],
        "implementation":  [
                              "Define canonical interface and error ontology aligned to operations teams, business processes, and support groups.",
                              "Build log ingestion, masking, and enrichment pipeline on BTP.",
                              "Configure retrieval over runbooks and past incidents for likely fixes and recovery steps.",
                              "Implement cockpit for interface health, probable cause, critical flow impact, owner assignment, and action tracking.",
                              "Enable recurring-pattern reporting and engineering backlog generation.",
                              "Start with the top business-critical interfaces, then scale to the wider estate once taxonomy and runbooks are stable."
                              ],
        "roadmapImage":  {
                             "src":  "assets/working-examples/ai-release-assurance/Implementation%20Roadmap_AI%20Integration%20Operations%20Shield.png",
                             "alt":  "AI Integration Operations Shield implementation roadmap",
                             "caption":  "AI Integration Operations Shield implementation roadmap from the updated design pack."
                         },
        "collapsibleSections":  [
                {
                    "title":  "Design Dimensions",
                    "html":  `
<p>An AI-enabled operations layer for SAP integrations that correlates message failures, probable causes, dependency context, and runbooks to accelerate recovery and reduce repeat incidents.</p>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Design dimension</th><th>Solution detail</th></tr></thead>
    <tbody>
      <tr><td>Benefits</td><td>Lowers interface MTTR; improves continuity for critical flows; reduces expert dependency; creates structural improvement backlog.</td></tr>
      <tr><td>Target customers</td><td>Integration operations heads, AMS leaders, enterprise architects, CIOs with large SAP/non-SAP landscapes, B2B/API program owners.</td></tr>
      <tr><td>Problem solved</td><td>Integration failures are noisy, cross-system, and hard to triage; logs are distributed and recurring errors lack pattern intelligence.</td></tr>
      <tr><td>Required SAP / technology tools</td><td>SAP Integration Suite, Advanced Event Mesh where applicable, SAP BTP, SAP AI Foundation / generative AI hub, SAP Cloud ALM or ITSM, observability/log tools, optional API telemetry.</td></tr>
      <tr><td>Data required</td><td>Message logs, error codes, payload metadata, interface catalog, dependencies, SLA tiers, runbooks, incidents, retry outcomes, process criticality.</td></tr>
      <tr><td>AI capability used</td><td>Error clustering, probable-cause ranking, runbook retrieval, anomaly detection, summarization, structural improvement recommendation.</td></tr>
      <tr><td>MVP target</td><td>Critical interface set with failure classification, runbook retrieval, and health dashboard.</td></tr>
      <tr><td>Productized version</td><td>Managed integration operations accelerator with reusable connectors, service packs, and recurring optimization reporting.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Solution Provides And Applicability",
                    "html":  `
<h3>Solution Provides</h3>
<ul><li>An integration operations cockpit for message failures, interface health, critical-flow impact, and recurring patterns.</li><li>Correlation of failure symptoms across SAP Integration Suite, monitoring tools, ITSM, and surrounding systems.</li><li>Probable-cause ranking enriched by interface catalog, dependency graph, prior incidents, and runbooks.</li><li>Recovery guidance and resolver recommendation for faster triage and restoration.</li><li>A structural-fix backlog that converts repeat operational failures into engineering improvements.</li></ul>
<h3>Applicability</h3>
<ul><li>The customer runs critical SAP and non-SAP interfaces where failures impact order, finance, supply chain, HR, or customer operations.</li><li>Message logs, error codes, interface catalogs, runbooks, and incident records can be consolidated.</li><li>Operations teams need a business-impact view, not only technical error logs.</li><li>Recurring failures need to be converted into backlog items for durable fixes.</li></ul>
                    `
                },
                {
                    "title":  "Readiness Conditions",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Readiness condition observed</th><th>Recommended action before activation</th></tr></thead>
    <tbody>
      <tr><td>Interface catalog is incomplete.</td><td>Create a minimum catalog with interface ID, source, target, process, owner, criticality, SLA, and support group.</td></tr>
      <tr><td>Payloads contain sensitive business data.</td><td>Mask payload fields and process only error metadata or approved excerpts for AI use.</td></tr>
      <tr><td>Runbooks are missing or outdated.</td><td>Start with retrieval over known incidents and build reviewed runbooks for high-frequency failure classes.</td></tr>
      <tr><td>Monitoring data is fragmented.</td><td>Normalize logs, ITSM records, and alert metadata into a common interface/error ontology.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Architecture And Component Design",
                    "html":  `
<h3>Architecture Summary</h3>
<ul><li>Collect integration failures and operational metadata from Integration Suite and surrounding tools.</li><li>Normalize error classes and enrich with interface, dependency, and business-process context.</li><li>Generate probable cause, recovery steps, and best resolver group recommendation.</li><li>Track recurring failure patterns and feed structural fixes into the engineering backlog.</li></ul>
<div class="working-example-gallery" aria-label="AI Integration Operations Shield reference architecture">
  <figure>
    <img src="assets/working-examples/ai-release-assurance/AI_Integration_Operations_Shield.png" alt="AI Integration Operations Shield reference architecture" onerror="handleMissingExampleImage(this)" />
    <figcaption>AI Integration Operations Shield reference architecture from the updated design pack.</figcaption>
  </figure>
</div>
<h3>Logical Component Design</h3>
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Layer</th><th>Key design decisions</th></tr></thead>
    <tbody>
      <tr><td>Experience layer</td><td>Integration operations cockpit, interface health dashboard, critical-flow alerting, structural fix tracker.</td></tr>
      <tr><td>Application layer</td><td>Log ingestion and normalization service, correlation engine, resolver assignment workflow, recurring failure tracker.</td></tr>
      <tr><td>AI layer</td><td>Error classifier, similarity search over historical incidents/runbooks, summarization and action recommendation service.</td></tr>
      <tr><td>Data layer</td><td>Operational log mart, interface inventory, dependency graph, runbook knowledge store, SLA and criticality tables.</td></tr>
      <tr><td>Integration layer</td><td>Integration Suite APIs/logs, Event Mesh telemetry, Cloud ALM/ITSM, observability platform, notification channels.</td></tr>
      <tr><td>Security &amp; governance</td><td>Payload masking, role-based access, audit trail, approval workflow for automated retries/actions.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Non-Functional Requirements",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Requirement</th><th>Customer-ready control</th></tr></thead>
    <tbody>
      <tr><td>Security</td><td>Role-based access control, least-privilege access, and masking for sensitive operational data.</td></tr>
      <tr><td>Auditability</td><td>Recommendation, prompt, override, approval, and user-action logging for governed decisions.</td></tr>
      <tr><td>Performance</td><td>Near-real-time ingestion for operational use cases; scheduled refresh is acceptable for governance analytics.</td></tr>
      <tr><td>Resilience</td><td>Retry logic, queue-based integration, monitoring for connector failures, and fallback paths when AI services are unavailable.</td></tr>
      <tr><td>Model governance</td><td>Human-review thresholds, prompt templates, model version control, and periodic accuracy review.</td></tr>
      <tr><td>Extensibility</td><td>Modular connectors for SAP and non-SAP ALM, ITSM, CI/CD, observability, and collaboration platforms.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Suggested Build Stack",
                    "html":  `
<div class="detail-table-wrap">
  <table class="detail-table">
    <thead><tr><th>Domain</th><th>Preferred choice</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>App/orchestration</td><td>SAP BTP (CAP / Build Code / Build Process Automation)</td><td>Core APIs, workflows, orchestration, and extension services.</td></tr>
      <tr><td>AI runtime</td><td>SAP AI Foundation / generative AI hub</td><td>Governed model access, prompt management, and AI lifecycle control.</td></tr>
      <tr><td>SAP process context</td><td>SAP Cloud ALM / relevant SAP line-of-business apps</td><td>Keep SAP-native process and lifecycle context where available.</td></tr>
      <tr><td>Analytics</td><td>SAP HANA Cloud / Datasphere or BTP persistence</td><td>Operational mart, scorecards, trend views, and audit-friendly reporting.</td></tr>
      <tr><td>Experience</td><td>Fiori-style web UI / Joule integration where justified</td><td>Use Joule as an assisted experience, not as the only operating surface.</td></tr>
      <tr><td>ITSM/Ops integration</td><td>ServiceNow / Jira / monitoring tools / Integration Suite</td><td>Integrate into the customer ecosystem rather than replacing it.</td></tr>
    </tbody>
  </table>
</div>
                    `
                },
                {
                    "title":  "Cloud ALM Export Package",
                    "exports":  [
                                    "requirement",
                                    "user-stories",
                                    "test-cases"
                                ],
                    "html":  `
<p>Use these exports to seed the implementation backlog, user stories, and validation scripts for this offering.</p><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th>Export</th><th>Purpose</th></tr></thead><tbody><tr><td>Requirement</td><td>Creates the parent Cloud ALM requirement for the service offering.</td></tr><tr><td>User stories</td><td>Creates delivery-ready stories based on the updated design pack capabilities.</td></tr><tr><td>Test cases</td><td>Creates validation scripts aligned to the build approach and controls.</td></tr></tbody></table></div>
                    `
                },
                {
                    "title":  "Next Steps And Sources",
                    "html":  `
<h3>Next Steps</h3>
<ul><li>Confirm critical interface list, process criticality, SLA tiers, source/target ownership, and escalation matrix.</li><li>Validate availability of message logs, error metadata, retry outcomes, and incident references.</li><li>Agree payload masking rules and automated action approval thresholds.</li><li>Define how recurring failure patterns become backlog items and how ownership is tracked.</li></ul>
                    `
                }
                            ],
        "cloudAlm":  {
                         "tags":  [
                                      "AI",
                                      "AI Integration Operations Shield",
                                      "SAP BTP",
                                      "SAP Cloud ALM"
                                  ],
                         "businessProcess":  "Integration Operations / Application Operations",
                         "workstream":  "AI Integration Operations Shield",
                         "requirement":  {
                                             "externalId":  "REQ-IOS-001",
                                             "title":  "AI Integration Operations Shield",
                                             "description":  "<p>An AI-enabled operations layer for SAP integrations that correlates message failures, probable causes, dependency context, and runbooks to accelerate recovery and reduce repeat incidents.</p><h2>Problem Solved</h2><p>Integration failures are noisy, cross-system, and hard to triage; logs are distributed and recurring errors lack pattern intelligence.</p><h2>Data Required</h2><p>Message logs, error codes, payload metadata, interface catalog, dependencies, SLA tiers, runbooks, incidents, retry outcomes, process criticality.</p>",
                                             "status":  "Not Started",
                                             "priority":  "High",
                                             "owner":  "",
                                             "source":  "Internal",
                                             "tags":  "AI; AI Integration Operations Shield; SAP BTP; SAP Cloud ALM",
                                             "plannedRelease":  "",
                                             "businessProcess":  "Integration Operations / Application Operations"
                                         },
                         "userStories":  [
                            {
                                "externalId":  "US-IOS-001",
                                "title":  "US-IOS-001 - An integration operations cockpit for message failures, interface health, critical-flow impact, and recurring patterns",
                                "persona":  "an implementation owner",
                                "want":  "An integration operations cockpit for message failures, interface health, critical-flow impact, and recurring patterns",
                                "soThat":  "Lowers interface MTTR; improves continuity for critical flows; reduces expert dependency; creates structural improvement backlog",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-IOS-002",
                                "title":  "US-IOS-002 - Correlation of failure symptoms across SAP Integration Suite, monitoring tools, ITSM, and surrounding systems",
                                "persona":  "an implementation owner",
                                "want":  "Correlation of failure symptoms across SAP Integration Suite, monitoring tools, ITSM, and surrounding systems",
                                "soThat":  "Lowers interface MTTR; improves continuity for critical flows; reduces expert dependency; creates structural improvement backlog",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-IOS-003",
                                "title":  "US-IOS-003 - Probable-cause ranking enriched by interface catalog, dependency graph, prior incidents, and runbooks",
                                "persona":  "an implementation owner",
                                "want":  "Probable-cause ranking enriched by interface catalog, dependency graph, prior incidents, and runbooks",
                                "soThat":  "Lowers interface MTTR; improves continuity for critical flows; reduces expert dependency; creates structural improvement backlog",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-IOS-004",
                                "title":  "US-IOS-004 - Recovery guidance and resolver recommendation for faster triage and restoration",
                                "persona":  "an implementation owner",
                                "want":  "Recovery guidance and resolver recommendation for faster triage and restoration",
                                "soThat":  "Lowers interface MTTR; improves continuity for critical flows; reduces expert dependency; creates structural improvement backlog",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            },
                            {
                                "externalId":  "US-IOS-005",
                                "title":  "US-IOS-005 - A structural-fix backlog that converts repeat operational failures into engineering improvements",
                                "persona":  "an implementation owner",
                                "want":  "A structural-fix backlog that converts repeat operational failures into engineering improvements",
                                "soThat":  "Lowers interface MTTR; improves continuity for critical flows; reduces expert dependency; creates structural improvement backlog",
                                "acceptanceCriteria":  [
                                                            "Capability is visible in the operating view.",
                                                            "Owner, evidence, and status are captured.",
                                                            "Human review is available for low-confidence or high-risk outcomes."
                                                        ]
                            }
                                         ],
                         "testCases":  [
                            {
                                "externalId":  "TC-IOS-001",
                                "testCaseName":  "TC-IOS-001 - Validate Build Step 1",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Integration Operations Shield",
                                "actionTitle":  "Define canonical interface and error ontology aligned to operations teams, business processes, and support groups",
                                "instructions":  [
                                                     "Define canonical interface and error ontology aligned to operations teams, business processes, and support groups.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Integration Operations Shield with traceable evidence."
                            },
                            {
                                "externalId":  "TC-IOS-002",
                                "testCaseName":  "TC-IOS-002 - Validate Build Step 2",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Integration Operations Shield",
                                "actionTitle":  "Build log ingestion, masking, and enrichment pipeline on BTP",
                                "instructions":  [
                                                     "Build log ingestion, masking, and enrichment pipeline on BTP.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Integration Operations Shield with traceable evidence."
                            },
                            {
                                "externalId":  "TC-IOS-003",
                                "testCaseName":  "TC-IOS-003 - Validate Build Step 3",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Integration Operations Shield",
                                "actionTitle":  "Configure retrieval over runbooks and past incidents for likely fixes and recovery steps",
                                "instructions":  [
                                                     "Configure retrieval over runbooks and past incidents for likely fixes and recovery steps.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Integration Operations Shield with traceable evidence."
                            },
                            {
                                "externalId":  "TC-IOS-004",
                                "testCaseName":  "TC-IOS-004 - Validate Build Step 4",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Integration Operations Shield",
                                "actionTitle":  "Implement cockpit for interface health, probable cause, critical flow impact, owner assignment, and action tracking",
                                "instructions":  [
                                                     "Implement cockpit for interface health, probable cause, critical flow impact, owner assignment, and action tracking.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Integration Operations Shield with traceable evidence."
                            },
                            {
                                "externalId":  "TC-IOS-005",
                                "testCaseName":  "TC-IOS-005 - Validate Build Step 5",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Integration Operations Shield",
                                "actionTitle":  "Enable recurring-pattern reporting and engineering backlog generation",
                                "instructions":  [
                                                     "Enable recurring-pattern reporting and engineering backlog generation.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Integration Operations Shield with traceable evidence."
                            },
                            {
                                "externalId":  "TC-IOS-006",
                                "testCaseName":  "TC-IOS-006 - Validate Build Step 6",
                                "priority":  "High",
                                "status":  "Prepared",
                                "activityTitle":  "Validate AI Integration Operations Shield",
                                "actionTitle":  "Start with the top business-critical interfaces, then scale to the wider estate once taxonomy and runbooks are stable",
                                "instructions":  [
                                                     "Start with the top business-critical interfaces, then scale to the wider estate once taxonomy and runbooks are stable.",
                                                     "Capture implementation evidence and note deviations."
                                                 ],
                                "expectedResult":  "The build step is completed for AI Integration Operations Shield with traceable evidence."
                            }
                                      ]
                     },
        "sources":  [
                    {
                        "label":  "Internal source document: Top_5_AI_Powered_SAP_Service_Offerings_Codex_Ready_Design_Pack_v2.md",
                        "note":  "AI Integration Operations Shield design pack from the updated Downloads design pack.",
                        "url":  ""
                    },
                    {
                        "label":  "SAP Integration Suite Message Processing Logs",
                        "url":  "https://help.sap.com/docs/integration-suite/sap-integration-suite/message-processing-logs"
                    },
                    {
                        "label":  "SAP Cloud ALM Integration Monitoring Analytics API",
                        "url":  "https://help.sap.com/docs/cloud-alm/apis/integration-monitoring-analytics-api"
                    },
                    {
                        "label":  "SAP Integration Suite Advanced Event Mesh",
                        "url":  "https://help.sap.com/docs/sap-integration-suite/advanced-event-mesh/what-is-sap-integration-suite-advanced-event-mesh"
                    },
                    {
                        "label":  "SAP Cloud ALM Alerting",
                        "url":  "https://help.sap.com/docs/cloud-alm/applicationhelp/alert-event-management"
                    },
                    {
                        "label":  "SAP AI Core / generative AI hub",
                        "url":  "https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/generative-ai-hub-in-sap-ai-core-7db524ee75e74bf8b50c167951fe34a5"
                    }
                    ],
        "url":  "",
        "linkLabel":  "Documentation repository pending",
        "nextStep":  "Confirm critical interface list, process criticality, SLA tiers, source/target ownership, and escalation matrix. Validate availability of message logs, error metadata, retry outcomes, and incident references. Agree payload masking rules and automated action approval thresholds. Define how recurring failure patterns become backlog items and how ownership is tracked."
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
