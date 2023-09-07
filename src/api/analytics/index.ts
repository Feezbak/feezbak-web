import axiosClient from "@/api/axiosClient";

export function getFeedbackAnalytics(id: string) {
  return axiosClient.get(`/story/${id}/feedbacks`).then((response) => response);
}
