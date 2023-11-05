import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const withAccessControl = (WrappedComponent: React.FC) => {
  const AccessControl = async (props: any) => {
    const user = await JSON.parse(cookies().get("user")?.value || "{}");
    if (user.email === undefined) {
      redirect("/");
    }
    return <WrappedComponent {...props} />;
  };
  return AccessControl;
};

export default withAccessControl;
