"use client";
import { IMoviePopular } from "@/types/data";
import Link from "next/link";
import React, { FC } from "react";
import PopularMovieCardMotion from "./PopularMovieCardMotion/PopularMovieCardMotion";

interface IPopularMovieCard {
  results: IMoviePopular[];
}

const PopulareCard: FC<IPopularMovieCard> = ({ results }) => {
  return (
    <>
      {results?.map((item, index) => {
        if (index > 5) {
          return null;
        }
        return (
          <Link href={`/MoviePage/${item.id}/${item.title}`} key={item.id}>
            <PopularMovieCardMotion item={item} />
          </Link>
        );
      })}
    </>
  );
};

export default PopulareCard;
