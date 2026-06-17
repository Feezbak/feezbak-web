import { dynamicTextColor } from "@helpers/dynamicTextColor";
import { StyleEnums } from "@/enums";

describe("dynamicTextColor", () => {
  it("returns white text for dark backgrounds", () => {
    const result = dynamicTextColor("#000000");
    expect(result.color).toBe(StyleEnums.white);
    expect(result.isDark).toBe(false);
  });

  it("returns black text for light backgrounds", () => {
    const result = dynamicTextColor("#FFFFFF");
    expect(result.color).toBe(StyleEnums.black);
    expect(result.isDark).toBe(true);
  });

  it("returns black text for #FF4773 (brightness 131 — above threshold)", () => {
    // R=255 G=71 B=115 → (255*299 + 71*587 + 115*114) / 1000 = 131 → light background
    const result = dynamicTextColor("#FF4773");
    expect(result.color).toBe(StyleEnums.black);
  });

  it("returns black text for light yellow #FFED47", () => {
    const result = dynamicTextColor("#FFED47");
    expect(result.color).toBe(StyleEnums.black);
  });

  it("returns white text for dark blue #6B57E8", () => {
    const result = dynamicTextColor("#6B57E8");
    expect(result.color).toBe(StyleEnums.white);
  });

  it("returns black text for brand primary #FF7F61 (brightness ~162 — light background)", () => {
    // R=255 G=127 B=97 → (255*299 + 127*587 + 97*114) / 1000 ≈ 162 → light background
    const result = dynamicTextColor("#FF7F61");
    expect(result.color).toBe(StyleEnums.black);
  });

  it("isDark is the inverse of background darkness", () => {
    const dark = dynamicTextColor("#111111");
    const light = dynamicTextColor("#EEEEEE");
    expect(dark.isDark).toBe(false);
    expect(light.isDark).toBe(true);
  });
});
