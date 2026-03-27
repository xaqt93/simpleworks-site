import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Date",
  description: "Because dating should feel human again.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
