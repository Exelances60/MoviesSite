"use client";
/* import Image from "next/image"; */

import React, { FC } from "react";
import { motion } from "framer-motion";
import { Image } from "antd";

interface IMovieDetailsImage {
  getData: {
    poster_path: string;
  };
  getImageData: {
    backdrops: {
      file_path: string;
    }[];
  };
}

const MovieDetailsImage: FC<IMovieDetailsImage> = ({
  getData,
  getImageData,
}) => {
  const { backdrops } = getImageData;

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring", delay: 0.2 }}
        className="w-[100%] lg:w-[50%] h-full overflow-hidden"
      >
        <Image.PreviewGroup
          items={backdrops.map((item) => {
            return {
              src: `https://image.tmdb.org/t/p/original${item.file_path}`,
            };
          })}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${getData.poster_path}`}
            alt="Picture of the author"
            width="100%"
            placeholder="blur"
            fallback="https://i.ytimg.com/vi/cYEvZaeY2lQ/maxresdefault.jpg"
            height="100%"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </Image.PreviewGroup>
      </motion.div>
    </>
  );
};

export default React.memo(MovieDetailsImage);
