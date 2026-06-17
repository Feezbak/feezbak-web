import { renderHook } from "@testing-library/react";
import useTextFromHTML from "@hooks/useTextFromHTML";

describe("useTextFromHTML", () => {
  it("extracts plain text from a simple HTML string", () => {
    const { result } = renderHook(() => useTextFromHTML("<p>Hello world</p>"));
    expect(result.current).toBe("Hello world");
  });

  it("strips nested tags", () => {
    const { result } = renderHook(() =>
      useTextFromHTML("<h1><span>Title</span></h1>")
    );
    expect(result.current).toBe("Title");
  });

  it("returns empty string for empty input", () => {
    const { result } = renderHook(() => useTextFromHTML(""));
    expect(result.current).toBe("");
  });

  it("returns empty string for tag-only input with no text", () => {
    const { result } = renderHook(() => useTextFromHTML("<p></p>"));
    expect(result.current).toBe("");
  });

  it("handles plain text with no HTML tags", () => {
    const { result } = renderHook(() => useTextFromHTML("Just plain text"));
    expect(result.current).toBe("Just plain text");
  });

  it("concatenates text across multiple tags", () => {
    const { result } = renderHook(() =>
      useTextFromHTML("<p>First</p><p>Second</p>")
    );
    expect(result.current).toBe("FirstSecond");
  });
});
