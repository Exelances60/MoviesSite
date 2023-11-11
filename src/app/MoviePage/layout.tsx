import Navigation from "@/components/Navigation/Navigation";
import { Skeleton } from "antd";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Skeleton active />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
