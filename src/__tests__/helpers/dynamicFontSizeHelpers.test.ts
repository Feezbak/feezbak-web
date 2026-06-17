import { dynamicFontSizeHelpers } from "@helpers/dynamicFontSizeHelpers";

describe("dynamicFontSizeHelpers", () => {
  describe("px measurement", () => {
    it("returns base font size for empty text", () => {
      const result = dynamicFontSizeHelpers(16, 100, "", "px");
      expect(result).toBe("16");
    });

    it("reduces font size as text approaches maxLength", () => {
      const short = parseFloat(dynamicFontSizeHelpers(16, 100, "hi", "px"));
      const long = parseFloat(
        dynamicFontSizeHelpers(16, 100, "a".repeat(50), "px")
      );
      expect(short).toBeGreaterThan(long);
    });

    it("calculates correctly for half-length text", () => {
      // percentage = 50/100 * 100 = 50, fontSize = 16 - 50 * 0.1 = 11
      const result = dynamicFontSizeHelpers(16, 100, "a".repeat(50), "px");
      expect(result).toBe("11");
    });
  });

  describe("rem measurement", () => {
    it("converts px value to rem (divide by 16)", () => {
      // empty text: fontSize = 16, rem = 16/16 = 1
      const result = dynamicFontSizeHelpers(16, 100, "", "rem");
      expect(result).toBe("1");
    });

    it("calculates rem for half-length text", () => {
      // fontSize = 11, rem = 11/16 = 0.6875
      const result = dynamicFontSizeHelpers(16, 100, "a".repeat(50), "rem");
      expect(parseFloat(result)).toBeCloseTo(0.6875);
    });
  });

  describe("unknown measurement", () => {
    it("returns empty string for unknown measurement", () => {
      const result = dynamicFontSizeHelpers(16, 100, "hello", "em");
      expect(result).toBe("");
    });
  });
});
