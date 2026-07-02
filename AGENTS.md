# Repository Context Protocol

This repository is maintained as a living SAP extensibility accelerator catalogue. Do not treat each request as isolated. Before starting any activity in this repo, recover the current project context and continue from the existing implementation state.

## Context Continuity

For every new task:

1. Read this `AGENTS.md` file first.
2. Check the current git branch, status, and recent commits.
3. Read the relevant repo files before editing, especially:
   - `selected-content.js` for accelerator content and Cloud ALM context.
   - `detail.js` for detail-page rendering behavior.
   - `cloud-alm-export.js` for dynamic Cloud ALM workbook generation.
   - `styles.css` for layout and SAP Fiori-style UI behavior.
   - `README.md` for overall project purpose.
4. Use the repo files as the durable memory of prior conversations. If a fresh chat does not include older messages, reconstruct the context from these files and the latest git history rather than restarting from generic assumptions.
5. Preserve prior user decisions unless the user explicitly changes direction.

## Accelerator Source Of Truth

Each accelerator must be maintained as one structured content object. Do not scatter the same business content across unrelated HTML, static spreadsheets, and renderer code.

For each accelerator, keep the core context together:

- `title`
- `summary`
- `useCase`
- `whenToUse`
- `implementation`
- `collapsibleSections`
- `sources`
- `cloudAlm`

The page UI, accordion content, source/reference buttons, and Cloud ALM Excel exports must be generated from that current accelerator data.

## Cloud ALM Export Rule

Cloud ALM downloads must be dynamic and asset-specific.

When an accelerator has a `cloudAlm` block, generate exports from that block. When it does not, generate sensible fallback exports from that accelerator's own title, summary, and implementation steps.

For the Review Booklet accelerator, keep these IDs aligned across visible content and generated Excel files:

- Requirement: `REQ-ANA-RB-001`
- User stories: `US-RB-001` through `US-RB-008`
- Executable test script: `TC-RB-001` through `TC-RB-025`

If the visible accordion content changes, update the generated export data so the download matches what the user sees.

## UI Placement Rule

Avoid duplicate download sections. Put export controls directly inside the relevant content section:

- Requirement and user story Excel icons belong in the `Cloud ALM Requirement And User Story Template` accordion.
- Test script Excel icon belongs in the `Executable Test Script` accordion.

## Response Rule

When giving the user a status update or final answer for this project, include the current local site URL.

Current Review Booklet detail URL:

`file:///C:/Users/f821895/OneDrive%20-%20Fortescue%20Metals%20Group/Documents/GitHub/sap-extensibility-explorer/detail.html?lane=inapp&id=custom-layout-for-review-booklets-using-manage-kpi-and-reports-app&from=accelerators`

## Git Rule

Use a focused branch for each meaningful change. Do not overwrite unrelated user changes. If the user asks for a GitHub branch, create/push only the branch for the requested change and report the branch name, commit, PR URL if available, and site URL.
