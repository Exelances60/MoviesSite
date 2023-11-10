import { IMoviePopular } from "@/types/data";
import Image from "next/image";
import React, { FC } from "react";

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
          <div
            className="w-[300px] h-[430px] mb-2 m-auto relative rounded-[17px]  "
            key={item.id}
          >
            <div className="w-full h-full left-0 top-0 absolute">
              <Image
                alt={item.title}
                width={309}
                height={450}
                className="w-full h-full left-0 top-0 absolute rounded-[5px] brightness-50
                hover:brightness-90 transition-all duration-500 ease-in-out hover:scale-105"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
            </div>
            <div className="w-[165px] h-[97px] left-[30px] top-[225px] absolute flex-col justify-start items-start gap-1.5 inline-flex ">
              <div className="text-white text-[22px] font-semibold font-['Roboto'] leading-tight">
                {item.title}
              </div>
              <div className="w-14 text-white text-base font-normal font-['Roboto'] leading-[15px]">
                {item.release_date}
              </div>
              <div className="w-[41px] text-white text-base font-medium font-['Roboto'] leading-tight">
                {item.vote_average}
              </div>
              <div className="justify-start items-start gap-1.5 inline-flex">
                <div className="px-2.5 py-1 bg-white bg-opacity-20 rounded-[5px] justify-center items-center gap-2.5 flex">
                  <div className="text-white text-sm font-normal font-['Roboto'] leading-none">
                    {item.original_language}
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-white bg-opacity-20 rounded-[5px] justify-center items-center gap-2.5 flex">
                  <div className="text-white text-sm font-normal font-['Roboto'] leading-none">
                    {item.adult ? "18+" : "13+"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PopulareCard;
