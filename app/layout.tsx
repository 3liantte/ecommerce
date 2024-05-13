import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../ui/globals.css";
import Providers from "@/context/Providers";


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

