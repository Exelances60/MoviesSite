"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMovieStore } from "@/store/movieStore";
import Image from "next/image";
import React from "react";

const OverlayContainerImaga = () => {
  const movies = useMovieStore.use.movies();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={movies.poster_path}
        className={`w-full h-full relative `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.1,
          y: 10,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movies.poster_path || "ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg"
          }`}
          alt="logo"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          placeholder="blur"
          blurDataURL="@/../public/blur.jpg"
          quality={100}
          priority={true}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default React.memo(OverlayContainerImaga);
