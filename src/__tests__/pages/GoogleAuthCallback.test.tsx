import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import GoogleAuthCallback from "@/pages/GoogleAuthCallback";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderCallback = (search = "") =>
  render(
    <MemoryRouter initialEntries={[`/auth/google/callback${search}`]}>
      <Routes>
        <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
      </Routes>
    </MemoryRouter>
  );

describe("GoogleAuthCallback", () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockReset();
  });

  it("stores accessToken and refreshToken in localStorage and navigates to /dashboard", () => {
    renderCallback("?accessToken=acc-tok&refreshToken=ref-tok");

    expect(localStorage.getItem("token")).toBe(JSON.stringify("acc-tok"));
    expect(localStorage.getItem("refreshToken")).toBe(
      JSON.stringify("ref-tok")
    );
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard", { replace: true });
  });

  it("redirects to /sign-in when accessToken is missing", () => {
    renderCallback("?refreshToken=ref-tok");

    expect(localStorage.getItem("token")).toBeNull();
    expect(mockNavigate).toHaveBeenCalledWith("/sign-in", { replace: true });
  });

  it("redirects to /sign-in when refreshToken is missing", () => {
    renderCallback("?accessToken=acc-tok");

    expect(localStorage.getItem("refreshToken")).toBeNull();
    expect(mockNavigate).toHaveBeenCalledWith("/sign-in", { replace: true });
  });

  it("redirects to /sign-in when query params are absent", () => {
    renderCallback();

    expect(mockNavigate).toHaveBeenCalledWith("/sign-in", { replace: true });
  });
});
