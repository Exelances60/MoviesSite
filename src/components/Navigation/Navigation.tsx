import Image from "next/image";
import React from "react";
import navPhoto from "@/../public/next.svg";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { cookies } from "next/headers";

const Navigation = async () => {
  const user = await JSON.parse(cookies().get("user")?.value || "{}");

  return (
    <nav className="w-full h-[5%] p-5 flex bg-gradient-to-t from-transparent to-black  items-center justify-center box-border z-10">
      <div className=" w-full h-full ">
        <Image src={navPhoto} alt="logo" width={90} height={90} priority />
      </div>
      <div className=" w-ful h-full">
        <Badge dot>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </div>

      <h3 className="ml-2">{user.username}</h3>
    </nav>
  );
};

export default Navigation;
