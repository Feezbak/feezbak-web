import axiosClient from "@/api/axiosClient";

export const isAuth = () => {
  const userDataStorageData = localStorage.getItem("userData");
  const parsedUserData = userDataStorageData
    ? JSON.parse(userDataStorageData)
    : "";

  if (!!parsedUserData?.accessToken?.length) {
    axiosClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${parsedUserData.accessToken}`;
  }

  return !!parsedUserData?.accessToken?.length;
};
