import React from "react";
import OverlayCotainer from "./components/OverlayCotainer/OverlayCotainer";
import PopularMovie from "./components/PopularMovie/PopularMovie";

const MovieHomePage = () => {
  return (
    <div className="w-full h-[100vh]  ">
      <OverlayCotainer />
      <PopularMovie />
    </div>
  );
};

export default MovieHomePage;
