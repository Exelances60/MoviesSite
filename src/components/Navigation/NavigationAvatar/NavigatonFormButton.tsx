"use client";
import { openNotification } from "@/hooks/useToast";
import { useScopedI18n } from "@/locales/client";
import React from "react";

const NavigatonFormButton = () => {
  const t = useScopedI18n("pages.login");
  return (
    <>
      <button
        type="submit"
        onClick={() => {
          openNotification("warning", "Logout successfull", "dark");
        }}
      >
        {t("logout")}
      </button>
    </>
  );
};

export default NavigatonFormButton;
