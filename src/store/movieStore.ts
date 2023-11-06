import { IMoviePopular } from "@/types/data";
import { create } from "zustand";

type MovieStore = {
  movies: IMoviePopular;
  setMovies: (movies: IMoviePopular) => void;
};

export const useMovieStore = create<MovieStore>((set) => ({
  movies: {} as IMoviePopular,
  setMovies: (movies: IMoviePopular) => set({ movies: movies }),
}));

export const selectMovies = (state: MovieStore) => state.movies;
