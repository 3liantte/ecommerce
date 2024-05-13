"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}

// export default function Providers({ children }: { children: React.ReactNode }) {
//     return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
// }
