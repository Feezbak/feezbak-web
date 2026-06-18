import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
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

const renderDetails = (overrides = {}) =>
  render(
    <MemoryRouter>
      <Details
        link="https://example.com/story/1"
        title="My Story"
        background="#fff"
        emailsDefault={[]}
        {...overrides}
      />
    </MemoryRouter>
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

  it("renders child components (share settings and email)", () => {
    renderDetails();
    expect(screen.getByTestId("share-settings")).toBeInTheDocument();
    expect(screen.getByTestId("send-emails")).toBeInTheDocument();
  });
});
