import axiosClient from "@/api/axiosClient";

export const isAuth = () => {
  const tokenStorageData = localStorage.getItem("token");
  const token = tokenStorageData ? JSON.parse(tokenStorageData) : "";

  if (!!token?.length) {
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return !!token?.length;
};
