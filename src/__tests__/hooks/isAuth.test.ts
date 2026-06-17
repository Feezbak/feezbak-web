import { isAuth } from "@/hooks";

jest.mock("@/api/axiosClient", () => ({
  defaults: { headers: { common: {} } },
}));

describe("isAuth", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns false when no token in localStorage", () => {
    expect(isAuth()).toBe(false);
  });

  it("returns false for empty token string", () => {
    localStorage.setItem("token", JSON.stringify(""));
    expect(isAuth()).toBe(false);
  });

  it("returns true when a valid token is present", () => {
    localStorage.setItem("token", JSON.stringify("my-jwt-token"));
    expect(isAuth()).toBe(true);
  });

  it("sets Authorization header on axios when token is present", async () => {
    const axiosClient = require("@/api/axiosClient");
    localStorage.setItem("token", JSON.stringify("test-token-123"));
    isAuth();
    expect(axiosClient.defaults.headers.common["Authorization"]).toBe(
      "Bearer test-token-123"
    );
  });

  it("does not set Authorization header when no token", () => {
    const axiosClient = require("@/api/axiosClient");
    axiosClient.defaults.headers.common["Authorization"] = undefined;
    isAuth();
    expect(
      axiosClient.defaults.headers.common["Authorization"]
    ).toBeUndefined();
  });
});
