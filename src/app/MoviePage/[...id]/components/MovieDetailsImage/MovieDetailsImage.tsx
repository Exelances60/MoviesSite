"use client";
import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface IMovieDetailsImage {
  getData: {
    poster_path: string;
  };
}

const MovieDetailsImage: FC<IMovieDetailsImage> = ({ getData }) => {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring", delay: 0.2 }}
        className="w-[100%] lg:w-[50%] h-full"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${getData.poster_path}`}
          alt="Picture of the author"
          width={1000}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          priority={true}
          sizes="100%"
          quality={100}
          blurDataURL="https://i.ytimg.com/vi/cYEvZaeY2lQ/maxresdefault.jpg"
          placeholder="blur"
        ></Image>
      </motion.div>
    </>
  );
};

export default React.memo(MovieDetailsImage);
