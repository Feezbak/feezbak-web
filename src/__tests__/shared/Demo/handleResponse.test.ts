import { handleResponse } from "@shared/Preview/components/Demo/utils";
import { StoryTypeEnum } from "@/enums";
import { Image } from "@/constants";

const makeImage = (id: string): Image => ({ id, src: `/${id}.webp` } as Image);

const img1 = makeImage("img1");
const img2 = makeImage("img2");
const img3 = makeImage("img3");
const images = [img1, img2, img3];

describe("handleResponse — TEXT_VOTING_ONLY_TEXT_RESP", () => {
  it("sets a complete single-response feedback", () => {
    const setFeedback = jest.fn();
    handleResponse(
      StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP,
      null,
      setFeedback,
      jest.fn(),
      false,
      "story1",
      "Great product!",
      images
    );

    expect(setFeedback).toHaveBeenCalledWith({
      id: "story1",
      type: StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP,
      isComplete: true,
      isMultiple: false,
      responses: [{ msg: "Great product!" }],
    });
  });
});

describe("handleResponse — TEXT_VOTING_ONLY_BUTTON_RESP", () => {
  it("sets a complete single-response feedback with respBtnId", () => {
    const setFeedback = jest.fn();
    handleResponse(
      StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP,
      null,
      setFeedback,
      jest.fn(),
      false,
      "story1",
      "",
      images,
      undefined,
      "btn-abc"
    );

    expect(setFeedback).toHaveBeenCalledWith({
      id: "story1",
      type: StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP,
      isComplete: true,
      isMultiple: false,
      responses: [{ msg: "", respBtnId: "btn-abc" }],
    });
  });
});

describe("handleResponse — IMAGE_VOTING_ONLY_TEXT_RESP", () => {
  it("creates first response for first image in multiple mode", () => {
    const setFeedback = jest.fn();
    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      null,
      setFeedback,
      jest.fn(),
      true,
      "story1",
      "Nice!",
      images,
      "img1"
    );

    const called = setFeedback.mock.calls[0][0];
    expect(called.isComplete).toBe(false); // img1 is not last
    expect(called.responses).toEqual([{ msg: "Nice!", imageId: "img1" }]);
  });

  it("marks complete when responding to last image", () => {
    const setFeedback = jest.fn();
    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      null,
      setFeedback,
      jest.fn(),
      true,
      "story1",
      "Last!",
      images,
      "img3"
    );

    const called = setFeedback.mock.calls[0][0];
    expect(called.isComplete).toBe(true);
  });

  it("marks complete when isMultiple is false regardless of image", () => {
    const setFeedback = jest.fn();
    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      null,
      setFeedback,
      jest.fn(),
      false,
      "story1",
      "msg",
      images,
      "img1"
    );

    expect(setFeedback.mock.calls[0][0].isComplete).toBe(true);
  });

  it("appends response to existing feedback", () => {
    const setFeedback = jest.fn();
    const existing = {
      id: "story1",
      type: StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      isComplete: false,
      isMultiple: true,
      responses: [{ msg: "First", imageId: "img1" }],
    };

    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      existing,
      setFeedback,
      jest.fn(),
      true,
      "story1",
      "Second",
      images,
      "img2"
    );

    const called = setFeedback.mock.calls[0][0];
    expect(called.responses).toHaveLength(2);
    expect(called.responses[1]).toEqual({ msg: "Second", imageId: "img2" });
  });

  it("calls slideToNext in multiple mode", () => {
    const slideToNext = jest.fn();
    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      null,
      jest.fn(),
      slideToNext,
      true,
      "story1",
      "msg",
      images,
      "img1"
    );
    expect(slideToNext).toHaveBeenCalled();
  });

  it("does not call slideToNext when isMultiple is false", () => {
    const slideToNext = jest.fn();
    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
      null,
      jest.fn(),
      slideToNext,
      false,
      "story1",
      "msg",
      images,
      "img1"
    );
    expect(slideToNext).not.toHaveBeenCalled();
  });
});

describe("handleResponse — IMAGE_VOTING_ONLY_BUTTON_RESP", () => {
  it("creates first response with respBtnId", () => {
    const setFeedback = jest.fn();
    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      null,
      setFeedback,
      jest.fn(),
      true,
      "story1",
      "",
      images,
      "img1",
      "btn-1"
    );

    const called = setFeedback.mock.calls[0][0];
    expect(called.responses[0]).toEqual({
      msg: "",
      imageId: "img1",
      respBtnId: "btn-1",
    });
    expect(called.isComplete).toBe(false);
  });

  it("updates existing response for same image (replaces, not appends)", () => {
    const setFeedback = jest.fn();
    const existing = {
      id: "story1",
      type: StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      isComplete: false,
      isMultiple: true,
      responses: [{ msg: "", imageId: "img1", respBtnId: "btn-old" }],
    };

    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      existing,
      setFeedback,
      jest.fn(),
      true,
      "story1",
      "",
      images,
      "img1",
      "btn-new"
    );

    const called = setFeedback.mock.calls[0][0];
    expect(called.responses).toHaveLength(1);
    expect(called.responses[0].respBtnId).toBe("btn-new");
  });

  it("appends response for a new image", () => {
    const setFeedback = jest.fn();
    const existing = {
      id: "story1",
      type: StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      isComplete: false,
      isMultiple: true,
      responses: [{ msg: "", imageId: "img1", respBtnId: "btn-1" }],
    };

    handleResponse(
      StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP,
      existing,
      setFeedback,
      jest.fn(),
      true,
      "story1",
      "",
      images,
      "img2",
      "btn-2"
    );

    const called = setFeedback.mock.calls[0][0];
    expect(called.responses).toHaveLength(2);
  });
});

describe("handleResponse — COMBINED", () => {
  it("calls cleanSavedRespBtnId in multiple mode", () => {
    const clean = jest.fn();
    const slideToNext = jest.fn();
    handleResponse(
      StoryTypeEnum.COMBINED,
      null,
      jest.fn(),
      slideToNext,
      true,
      "story1",
      "note",
      images,
      "img1",
      "btn-x",
      clean
    );
    expect(clean).toHaveBeenCalled();
    expect(slideToNext).toHaveBeenCalled();
  });

  it("calls cleanSavedRespBtnId even when not multiple", () => {
    const clean = jest.fn();
    handleResponse(
      StoryTypeEnum.COMBINED,
      null,
      jest.fn(),
      jest.fn(),
      false,
      "story1",
      "note",
      images,
      "img1",
      "btn-x",
      clean
    );
    expect(clean).toHaveBeenCalled();
  });
});
