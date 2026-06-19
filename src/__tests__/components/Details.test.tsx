import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot, MutableSnapshot } from "recoil";
import { userData } from "@/recoil";
import Details from "@components/StoryDetailsContent/components/Details";

jest.mock(
  "@components/StoryDetailsContent/components/Details/components/ShareSettings",
  () => ({
    __esModule: true,
    default: () => <div data-testid="share-settings" />,
  })
);

jest.mock(
  "@components/StoryDetailsContent/components/Details/components/SendToEmailAddresses",
  () => ({ __esModule: true, default: () => <div data-testid="send-emails" /> })
);

jest.mock("@/components/UpgradeModal", () => ({
  __esModule: true,
  default: ({ open }: { open: boolean }) =>
    open ? <div data-testid="upgrade-modal" /> : null,
}));

const freeUser = { plan: "free", email: "free@test.com" } as any;
const proUser = { plan: "pro", email: "pro@test.com" } as any;

const renderDetails = (user = freeUser, overrides = {}) =>
  render(
    <RecoilRoot
      initializeState={(snap: MutableSnapshot) => snap.set(userData, user)}
    >
      <MemoryRouter>
        <Details
          link="https://example.com/story/1"
          title="My Story"
          background="#fff"
          emailsDefault={[]}
          {...overrides}
        />
      </MemoryRouter>
    </RecoilRoot>
  );

describe("Details — Close responses toggle", () => {
  it("renders the toggle row with 'Accepting responses' label", () => {
    renderDetails();
    expect(screen.getByText("Accepting responses")).toBeInTheDocument();
  });

  it("initially shows the 'open' subtitle when toggle is on", () => {
    renderDetails();
    expect(
      screen.getByText("Respondents can submit feedback")
    ).toBeInTheDocument();
  });

  it("toggles to closed state and shows closed subtitle", async () => {
    renderDetails();
    const toggle = screen.getByRole("switch");
    expect(toggle).toBeChecked();

    await userEvent.click(toggle);

    expect(
      screen.getByText("Story is closed to new responses")
    ).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  it("toggles back to open state after two clicks", async () => {
    renderDetails();
    const toggle = screen.getByRole("switch");

    await userEvent.click(toggle);
    await userEvent.click(toggle);

    expect(
      screen.getByText("Respondents can submit feedback")
    ).toBeInTheDocument();
    expect(toggle).toBeChecked();
  });
});

describe("Details — Email invite gating", () => {
  it("free user sees Pro teaser instead of email input", () => {
    renderDetails(freeUser);
    expect(screen.queryByTestId("send-emails")).not.toBeInTheDocument();
    expect(screen.getByText("Send Via Email")).toBeInTheDocument();
  });

  it("free user sees upgrade modal when clicking the teaser", async () => {
    renderDetails(freeUser);
    await userEvent.click(screen.getByText("Send Via Email"));
    expect(screen.getByTestId("upgrade-modal")).toBeInTheDocument();
  });

  it("pro user sees email input component", () => {
    renderDetails(proUser);
    expect(screen.getByTestId("send-emails")).toBeInTheDocument();
    expect(screen.queryByText("Send Via Email")).not.toBeInTheDocument();
  });

  it("share settings are always rendered", () => {
    renderDetails(freeUser);
    expect(screen.getByTestId("share-settings")).toBeInTheDocument();
  });
});
