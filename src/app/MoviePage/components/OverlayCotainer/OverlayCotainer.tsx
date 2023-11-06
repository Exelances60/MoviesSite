import React, { Suspense } from "react";
import { Skeleton } from "antd";
import { getPopularMovie } from "@/services/dataFetch";
import OverlayCard from "../OverlayCard";
import OverlayContainerImaga from "./OverlayContainerImaga";

const OverlayCotainer = async () => {
  const { results } = await getPopularMovie();
  return (
    <>
      <div className="w-full h-[75%]  box-border -z-10 relative bottom-20">
        <OverlayContainerImaga />
        <div className="absolute lg:top-96 md:top-[400px] top-64 w-full box-border h-[40%] p-5 text-white">
          <Suspense fallback={<Skeleton active />}>
            <OverlayCard results={results} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default OverlayCotainer;
