import "../styles.css";
import { render } from "lit";
import { describe, expect, it } from "vitest";
import { renderThemeToggle } from "./app-render.helpers.ts";

describe("theme orb styling", () => {
  it("renders the theme trigger as a compact round control", () => {
    const container = document.createElement("div");
    document.body.append(container);
    render(
      renderThemeToggle({
        theme: "claw",
        setTheme: () => {},
      } as unknown as Parameters<typeof renderThemeToggle>[0]),
      container,
    );

    const orb = container.querySelector<HTMLElement>(".theme-orb");
    const trigger = container.querySelector<HTMLElement>(".theme-orb__trigger");

    expect(orb).not.toBeNull();
    expect(trigger).not.toBeNull();
    expect(getComputedStyle(orb!).display).toBe("inline-flex");
    expect(getComputedStyle(trigger!).width).toBe("28px");
    expect(getComputedStyle(trigger!).borderRadius).toBe("9999px");
  });
});
