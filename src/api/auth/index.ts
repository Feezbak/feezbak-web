import axiosClient from "@/api/axiosClient";

export function registerUser(URL: string, payload: any) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function loginUser(URL: string, payload: any) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function verifyUserById(URL: string, payload: any) {
  return axiosClient.get(`/${URL}/${payload}`).then((response) => response);
}
