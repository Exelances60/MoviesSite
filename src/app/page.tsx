import React from "react";
import dynamic from "next/dynamic";
import { Form } from "antd";
import { loginWithEmailAndPassword } from "@/utils/Firebase/firebase.utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LoginForm = dynamic(() => import("@/components/LoginForm"), {
  ssr: true,
});

const videoSource = "/video/Login.mp4";

export default async function Home() {
  const user = await JSON.parse(cookies().get("user")?.value || "{}");
  if (user.email) {
    redirect("/MoviePage");
  }

  const submitLogin = async (values: { email: string; password: string }) => {
    "use server";
    const response: {
      uid: string;
      email: string;
      nickname: string;
    } = await loginWithEmailAndPassword(values.email, values.password);
    if (response.uid) {
      const userData = {
        email: response.email,
        username: response.nickname,
      };
      const userDataJSON = JSON.stringify(userData);
      cookies().set("user", userDataJSON, { httpOnly: true });
      redirect("/MoviePage");
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] bg-zinc-900 flex items-center justify-center">
        <video
          loop
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="w-[90%] h-[60%] lg:w-[40%] md:w-[55%] items-center bg-white z-10 bg-opacity-10  backdrop-blur-sm shadow-2xl rounded-3xl flex justify-center">
          <Form
            onFinish={submitLogin}
            name="normal_login"
            className="login-form w-[70%] h-[90%] flex flex-col justify-center"
          >
            <LoginForm />
          </Form>
        </div>
      </div>
    </>
  );
}
