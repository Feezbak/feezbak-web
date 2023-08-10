import axiosClient from "@/api/axiosClient";

export async function sendFeedback(storyId: string, payload: any) {
  return axiosClient.put(`/feedback/${storyId}`).then((response) => response);
}

export async function generateFeedback() {
  return axiosClient.put(`/feedback/generate`).then((response) => response);
}
