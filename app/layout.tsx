import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "洋来社后援会管理系统",
  description: "展示创意作品，连接创作者与观众，打造充满活力的创意社区平台",
  keywords: "洋来社,后援会,创意,作品展示,HTML,AIGC,视频,剧本",
  authors: [{ name: "洋来社团队" }],
  openGraph: {
    title: "洋来社后援会管理系统",
    description: "展示创意作品，连接创作者与观众，打造充满活力的创意社区平台",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-chinese`}
      >
        {children}
      </body>
    </html>
  );
}
