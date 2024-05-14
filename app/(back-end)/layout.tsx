"use client"
import Navbar from '@/components/backend/Navigations/Navbar'

export default function layout({ children } : any) {
  return (
    <div>
        <div>
            {/* Header */}
            <Navbar />
            <main className="p-8 bg-slate-100 dark:bg-slate-950 text-slate-50 min-h-screen mt-14">
              {children}
            </main>
            {/* Main */}
        </div>
        {/* main body */}
    </div>
  );
}
