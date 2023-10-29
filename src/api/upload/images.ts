import axiosClient from "@/api/axiosClient";
import { dataURLtoBlob } from "@helpers/dataURLtoBlob";

export async function uploadImageToStory(storyId: string, payload: any) {
  const formdata = new FormData();
  formdata.append("images", dataURLtoBlob(payload), "aaaaaaa.png");

  return axiosClient
    .post(`/upload/images/${storyId}`, formdata)
    .then((response) => response);
}

export async function deleteUploadedImgById(storyId: string, imageId: string) {
  return axiosClient
    .delete(`/upload/images/${storyId}/${imageId}`)
    .then((response) => response);
}
