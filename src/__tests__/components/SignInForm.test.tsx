import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SignInForm from "@components/SignInContent/components/SignInForm";

jest.mock("@hooks/useSignInByEmailForm", () => ({
  useSignInByEmailForm: () => ({
    formErrors: {},
    formState: { isDirty: false, isValid: false },
    formControl: {},
    submitForm: jest.fn(),
    requestLoading: false,
  }),
}));

jest.mock("@/shared", () => ({
  TextFormField: ({ label }: { label: string }) => (
    <input placeholder={label} />
  ),
}));

const renderForm = () =>
  render(
    <MemoryRouter>
      <SignInForm />
    </MemoryRouter>
  );

describe("SignInForm — Google OAuth button", () => {
  const originalLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: originalLocation,
    });
  });

  it("renders the Continue with Google button", () => {
    renderForm();
    expect(
      screen.getByRole("button", { name: /continue with google/i })
    ).toBeInTheDocument();
  });

  it("redirects to the API Google auth endpoint on click", async () => {
    renderForm();
    await userEvent.click(
      screen.getByRole("button", { name: /continue with google/i })
    );
    expect(window.location.href).toMatch(/\/auth\/google$/);
  });
});
