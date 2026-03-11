import "../styles.css";
import { render } from "lit";
import { describe, expect, it } from "vitest";
import { renderChat, type ChatProps } from "./views/chat.ts";

function makeProps(): ChatProps {
  return {
    sessionKey: "main:test",
    onSessionKeyChange: () => {},
    thinkingLevel: null,
    showThinking: false,
    loading: false,
    sending: false,
    messages: [],
    toolMessages: [],
    streamSegments: [],
    stream: null,
    streamStartedAt: null,
    draft: "",
    queue: [],
    connected: true,
    canSend: true,
    disabledReason: null,
    error: null,
    sessions: null,
    focusMode: false,
    assistantName: "Nova",
    assistantAvatar: null,
    onRefresh: () => {},
    onToggleFocusMode: () => {},
    onDraftChange: () => {},
    onSend: () => {},
    onQueueRemove: () => {},
    onNewSession: () => {},
    agentsList: null,
    currentAgentId: "default",
    onAgentChange: () => {},
  };
}

describe("chat composer styling", () => {
  it("hides the native file input and renders the unified composer shell", () => {
    const container = document.createElement("div");
    document.body.append(container);
    render(renderChat(makeProps()), container);

    const composer = container.querySelector<HTMLElement>(".agent-chat__input");
    const fileInput = container.querySelector<HTMLInputElement>(".agent-chat__file-input");
    const textarea = container.querySelector<HTMLTextAreaElement>(".agent-chat__input > textarea");
    const sendButton = container.querySelector<HTMLElement>(".chat-send-btn");

    expect(composer).not.toBeNull();
    expect(fileInput).not.toBeNull();
    expect(textarea).not.toBeNull();
    expect(sendButton).not.toBeNull();
    expect(getComputedStyle(composer!).display).toBe("flex");
    expect(getComputedStyle(composer!).flexDirection).toBe("column");
    expect(getComputedStyle(fileInput!).display).toBe("none");
    expect(Number.parseFloat(getComputedStyle(textarea!).minHeight)).toBeGreaterThanOrEqual(40);
    expect(getComputedStyle(sendButton!).width).toBe("32px");
  });
});
