import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Stories from "@components/DashboardContent/components/Stories";
import { createStory } from "@/api";

jest.mock("@/api", () => ({
  createStory: jest.fn(),
  getStories: jest.fn(),
}));

jest.mock(
  "@components/DashboardContent/components/Stories/components/StoriesList",
  () => ({
    __esModule: true,
    default: ({ onCreateStory, isCreating }: any) => (
      <button
        onClick={onCreateStory}
        disabled={isCreating}
        data-testid="create-btn"
      >
        Create Story
      </button>
    ),
  })
);

jest.mock(
  "@components/DashboardContent/components/Stories/components/StoriesWelcomeBanner",
  () => ({ __esModule: true, default: () => null })
);

const mockCreateStory = createStory as jest.Mock;

const renderStories = () =>
  render(
    <MemoryRouter>
      <Stories />
    </MemoryRouter>
  );

describe("Stories — createStory localStorage versioning", () => {
  beforeEach(() => {
    localStorage.clear();
    mockCreateStory.mockReset();
  });

  it("writes __v:'1' to localStorage with the story id on successful creation", async () => {
    const storyId = "new-story-abc";
    mockCreateStory.mockResolvedValueOnce({ data: { _id: storyId } });

    renderStories();
    await userEvent.click(screen.getByTestId("create-btn"));

    await waitFor(() => {
      expect(localStorage.getItem(storyId)).not.toBeNull();
    });
    expect(JSON.parse(localStorage.getItem(storyId)!).__v).toBe("1");
  });

  it("does not write a versionless localStorage entry on successful creation", async () => {
    const storyId = "new-story-def";
    mockCreateStory.mockResolvedValueOnce({ data: { _id: storyId } });

    renderStories();
    await userEvent.click(screen.getByTestId("create-btn"));

    await waitFor(() => {
      expect(localStorage.getItem(storyId)).not.toBeNull();
    });
    expect(JSON.parse(localStorage.getItem(storyId)!).__v).not.toBeUndefined();
  });
});
