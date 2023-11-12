import { getPopular, getVideo } from "@/services/dataFetch";
import { IMoviePopular } from "@/types/data";
import React from "react";
import MovieDetailsImage from "./components/MovieDetailsImage/MovieDetailsImage";
import PopularMovieCardMotion from "@/components/PopularCard/PopularMovieCardMotion/PopularMovieCardMotion";
import Paragraph from "antd/es/typography/Paragraph";

interface Props {
  params: {
    id: number;
  };
}

const MovieDetails = async ({ params }: Props) => {
  const { id } = params;
  const [getData, getVideoData] = await Promise.all([
    getPopular<IMoviePopular>("movie", "GET", id),
    getVideo(id),
  ]);
  return (
    <div className="w-full h-[100vh] flex  ">
      <MovieDetailsImage getData={getData} />
      <div className="w-[50%] h-full flex flex-col items-center justify-center p-5 pt-10 box-border">
        <div className="w-full h-full ">
          <h1 className="text-xl">{getData.title}</h1>
          <Paragraph
            style={{
              color: "#fff",
              height: "20%",
            }}
            ellipsis={{ rows: 8 }}
            type="success"
          >
            {getData.overview}
          </Paragraph>
          <PopularMovieCardMotion item={getData} />
          <div className="w-full h-[25%]">
            <iframe
              className="w-full h-full"
              allowFullScreen
              src={`https://www.youtube.com/embed/${getVideoData?.key}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
