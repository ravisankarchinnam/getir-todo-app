import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosClient = axios.create({
  baseURL: "http://todo-api-getir.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // triggers for status code 2xx range
    return response.data;
  },
  function (error: any) {
    // triggers for status code outside 2xx range
    return Promise.reject(error?.response?.data ?? error?.message ?? error);
  },
);

export default axiosClient;
