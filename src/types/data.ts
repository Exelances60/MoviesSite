import { DocumentData } from "firebase/firestore";

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

export type ILoginResponse =
  | {
      uid: string;
      email: string;
      nickname: string;
    }
  | DocumentData;

export interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface IVideoType {
  id: number;
  results: IVideo[];
}
