import axios from "axios";
const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_API_URL;

axiosClient.defaults.headers.post = {
  Accept: "application/json",
};

axiosClient.interceptors.request.use(
  (config) => {
    // Check if the access token exists and is not expired
    const accessToken = localStorage.getItem("token");
    if (accessToken && !isTokenExpired(JSON.parse(accessToken)) && config) {
      // Set the Authorization header with the access token
      config!.headers!["Authorization"] = `Bearer ${JSON.parse(accessToken)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // No need to update the access token if the request was successful
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error status code is 401 (unauthorized) and there is no ongoing token refresh request
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      const oldAccess = localStorage.getItem("token");

      // Perform the token refresh request to get a new access token
      return axiosClient
        .post(
          "/refresh-token",
          {
            refresh: refreshToken ? JSON.parse(refreshToken) : "",
          },
          {
            headers: {
              Authorization: oldAccess ? `Bearer ${JSON.parse(oldAccess)}` : "",
            },
          }
        )
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            // Update the access token in the local storage
            localStorage.setItem(
              "token",
              JSON.stringify(response.data["accessToken"])
            );
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(response.data["refreshToken"])
            );

            // Modify the original request to include the new access token
            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

            // Retry the original request
            return axiosClient(originalRequest);
          }
        })
        .catch((error) => {
          // Handle the token refresh error
          // For example, redirect to the login page or show an error message
          console.log("Token refresh failed:", error);
        });
    }

    return Promise.reject(error);
  }
);

function isTokenExpired(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  const data = JSON.parse(jsonPayload);
  const expirationDate = data.exp;
  const currentDate = new Date().getTime() / 1000;
  return currentDate >= expirationDate;
}

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

export default axiosClient;
