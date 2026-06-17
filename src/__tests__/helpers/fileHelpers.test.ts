import { dataURLtoBlob, fileToDataUri } from "@helpers/fileHelpers";

describe("dataURLtoBlob", () => {
  it("converts a base64 data URL to a Blob with the correct MIME type", () => {
    // 1x1 transparent PNG encoded as base64
    const dataURL =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    const blob = dataURLtoBlob(dataURL);
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe("image/png");
    expect(blob.size).toBeGreaterThan(0);
  });

  it("produces the correct byte length for known content", () => {
    // "hello" in base64 is "aGVsbG8="
    const dataURL = "data:text/plain;base64,aGVsbG8=";
    const blob = dataURLtoBlob(dataURL);
    expect(blob.size).toBe(5); // "hello" is 5 bytes
    expect(blob.type).toBe("text/plain");
  });
});

describe("fileToDataUri", () => {
  it("resolves with a data URI string for a given File", async () => {
    const content = "test file content";
    const file = new File([content], "test.txt", { type: "text/plain" });
    const result = await fileToDataUri(file);
    expect(typeof result).toBe("string");
    expect(result as string).toMatch(/^data:text\/plain;base64,/);
  });
});
