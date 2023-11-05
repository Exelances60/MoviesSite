import React, { Suspense } from "react";
import { IPopulerMovie } from "@/types/data";
import OverlayCotainer from "./components/OverlayCotainer/OverlayCotainer";
import { Skeleton } from "antd";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getPopularMovie = async (): Promise<IPopulerMovie> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ0YTFjMzJjZjdmZjBjMWYwNjkwZTVhMWFmZjE5YyIsInN1YiI6IjY0ZTBkMTQwYjc3ZDRiMTE0MjYwMmRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MRpaKOVBQfE0_w2v-pfcCaV1HwnqFcb4udc85yCyu7Q",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const data = response.json();
  return data;
};

const MovieHomePage = async () => {
  const { results } = await getPopularMovie();

  return (
    <div className="w-full h-[100vh] ">
      <Suspense fallback={<Skeleton active />}>
        <OverlayCotainer results={results} />
      </Suspense>
    </div>
  );
};

export default MovieHomePage;
