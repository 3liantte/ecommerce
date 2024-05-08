"use client"

import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" >
        {children}
    </ThemeProvider>
  )
}

// export default function Providers({ children }: { children: React.ReactNode }) {
//     return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
// }