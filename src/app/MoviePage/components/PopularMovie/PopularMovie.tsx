import { getPopularMovie } from "@/services/dataFetch";
import { IPopulerMovie } from "@/types/data";
import React from "react";
import PopularMovieCard from "./PopularMovieCard";

const PopularMovie = async () => {
  const { results } = await getPopularMovie<IPopulerMovie>(
    "movie/popular",
    "GET"
  );
  return (
    <div className=" w-full h-[40%] p-5 box-border">
      <div className="flex  h-[10%] w-full justify-between">
        <h1 className="text-white text-xl">Popular Movie</h1>
        <button className="text-white">See All</button>
      </div>
      <div className="flex flex-wrap w-full">
        <PopularMovieCard results={results} />
      </div>
    </div>
  );
};

export default PopularMovie;
