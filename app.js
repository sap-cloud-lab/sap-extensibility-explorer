const lanes = {
  inapp: {
    label: "In-App",
    title: "In-App Extensibility",
    brief:
      "In-app extensibility is for small, safe changes made inside S/4HANA using SAP Fiori key-user tools. Use it for custom fields, simple rules, page adaptations, forms, templates, and reports.",
    note:
      "Important: most old in-app examples were not published as separate GitHub repositories. For those historical examples, each button opens the scenario-specific GitHub issues view using SAP's original scenario label.",
    samples: [
      {
        title: "Adapt Cloud Samples for Use in an SAP S/4HANA System On Premise",
        status: "Historical scenario",
        pattern: "s4-ext-on-premise",
        description: "Guidance area for adapting cloud extension samples for an SAP S/4HANA on-premise system.",
        function:
          "Helps teams reuse a cloud extension pattern in an on-premise S/4HANA context, mainly as a comparison and adaptation guide.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-ext-on-premise",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Add the Project ID to the Email Template Header",
        status: "Historical scenario",
        pattern: "s4-email-templ-header",
        description: "Email template adaptation example: adding project information to an output template header.",
        function:
          "Shows a small in-app output change: add Project ID into an email template header so business emails carry the extra project context.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-email-templ-header",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Allow Exceptional Editing of Time Records After Approval",
        status: "Historical scenario",
        pattern: "s4-except-edit-time-recs",
        description: "Time recording process example for exceptional editing after an approval step.",
        function:
          "Explains a controlled exception pattern where approved time records can still be edited when the business has a valid reason.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-except-edit-time-recs",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Analyze Projects for Unplanned Hours",
        status: "Historical scenario",
        pattern: "s4-analyze-unpl-hours",
        description: "Project analysis example focused on identifying unplanned hours.",
        function:
          "Uses reporting logic to highlight project hours that were not planned, helping project teams spot overruns or missing planning.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-analyze-unpl-hours",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Analyze Sales Orders with Custom Fields using SAP Analytics Cloud",
        status: "Historical scenario",
        pattern: "s4-analyze-custfields-in-sac",
        description: "Analytics example using S/4HANA custom fields together with SAP Analytics Cloud.",
        function:
          "Shows how a custom field added in S/4HANA can flow into analytics so sales order reporting includes business-specific information.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-analyze-custfields-in-sac",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Combined Reporting for Professional Services and Sales Orders",
        status: "Historical scenario",
        pattern: "s4-report-profservice",
        description: "Reporting example combining professional services and sales order information.",
        function:
          "Combines professional services and sales order data into one reporting view so users can analyze related work in one place.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-report-profservice",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Custom Fields Mapping Implementation for the EDI Integration Process",
        status: "Historical scenario",
        pattern: "s4-edi-integration",
        description: "Integration example showing how custom fields can be mapped through an EDI process.",
        function:
          "Shows where custom fields need to be mapped so extra S/4HANA data can travel correctly through an EDI integration.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-edi-integration",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Custom Logic Samples",
        status: "Historical scenario",
        pattern: "s4-cust-logic",
        description: "Examples of adding small pieces of business logic through supported in-app extension points.",
        function:
          "Demonstrates small business-rule extensions using supported in-app logic points, without changing SAP standard code.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-cust-logic",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Customer Project Planning and Assignment",
        status: "Historical scenario",
        pattern: "s4-cust-proj-plan",
        description: "Project planning example for customer project assignment and related extension behavior.",
        function:
          "Explains how project planning or assignment behavior can be adjusted for a customer-specific planning process.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-cust-proj-plan",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Enable Custom Fields in the Purchasing Process",
        status: "Historical scenario",
        pattern: "s4-enable-custfields-purc",
        description: "Purchasing example where a custom field is added and enabled in a standard process.",
        function:
          "Shows the classic key-user pattern: add a purchasing custom field, expose it where users need it, and carry it through the process.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-enable-custfields-purc",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "In-App Sample for Reusable Elements",
        status: "Historical scenario",
        pattern: "s4-reusable-elements",
        description: "Reference for reusable elements created through S/4HANA in-app extensibility.",
        function:
          "Shows how reusable in-app elements can be created once and reused across compatible extension points.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-reusable-elements",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Report on General Ledger Account Line Item with Project Reference",
        status: "Historical scenario",
        pattern: "s4-report-gl-account",
        description: "Reporting example for general ledger account line items with project reference.",
        function:
          "Adds project reference into a general ledger line-item reporting view so finance users can analyze postings by project context.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-report-gl-account",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Workforce Utilization Reporting",
        status: "Historical scenario",
        pattern: "s4-workforce-util",
        description: "Reporting example focused on workforce utilization.",
        function:
          "Creates a utilization-style reporting view so teams can understand how workforce capacity is being used.",
        url: "https://github.com/SAP-archive/cloud-s4-sample-ext/issues?q=label%3As4-workforce-util",
        linkLabel: "Open GitHub drill-down",
      },
      {
        title: "Tax ID Validation",
        status: "Active",
        pattern: "Custom Fields and Logic",
        description: "Validation pattern using SAP S/4HANA Cloud extensibility tooling.",
        function:
          "Shows how to validate tax ID values using S/4HANA Cloud extensibility so incorrect master data can be caught earlier.",
        url: "https://github.com/SAP-samples/localization-toolkit-s4hana-cloud-tax-id-validation",
        linkLabel: "Open GitHub repo",
      },
    ],
  },
  developer: {
    label: "Developer",
    title: "Developer Extensibility",
    brief:
      "Developer extensibility is for ABAP developers building upgrade-stable code on the S/4HANA stack. Use it when the extension needs ABAP Cloud, RAP, released APIs, released CDS views, or released BAdIs.",
    note:
      "No Developer sample cards are shown until real customer accelerators or scenario-level examples are selected for this lane.",
    samples: [],
  },
  side: {
    label: "Side-by-Side",
    title: "Side-by-Side Extensibility",
    brief:
      "Side-by-side extensibility is for separate apps and processes outside S/4HANA, usually on SAP BTP. Use it for workflows, events, integrations, mobile apps, automation, portals, and larger custom applications.",
    note:
      "This page includes active and archived SAP samples. Archived samples are read-only, but they still explain useful side-by-side patterns.",
    samples: [
      {
        title: "Business Process Extension on SAP BTP",
        status: "Active",
        pattern: "CAP and messaging",
        description: "Complements an S/4HANA business process with extra process steps and data on SAP BTP.",
        function:
          "Builds a separate BTP extension around an S/4HANA process, using CAP and messaging so extra steps do not sit inside SAP standard.",
        url: "https://github.com/SAP-samples/cloud-extension-s4hana-business-process",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "S/4HANA Cloud Business Process Extension",
        status: "Archived",
        pattern: "CAP, Event Mesh, Fiori",
        description: "Earlier S/4HANA Cloud business process extension using CAP, events, and a Fiori-style app.",
        function:
          "Shows the older event-driven pattern where S/4HANA raises business events and a BTP app reacts with additional process behavior.",
        url: "https://github.com/SAP-samples/cloud-extension-s4hana-cloud-business-process",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "No-Code S/4HANA Extension",
        status: "Active",
        pattern: "SAP Build Apps",
        description: "A no-code custom UI application that can be exposed through SAP launchpad options.",
        function:
          "Shows how a lightweight custom app can be created with low-code/no-code tooling instead of a full custom development project.",
        url: "https://github.com/SAP-samples/btp-s4hana-nocode-extension",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Process Automation Extension",
        status: "Archived",
        pattern: "SAP Build Process Automation and CAP",
        description: "Event-driven process automation with an extension app on SAP BTP.",
        function:
          "Uses an S/4HANA event to trigger process automation, then coordinates extra approval or workflow steps outside the core system.",
        url: "https://github.com/SAP-samples/s4hana-cloud-extension-process-automation",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Kyma Business Process Extension",
        status: "Archived",
        pattern: "SAP BTP Kyma",
        description: "Side-by-side business process extension using SAP BTP Kyma runtime.",
        function:
          "Shows a Kubernetes/Kyma style side-by-side extension for teams that want container-based services around S/4HANA events.",
        url: "https://github.com/SAP-samples/btp-s4hana-kyma-business-process-extension",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Timesheet Web Extension",
        status: "Archived",
        pattern: "SAP BTP web app",
        description: "A web application that reads and writes working time in S/4HANA Cloud.",
        function:
          "Creates a separate web app for time entry so users can interact with S/4HANA time data through a custom experience.",
        url: "https://github.com/SAP-samples/s4hana-cloud-ext-timesheet",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Create Employee Extension",
        status: "Archived",
        pattern: "Java and SOAP integration",
        description: "One-click employee and identity provider user creation app.",
        function:
          "Automates employee and identity-provider user creation from a separate app, useful for understanding HR onboarding integration.",
        url: "https://github.com/SAP-samples/s4hana-ext-create-employee",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Cloud Label Printing",
        status: "Archived",
        pattern: "SAP Print service",
        description: "Label printing extension using SAP Print service.",
        function:
          "Adds a separate label-printing capability around S/4HANA data, showing how output can be handled through a BTP service.",
        url: "https://github.com/SAP-samples/s4hana-ext-cloud-label-printing",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Approve Payment Data",
        status: "Archived",
        pattern: "Workflow extension",
        description: "Approval workflow for payment information changes.",
        function:
          "Routes sensitive payment-data changes through an external approval workflow before the business data is accepted.",
        url: "https://github.com/SAP-samples/s4hana-ext-approve-payment-data",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Address Validation App",
        status: "Archived",
        pattern: "Cloud Foundry eventing",
        description: "Collaborative address validation using eventing services.",
        function:
          "Uses events and a separate validation app so address data can be reviewed or corrected outside the main S/4HANA screens.",
        url: "https://github.com/SAP-archive/s4hana-ext-address-valid-app",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Business Event Pull",
        status: "Archived",
        pattern: "Business events",
        description: "Displays created or changed sales orders through business event handling.",
        function:
          "Shows how a side app can pull or react to S/4HANA business events, then display changed sales order information.",
        url: "https://github.com/SAP-archive/s4hana-ext-business-event-pull",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "External Microservice Extension",
        status: "Archived",
        pattern: "Microservice",
        description: "Address validation using an external microservice.",
        function:
          "Demonstrates calling an external microservice from the extension landscape, useful when validation or enrichment lives outside SAP.",
        url: "https://github.com/SAP-archive/s4hana-ext-microservice",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Authentication for S/4HANA Extensions",
        status: "Archived",
        pattern: "Destination and XSUAA",
        description: "Authentication setup for S/4HANA Cloud extensions.",
        function:
          "Explains the authentication pieces an extension needs before it can securely call S/4HANA APIs from SAP BTP.",
        url: "https://github.com/SAP-archive/s4hana-ext-authentication",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Order Web App",
        status: "Archived",
        pattern: "Web app and APIs",
        description: "Web ordering app consuming S/4HANA Cloud services for read and write operations.",
        function:
          "Builds a separate ordering UI that reads and writes S/4HANA data through APIs, showing custom front-end plus backend integration.",
        url: "https://github.com/SAP-archive/s4hana-ext-order-app",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Product Catalogue iOS App",
        status: "Archived",
        pattern: "iOS mobile app",
        description: "Native iOS product catalogue using S/4HANA Cloud data.",
        function:
          "Shows a mobile side-by-side pattern where a native iOS app consumes S/4HANA product data for a custom mobile experience.",
        url: "https://github.com/SAP-archive/s4hana-ext-product-catalog-ios",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Timesheet iOS App",
        status: "Archived",
        pattern: "iOS mobile app",
        description: "Native iOS timesheet app for S/4HANA Cloud.",
        function:
          "Creates a native mobile timesheet experience that connects to S/4HANA time data outside the standard browser UI.",
        url: "https://github.com/SAP-archive/s4hana-ext-timesheet-ios",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Partner Reference Application Extension",
        status: "Active",
        pattern: "CAP and Fiori",
        description: "Multi-tenant extension application guidance on SAP BTP.",
        function:
          "Shows how to structure a reusable partner-style extension app on BTP, including application, tenant, and integration concerns.",
        url: "https://github.com/SAP-samples/partner-reference-application-extension",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "RAP620 Side-by-Side ABAP Environment",
        status: "Active",
        pattern: "BTP ABAP Environment",
        description: "Side-by-side extensibility with SAP BTP ABAP Environment.",
        function:
          "Shows how to build a side-by-side extension in the SAP BTP ABAP Environment while integrating back to S/4HANA.",
        url: "https://github.com/SAP-samples/abap-platform-rap620",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "ABAP Partner Reference Application",
        status: "Active",
        pattern: "BTP ABAP app",
        description: "Multi-tenant side-by-side app with S/4HANA Cloud integration guidance.",
        function:
          "Demonstrates a partner-style side-by-side application built with ABAP on BTP and connected to S/4HANA Cloud.",
        url: "https://github.com/SAP-samples/abap-partner-reference-application",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Variant Configuration UI Extension Template",
        status: "Active",
        pattern: "UI extension template",
        description: "Variant configuration UI extension template with local mock runtime.",
        function:
          "Provides a starter template for extending variant configuration UI behavior, useful when the custom experience is UI-heavy.",
        url: "https://github.com/SAP-samples/s4hana-avc-ui-extension-template",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Online Validation Extension",
        status: "Archived",
        pattern: "Validation service",
        description: "Custom checks for SAP Online Validation Service.",
        function:
          "Shows how custom business partner checks can be added around online validation when standard validation is not enough.",
        url: "https://github.com/SAP-samples/s4hana-online-validation-extension",
        linkLabel: "Open GitHub repo",
      },
      {
        title: "Migrate Historical Data",
        status: "Archived",
        pattern: "Migration sample",
        description: "Migrated sales order data example.",
        function:
          "Demonstrates a separate extension-style approach for working with migrated historical sales order data.",
        url: "https://github.com/SAP-samples/s4hana-ext-migrate-historical-data",
        linkLabel: "Open GitHub repo",
      },
    ],
  },
};

const laneTagLabels = {
  inapp: "In-App",
  developer: "Dev",
  side: "BTP",
};

const manualAcceleratorAssetLanes = {
  "customer-ad-reversal-controls": "developer",
  "customer-restrict-ic-transactions": "inapp",
  "customer-miro-partner-bank-mandatory": "developer",
  "customer-vendor-invoice-payment-bank-report": "developer",
  "customer-copy-po-text-to-gr-text": "inapp",
  "online-enterprise-project-id-validation": "inapp",
  "online-profit-center-substitution": "inapp",
};

function assetToAcceleratorSample(asset) {
  const laneKey = manualAcceleratorAssetLanes[asset.id];
  const isSapReference = asset.sourceType === "Online Example";

  return {
    title: asset.title,
    laneKey,
    status: isSapReference ? "SAP reference" : "Customer accelerator",
    pattern: asset.category || asset.sourceType,
    description: asset.shortDescription || asset.useCase,
    function: asset.useCase || asset.summary || asset.shortDescription,
    summary: asset.summary || asset.shortDescription || asset.useCase,
    useCase: asset.useCase || asset.shortDescription,
    whenToUse: asset.whenToUse,
    implementation: asset.implementation,
    sources: asset.sources,
    source: isSapReference ? "SAP" : "Customer",
    sourceType: isSapReference ? "SAP Reference" : "Customer Accelerator",
    url: asset.sources?.find((source) => source.url)?.url || "",
    linkLabel: "Open source",
  };
}

const manualAcceleratorSamples =
  typeof assetItems === "undefined"
    ? []
    : assetItems
        .filter((asset) => manualAcceleratorAssetLanes[asset.id])
        .map(assetToAcceleratorSample);

manualAcceleratorSamples.forEach((sample) => {
  if (lanes[sample.laneKey]) {
    lanes[sample.laneKey].samples.push(sample);
  }
});

const customerSampleItems = window.customerSampleItems || [];
customerSampleItems.forEach((sample) => {
  if (lanes[sample.laneKey]) {
    lanes[sample.laneKey].samples.push(sample);
  }
});

function getLaneKey() {
  const params = new URLSearchParams(window.location.search);
  const lane = params.get("lane");
  return lanes[lane] ? lane : "inapp";
}

function setActiveLinks(laneKey) {
  document.querySelectorAll("[data-lane-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.laneLink === laneKey);
  });
}

const filterState = {
  query: "",
  statuses: new Set(),
  patterns: new Set(),
  lanes: new Set(),
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSampleDetailUrl(laneKey, sample, from = "") {
  const fromParam = from ? `&from=${encodeURIComponent(from)}` : "";
  return `detail.html?type=sample&lane=${encodeURIComponent(laneKey)}&id=${encodeURIComponent(slugify(sample.title))}${fromParam}`;
}

function uniqueValues(samples, key) {
  return [...new Set(samples.map((sample) => sample[key]).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b),
  );
}

function filterSetForGroup(group) {
  if (group === "status") return filterState.statuses;
  if (group === "pattern") return filterState.patterns;
  if (group === "lane") return filterState.lanes;
  return null;
}

function sampleMatches(sample) {
  const query = filterState.query.trim().toLowerCase();
  const haystack = [
    sample.title,
    sample.status,
    sample.pattern,
    sample.description,
    sample.function,
    sample.sourceType,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (query && !haystack.includes(query)) return false;
  if (filterState.statuses.size && !filterState.statuses.has(sample.status)) return false;
  if (filterState.patterns.size && !filterState.patterns.has(sample.pattern)) return false;
  return true;
}

function renderFilterOptions(lane) {
  const statusFilters = document.getElementById("statusFilters");
  const patternFilters = document.getElementById("patternFilters");
  if (!statusFilters || !patternFilters) return;

  statusFilters.innerHTML = uniqueValues(lane.samples, "status")
    .map(
      (status) => `
        <button class="filter-option" type="button" data-filter-group="status" data-filter-value="${escapeHtml(status)}">
          ${escapeHtml(status)}
        </button>
      `,
    )
    .join("");

  patternFilters.innerHTML = uniqueValues(lane.samples, "pattern")
    .map(
      (pattern) => `
        <button class="filter-option" type="button" data-filter-group="pattern" data-filter-value="${escapeHtml(pattern)}">
          ${escapeHtml(pattern)}
        </button>
      `,
    )
    .join("");
}

function renderFilterStates() {
  document.querySelectorAll(".filter-option").forEach((button) => {
    const group = filterSetForGroup(button.dataset.filterGroup);
    button.classList.toggle("selected", Boolean(group?.has(button.dataset.filterValue)));
  });
}

function getLaneTagText(laneKey) {
  return laneTagLabels[laneKey] || laneKey;
}

function getSampleTagText(sample, laneKey) {
  return sample.tagLabel || getLaneTagText(laneKey);
}

function renderSampleCard(sample, laneKey, options = {}) {
  const isSapCard = sample.source !== "Customer";
  const from = options.from || "";
  return `
    <a class="sample-card scenario-card card-link" href="${escapeHtml(getSampleDetailUrl(laneKey, sample, from))}" aria-label="View implementation guide for ${escapeHtml(sample.title)}">
      <span class="card-lane-tag" data-lane="${escapeHtml(laneKey)}">${escapeHtml(getSampleTagText(sample, laneKey))}</span>
      <span class="favorite-button" aria-hidden="true">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3Z" />
        </svg>
      </span>
      ${isSapCard ? `<span class="card-origin-tag">SAP</span>` : ""}
      <h3>${escapeHtml(sample.title)}</h3>
      <p class="sample-description">${escapeHtml(sample.description)}</p>
      <div class="hover-detail">
        <strong>What it does:</strong> ${escapeHtml(sample.function || sample.description)}
      </div>
      <div class="meta-row">
        <span class="pill" data-status="${escapeHtml(sample.status)}">${escapeHtml(sample.status)}</span>
        <span class="pill">${escapeHtml(sample.pattern)}</span>
      </div>
      <span class="sample-link setup-link">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h5" />
        </svg>
        View implementation
      </span>
    </a>
  `;
}

function renderSampleCards(lane, laneKey) {
  const filteredSamples = lane.samples.filter(sampleMatches);
  const countText =
    filteredSamples.length === lane.samples.length
      ? `${lane.samples.length} samples`
      : `${filteredSamples.length} of ${lane.samples.length} samples`;

  document.getElementById("sampleCount").textContent = countText;
  document.getElementById("sampleSectionTitle").textContent = `${lane.label} Sample Scenarios`;
  const emptyState = document.getElementById("emptyState");
  emptyState.textContent = lane.samples.length
    ? "No matching samples found."
    : "No Developer sample cards are available yet. Mark accelerators in the checklist and they can be added here.";
  emptyState.hidden = filteredSamples.length > 0;

  document.getElementById("sampleGrid").innerHTML = filteredSamples
    .map((sample) => renderSampleCard(sample, laneKey))
    .join("");
}

function bindSampleControls(lane, laneKey) {
  const searchInput = document.getElementById("sampleSearch");
  searchInput?.addEventListener("input", () => {
    filterState.query = searchInput.value;
    renderSampleCards(lane, laneKey);
  });

  document.querySelectorAll(".filter-option").forEach((button) => {
    button.addEventListener("click", () => {
      const targetSet = filterSetForGroup(button.dataset.filterGroup);
      if (!targetSet) return;
      if (targetSet.has(button.dataset.filterValue)) {
        targetSet.delete(button.dataset.filterValue);
      } else {
        targetSet.add(button.dataset.filterValue);
      }
      renderFilterStates();
      renderSampleCards(lane, laneKey);
    });
  });

  document.querySelectorAll("[data-filter-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(`${button.dataset.filterToggle}Filters`);
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      target.hidden = expanded;
    });
  });
}

function getAllAcceleratorSamples() {
  return Object.entries(lanes).flatMap(([laneKey, lane]) =>
    lane.samples.map((sample) => ({
      ...sample,
      laneKey,
      laneLabel: lane.label,
    })),
  );
}

function acceleratorMatches(sample) {
  const query = filterState.query.trim().toLowerCase();
  const haystack = [
    sample.title,
    sample.status,
    sample.pattern,
    sample.description,
    sample.function,
    sample.sourceType,
    sample.laneLabel,
    getSampleTagText(sample, sample.laneKey),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (query && !haystack.includes(query)) return false;
  if (filterState.statuses.size && !filterState.statuses.has(sample.status)) return false;
  if (filterState.patterns.size && !filterState.patterns.has(sample.pattern)) return false;
  if (filterState.lanes.size && !filterState.lanes.has(sample.laneKey)) return false;
  return true;
}

function renderAcceleratorLibraryFilterOptions(samples) {
  const laneFilters = document.getElementById("laneFilters");
  const statusFilters = document.getElementById("statusFilters");
  const patternFilters = document.getElementById("patternFilters");
  if (!laneFilters || !statusFilters || !patternFilters) return;

  laneFilters.innerHTML = Object.keys(laneTagLabels)
    .filter((laneKey) => samples.some((sample) => sample.laneKey === laneKey))
    .map(
      (laneKey) => `
        <button class="filter-option" type="button" data-filter-group="lane" data-filter-value="${escapeHtml(laneKey)}">
          ${escapeHtml(getLaneTagText(laneKey))}
        </button>
      `,
    )
    .join("");

  statusFilters.innerHTML = uniqueValues(samples, "status")
    .map(
      (status) => `
        <button class="filter-option" type="button" data-filter-group="status" data-filter-value="${escapeHtml(status)}">
          ${escapeHtml(status)}
        </button>
      `,
    )
    .join("");

  patternFilters.innerHTML = uniqueValues(samples, "pattern")
    .map(
      (pattern) => `
        <button class="filter-option" type="button" data-filter-group="pattern" data-filter-value="${escapeHtml(pattern)}">
          ${escapeHtml(pattern)}
        </button>
      `,
    )
    .join("");
}

function renderAcceleratorLibraryCards() {
  const samples = getAllAcceleratorSamples();
  const filteredSamples = samples.filter(acceleratorMatches);
  const countText =
    filteredSamples.length === samples.length
      ? `${samples.length} accelerators`
      : `${filteredSamples.length} of ${samples.length} accelerators`;

  document.getElementById("sampleCount").textContent = countText;
  document.getElementById("sampleSectionTitle").textContent = "All Accelerators";
  const emptyState = document.getElementById("emptyState");
  emptyState.textContent = "No matching accelerators found.";
  emptyState.hidden = filteredSamples.length > 0;

  document.getElementById("sampleGrid").innerHTML = filteredSamples
    .map((sample) => renderSampleCard(sample, sample.laneKey, { from: "accelerators" }))
    .join("");
}

function bindAcceleratorLibraryControls() {
  const searchInput = document.getElementById("sampleSearch");
  searchInput?.addEventListener("input", () => {
    filterState.query = searchInput.value;
    renderAcceleratorLibraryCards();
  });

  document.querySelectorAll(".filter-option").forEach((button) => {
    button.addEventListener("click", () => {
      const targetSet = filterSetForGroup(button.dataset.filterGroup);
      if (!targetSet) return;
      if (targetSet.has(button.dataset.filterValue)) {
        targetSet.delete(button.dataset.filterValue);
      } else {
        targetSet.add(button.dataset.filterValue);
      }
      renderFilterStates();
      renderAcceleratorLibraryCards();
    });
  });

  document.querySelectorAll("[data-filter-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(`${button.dataset.filterToggle}Filters`);
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      target.hidden = expanded;
    });
  });
}

function renderAcceleratorLibraryPage() {
  filterState.query = "";
  filterState.statuses.clear();
  filterState.patterns.clear();
  filterState.lanes.clear();

  const samples = getAllAcceleratorSamples();
  renderAcceleratorLibraryFilterOptions(samples);
  renderFilterStates();
  renderAcceleratorLibraryCards();
  bindAcceleratorLibraryControls();
}

function renderSamplesPage() {
  const laneKey = getLaneKey();
  const lane = lanes[laneKey];
  filterState.query = "";
  filterState.statuses.clear();
  filterState.patterns.clear();
  filterState.lanes.clear();

  document.title = `${lane.title} Samples - Extensibility Explorer`;
  document.getElementById("laneEyebrow").textContent = lane.label;
  document.getElementById("laneTitle").textContent = lane.title;
  document.getElementById("laneBrief").textContent = lane.brief;
  const laneNote = document.getElementById("laneNote");
  laneNote.textContent = lane.note;
  laneNote.hidden = !lane.note;

  setActiveLinks(laneKey);
  renderFilterOptions(lane);
  renderFilterStates();
  renderSampleCards(lane, laneKey);
  bindSampleControls(lane, laneKey);
}

if (document.body.dataset.page === "samples") {
  renderSamplesPage();
}

if (document.body.dataset.page === "accelerator-library") {
  renderAcceleratorLibraryPage();
}
