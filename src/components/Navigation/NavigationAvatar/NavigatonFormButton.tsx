"use client";
import { openNotification } from "@/hooks/useToast";
import React from "react";

const NavigatonFormButton = () => {
  return (
    <>
      <button
        type="submit"
        onClick={() => {
          openNotification("warning", "Logout successfull", "dark");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default NavigatonFormButton;
