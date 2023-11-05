import Navigation from "@/components/Navigation/Navigation";
import withAccessControl from "@/utils/withAccesControl/withAccesControl";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default withAccessControl(Layout);
