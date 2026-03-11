import { describe, expect, it } from "vitest";

describe("OpenClawApp", () => {
  it("constructs with a generated client instance id", async () => {
    const { OpenClawApp } = await import("./app.ts");
    const app = new OpenClawApp();
    expect(app.clientInstanceId).toMatch(/^[0-9a-f-]{36}$/i);
  });
});
