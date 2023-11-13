"use client";
import { IMoviePopular } from "@/types/data";
import React, { FC, useEffect, useState } from "react";
import OverlayCardImage from "./OverlayCardImage/OverlayCardImage";
import { useMovieStore } from "@/store/movieStore";
import { useKeyPress } from "ahooks";
import { useGetWindowSize } from "@/hooks/useGetWindowSize";

interface IOverlayCard {
  results: IMoviePopular[];
}

const OverlayCard: FC<IOverlayCard> = ({ results }) => {
  const [count, setCount] = useState(0);
  const [incrementLimit, setIncrementLimit] = useState(10);
  const windowSize = useGetWindowSize();
  const setMovies = useMovieStore.use.setMovies();
  const [sliceCount, setSliceCount] = useState(10);

  useEffect(() => {
    if (results && results.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * Math.min(results.length, 10)
      );
      setMovies(results[randomIndex] || null);
    }
  }, [results, setMovies]);

  useEffect(() => {
    if (windowSize.width > 868) {
      setIncrementLimit(9);
      setSliceCount(10);
    } else if (windowSize.width > 640) {
      setIncrementLimit(5);
      setSliceCount(6);
    } else {
      setIncrementLimit(3);
      setSliceCount(4);
    }
  }, [windowSize]);

  const handleKey = (increment: number) => {
    if (count + increment < 0 || count + increment > incrementLimit) {
      return;
    }
    setCount((prev) => prev + increment);
    setMovies(results[count + increment]);
  };

  useKeyPress("rightarrow", () => handleKey(1));
  useKeyPress("leftarrow", () => handleKey(-1));

  return (
    <div className="w-full h-[30vh] flex justify-center  items-center overflow-hidden relative ">
      {results?.slice(0, sliceCount).map((item) => (
        <OverlayCardImage item={item} key={item.id} />
      ))}
    </div>
  );
};

export default OverlayCard;
