import axiosClient from "@/api/axiosClient";
import uuid from "react-uuid";
import { dataURLtoBlob } from "@helpers/fileHelpers";

export async function updateProfile(payload: any) {
  return axiosClient
    .patch("/update-user", payload)
    .then((response) => response);
}

export async function getMyProfile() {
  return axiosClient.get("get-me").then((response) => response);
}

export async function changePassword(payload: any) {
  return axiosClient
    .put("/change-password", payload)
    .then((response) => response);
}

export async function uploadAvatar(payload: any) {
  const formdata = new FormData();
  const avatar = dataURLtoBlob(payload[0]);

  formdata.append("avatar", avatar, `avatar_${uuid()}`);

  return axiosClient
    .post(`/upload-avatar`, formdata)
    .then((response) => response);
}
