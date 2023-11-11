import React, { Suspense } from "react";
import { Skeleton } from "antd";
import { getPopular } from "@/services/dataFetch";
import OverlayCard from "../OverlayCard";
import OverlayContainerImaga from "./OverlayContainerImaga";
import { IPopulerMovie } from "@/types/data";

const OverlayCotainer = async () => {
  const { results } = await getPopular<IPopulerMovie>("movie/popular", "GET");
  return (
    <>
      <div className="w-full h-[75%]  box-border -z-10 ">
        <OverlayContainerImaga />
        <div className="absolute lg:top-[330px] xl:top-[350px] top-80 md:top-80 w-full box-border h-[40%] p-5 text-white">
          <Suspense fallback={<Skeleton active />}>
            <OverlayCard results={results} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default OverlayCotainer;
