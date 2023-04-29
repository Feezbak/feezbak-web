export const isAuth = () => {
  const userDataStorageData = localStorage.getItem("userData");
  const parsedUserData = userDataStorageData
    ? JSON.parse(userDataStorageData)
    : "";
  return !!parsedUserData?.accessToken?.length;
};
