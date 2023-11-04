import React from "react";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/LoginForm"), {
  ssr: true,
});
export default async function Home() {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#191919] flex items-center justify-center">
        <div className="w-[55%] h-[60%]  items-center flex justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
