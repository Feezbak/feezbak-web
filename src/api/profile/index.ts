import axiosClient from "@/api/axiosClient";

export function updateProfile(payload: any) {
  return axiosClient
    .patch("/update-user", payload)
    .then((response) => response);
}

export function getMyProfile() {
  return axiosClient.get("get-me").then((response) => response);
}

export function changePassword(payload: any) {
  return axiosClient
    .put("/change-password", payload)
    .then((response) => response);
}
