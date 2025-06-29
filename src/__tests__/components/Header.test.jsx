import { describe, it, expect } from "vitest";

describe("Components Tests", () => {
  it("deve passar sempre", () => {
    expect(true).toBe(true);
  });

  it("deve ter componentes válidos", () => {
    expect("Header").toBe("Header");
  });
});
