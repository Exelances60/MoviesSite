import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
export const inputGroup = [
  {
    component: Input,
    size: "large",
    name: "email",
    className: "w-[100%] h-12 mt-2 ",
    placeholder: "Email",
    rules: [{ required: true, message: "Please input your Email!" }],
    prefix: <UserOutlined className="site-form-item-icon" />,
  },
  {
    component: Input.Password,
    size: "large",
    name: "password",
    className: "w-[100%] h-12 mt-2",
    placeholder: "Password",
    rules: [{ required: true, message: "Please input your Password!" }],
    prefix: <UserOutlined className="site-form-item-icon" />,
  },
];

export const inputGroupRegister = [
  {
    component: Input,
    size: "large",
    name: "email",
    className: "w-[100%] h-12 mt-2 ",
    placeholder: "Email",
    rules: [{ required: true, message: "Please input your Email!" }],
    prefix: <UserOutlined className="site-form-item-icon" />,
  },
  {
    component: Input,
    size: "large",
    name: "username",
    className: "w-[100%] h-12 mt-2 ",
    placeholder: "Username",
    rules: [{ required: true, message: "Please input your Username!" }],
    prefix: <UserOutlined className="site-form-item-icon" />,
  },
  {
    component: Input.Password,
    size: "large",
    name: "password",
    className: "w-[100%] h-12 mt-2",
    placeholder: "Password",
    rules: [{ required: true, message: "Please input your Password!" }],
    prefix: <UserOutlined className="site-form-item-icon" />,
  },
];
