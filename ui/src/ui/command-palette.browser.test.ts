import "../styles.css";
import { render } from "lit";
import { describe, expect, it } from "vitest";
import { renderCommandPalette } from "./views/command-palette.ts";

describe("command palette styling", () => {
  it("renders the overlay, input, and result items with palette layout styles", () => {
    const rendered = renderCommandPalette({
      open: true,
      query: "",
      activeIndex: 0,
      onToggle: () => {},
      onQueryChange: () => {},
      onActiveIndexChange: () => {},
      onNavigate: () => {},
      onSlashCommand: () => {},
    });
    const host = document.createElement("div");
    document.body.append(host);
    render(rendered, host);

    const overlay = host.querySelector<HTMLElement>(".cmd-palette-overlay");
    const palette = host.querySelector<HTMLElement>(".cmd-palette");
    const input = host.querySelector<HTMLElement>(".cmd-palette__input");
    const item = host.querySelector<HTMLElement>(".cmd-palette__item");

    expect(overlay).not.toBeNull();
    expect(palette).not.toBeNull();
    expect(input).not.toBeNull();
    expect(item).not.toBeNull();
    expect(getComputedStyle(overlay!).position).toBe("fixed");
    expect(getComputedStyle(overlay!).display).toBe("flex");
    expect(getComputedStyle(palette!).width).not.toBe("0px");
    expect(getComputedStyle(input!).borderBottomStyle).toBe("solid");
    expect(getComputedStyle(item!).display).toBe("flex");
  });
});
