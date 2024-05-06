import axiosReq from "../customHook/axiosInterceptor";

const GetWeather = async (query) => {
  const url = process.env.REACT_APP_WEATHER_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { data } = await axiosReq.get(url, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};

export default GetWeather;
