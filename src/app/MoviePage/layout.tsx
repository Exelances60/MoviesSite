import Navigation from "@/components/Navigation/Navigation";
import withAccessControl from "@/utils/withAccesControl/withAccesControl";
import { Skeleton } from "antd";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />

      <div>{children}</div>
    </div>
  );
};

export default withAccessControl(Layout);
