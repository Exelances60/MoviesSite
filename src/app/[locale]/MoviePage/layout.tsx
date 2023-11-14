import Navigation from "@/components/Navigation/Navigation";
import React from "react";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
