import { renderHook, act } from "@testing-library/react";
import useDebounce from "@hooks/useDebounce";

describe("useDebounce", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("returns the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 300));
    expect(result.current).toBe("initial");
  });

  it("does not update the value before the delay elapses", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "first", delay: 300 } }
    );

    rerender({ value: "second", delay: 300 });
    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(result.current).toBe("first");
  });

  it("updates the value after the delay elapses", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "first", delay: 300 } }
    );

    rerender({ value: "second", delay: 300 });
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(result.current).toBe("second");
  });

  it("resets the timer when value changes before delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "a", delay: 300 } }
    );

    rerender({ value: "b", delay: 300 });
    act(() => {
      jest.advanceTimersByTime(200);
    });
    rerender({ value: "c", delay: 300 });
    act(() => {
      jest.advanceTimersByTime(200);
    });
    // Timer was reset on "c", only 200ms of 300ms elapsed
    expect(result.current).toBe("a");

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(result.current).toBe("c");
  });

  it("works with number values", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 0, delay: 500 } }
    );

    rerender({ value: 42, delay: 500 });
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe(42);
  });
});
