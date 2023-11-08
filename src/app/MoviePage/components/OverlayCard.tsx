"use client";
import { IMoviePopular } from "@/types/data";
import React, { FC, useEffect, useState } from "react";
import OverlayCardImage from "./OverlayCardImage/OverlayCardImage";
import { useMovieStore } from "@/store/movieStore";
import { useKeyPress } from "ahooks";

interface IOverlayCard {
  results: IMoviePopular[];
}

const OverlayCard: FC<IOverlayCard> = ({ results }) => {
  const [count, setCount] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const setMovies = useMovieStore((state) => state.setMovies);

  useEffect(() => {
    setMovies(results[count]);
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  const handleKey = (increment: number) => {
    if (count + increment < 0 || count + increment > 10) {
      return;
    }
    setCount((prev) => prev + increment);
    setMovies(results[count + increment]);
  };

  useKeyPress("rightarrow", () => handleKey(1));
  useKeyPress("leftarrow", () => handleKey(-1));

  return (
    <div className="w-full h-[30vh] flex justify-center items-center  overflow-hidden relative ">
      {windowSize.width > 868
        ? results
            ?.slice(0, 10)
            .map((item) => <OverlayCardImage item={item} key={item.id} />)
        : windowSize.width < 640
        ? results
            ?.slice(0, 4)
            .map((item) => <OverlayCardImage item={item} key={item.id} />)
        : results
            ?.slice(0, 6)
            .map((item) => <OverlayCardImage item={item} key={item.id} />)}
    </div>
  );
};

export default OverlayCard;
