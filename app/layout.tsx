import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Plan: Sentinel - Automated Compliance SaaS",
  description: "Automated Compliance SaaS for Australian Institutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}