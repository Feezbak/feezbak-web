import axiosClient from "@/api/axiosClient";

export async function getFeedbackAnalytics(id: string) {
  return axiosClient.get(`/story/${id}/feedbacks`).then((response) => response);
}

export async function getFeedbackComments(
  id: string,
  imageId = "",
  btnId = "",
  page = 1,
  perPage = 20
) {
  return axiosClient
    .get(
      `/story/${id}/comments?${imageId && `imageId=${imageId}&`}${
        btnId && `btnId=${btnId}&`
      }page=${page}&perPage=${perPage}`
    )
    .then((response) => response);
}
