import { IfetchOptions } from "@/types/data";

type MovieType = "movie/popular" | "tv/popular";
type MovieMethod = "GET" | "POST" | "PUT" | "DELETE";

export const getPopularMovie = async <T>(
  type: MovieType,
  method: MovieMethod
): Promise<T> => {
  try {
    const options: IfetchOptions = {
      method: method,
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_API_KEY,
      },
    };

    const response = await fetch(
      ` https://api.themoviedb.org/3/${type}?language=en-US&page=1`,
      options
    );

    const data = response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
