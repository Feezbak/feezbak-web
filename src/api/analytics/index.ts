import axiosClient from "@/api/axiosClient";

export async function getFeedbackAnalytics(id: string) {
  return axiosClient.get(`/story/${id}/feedbacks`).then((response) => response);
}
