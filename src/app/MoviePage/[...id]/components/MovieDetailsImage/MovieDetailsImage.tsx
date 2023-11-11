import Image from "next/image";
import React, { FC } from "react";

interface IMovieDetailsImage {
  getData: {
    poster_path: string;
  };
}

const MovieDetailsImage: FC<IMovieDetailsImage> = ({ getData }) => {
  return (
    <>
      <div className="w-[50%] h-full">
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
      </div>
    </>
  );
};

export default MovieDetailsImage;
