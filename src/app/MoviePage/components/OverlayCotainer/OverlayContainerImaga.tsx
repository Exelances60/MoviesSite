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
      <div
        className={`w-full h-full relative ${
          fade ? "animate-fade brightness-75  opacity-1" : ""
        }`}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movies.poster_path || "ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg"
          }`}
          alt="logo"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          placeholder="blur"
          blurDataURL="@/../public/blur.jpg"
          onLoad={() => setFade(true)}
          quality={100}
          priority={true}
        />
      </div>
    </>
  );
};

export default OverlayContainerImaga;
