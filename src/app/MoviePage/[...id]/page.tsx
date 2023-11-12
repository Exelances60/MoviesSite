import { getPopular } from "@/services/dataFetch";
import { IMoviePopular } from "@/types/data";
import React from "react";
import MovieDetailsImage from "./components/MovieDetailsImage/MovieDetailsImage";

interface Props {
  params: {
    id: number;
  };
}

const MovieDetails = async ({ params }: Props) => {
  const { id } = params;
  const getData = await getPopular<IMoviePopular>("movie", "GET", id);
  console.log(getData);
  return (
    <div className="w-full h-[100vh] flex ">
      <MovieDetailsImage getData={getData} />
      <div className="w-[50%] h-full"></div>
    </div>
  );
};

export default MovieDetails;
