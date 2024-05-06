import axios from "axios";

const axiosReq = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_URL,
});

axiosReq.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data.message);
    }
  }
);

export default axiosReq;
