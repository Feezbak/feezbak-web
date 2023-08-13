import axiosClient from "@/api/axiosClient";

export async function sendFeedback(
  storyId: string,
  feedbackId: string,
  guestId: string,
  payload: any
) {
  return axiosClient
    .put(`/story/${storyId}/feedback/${feedbackId}/guest/${guestId}`, payload)
    .then((response) => response);
}

export async function generateFeedback(storyId: string) {
  return axiosClient
    .post(`/story/${storyId}/feedback/create`, { storyId })
    .then((response) => response);
}
