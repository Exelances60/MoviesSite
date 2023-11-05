import { IMoviePopular } from "@/types/data";
import { Card } from "antd";
import Image from "next/image";
import React, { FC } from "react";

interface IOverlayCard {
  results: IMoviePopular[];
}

const OverlayCard: FC<IOverlayCard> = ({ results }) => {
  return (
    <>
      <div className="w-full h-[30vh] flex justify-center items-center  overflow-hidden ">
        {results.map((item, index) => {
          if (index > 10) {
            return null;
          }
          return (
            <Card
              key={item.id}
              hoverable
              className="lg:w-[10%] w-[100%] h-[100%] mr-2"
              bordered={false}
            >
              <Image
                alt="example"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                objectPosition="center"
                priority
              />
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default OverlayCard;
