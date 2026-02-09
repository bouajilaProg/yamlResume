import { describe, it, expect } from "vitest";
import { compile, generateTypstSource } from "./index";
import mockResume from "./compiler/test/mockResume";

describe("yamlResume integration", () => {
  it("should generate Typst source string", () => {
    const source = generateTypstSource(mockResume);
    expect(source).toContain("#header");
    expect(source).toContain("Jane Developer");
    expect(source).toContain("Experience");
  });

  it("should compile to PDF buffer (if typst is available)", async () => {
    try {
      const { buffer } = await compile(mockResume);
      expect(buffer).toBeDefined();
      expect(buffer instanceof Buffer).toBe(true);
      expect(buffer!.length).toBeGreaterThan(0);
    } catch (err) {
      if ((err as Error).message.includes("Typst not found")) {
        console.warn("Skipping PDF compilation test: Typst not found");
        return;
      }
      throw err;
    }
  }, 30000); // Higher timeout for compilation
});
