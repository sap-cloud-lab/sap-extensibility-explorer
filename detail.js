function detailEscapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function detailSlugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function detailIdsForSample(sample) {
  return [
    sample.id,
    sample.slug,
    detailSlugify(sample.title),
    ...(sample.detailAliases || []),
  ].filter(Boolean);
}

function sampleMatchesDetailId(sample, sampleId) {
  return detailIdsForSample(sample).includes(sampleId);
}

function renderDetailBlock(block) {
  if (typeof block === "string") return `<p>${detailEscapeHtml(block)}</p>`;
  if (block.html) return block.html;

  const heading = block.heading ? `<h3>${detailEscapeHtml(block.heading)}</h3>` : "";
  const text = block.text ? `<p>${detailEscapeHtml(block.text)}</p>` : "";
  const items = Array.isArray(block.items)
    ? `<ul>${block.items.map((item) => `<li>${detailEscapeHtml(item)}</li>`).join("")}</ul>`
    : "";

  return `${heading}${text}${items}`;
}

function handleMissingExampleImage(image) {
  const gallery = image.closest(".working-example-gallery");
  const figure = image.closest("figure");
  const roadmapPanel = image.closest(".implementation-roadmap-section");

  if (figure) figure.remove();
  if (gallery && !gallery.querySelector("figure")) {
    gallery.hidden = true;
    if (roadmapPanel) roadmapPanel.hidden = true;
  }
}

window.handleMissingExampleImage = handleMissingExampleImage;

function renderDetailContent(elementId, content) {
  const target = document.getElementById(elementId);
  if (!target) return;

  target.innerHTML = Array.isArray(content)
    ? content.map(renderDetailBlock).join("")
    : `<p>${detailEscapeHtml(content || "")}</p>`;
}

function renderOptionalDetailContent(panelId, elementId, content) {
  const panel = document.getElementById(panelId);
  if (!panel) return;

  const hasContent = Array.isArray(content) ? content.length > 0 : Boolean(content);
  panel.hidden = !hasContent;
  if (hasContent) renderDetailContent(elementId, content);
}

function renderImplementationStep(step) {
  if (typeof step === "string") return `<li><span>${detailEscapeHtml(step)}</span></li>`;

  const substeps = Array.isArray(step.items)
    ? `<ul>${step.items.map((item) => `<li>${detailEscapeHtml(item)}</li>`).join("")}</ul>`
    : "";

  return `<li><span>${detailEscapeHtml(step.text || "")}</span>${substeps}</li>`;
}

function renderImplementationRoadmap(image) {
  const panel = document.getElementById("implementationRoadmapPanel");
  const target = document.getElementById("implementationRoadmap");
  if (!panel || !target) return;

  panel.hidden = !image;
  if (!image) {
    target.innerHTML = "";
    return;
  }

  target.innerHTML = `
    <div class="working-example-gallery implementation-roadmap-gallery" aria-label="${detailEscapeHtml(image.ariaLabel || image.alt || "Implementation roadmap")}">
      <figure>
        <img src="${detailEscapeHtml(image.src)}" alt="${detailEscapeHtml(image.alt || "Implementation roadmap")}" onerror="handleMissingExampleImage(this)" />
        ${image.caption ? `<figcaption>${detailEscapeHtml(image.caption)}</figcaption>` : ""}
      </figure>
    </div>
  `;
}

function shouldRenderGroupedOfferingLayout(item) {
  return item.pattern === "AI" && Boolean(item.roadmapImage);
}

function findDetailSection(item, title) {
  return (item.collapsibleSections || []).find((section) => section.title === title);
}

function withoutLeadingParagraph(html) {
  const template = document.createElement("template");
  template.innerHTML = String(html || "").trim();
  const firstElement = template.content.firstElementChild;
  if (firstElement?.tagName === "P") firstElement.remove();
  return template.innerHTML;
}

function renderGroupedSubsection(section, item, options = {}) {
  if (!section) return "";

  const html = options.omitLeadingParagraph ? withoutLeadingParagraph(section.html) : section.html || "";
  const exportButtons =
    Array.isArray(section.exports) && section.exports.length ? renderSectionExportButtons(section, item) : "";

  return `
    <section class="detail-group-subsection">
      <div class="detail-group-heading">
        <h3>${detailEscapeHtml(options.title || section.title)}</h3>
        ${exportButtons}
      </div>
      ${html ? `<div class="detail-rich">${html}</div>` : ""}
    </section>
  `;
}

function renderGroupedPanel(title, sections, item) {
  const sectionMarkup = sections
    .map((entry) => renderGroupedSubsection(entry.section, item, entry.options || {}))
    .filter(Boolean)
    .join("");

  if (!sectionMarkup) return "";

  return `
    <article class="detail-panel detail-group-panel">
      <h2>${detailEscapeHtml(title)}</h2>
      <div class="detail-group-stack">${sectionMarkup}</div>
    </article>
  `;
}

function renderImplementationPanelMarkup() {
  return `
    <article class="detail-panel implementation-panel">
      <h2>Implementation Plan</h2>
      <section class="implementation-plan-section" aria-labelledby="implementationApproachHeading">
        <h3 id="implementationApproachHeading">Detailed design and build approach</h3>
        <ol id="implementationSteps"></ol>
      </section>
      <section class="implementation-roadmap-section" id="implementationRoadmapPanel" aria-labelledby="implementationRoadmapHeading" hidden>
        <h3 id="implementationRoadmapHeading">Implementation Roadmap</h3>
        <div id="implementationRoadmap"></div>
      </section>
    </article>
  `;
}

function renderSourcePanelMarkup() {
  return `
    <aside class="detail-panel source-panel">
      <h2>Sources And Next Steps</h2>
      <div id="sourceList"></div>
      <div class="detail-note">
        <strong>Next asset step:</strong>
        <span>When you share your own customer asset details, this same page can point to your GitHub source and show your implementation notes.</span>
      </div>
    </aside>
  `;
}

function renderGroupedOfferingGrid(item) {
  const designDimensions = findDetailSection(item, "Design Dimensions");
  const solutionApplicability = findDetailSection(item, "Solution Provides And Applicability");
  const readiness = findDetailSection(item, "Readiness Conditions");
  const architecture = findDetailSection(item, "Architecture And Component Design");
  const nonFunctional = findDetailSection(item, "Non-Functional Requirements");
  const stack = findDetailSection(item, "Suggested Build Stack");
  const cloudAlm = findDetailSection(item, "Cloud ALM Export Package");
  const validation = findDetailSection(item, "Next Steps And Sources");

  document.querySelector(".detail-grid").innerHTML = `
    ${renderGroupedPanel(
      "Solution Definition",
      [
        {
          section: {
            title: "Idea Brief",
            html: `<p>${detailEscapeHtml(item.summary)}</p>`,
          },
        },
        { section: designDimensions, options: { omitLeadingParagraph: true } },
        { section: solutionApplicability },
        { section: readiness },
      ],
      item,
    )}
    ${renderGroupedPanel("Architecture Definition", [{ section: architecture }], item)}
    ${renderImplementationPanelMarkup()}
    ${renderGroupedPanel(
      "Controls And Stack",
      [
        { section: nonFunctional },
        { section: stack },
      ],
      item,
    )}
    ${renderGroupedPanel(
      "Validation",
      [
        { section: cloudAlm },
        { section: validation },
      ],
      item,
    )}
    ${renderSourcePanelMarkup()}
  `;

  const cloudAlmPanel = document.querySelector(".detail-grid");
  if (cloudAlmPanel) bindCloudAlmExportButtons(cloudAlmPanel, item);
}

function sourceLooksLikeCode(source) {
  return /source|github|repository/i.test(source.label || "");
}

function renderPrimaryAction(source, label, className) {
  return source.url
    ? `
        <a class="${className}" href="${detailEscapeHtml(source.url)}" target="_blank" rel="noreferrer">
          ${detailEscapeHtml(label)}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </a>
      `
    : `
        <span class="${className} disabled-action">
          ${detailEscapeHtml(label)}
        </span>
      `;
}

function renderExcelIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 3h9l5 5v13H5z" />
      <path d="M14 3v5h5" />
      <path d="m8.5 11 4 6" />
      <path d="m12.5 11-4 6" />
    </svg>
  `;
}

function renderSectionExportButtons(section, item) {
  const emptyExportSlot = `<div class="accordion-export-bar accordion-export-bar-empty" aria-hidden="true"></div>`;
  if (!window.cloudAlmExport || !Array.isArray(section.exports) || !section.exports.length) return emptyExportSlot;

  const exportOptions = new Map(
    window.cloudAlmExport.getExportOptions(item).map((option) => [option.kind, option]),
  );
  const buttons = section.exports
    .map((kind) => exportOptions.get(kind))
    .filter(Boolean)
    .map(
      (download) => `
        <button
          class="excel-download-button"
          type="button"
          data-cloud-alm-export="${detailEscapeHtml(download.kind)}"
          title="${detailEscapeHtml(`${download.label} - ${download.filename}`)}"
          aria-label="${detailEscapeHtml(`${download.label} - ${download.filename}`)}"
        >
          ${renderExcelIcon()}
          <span class="excel-download-badge" aria-hidden="true">${detailEscapeHtml(download.shortLabel || download.kind)}</span>
          <span class="sr-only">${detailEscapeHtml(download.label)}</span>
        </button>
      `,
    )
    .join("");

  return buttons ? `<div class="accordion-export-bar">${buttons}</div>` : emptyExportSlot;
}

function bindCloudAlmExportButtons(container, item) {
  container.querySelectorAll("[data-cloud-alm-export]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const kind = button.getAttribute("data-cloud-alm-export");
      window.cloudAlmExport.downloadExport(item, kind);
    });
  });
}

function renderCollapsibleSections(sections, item) {
  const panel = document.getElementById("detailCollapsiblePanel");
  if (!panel) return;

  if (!Array.isArray(sections) || !sections.length) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  panel.hidden = false;
  panel.innerHTML = `
    <h2>Accelerator Pack</h2>
    <div class="detail-accordion-list">
      ${sections
        .map(
          (section) => `
            <details class="detail-accordion">
              <summary>
                <span>${detailEscapeHtml(section.title)}</span>
                ${renderSectionExportButtons(section, item)}
                <svg class="accordion-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
              </summary>
              <div class="detail-accordion-body">${section.html || ""}</div>
            </details>
          `,
        )
        .join("")}
    </div>
  `;
  bindCloudAlmExportButtons(panel, item);
}

function inferInAppTool(sample) {
  const text = `${sample.title} ${sample.description} ${sample.pattern}`.toLowerCase();
  if (text.includes("email")) return "Maintain Email Templates and the relevant output management configuration";
  if (text.includes("custom field") || text.includes("purchasing")) return "Custom Fields and Logic, with UI/report/API enablement";
  if (text.includes("logic") || text.includes("validation") || text.includes("time")) return "Custom Logic at the released business context or BAdI";
  if (text.includes("report") || text.includes("analy")) return "Custom Analytical Queries, Custom CDS Views, or released analytical data sources";
  if (text.includes("edi") || text.includes("integration")) return "Custom Fields and integration mapping through the supported business scenario";
  return "the smallest available key-user extensibility app for the target business context";
}

function sampleImplementation(laneKey, sample) {
  if (laneKey === "inapp") {
    const tool = inferInAppTool(sample);
    return [
      `Confirm the SAP S/4HANA business process and the exact place where "${sample.title}" should appear or behave differently.`,
      `Use ${tool}; check the target app, business context, output, report, or API is actually extensible.`,
      "Build the change in the customizing tenant, publish it, and test with the business role that will use it.",
      "Use the GitHub drill-down/source as a scenario reference, then document the final field, logic, template, report, or mapping used in your tenant.",
    ];
  }

  if (laneKey === "developer") {
    return [
      `Review the sample repository to understand the ABAP Cloud/RAP pattern behind "${sample.title}".`,
      "Set up the SAP S/4HANA Cloud ABAP development tenant, ADT access, package, IAM app, and transport/lifecycle path.",
      "Implement only with released APIs, released CDS views, released BAdIs, RAP behavior, and ABAP Cloud language rules.",
      "Preview or expose the service/UI, test authorization and behavior, then move it through the public-cloud development lifecycle.",
    ];
  }

  return [
    `Review the repository architecture for "${sample.title}" and identify which part runs on SAP BTP versus SAP S/4HANA Cloud.`,
    "Find the required SAP S/4HANA Cloud APIs, events, communication scenarios, and authentication/destination setup.",
    "Provision the needed BTP services, deploy the app or workflow, and connect it securely to the S/4HANA Cloud tenant.",
    "Test business data flow end to end, including retries, errors, monitoring, and the final user entry point.",
  ];
}

function findSampleDetail(params) {
  const laneKey = params.get("lane") || "inapp";
  const sampleId = params.get("id") || "";
  const from = params.get("from") || "";
  const lane = lanes[laneKey];
  if (!lane) return null;

  const sample = lane.samples.find((candidate) => sampleMatchesDetailId(candidate, sampleId));
  if (!sample) return null;

  return {
    kind: "sample",
    title: sample.title,
    lane: sample.tagLabel || lane.label,
    laneKey,
    sourceType:
      sample.sourceType || (sample.status === "Historical scenario" ? "GitHub Drill-down" : "GitHub Repo"),
    summary: sample.summary || sample.function || sample.description,
    useCase: sample.useCase || sample.description,
    workingExample: sample.workingExample || null,
    roadmapImage: sample.roadmapImage || null,
    whenToUse:
      sample.whenToUse ||
      (laneKey === "inapp"
        ? "Choose this when the requirement can stay inside SAP S/4HANA key-user tooling and does not need a separate app or deep custom ABAP."
        : laneKey === "developer"
          ? "Choose this when the extension needs ABAP Cloud, RAP, released APIs, released CDS views, or released BAdIs on the S/4HANA stack."
          : "Choose this when the solution should run separately on SAP BTP or another side runtime while consuming S/4HANA Cloud APIs or events."),
    implementation: sample.implementation || sampleImplementation(laneKey, sample),
    collapsibleSections: sample.collapsibleSections || [],
    cloudAlm: sample.cloudAlm || null,
    pattern: sample.pattern,
    status: sample.status,
    sources: sample.sources || [
      {
        label: sample.linkLabel || "Open GitHub source",
        url: sample.url,
      },
    ],
    nextStep: sample.nextStep,
    backUrl: from === "accelerators" ? "accelerators.html" : `samples.html?lane=${encodeURIComponent(laneKey)}`,
    backLabel: from === "accelerators" ? "Back to accelerators" : `Back to ${lane.label} samples`,
  };
}

function findAssetDetail(params) {
  const assetId = params.get("id") || "";
  const asset = (window.customerAssetItems || []).find((candidate) => candidate.id === assetId);
  if (!asset) return null;

  return {
    kind: "asset",
    title: asset.title,
    lane: asset.lane,
    laneKey: asset.laneKey,
    sourceType: asset.sourceType,
    summary: asset.summary,
    useCase: asset.useCase,
    workingExample: asset.workingExample || null,
    roadmapImage: asset.roadmapImage || null,
    whenToUse: asset.whenToUse,
    implementation: asset.implementation,
    collapsibleSections: asset.collapsibleSections || [],
    cloudAlm: asset.cloudAlm || null,
    pattern: asset.pattern,
    status: asset.status,
    sources: asset.sources,
    nextStep: asset.nextStep,
    backUrl: "assets.html",
    backLabel: "Back to assets",
  };
}

function getDetailItem() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type") || "sample";
  return type === "asset" ? findAssetDetail(params) : findSampleDetail(params);
}

function renderSourceLinks(item) {
  const sourceList = document.getElementById("sourceList");
  sourceList.innerHTML = item.sources
    .map(
      (source) => {
        const sourceContent = `
              <span>
                <strong>${detailEscapeHtml(source.label)}</strong>
                ${source.note ? `<small>${detailEscapeHtml(source.note)}</small>` : ""}
              </span>
            `;

        return source.url
          ? `
            <a class="source-link" href="${detailEscapeHtml(source.url)}" target="_blank" rel="noreferrer">
              ${sourceContent}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          `
          : `
            <div class="source-link source-placeholder">
              ${sourceContent}
              ${source.note ? "" : "<small>To be linked later</small>"}
            </div>
          `;
      },
    )
    .join("");

  const sourceAction = item.sources.find(sourceLooksLikeCode);
  const referenceAction = item.sources.find((source) => source.url && source !== sourceAction);
  const fallbackSource = item.sources.find((source) => source.url);
  const primaryActions = [];

  if (sourceAction) {
    primaryActions.push(
      renderPrimaryAction(sourceAction, sourceAction.url ? "Open source" : "Source pending", sourceAction.url ? "primary-action" : "secondary-action"),
    );
  } else if (fallbackSource) {
    primaryActions.push(renderPrimaryAction(fallbackSource, "Open source", "primary-action"));
  }

  if (referenceAction) {
    primaryActions.push(
      renderPrimaryAction(referenceAction, referenceAction.actionLabel || "Open reference", sourceAction?.url ? "secondary-action" : "primary-action"),
    );
  }

  document.getElementById("detailPrimaryActions").innerHTML = primaryActions.length
    ? primaryActions.join("")
    : `
        <span class="secondary-action disabled-action">
          Source code pending
        </span>
      `;

  const detailNote = document.querySelector(".detail-note span");
  if (detailNote && item.nextStep) detailNote.textContent = item.nextStep;
}

function renderDetailPage() {
  const item = getDetailItem();
  if (!item) {
    document.title = "Not Found - Extensibility Explorer";
    document.querySelector(".detail-page").innerHTML = `
      <a class="back-link" href="index.html">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
        Back home
      </a>
      <section class="detail-hero">
        <div>
          <div class="detail-tags"><span class="asset-lane">Not found</span></div>
          <h1>Implementation guide not found</h1>
          <p>The selected card could not be matched. Please go back and choose the card again.</p>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${item.title} - Implementation Guide`;
  const backLink = document.getElementById("detailBack");
  backLink.href = item.backUrl;
  backLink.lastChild.textContent = item.backLabel;

  document.getElementById("detailLane").textContent = item.lane;
  document.getElementById("detailLane").dataset.lane = item.laneKey;
  document.getElementById("detailSourceType").textContent = item.sourceType;
  document.getElementById("detailTitle").textContent = item.title;
  document.getElementById("detailSummary").textContent = item.summary;

  if (shouldRenderGroupedOfferingLayout(item)) {
    renderGroupedOfferingGrid(item);
    document.getElementById("implementationSteps").innerHTML = item.implementation
      .map(renderImplementationStep)
      .join("");
    renderImplementationRoadmap(item.roadmapImage);
    renderSourceLinks(item);

    document.querySelectorAll(".top-nav a").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "accelerators.html") link.classList.add("active");
    });
    return;
  }

  renderDetailContent("detailUseCase", item.useCase);
  renderOptionalDetailContent("detailWorkingExamplePanel", "detailWorkingExample", item.workingExample);
  renderDetailContent("detailWhenToUse", item.whenToUse);
  document.getElementById("implementationSteps").innerHTML = item.implementation
    .map(renderImplementationStep)
    .join("");
  renderImplementationRoadmap(item.roadmapImage);
  renderCollapsibleSections(item.collapsibleSections, item);

  renderSourceLinks(item);

  document.querySelectorAll(".top-nav a").forEach((link) => {
    link.classList.remove("active");
    if (item.kind === "asset" && link.getAttribute("href") === "assets.html") link.classList.add("active");
    if (item.kind === "sample" && link.getAttribute("href") === "accelerators.html") link.classList.add("active");
  });
}

if (document.body.dataset.page === "detail") {
  renderDetailPage();
}
