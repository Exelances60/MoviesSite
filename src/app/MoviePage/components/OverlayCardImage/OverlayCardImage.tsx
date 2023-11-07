"use client";
import { useMovieStore } from "@/store/movieStore";
import { IMoviePopular } from "@/types/data";
import Image from "next/image";
import React from "react";

const OverlayCardImage = ({ item }: { item: IMoviePopular }) => {
  const movies = useMovieStore((state) => state.movies);
  return (
    <>
      <div
        key={item.id}
        className={`lg:w-[30%] w-[100%] h-[100%] mr-2 z-20 relative transition-all duration-500 ease-in-out transform  ${
          movies?.id === item.id
            ? "mb-10 grayscale lg:w-[40%] shadow-black shadow-md"
            : ""
        } `}
      >
        <Image
          alt="example"
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="https://i.ytimg.com/vi/cYEvZaeY2lQ/maxresdefault.jpg"
          className="rounded-md"
          objectPosition="center"
        />
      </div>
    </>
  );
};

export default OverlayCardImage;
