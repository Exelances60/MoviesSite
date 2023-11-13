import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastNotifaction/Toast";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import { I18nProviderClient } from "@/locales/client";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <I18nProviderClient locale={locale}>
          <ToastProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ToastProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}