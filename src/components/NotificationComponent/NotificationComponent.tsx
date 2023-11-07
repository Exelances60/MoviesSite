"use client";
import React from "react";
import { notification } from "antd";

export const NotificationComponent = () => {
  const [contextHolder] = notification.useNotification();

  return <div>{contextHolder}</div>;
};
