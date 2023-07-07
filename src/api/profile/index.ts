import axiosClient from "@/api/axiosClient";

export function updateProfile(payload: any) {
  return axiosClient
    .patch("/update-user", payload)
    .then((response) => response);
}

export function getProfile(id: string) {
  return axiosClient.get(`/profile/${id}`).then((response) => response);
}

export function changePassword(payload: any) {
  return axiosClient
    .put("/change-password", payload)
    .then((response) => response);
}
