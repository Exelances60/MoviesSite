import React from "react";
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Form, MenuProps } from "antd";
import { singOut } from "@/utils/Firebase/firebase.utils";
import NavigatonFormButton from "./NavigatonFormButton";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a>Profile</a>,
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: <a>Settings</a>,
    icon: <SettingOutlined />,
  },
  {
    key: "3",
    label: (
      <Form onFinish={singOut}>
        <NavigatonFormButton />
      </Form>
    ),
    danger: true,
    icon: <LoginOutlined />,
  },
];

const NavigationAvatar = () => {
  return (
    <div className=" w-ful h-full">
      <Dropdown menu={{ items }}>
        <Badge dot>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </Dropdown>
    </div>
  );
};

export default NavigationAvatar;
