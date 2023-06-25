import axiosClient from "@/api/axiosClient";

export function uploadImagesToStory(storyId: string, payload: any) {
  return axiosClient
    .post(`/upload/images/${storyId}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response);
}

export function deleteUploadedImgById(storyId: string, imageId: string) {
  return axiosClient
    .delete(`/upload/images/${storyId}/${imageId}`)
    .then((response) => response);
}
