import React from "react";
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Form, MenuProps } from "antd";
import NavigatonFormButton from "./NavigatonFormButton";
import { singOut } from "@/utils/Firebase/firebase.utils.server";
import { getScopedI18n } from "@/locales/server";

const NavigationAvatar = async () => {
  const t = await getScopedI18n("pages.login");

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a>{t("profile")}</a>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <a>{t("setting")}</a>,
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
