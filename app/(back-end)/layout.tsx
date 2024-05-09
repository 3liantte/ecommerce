"use client"
import Sidebar from '@/components/backend/Sidebar'
import Navbar from '@/components/backend/Navbar'

export default function layout({ children } : any) {
  return (
    <div className='flex'>
        {/* sidebar */}
        <Sidebar />
        <div className="w-full">
            {/* Header */}
            <Navbar />
            <main className="p-8 bg-slate-100 dark:bg-slate-950 text-slate-50 min-h-screen mt-14 ml-52">
              {children}
            </main>
            {/* Main */}
        </div>
        {/* main body */}
    </div>
  );
}
