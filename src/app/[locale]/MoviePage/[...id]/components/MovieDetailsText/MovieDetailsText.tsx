import { IMoviePopular, IVideo } from "@/types/data";
import React, { FC } from "react";

interface IMovieDetailsText {
  getData: IMoviePopular;
  getVideoData?: IVideo;
}

const MovieDetailsText: FC<IMovieDetailsText> = ({ getData, getVideoData }) => {
  return (
    <>
      <div className="w-[100%] lg:w-[50%] h-full flex flex-col items-center justify-center p-5 pt-10 box-border">
        <div className="w-full h-full">
          <div className="w-full h-[50%]">
            <iframe
              className="w-full h-full rounded-2xl"
              allowFullScreen
              src={`https://www.youtube.com/embed/${getVideoData?.key}`}
            />
          </div>
          <div className="flex">
            <h1 className="text-xl text">{getData.title}</h1> {""}
            <span className="text-xl ml-2">{getData.release_date}</span>
          </div>
          <div className="w-full md:h-[15%] h-auto mb-2 overflow-y-auto text-ellipsis">
            {getData.overview}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsText;
