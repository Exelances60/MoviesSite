"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Select } from "antd";
import React from "react";

const NavigationSelect = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  return (
    <>
      <div className="mt-7 mr-2">
        <Select
          defaultValue={locale}
          size="middle"
          onChange={(value: "en" | "tr") => {
            changeLocale(value);
          }}
          options={[
            { value: "en", label: "English" },
            { value: "tr", label: "Turkish" },
          ]}
        />
      </div>
    </>
  );
};

export default NavigationSelect;
