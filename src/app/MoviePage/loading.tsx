import { Skeleton } from "antd";
import React from "react";

const Laoding = () => {
  return (
    <div className="w-full h-[100vh]">
      <Skeleton avatar paragraph={{ rows: 10 }} className=" w-full h-full" />;
    </div>
  );
};

export default Laoding;
