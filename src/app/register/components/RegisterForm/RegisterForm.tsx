"use client";
import { openNotification } from "@/hooks/useToast";
import { inputGroupRegister } from "@/utils/Data/InputGroup";
import { Button, Form } from "antd";
import React, { FC } from "react";
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

const RegisterForm = () => {
  return (
    <>
      {inputGroupRegister.map((item, index) => (
        <InputItem key={index} {...item} />
      ))}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() =>
            openNotification("success", "Register successfully", "dark")
          }
          className="login-form-button w-[100%] h-12 mt-2 bg-blue-500"
        >
          Register
        </Button>
        <div className="flex justify-between mt-2 ">
          <a className="login-form-forgot text-white" href="">
            Forgot password
          </a>
          <a href="/" className="text-white">
            You have an account? Login now!
          </a>
        </div>
      </Form.Item>
    </>
  );
};

export default RegisterForm;
