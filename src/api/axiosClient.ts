import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://192.168.88.133:4005/";

axiosClient.defaults.headers.post = {
  Accept: "application/json",
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
