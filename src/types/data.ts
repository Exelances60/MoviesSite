export interface IMoviePopular {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IPopulerMovie {
  page: number;
  results: IMoviePopular[];
  total_pages: number;
  total_results: number;
}

export interface IfetchOptions {
  method: string;
  headers: {
    accept: string;
    Authorization?: string;
  };
}

export type INotificationType = "success" | "error" | "warning" | "info";