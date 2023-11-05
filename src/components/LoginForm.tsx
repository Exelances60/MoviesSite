"use client";
import React, { FC } from "react";
import { Form, Button } from "antd";
import { inputGroup } from "@/utils/Data/InputGroup";

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
  return (
    <>
      {inputGroup.map((item, index) => (
        <InputItem key={index} {...item} />
      ))}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button w-[100%] h-12 mt-2 bg-blue-500"
        >
          Log in
        </Button>
      </Form.Item>
    </>
  );
};

export default LoginForm;
