import axiosClient from "@/api/axiosClient";

export function registerUser(URL: string, payload: any) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function loginUser(URL: string, payload: any) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function verifyUserById(id: string) {
  return axiosClient.get(`/verify/${id}`).then((response) => response);
}

export function forgotPassword(payload: any) {
  return axiosClient.post(`/forgot`, payload).then((response) => response);
}
