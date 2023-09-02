import axiosClient from "@/api/axiosClient";

export function getFeedbackAnalytics(id: string) {
  return axiosClient.get(`/story/analytics/${id}`).then((response) => response);
}
