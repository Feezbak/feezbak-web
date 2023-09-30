import axiosClient from "@/api/axiosClient";

export async function registerUser(payload: any) {
  return axiosClient.post("/sign-up", payload).then((response) => response);
}

export async function loginUser(payload: any) {
  return axiosClient.post(`/sign-in`, payload).then((response) => response);
}

export async function verifyUserById(id: string) {
  return axiosClient.get(`/verify/${id}`).then((response) => response);
}

export async function forgotPassword(payload: any) {
  return axiosClient.post(`/forgot`, payload).then((response) => response);
}

export async function resetPassword(payload: any) {
  return axiosClient.post(`/reset`, payload).then((response) => response);
}

export async function updateToken(refreshToken: any) {
  return axiosClient
    .post(`/refresh-token`, {
      refreshToken,
    })
    .then((response) => response);
}
