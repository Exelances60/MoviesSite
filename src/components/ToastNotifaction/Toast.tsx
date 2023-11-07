"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IToastProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: IToastProps) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
