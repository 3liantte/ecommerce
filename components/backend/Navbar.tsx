import { AlignJustify, Bell, Sun, SunMoon, UserRound } from 'lucide-react'
import React from 'react'
import Profile from "../../public/Profile.png"
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="flex z-10 items-center bg-slate-900 justify-between text-slate-50 h-16
     px-8 py-4 fixed top-0 w-full ml-52 pr-[16rem]">
        {/* Menu Icon */}
        <button>
            <AlignJustify />
        </button>
        {/* User Icons */}
        <div className="flex space-x-3">
            <button>
                <Sun />
            </button>
            <button type="button" 
            className="relative inline-flex items-center p-3 text-sm font-medium 
            text-center text-white bg-transparent rounded-lg hover:bg-blue-800 
            focus:ring-4 focus:outline-none 
            dark:hover:bg-blue-700">
                <Bell />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center 
                w-6 h-6 text-xs font-bold text-white bg-red-500 
                rounded-full -top-0.5 -end-1 dark:border-gray-900">20</div>
            </button>
            <button>
                <Image src={Profile} alt={"profile"} width={200} height={200} className="w-7 h-7 rounded-full"/>
            </button>
        </div>
    </div>
  )
}
