import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://127.0.0.1:8000/";

axiosClient.defaults.headers.post = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
