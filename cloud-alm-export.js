(function () {
  const XLSX_MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

  const EXPORT_DEFINITIONS = {
    requirement: {
      label: "Download Cloud ALM Requirement",
      shortLabel: "REQ",
      description: "Generated from this accelerator's current requirement data.",
      suffix: "cloud-alm-requirement",
      sheetName: "Requirement",
      note:
        "Cloud ALM Requirements upload workbook. If your tenant template differs, download Spreadsheet Download For Creation Using Template from the Requirements app and paste these values into matching columns.",
      headers: [
        "Requirement GUID",
        "External ID*",
        "Title*",
        "Description",
        "Status",
        "Priority",
        "Owner",
        "Source",
        "Tags",
        "Planned Release",
        "Business Process",
      ],
      rows: buildRequirementRows,
    },
    "user-stories": {
      label: "Download Cloud ALM User Stories And Tasks",
      shortLabel: "US",
      description: "Generated from this accelerator's current user stories and implementation tasks.",
      suffix: "cloud-alm-user-stories-tasks",
      sheetName: "User Stories",
      note:
        "Cloud ALM Tasks upload workbook for user stories. If your tenant template differs, download Spreadsheet Download For Creation Using Template from the Tasks app and paste these values into matching columns.",
      headers: [
        "Task GUID",
        "External ID*",
        "Task Type*",
        "Title*",
        "Description",
        "Status",
        "Priority",
        "Owner",
        "Assignee",
        "Workstream",
        "Sprint",
        "Requirement External ID",
        "Tags",
        "Planned Start Date",
        "Planned End Date",
      ],
      rows: buildUserStoryRows,
    },
    "test-cases": {
      label: "Download Cloud ALM Test Script",
      shortLabel: "TEST",
      description: "Generated from this accelerator's current test cases or implementation steps.",
      suffix: "cloud-alm-test-cases",
      sheetName: "Test Cases",
      note: "Any changes you make to the values of columns marked with [---] will be ignored.",
      headers: [
        "Test Case GUID",
        "Test Case Name*",
        "[Scope GUID]",
        "[Scope Name]",
        "[Solution Process GUID]",
        "[Solution Process Name]",
        "[Solution Process Flow GUID]",
        "[Solution Process Flow Name]",
        "[Solution Process Flow Diagram GUID]",
        "[Solution Process Flow Diagram Name]",
        "[Test Case Priority]",
        "[Test Case Owner]",
        "Test Case Status",
        "Activity GUID",
        "Activity Title*",
        "Activity Target Name",
        "Activity Target URL",
        "Action GUID",
        "Action Title*",
        "Action Instructions*",
        "Action Expected Result",
      ],
      rows: buildTestCaseRows,
    },
  };

  const crcTable = Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    return value >>> 0;
  });

  function slugify(value) {
    return String(value || "accelerator")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 96);
  }

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function htmlEscape(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function xmlEscape(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function htmlParagraph(value) {
    return `<p>${htmlEscape(cleanText(value))}</p>`;
  }

  function htmlList(items) {
    const listItems = (items || []).map((item) => `<li>${htmlEscape(cleanText(item))}</li>`).join("");
    return listItems ? `<ul>${listItems}</ul>` : "";
  }

  function fieldFromBlocks(content) {
    if (!Array.isArray(content)) return cleanText(content);

    return content
      .map((block) => {
        if (typeof block === "string") return block;
        const heading = block.heading ? `${block.heading}: ` : "";
        const text = block.text || "";
        const items = Array.isArray(block.items) ? block.items.join("; ") : "";
        return cleanText(`${heading}${text} ${items}`);
      })
      .filter(Boolean)
      .join(" ");
  }

  function stepText(step) {
    if (typeof step === "string") return cleanText(step);
    const items = Array.isArray(step.items) && step.items.length ? ` Examples: ${step.items.join("; ")}.` : "";
    return cleanText(`${step.text || ""}${items}`);
  }

  function getCloudAlmData(item) {
    return item && item.cloudAlm ? item.cloudAlm : {};
  }

  function getRequirementId(item, data) {
    const requirement = data.requirement || {};
    if (requirement.externalId) return requirement.externalId;
    const words = slugify(item.title)
      .split("-")
      .filter(Boolean)
      .slice(0, 5)
      .map((word) => word.slice(0, 4).toUpperCase());
    return `REQ-${words.join("-") || "ACC"}`;
  }

  function getRequirementTitle(item, data) {
    const requirement = data.requirement || {};
    return requirement.title || item.title;
  }

  function getTags(item, data) {
    if (Array.isArray(data.tags) && data.tags.length) return data.tags.join("; ");
    const tags = [item.pattern, item.sourceType, item.lane, item.status].filter(Boolean);
    return tags.join("; ");
  }

  function defaultRequirementDescription(item) {
    const implementationItems = (item.implementation || []).slice(0, 6).map(stepText);
    return [
      htmlParagraph(item.summary || item.description || item.title),
      "<h2>Business Need</h2>",
      htmlParagraph(fieldFromBlocks(item.useCase)),
      "<h2>Implementation Scope</h2>",
      htmlList(implementationItems),
    ].join("");
  }

  function buildRequirementRows(item) {
    const data = getCloudAlmData(item);
    const requirement = data.requirement || {};

    return [
      [
        requirement.guid || "",
        getRequirementId(item, data),
        getRequirementTitle(item, data),
        requirement.description || defaultRequirementDescription(item),
        requirement.status || "Not Started",
        requirement.priority || "High",
        requirement.owner || "",
        requirement.source || "External",
        requirement.tags || getTags(item, data),
        requirement.plannedRelease || "",
        requirement.businessProcess || data.businessProcess || item.pattern || item.lane || "",
      ],
    ];
  }

  function storyDescription(story, item, data) {
    if (story.description) return story.description;
    const requirementId = getRequirementId(item, data);
    const requirementTitle = getRequirementTitle(item, data);
    const storyText =
      story.text ||
      `As ${story.persona || "a business user"}, I want ${story.want || story.title} so that ${story.soThat || "the requirement is delivered in a governed way"}.`;

    return [
      htmlParagraph(storyText),
      story.acceptanceCriteria && story.acceptanceCriteria.length ? "<h2>Acceptance Criteria</h2>" : "",
      htmlList(story.acceptanceCriteria),
      "<h2>Requirement Link</h2>",
      htmlParagraph(`${requirementId} - ${requirementTitle}`),
    ].join("");
  }

  function derivedStories(item) {
    return (item.implementation || []).slice(0, 10).map((step, index) => {
      const number = String(index + 1).padStart(3, "0");
      const text = stepText(step);
      return {
        externalId: `US-${number}`,
        title: `US-${number} - ${text.slice(0, 72)}`,
        taskType: "User Story",
        text: `As an implementation owner, I want to complete this step for ${item.title} so that the accelerator can be delivered with traceability: ${text}`,
        acceptanceCriteria: [
          "Owner, dependency, and expected evidence are identified.",
          "Configuration or documentation is completed for the current asset.",
          "Result is reviewed with the business or technical owner.",
        ],
      };
    });
  }

  function buildUserStoryRows(item) {
    const data = getCloudAlmData(item);
    const stories = data.userStories || data.stories || data.tasks || derivedStories(item);
    const requirementId = getRequirementId(item, data);

    return stories.map((story) => [
      story.guid || "",
      story.externalId || story.id || "",
      story.taskType || "User Story",
      story.title || story.name || story.externalId || item.title,
      storyDescription(story, item, data),
      story.status || "Not Started",
      story.priority || "High",
      story.owner || "",
      story.assignee || "",
      story.workstream || data.workstream || item.pattern || item.lane || "",
      story.sprint || "",
      story.requirementExternalId || requirementId,
      story.tags || getTags(item, data),
      story.plannedStartDate || "",
      story.plannedEndDate || "",
    ]);
  }

  function instructionsHtml(instructions) {
    if (Array.isArray(instructions)) return `<h2>Procedure</h2>${htmlList(instructions)}`;
    return instructions || "";
  }

  function expectedHtml(value) {
    return value && /^</.test(String(value).trim()) ? value : htmlParagraph(value || "Expected result is achieved and evidence is captured.");
  }

  function derivedTestCases(item) {
    return (item.implementation || []).slice(0, 12).map((step, index) => {
      const number = String(index + 1).padStart(3, "0");
      const text = stepText(step);
      return {
        externalId: `TC-${number}`,
        testCaseName: `TC-${number} - Validate ${item.title}`,
        priority: "High",
        status: "Prepared",
        activityTitle: "Validate implementation step",
        actionTitle: `Step ${number}`,
        instructions: [text, "Capture evidence and note any deviation."],
        expectedResult: `${text} is completed for ${item.title}.`,
      };
    });
  }

  function collapsibleSection(item, titlePattern) {
    return (item.collapsibleSections || []).find((section) => titlePattern.test(section.title || ""));
  }

  function textFromCell(cell) {
    return cleanText(cell ? cell.textContent : "");
  }

  function testCasesFromExecutableSection(item) {
    if (typeof document === "undefined") return [];

    const section = collapsibleSection(item, /executable test script/i);
    if (!section || !section.html) return [];

    const template = document.createElement("template");
    template.innerHTML = section.html;

    return Array.from(template.content.querySelectorAll("tbody tr"))
      .map((row) => {
        const cells = Array.from(row.querySelectorAll("td"));
        if (cells.length < 6) return null;

        return {
          externalId: textFromCell(cells[0]),
          testCaseName: textFromCell(cells[1]),
          preconditions: textFromCell(cells[2]),
          steps: textFromCell(cells[3]),
          expectedResult: textFromCell(cells[4]),
          status: textFromCell(cells[5]) || "Not Started",
          priority: "High",
          activityTitle: textFromCell(cells[1]),
        };
      })
      .filter(Boolean);
  }

  function testCaseName(test, item) {
    const title = test.testCaseName || test.name || item.title;
    return test.externalId && !title.startsWith(test.externalId) ? `${test.externalId} - ${title}` : title;
  }

  function testInstructions(test) {
    if (test.actionInstructions) return test.actionInstructions;
    if (test.preconditions || test.steps) {
      return [
        test.preconditions ? `<h2>Preconditions</h2>${htmlParagraph(test.preconditions)}` : "",
        test.steps ? `<h2>Procedure</h2>${htmlParagraph(test.steps)}` : "",
      ].join("");
    }
    return instructionsHtml(test.instructions);
  }

  function buildTestCaseRows(item) {
    const data = getCloudAlmData(item);
    const sectionTests = testCasesFromExecutableSection(item);
    const tests = sectionTests.length ? sectionTests : data.testCases || data.tests || derivedTestCases(item);

    return tests.map((test) => [
      test.testCaseGuid || test.guid || "",
      testCaseName(test, item),
      test.scopeGuid || "",
      test.scopeName || "",
      test.solutionProcessGuid || "",
      test.solutionProcessName || "",
      test.solutionProcessFlowGuid || "",
      test.solutionProcessFlowName || "",
      test.solutionProcessFlowDiagramGuid || "",
      test.solutionProcessFlowDiagramName || "",
      test.testCasePriority || test.priority || "High",
      test.testCaseOwner || test.owner || "",
      test.testCaseStatus || test.status || "Prepared",
      test.activityGuid || "",
      test.activityTitle || "Execute test activity",
      test.activityTargetName || "",
      test.activityTargetUrl || "",
      test.actionGuid || "",
      test.actionTitle || test.externalId || test.testCaseName || "Execute test action",
      testInstructions(test),
      test.actionExpectedResult || expectedHtml(test.expectedResult),
    ]);
  }

  function columnName(index) {
    let column = "";
    let value = index + 1;
    while (value > 0) {
      const modulo = (value - 1) % 26;
      column = String.fromCharCode(65 + modulo) + column;
      value = Math.floor((value - modulo) / 26);
    }
    return column;
  }

  function rowToCells(row, rowIndex, styleId, columns) {
    return Array.from({ length: columns }, (_, columnIndex) => {
      const cellRef = `${columnName(columnIndex)}${rowIndex}`;
      const value = row[columnIndex] == null ? "" : String(row[columnIndex]);
      return value
        ? `<c r="${cellRef}" s="${styleId}" t="inlineStr"><is><t>${xmlEscape(value)}</t></is></c>`
        : `<c r="${cellRef}" s="${styleId}" t="inlineStr"></c>`;
    }).join("");
  }

  function worksheetXml(rows, sheetName) {
    const columns = Math.max(...rows.map((row) => row.length));
    const lastCell = `${columnName(columns - 1)}${rows.length}`;
    const cols = Array.from({ length: columns }, (_, index) => {
      const width = index === 0 ? 32 : index === 3 || index === 4 || index === 19 || index === 20 ? 70 : 24;
      return `<col width="${width}" customWidth="1" min="${index + 1}" max="${index + 1}"/>`;
    }).join("");
    const sheetData = rows
      .map((row, index) => {
        const rowNumber = index + 1;
        const styleId = rowNumber === 5 ? 2 : rowNumber < 5 ? 1 : 3;
        return `<row r="${rowNumber}">${rowToCells(row, rowNumber, styleId, columns)}</row>`;
      })
      .join("");

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:${lastCell}"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/><selection pane="bottomLeft" activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols>${cols}</cols>
  <sheetData>${sheetData}</sheetData>
  <autoFilter ref="A5:${lastCell}"/>
  <pageMargins left="0.75" right="0.75" top="1" bottom="1" header="0.5" footer="0.5"/>
</worksheet>`;
  }

  function stylesXml() {
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="2"><font><sz val="11"/><name val="Calibri"/><family val="2"/></font><font><b/><sz val="11"/><name val="Calibri"/><family val="2"/></font></fonts>
  <fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFDDEBF7"/><bgColor indexed="64"/></patternFill></fill></fills>
  <borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color rgb="FFD9E2F3"/></left><right style="thin"><color rgb="FFD9E2F3"/></right><top style="thin"><color rgb="FFD9E2F3"/></top><bottom style="thin"><color rgb="FFD9E2F3"/></bottom><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf></cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;
  }

  function workbookXml(sheetName) {
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${xmlEscape(sheetName)}" sheetId="1" r:id="rId1"/></sheets></workbook>`;
  }

  function packageFiles(rows, sheetName) {
    return [
      {
        path: "[Content_Types].xml",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`,
      },
      {
        path: "_rels/.rels",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`,
      },
      {
        path: "xl/workbook.xml",
        content: workbookXml(sheetName),
      },
      {
        path: "xl/_rels/workbook.xml.rels",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
      },
      {
        path: "xl/styles.xml",
        content: stylesXml(),
      },
      {
        path: "xl/worksheets/sheet1.xml",
        content: worksheetXml(rows, sheetName),
      },
    ];
  }

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let index = 0; index < bytes.length; index += 1) {
      crc = crcTable[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function writeUint16(target, offset, value) {
    target[offset] = value & 0xff;
    target[offset + 1] = (value >>> 8) & 0xff;
  }

  function writeUint32(target, offset, value) {
    target[offset] = value & 0xff;
    target[offset + 1] = (value >>> 8) & 0xff;
    target[offset + 2] = (value >>> 16) & 0xff;
    target[offset + 3] = (value >>> 24) & 0xff;
  }

  function makeLocalHeader(nameBytes, dataBytes, crc) {
    const header = new Uint8Array(30 + nameBytes.length);
    writeUint32(header, 0, 0x04034b50);
    writeUint16(header, 4, 20);
    writeUint16(header, 6, 0);
    writeUint16(header, 8, 0);
    writeUint16(header, 10, 0);
    writeUint16(header, 12, 0);
    writeUint32(header, 14, crc);
    writeUint32(header, 18, dataBytes.length);
    writeUint32(header, 22, dataBytes.length);
    writeUint16(header, 26, nameBytes.length);
    writeUint16(header, 28, 0);
    header.set(nameBytes, 30);
    return header;
  }

  function makeCentralHeader(nameBytes, dataBytes, crc, localOffset) {
    const header = new Uint8Array(46 + nameBytes.length);
    writeUint32(header, 0, 0x02014b50);
    writeUint16(header, 4, 20);
    writeUint16(header, 6, 20);
    writeUint16(header, 8, 0);
    writeUint16(header, 10, 0);
    writeUint16(header, 12, 0);
    writeUint16(header, 14, 0);
    writeUint32(header, 16, crc);
    writeUint32(header, 20, dataBytes.length);
    writeUint32(header, 24, dataBytes.length);
    writeUint16(header, 28, nameBytes.length);
    writeUint16(header, 30, 0);
    writeUint16(header, 32, 0);
    writeUint16(header, 34, 0);
    writeUint16(header, 36, 0);
    writeUint32(header, 38, 0);
    writeUint32(header, 42, localOffset);
    header.set(nameBytes, 46);
    return header;
  }

  function zip(files) {
    const encoder = new TextEncoder();
    const chunks = [];
    const centralDirectory = [];
    let offset = 0;

    files.forEach((file) => {
      const nameBytes = encoder.encode(file.path);
      const dataBytes = encoder.encode(file.content);
      const crc = crc32(dataBytes);
      const localHeader = makeLocalHeader(nameBytes, dataBytes, crc);
      const centralHeader = makeCentralHeader(nameBytes, dataBytes, crc, offset);
      chunks.push(localHeader, dataBytes);
      centralDirectory.push(centralHeader);
      offset += localHeader.length + dataBytes.length;
    });

    const centralOffset = offset;
    centralDirectory.forEach((header) => {
      chunks.push(header);
      offset += header.length;
    });

    const end = new Uint8Array(22);
    writeUint32(end, 0, 0x06054b50);
    writeUint16(end, 8, files.length);
    writeUint16(end, 10, files.length);
    writeUint32(end, 12, offset - centralOffset);
    writeUint32(end, 16, centralOffset);
    writeUint16(end, 20, 0);
    chunks.push(end);

    return new Blob(chunks, { type: XLSX_MIME });
  }

  function workbookRows(definition, item) {
    const dataRows = definition.rows(item);
    const columns = definition.headers.length;
    const blank = Array(columns).fill("");
    return [
      ["# ", ...blank.slice(1)],
      ["# ", definition.note, ...blank.slice(2)],
      ["# created at", `${new Date().toISOString().slice(0, 19).replace("T", " ")} UTC`, ...blank.slice(2)],
      blank,
      definition.headers,
      ...dataRows,
    ];
  }

  function createExportBlob(item, kind) {
    const definition = EXPORT_DEFINITIONS[kind];
    if (!definition) throw new Error(`Unknown Cloud ALM export kind: ${kind}`);
    const rows = workbookRows(definition, item);
    const filename = `${slugify(item.title)}-${definition.suffix}.xlsx`;
    return {
      blob: zip(packageFiles(rows, definition.sheetName)),
      filename,
      rowCount: rows.length - 5,
    };
  }

  function downloadExport(item, kind) {
    const exportFile = createExportBlob(item, kind);
    const link = document.createElement("a");
    const url = URL.createObjectURL(exportFile.blob);
    link.href = url;
    link.download = exportFile.filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    return exportFile;
  }

  function getExportOptions(item) {
    if (!item) return [];
    return Object.entries(EXPORT_DEFINITIONS).map(([kind, definition]) => {
      const exportFile = createExportBlob(item, kind);
      return {
        kind,
        label: definition.label,
        shortLabel: definition.shortLabel,
        description: definition.description,
        filename: exportFile.filename,
        rowCount: exportFile.rowCount,
      };
    });
  }

  window.cloudAlmExport = {
    createExportBlob,
    downloadExport,
    getExportOptions,
  };
})();
