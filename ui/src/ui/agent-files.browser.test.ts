import "../styles.css";
import { render } from "lit";
import { describe, expect, it } from "vitest";
import { renderAgentFiles } from "./views/agents-panels-status-files.ts";

describe("agent files editor styling", () => {
  it("uses a taller editor and blurs file contents by default", () => {
    const container = document.createElement("div");
    document.body.append(container);
    render(
      renderAgentFiles({
        agentId: "agent-1",
        agentFilesList: {
          agentId: "agent-1",
          workspace: "/tmp/agent-1",
          files: [
            {
              name: "AGENTS.md",
              path: "/tmp/agent-1/AGENTS.md",
              size: 128,
              updatedAtMs: Date.now(),
              missing: false,
            },
          ],
        },
        agentFilesLoading: false,
        agentFilesError: null,
        agentFileActive: "AGENTS.md",
        agentFileContents: { "AGENTS.md": "# AGENTS.md" },
        agentFileDrafts: { "AGENTS.md": "# AGENTS.md" },
        agentFileSaving: false,
        onLoadFiles: () => {},
        onSelectFile: () => {},
        onFileDraftChange: () => {},
        onFileReset: () => {},
        onFileSave: () => {},
      }),
      container,
    );

    const field = container.querySelector<HTMLElement>(".agent-file-field");
    const textarea = container.querySelector<HTMLTextAreaElement>(".agent-file-textarea");
    const fieldMinHeight = Number.parseFloat(getComputedStyle(field!).minHeight);
    const textareaMinHeight = Number.parseFloat(getComputedStyle(textarea!).minHeight);

    expect(field).not.toBeNull();
    expect(textarea).not.toBeNull();
    expect(fieldMinHeight).toBeGreaterThanOrEqual(320);
    expect(textareaMinHeight).toBeGreaterThanOrEqual(320);
    expect(getComputedStyle(textarea!).filter).toContain("blur");
  });
});
