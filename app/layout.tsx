import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "洋来社后援会管理系统",
  description: "展示创意作品，连接创作者与观众，打造充满活力的创意社区平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
