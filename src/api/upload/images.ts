import axiosClient from "@/api/axiosClient";
import uuid from "react-uuid";
import { dataURLtoBlob } from "@helpers/fileHelpers";

export async function uploadImageToStory(storyId: string, payload: any) {
  const formdata = new FormData();
  const images = payload.map((image: any) => dataURLtoBlob(image));

  images.forEach((image: any) =>
    formdata.append("images", image, `image_${uuid()}`)
  );

  return axiosClient
    .post(`/upload/images/${storyId}`, formdata)
    .then((response) => response);
}

export async function deleteUploadedImgById(storyId: string, imageId: string) {
  return axiosClient
    .delete(`/upload/images/${storyId}/${imageId}`)
    .then((response) => response);
}
