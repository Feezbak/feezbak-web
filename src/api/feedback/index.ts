import axiosClient from "@/api/axiosClient";

export async function sendFeedback(storyId: string, payload: any) {
  return axiosClient.put(`/feedback/${storyId}`).then((response) => response);
}

export async function generateFeedbackGuest() {
  return axiosClient
    .put(`/feedback-user/generate`)
    .then((response) => response);
}
