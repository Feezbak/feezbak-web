import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SignUpForm from "@components/SignUpContent/components/SignUpForm";

jest.mock("@hooks/useSignUpByEmailForm", () => ({
  useSignUpByEmailForm: () => ({
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
  SelectWithAddFormField: ({ label }: { label: string }) => (
    <select aria-label={label} />
  ),
}));

const renderForm = () =>
  render(
    <MemoryRouter>
      <SignUpForm setAccountState={jest.fn()} />
    </MemoryRouter>
  );

describe("SignUpForm — Google OAuth button", () => {
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

  it("Google button appears before the email form fields", () => {
    renderForm();
    const googleBtn = screen.getByRole("button", {
      name: /continue with google/i,
    });
    const emailInput = screen.getByPlaceholderText("Email");
    expect(
      googleBtn.compareDocumentPosition(emailInput) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });
});
