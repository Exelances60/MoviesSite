"use client";
import React, { FC } from "react";
import { Form, Button } from "antd";
import { inputGroup } from "@/utils/Data/InputGroup";
import { openNotification } from "@/hooks/useToast";
import { useChangeLocale, useScopedI18n } from "@/locales/client";
import Image from "next/image";
import turkeyFlag from "../../public/Custom-Icon-Design-Flag-3-Turkey-Flag.256.png";
import usaFlag from "../../public/Custom-Icon-Design-Flag-3-United-States-Flag.256.png";

interface InputItemProps {
  component: React.FC<any>;
  name: string;
  rules: any;
  [key: string]: any;
}

const InputItem: FC<InputItemProps> = ({
  component: Component,
  name,
  rules,
  ...rest
}) => (
  <Form.Item name={name} rules={rules}>
    <Component {...rest} />
  </Form.Item>
);

const LoginForm = () => {
  const t = useScopedI18n("pages.login");
  const changeLocale = useChangeLocale();

  return (
    <>
      {inputGroup.map((item, index) => (
        <InputItem key={index} {...item} />
      ))}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => openNotification("info", "Login in progress", "light")}
          className="login-form-button w-[100%] h-12 mt-2 bg-blue-500"
        >
          {t("login")}
        </Button>
        <div className="flex justify-between mt-2 ">
          <a className="login-form-forgot text-white" href="">
            {t("forgotPassword")}
          </a>
          <a href="/register" className="text-white">
            {t("register")}
          </a>
        </div>
        <div className="flex item-center justify-center mt-2 ">
          <p
            className="mr-2 text-white cursor-pointer flex items-center justify-center"
            onClick={() => {
              changeLocale("tr");
            }}
          >
            <Image src={turkeyFlag} width={30} height={30} alt="Turkey Flag" />
            TR
          </p>
          <p
            className="mr-2 text-white cursor-pointer flex items-center justify-center"
            onClick={() => {
              changeLocale("en");
            }}
          >
            <Image src={usaFlag} width={30} height={30} alt="USA Flag" />
            EN
          </p>
        </div>
      </Form.Item>
    </>
  );
};

export default LoginForm;
