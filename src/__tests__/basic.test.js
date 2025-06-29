import { describe, it, expect } from "vitest";

describe("Testes Básicos", () => {
  it("deve somar números", () => {
    expect(1 + 1).toBe(2);
  });

  it("deve verificar strings", () => {
    expect("Reading Journal").toContain("Reading");
  });
});
