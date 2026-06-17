import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import StoryItem from "@components/DashboardContent/components/Stories/components/StoriesList/components/StoryItem";
import { StoryEnums } from "@/enums";

// styled-components renders arbitrary HTML — mock the icon components to keep snapshots clean
jest.mock("@/icons", () => ({
  EditIconGrayBg: () => <span data-testid="edit-icon" />,
  DeleteIconGrayBg: () => <span data-testid="delete-icon" />,
  LinkIconGrayBg: () => <span data-testid="link-icon" />,
  AnalyticsIcon: () => <span data-testid="analytics-icon" />,
}));

const defaultStory = {
  _id: "story-123",
  title: "<p>My test story</p>",
  progress: "step1",
};

const renderItem = (overrides = {}) =>
  render(
    <MemoryRouter>
      <StoryItem
        storyData={defaultStory}
        storyId="story-123"
        handleDelete={jest.fn()}
        loading={false}
        {...overrides}
      />
    </MemoryRouter>
  );

describe("StoryItem", () => {
  it("renders the story title text (strips HTML tags)", () => {
    renderItem();
    expect(screen.getByText("My test story")).toBeInTheDocument();
  });

  it("shows fallback text when title is empty", () => {
    renderItem({
      storyData: { ...defaultStory, title: "" },
    });
    expect(screen.getByText(/Story was't completed/)).toBeInTheDocument();
  });

  it("shows Draft badge when progress is not step3", () => {
    renderItem();
    expect(screen.getByText(StoryEnums.DRAFT)).toBeInTheDocument();
  });

  it("shows Completed badge when progress is step3", () => {
    renderItem({
      storyData: { ...defaultStory, progress: "step3" },
    });
    expect(screen.getByText(StoryEnums.COMPLETED)).toBeInTheDocument();
  });

  it("shows edit icon for draft stories", () => {
    renderItem();
    expect(screen.getByTestId("edit-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("link-icon")).not.toBeInTheDocument();
  });

  it("shows link icon for completed stories (step3)", () => {
    renderItem({
      storyData: { ...defaultStory, progress: "step3" },
    });
    expect(screen.getByTestId("link-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("edit-icon")).not.toBeInTheDocument();
  });

  it("shows analytics icon only for completed stories", () => {
    const { rerender } = renderItem();
    expect(screen.queryByTestId("analytics-icon")).not.toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <StoryItem
          storyData={{ ...defaultStory, progress: "step3" }}
          storyId="story-123"
          handleDelete={jest.fn()}
          loading={false}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId("analytics-icon")).toBeInTheDocument();
  });

  it("calls handleDelete with the story id when delete button is clicked", () => {
    const handleDelete = jest.fn();
    renderItem({ handleDelete });

    // click bubbles from the icon up to the antd Button's onClick handler
    fireEvent.click(screen.getByTestId("delete-icon"));

    expect(handleDelete).toHaveBeenCalledWith("story-123");
  });

  it("shows skeleton when loading and deletion id matches", () => {
    const handleDelete = jest.fn();
    const { rerender } = render(
      <MemoryRouter>
        <StoryItem
          storyData={defaultStory}
          storyId="story-123"
          handleDelete={handleDelete}
          loading={false}
        />
      </MemoryRouter>
    );

    // trigger deletion (sets internal deletionId)
    fireEvent.click(screen.getByTestId("delete-icon"));

    // now rerender with loading=true
    rerender(
      <MemoryRouter>
        <StoryItem
          storyData={defaultStory}
          storyId="story-123"
          handleDelete={handleDelete}
          loading={true}
        />
      </MemoryRouter>
    );

    // story content should be replaced by skeleton
    expect(screen.queryByText("My test story")).not.toBeInTheDocument();
  });
});
