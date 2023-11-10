import { IfetchOptions } from "@/types/data";
import axios from "axios";

type MovieType = "movie/popular" | "tv/popular";
type MovieMethod = "GET" | "POST" | "PUT" | "DELETE";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = process.env.TMDB_API_KEY;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 400) {
      return Promise.reject(error.response.status);
    }
    return Promise.reject(error);
  }
);

export const getPopularMovie = async <T>(
  type: MovieType,
  method: MovieMethod
): Promise<T> => {
  try {
    const options: IfetchOptions = {
      method: method,
      headers: {
        accept: "application/json",
      },
    };

    const response = await axios(
      ` https://api.themoviedb.org/3/${type}?language=en-US&page=1`,
      options
    );

    const data = response.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
