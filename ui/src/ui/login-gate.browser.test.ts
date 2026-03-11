import "../styles.css";
import { render } from "lit";
import { describe, expect, it } from "vitest";
import { renderLoginGate } from "./views/login-gate.ts";

describe("login gate layout", () => {
  it("applies the disconnected view shell styling", () => {
    const container = document.createElement("div");
    document.body.append(container);
    render(
      renderLoginGate({
        basePath: "",
        settings: {
          gatewayUrl: "ws://127.0.0.1:18789",
          token: "",
        },
        loginShowGatewayToken: false,
        loginShowGatewayPassword: false,
        password: "",
        lastError: null,
        applySettings: () => {},
        connect: () => {},
      } as unknown as Parameters<typeof renderLoginGate>[0]),
      container,
    );

    const gate = container.querySelector<HTMLElement>(".login-gate");
    const card = container.querySelector<HTMLElement>(".login-gate__card");
    const logo = container.querySelector<HTMLElement>(".login-gate__logo");

    expect(gate).not.toBeNull();
    expect(card).not.toBeNull();
    expect(logo).not.toBeNull();
    expect(getComputedStyle(gate!).display).toBe("flex");
    expect(getComputedStyle(gate!).paddingTop).toBe("24px");
    expect(getComputedStyle(card!).paddingLeft).toBe("32px");
    expect(getComputedStyle(card!).backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(getComputedStyle(logo!).width).toBe("48px");
  });
});
