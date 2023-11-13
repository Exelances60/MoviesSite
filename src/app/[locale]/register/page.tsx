"use client";
import { Form } from "antd";
import React from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { createUser } from "@/utils/Firebase/firebase.utils";
import { openNotification } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

const videoSource = "/video/Login.mp4";

const Register = () => {
  const router = useRouter();
  const submitRegister = async (values: {
    email: string;
    password: string;
    username: string;
  }) => {
    const response = await createUser(
      values.email,
      values.password,
      values.username
    );
    if (response === "User created successfully") {
      openNotification("success", "Register successfully", "dark");
      router.push("/");
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
            onFinish={submitRegister}
            name="normal_login"
            className="login-form w-[70%] h-[90%] flex flex-col justify-center"
          >
            <RegisterForm />
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
