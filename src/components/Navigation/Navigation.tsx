import Image from "next/image";
import React from "react";
import navPhoto from "@/../public/next.svg";
import { cookies } from "next/headers";
import NavigationAvatar from "./NavigationAvatar/NavigationAvatar";
import Link from "next/link";

const Navigation = async () => {
  const user = await JSON.parse(cookies().get("user")?.value || "{}");

  return (
    <nav className="w-full h-[5%] p-5 flex bg-gradient-to-t from-transparent to-black  items-center justify-center box-border z-10 absolute">
      <div className=" w-full h-full relative cursor-pointer ">
        <Link href="/MoviePage">
          <Image src={navPhoto} alt="logo" width={90} height={90} priority />
        </Link>
      </div>
      <NavigationAvatar />
      <h3 className="ml-2 mt-5 text-white cursor-pointer">{user.username}</h3>
    </nav>
  );
};

export default Navigation;
