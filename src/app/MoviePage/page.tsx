import withAccessControl from "@/utils/withAccesControl/withAccesControl";
import { cookies } from "next/headers";
import React from "react";

const MovieHomePage = async () => {
  const user = await JSON.parse(cookies().get("user")?.value || "{}");

  return (
    <div className="">
      <h1>Movie Home Page</h1>
      <h2>Welcome {user.username}</h2>
    </div>
  );
};

export default withAccessControl(MovieHomePage);
