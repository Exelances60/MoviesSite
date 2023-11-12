import { getPopular } from "@/services/dataFetch";
import { IPopulerMovie } from "@/types/data";
import React from "react";
import PopularCard from "../../../../components/PopularCard/PopularMovieCard";

const PopularMovie = async () => {
  const { results } = await getPopular<IPopulerMovie>("movie/popular", "GET");
  return (
    <div className=" w-full h-[40%] p-5 box-border mt-10">
      <div className="flex h-[10%] w-full justify-between">
        <h1 className="text-white text-xl">Popular Movie</h1>
        <button className="text-white">See All</button>
      </div>
      <div className="flex flex-wrap w-full justify-center ">
        <PopularCard results={results} />
      </div>
    </div>
  );
};

export default PopularMovie;
