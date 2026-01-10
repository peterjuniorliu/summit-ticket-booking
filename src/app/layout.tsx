import "./globals.css";

export const metadata = {
  title: "AI Maker Summit · Schedule",
  description: "AI Maker Summit 日程安排与分会场议程概览。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
