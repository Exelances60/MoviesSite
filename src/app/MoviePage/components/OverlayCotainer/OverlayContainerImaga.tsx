"use client";
import { selectMovies, useMovieStore } from "@/store/movieStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const OverlayContainerImaga = () => {
  const movies = useMovieStore(selectMovies);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
  }, [movies.poster_path]);

  return (
    <>
      <div className={`w-full h-full relative ${fade ? "animate-fade" : ""}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
          alt="logo"
          layout="fill"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="https://i.ytimg.com/vi/cYEvZaeY2lQ/maxresdefault.jpg"
          objectFit="cover"
          onLoadingComplete={() => setFade(true)}
          quality={100}
          priority={true}
        />
      </div>
    </>
  );
};

export default OverlayContainerImaga;
