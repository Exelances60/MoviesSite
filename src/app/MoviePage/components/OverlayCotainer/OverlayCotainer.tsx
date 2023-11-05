import Image from "next/image";
import React, { FC, Suspense } from "react";
import OverlayCard from "../OverlayCard";
import { Skeleton } from "antd";
import { IMoviePopular } from "@/types/data";

interface IOverlayCotainer {
  results: IMoviePopular[];
}

const OverlayCotainer: FC<IOverlayCotainer> = async ({ results }) => {
  return (
    <>
      {" "}
      <div className="w-full h-[50%]  box-border -z-10 relative bottom-20">
        <div className="w-full h-full ">
          <Image
            src={`https://image.tmdb.org/t/p/original${results[5].backdrop_path}`}
            alt="logo"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute lg:top-80 md:top-64 top-40 w-full box-border h-[40%] p-5 text-white">
          <Suspense fallback={<Skeleton active />}>
            <OverlayCard results={results} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default OverlayCotainer;
