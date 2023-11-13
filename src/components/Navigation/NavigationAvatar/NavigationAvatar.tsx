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
import Link from "next/link";

const NavigationAvatar = async () => {
  const t = await getScopedI18n("pages.login");

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/profile">{t("profile")}</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <Link href="/settings">{t("setting")}</Link>,
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
