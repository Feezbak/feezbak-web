import { renderHook } from "@testing-library/react";
import { createRef } from "react";
import useOutsideClick from "@hooks/useOutsideClick";

describe("useOutsideClick", () => {
  it("calls handler when mousedown fires outside the ref element", () => {
    const ref = createRef<HTMLDivElement>();
    const div = document.createElement("div");
    (ref as React.MutableRefObject<HTMLDivElement>).current = div;
    document.body.appendChild(div);

    const handler = jest.fn();
    renderHook(() => useOutsideClick(ref, handler));

    const outside = document.createElement("button");
    document.body.appendChild(outside);
    outside.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);

    document.body.removeChild(div);
    document.body.removeChild(outside);
  });

  it("does NOT call handler when mousedown fires inside the ref element", () => {
    const ref = createRef<HTMLDivElement>();
    const div = document.createElement("div");
    (ref as React.MutableRefObject<HTMLDivElement>).current = div;
    document.body.appendChild(div);

    const handler = jest.fn();
    renderHook(() => useOutsideClick(ref, handler));

    div.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(handler).not.toHaveBeenCalled();
    document.body.removeChild(div);
  });

  it("calls handler on touchstart outside the element", () => {
    const ref = createRef<HTMLDivElement>();
    const div = document.createElement("div");
    (ref as React.MutableRefObject<HTMLDivElement>).current = div;
    document.body.appendChild(div);

    const handler = jest.fn();
    renderHook(() => useOutsideClick(ref, handler));

    document.body.dispatchEvent(
      new TouchEvent("touchstart", { bubbles: true })
    );

    expect(handler).toHaveBeenCalledTimes(1);
    document.body.removeChild(div);
  });

  it("removes event listeners on unmount", () => {
    const ref = createRef<HTMLDivElement>();
    const div = document.createElement("div");
    (ref as React.MutableRefObject<HTMLDivElement>).current = div;
    document.body.appendChild(div);

    const handler = jest.fn();
    const { unmount } = renderHook(() => useOutsideClick(ref, handler));
    unmount();

    const outside = document.createElement("span");
    document.body.appendChild(outside);
    outside.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(handler).not.toHaveBeenCalled();
    document.body.removeChild(div);
    document.body.removeChild(outside);
  });
});
