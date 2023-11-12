import PopularMovieCardMotion from "@/components/PopularCard/PopularMovieCardMotion/PopularMovieCardMotion";
import { IMoviePopular, IVideo } from "@/types/data";
import React, { FC } from "react";

interface IMovieDetailsText {
  getData: IMoviePopular;
  getVideoData?: IVideo;
}

const MovieDetailsText: FC<IMovieDetailsText> = ({ getData, getVideoData }) => {
  return (
    <>
      <div className="w-[100%] lg:w-[50%] h-full flex flex-col  items-center justify-center p-5 pt-10 box-border">
        <div className="w-full h-full ">
          <h1 className="text-xl">{getData.title}</h1>
          <div className="w-full md:h-[15%] mb-2 overflow-hidden text-ellipsis">
            {getData.overview}
          </div>
          <PopularMovieCardMotion item={getData} />
          <div className="w-full h-[32%] ">
            <iframe
              className="w-full h-full"
              allowFullScreen
              src={`https://www.youtube.com/embed/${getVideoData?.key}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsText;
