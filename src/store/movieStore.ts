import { IMoviePopular } from "@/types/data";
import { StoreApi, UseBoundStore, create } from "zustand";

type MovieStore = {
  movies: IMoviePopular;
  setMovies: (movies: IMoviePopular) => void;
};

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export const useMovieStoreBase = create<MovieStore>((set) => ({
  movies: {} as IMoviePopular,
  setMovies: (movies: IMoviePopular) => set({ movies: movies }),
}));

export const useMovieStore = createSelectors(useMovieStoreBase);
