"use client";
import { toast } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning";
type ToastTheme = "light" | "dark" | "colored";

interface ToastOptions {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  autoClose?: number | false;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  transition?: undefined;
  theme?: ToastTheme;
}

export const openNotification = (
  type: ToastType,
  message: string,
  theme: ToastTheme
) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    theme: theme,
  };

  switch (type) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    case "info":
      toast.info(message, toastOptions);
      break;
    case "warning":
      toast.warn(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
      break;
  }
};
