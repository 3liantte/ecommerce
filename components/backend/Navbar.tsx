import { AlignJustify, Bell, Sun, SunMoon, UserRound } from 'lucide-react'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex items-center bg-slate-900 justify-between text-slate-50 h-14
     px-8 py-4 fixed top-0 w-full ml-52">
        {/* Menu Icon */}
        <button>
            <AlignJustify />
        </button>
        {/* User Icons */}
        <div className="flex space-x-3">
            <button>
                <Sun />
            </button>
            <button>
                <UserRound />
            </button>
            <button>
                <Bell />
            </button>
        </div>
    </div>
  )
}
