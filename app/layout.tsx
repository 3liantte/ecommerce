import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../ui/globals.css";
import Providers from "@/context/Providers";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grocery Check",
  description: "Shopping online, order groceries online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

