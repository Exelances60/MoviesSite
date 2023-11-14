import { getImage, getPopular, getVideo } from "@/services/dataFetch";
import { IMoviePopular } from "@/types/data";
import React from "react";
import MovieDetailsImage from "./components/MovieDetailsImage/MovieDetailsImage";
import MovieDetailsText from "./components/MovieDetailsText/MovieDetailsText";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
interface Props {
  params: {
    id: number;
  };
}

const MovieDetails = async ({ params }: Props) => {
  const { id } = params;
  const [getData, getVideoData, getImageData] = await Promise.all([
    getPopular<IMoviePopular>("movie", "GET", id),
    getVideo(id),
    getImage<any>("GET", id),
  ]);

  return (
    <div
      className="w-full h-[100vh] flex flex-col md:flex-row lg:flex-row"
      style={popins.style}
    >
      <MovieDetailsImage getData={getData} getImageData={getImageData} />
      <MovieDetailsText getData={getData} getVideoData={getVideoData} />
    </div>
  );
};

export default MovieDetails;
