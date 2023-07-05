import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_API_URL;

axiosClient.defaults.headers.post = {
  Accept: "application/json",
};

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("token");

  // Skip token refreshing for the login request
  if (config.url === "/sign-in") {
    return Promise.resolve(config);
  }

  if (accessToken) {
    const isExpired = isTokenExpired(accessToken);

    if (isExpired) {
      try {
        await refreshAccessToken(config);
      } catch (error) {
        // Handle the refresh token error
        console.error("Failed to refresh access token: ", error);
        // Redirect to the login page or show an error message
        throw error;
      }
    }
  }

  return config;
});

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

async function refreshAccessToken(config: any) {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const existingAccessToken = localStorage.getItem("token");

    // Send a request to your backend to refresh the access token
    const response = await axios.get("/refresh-token", {
      headers: {
        refresh: refreshToken ? JSON.parse(refreshToken) : "",
        authorization: existingAccessToken
          ? JSON.parse(existingAccessToken)
          : "",
      },
    });

    const { accessToken, newRefreshToken } = response.data;

    // Update the access token and refresh token in the storage
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken);

    // Update the headers with the new access token

    return config;
  } catch (error) {
    // Handle the refresh token error
    console.error("Failed to refresh access token: ", error);
    // Redirect to the login page or show an error message
    throw error;
  }
}

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

export default axiosClient;
