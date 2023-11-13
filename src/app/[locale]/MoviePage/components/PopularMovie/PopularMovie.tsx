import PopulareCard from "@/components/PopularCard/PopularMovieCard";
import { getScopedI18n } from "@/locales/server";
import { getPopular } from "@/services/dataFetch";
import { IPopulerMovie } from "@/types/data";
import React from "react";

const PopularMovie = async () => {
  const t = await getScopedI18n("pages.moviePage");
  const { results } = await getPopular<IPopulerMovie>("movie/popular", "GET");
  return (
    <div className=" w-full h-[40%] p-5 box-border mt-10">
      <div className="flex h-[10%] w-full justify-between">
        <h1 className="text-white text-xl">{t("popularMovies")}</h1>
        <button className="text-white">{t("seeAll")}</button>
      </div>
      <div className="flex flex-wrap w-full justify-center ">
        <PopulareCard results={results} />
      </div>
    </div>
  );
};

export default PopularMovie;
