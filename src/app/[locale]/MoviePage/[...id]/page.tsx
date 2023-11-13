import { getPopular, getVideo } from "@/services/dataFetch";
import { IMoviePopular } from "@/types/data";
import React from "react";
import MovieDetailsImage from "./components/MovieDetailsImage/MovieDetailsImage";
import MovieDetailsText from "./components/MovieDetailsText/MovieDetailsText";

interface Props {
  params: {
    id: number;
  };
}

const MovieDetails = async ({ params }: Props) => {
  const { id } = params;
  const [getData, getVideoData] = await Promise.all([
    getPopular<IMoviePopular>("movie", "GET", id),
    getVideo(id),
  ]);
  return (
    <div className="w-full h-[100vh] flex flex-col md:flex-row lg:flex-row">
      <MovieDetailsImage getData={getData} />
      <MovieDetailsText getData={getData} getVideoData={getVideoData} />
    </div>
  );
};

export default MovieDetails;
