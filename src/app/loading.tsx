import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  );
};

export default Loading;
