import { IPopulerMovie, IfetchOptions } from "@/types/data";

export const getPopularMovie = async (): Promise<IPopulerMovie> => {
  try {
    const options: IfetchOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_API_KEY,
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const data = response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
