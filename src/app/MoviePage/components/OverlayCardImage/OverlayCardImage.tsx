"use client";
import { useMovieStore } from "@/store/movieStore";
import { IMoviePopular } from "@/types/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OverlayCardImage = ({ item }: { item: IMoviePopular }) => {
  const movies = useMovieStore.use.movies();

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.2, type: "spring", bounce: 0.5 }}
        key={item.id}
        className={`lg:w-[30%] w-[100%] h-[100%] mr-2 z-20 relative transition-all duration-500 ease-in-out transform cursor-pointer ${
          movies?.id === item.id
            ? "mb-10 grayscale lg:w-[40%] shadow-black shadow-md brightness-125 "
            : ""
        } `}
      >
        <Link href={`/MoviePage/${item.id}`}>
          <Image
            alt="example"
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            fill
            placeholder="blur"
            sizes="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            blurDataURL="https://i.ytimg.com/vi/cYEvZaeY2lQ/maxresdefault.jpg"
            className="rounded-md"
          />
        </Link>
      </motion.div>
    </>
  );
};

export default OverlayCardImage;
