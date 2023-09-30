import axiosClient from "@/api/axiosClient";

function dataURLtoBlob(dataURL: string) {
  const parts = dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const byteString = atob(parts[1]);
  let arrayBuffer = new ArrayBuffer(byteString.length);
  let uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: contentType });
}
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
