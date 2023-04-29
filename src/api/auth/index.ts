import axiosClient from "@/api/axiosClient";

export function registerUser(payload: any) {
  return axiosClient.post("/sign-up", payload).then((response) => response);
}

export function loginUser(payload: any) {
  return axiosClient.post(`/sign-in`, payload).then((response) => response);
}

export function verifyUserById(id: string) {
  return axiosClient.get(`/verify/${id}`).then((response) => response);
}

export function forgotPassword(payload: any) {
  return axiosClient.post(`/forgot`, payload).then((response) => response);
}

export function resetPassword(payload: any, key: string) {
  return axiosClient
    .post(`/reset`, payload, {
      headers: {
        header: "Bearer " + key,
      },
    })
    .then((response) => response);
}

export function logOut(key: string) {
  return axiosClient
    .get(`/logout`, {
      headers: {
        header: "Bearer " + key,
      },
    })
    .then((response) => response);
}
