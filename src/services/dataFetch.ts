import { IVideo, IVideoType, IfetchOptions } from "@/types/data";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

type MovieType = "movie/popular" | "tv/popular" | "movie";
type MovieMethod = "GET" | "POST" | "PUT" | "DELETE";
type MovieId = number | undefined;

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}
axios.interceptors.request.use(function (config: AdaptAxiosRequestConfig) {
  config.headers = config.headers || {};
  config.headers.Authorization = process.env.TMDB_API_KEY;
  return config;
});

axios.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    return response.data;
  },
  function (error: AxiosError): Promise<AxiosError> {
    if (error.response?.status === 400) {
      return Promise.reject(error.response.status);
    }
    return Promise.reject(error);
  }
);

export const getPopular = async <T>(
  type: MovieType,
  method: MovieMethod,
  id?: MovieId
): Promise<T> => {
  try {
    const options: IfetchOptions = {
      method: method,
      headers: {
        accept: "application/json",
      },
    };

    const response = await axios(
      ` https://api.themoviedb.org/3/${type}${
        id !== undefined ? `/${id}` : ""
      }?language=en-US&page=1`,
      options
    );

    const data = response as T;
    return data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const getVideo = async (id: number): Promise<IVideo | undefined> => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = (await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )) as IVideoType;
    const data = response;
    const trailer = data.results.find(
      (item: IVideo) => item.type === "Trailer"
    );
    return trailer;
  } catch (error) {
    return Promise.reject(error);
  }
};
