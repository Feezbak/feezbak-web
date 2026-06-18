import { render, screen } from "@testing-library/react";
import WelcomeLayer from "@shared/Preview/components/ClientLayers/components/WelcomeLayer";
import { StoryTypeEnum } from "@/enums";

jest.mock("@shared/CreatedBy", () => ({
  __esModule: true,
  default: () => null,
}));

const renderLayer = (props: Partial<Parameters<typeof WelcomeLayer>[0]> = {}) =>
  render(
    <WelcomeLayer handleLayer={jest.fn()} handleSkip={jest.fn()} {...props} />
  );

describe("WelcomeLayer — context pill", () => {
  it("shows image count and duration for IMAGE_VOTING_ONLY_BUTTON_RESP", () => {
    renderLayer({
      storyType: StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      imageCount: 3,
    });
    expect(screen.getByText("3 images · ~1 min")).toBeInTheDocument();
  });

  it("shows image count and duration for IMAGE_VOTING_ONLY_TEXT_RESP", () => {
    renderLayer({
      storyType: StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      imageCount: 1,
    });
    expect(screen.getByText("1 image · ~1 min")).toBeInTheDocument();
  });

  it("shows image count and duration for COMBINED type", () => {
    renderLayer({
      storyType: StoryTypeEnum.COMBINED,
      imageCount: 5,
    });
    expect(screen.getByText("5 images · ~1 min")).toBeInTheDocument();
  });

  it("shows only duration pill for text-only story type", () => {
    renderLayer({
      storyType: StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP,
      imageCount: 0,
    });
    expect(screen.getByText("~1 min")).toBeInTheDocument();
    expect(screen.queryByText(/images/)).not.toBeInTheDocument();
  });

  it("shows only duration pill when imageCount is 0 on an image type", () => {
    renderLayer({
      storyType: StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      imageCount: 0,
    });
    expect(screen.getByText("~1 min")).toBeInTheDocument();
    expect(screen.queryByText(/images/)).not.toBeInTheDocument();
  });

  it("shows only duration pill when storyType is undefined", () => {
    renderLayer({ imageCount: 3 });
    expect(screen.getByText("~1 min")).toBeInTheDocument();
  });

  it("renders welcome heading and CTA buttons", () => {
    renderLayer();
    expect(screen.getByText(/Welcome to Feezbak/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Give Feedback/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Learn About Feezbak/i })
    ).toBeInTheDocument();
  });
});
