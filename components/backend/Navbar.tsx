import { MenuIcon, PanelLeftClose, Bell, LayoutDashboard, Settings, LogOut } from 'lucide-react';
import React, { useState } from 'react';
import Profile from "../../public/Profile.png";
import Img from "../../public/img1.jpg";
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcher from '../ThemeSwitch';
import Sidebar from './Sidebar';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <div className="flex z-10 items-center bg-slate-200 dark:bg-slate-900 justify-between text-slate-900 dark:text-slate-50 h-16
     px-8 py-4 fixed top-0 w-full ml-52 pr-[16rem]">
        {/* Menu Icon */}
        <div>
      <button
        onClick={toggleMenu}
        className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <div className="absolute inset-y-0 left-0 flex flex-col w-64 bg-white shadow">
            <div className="p-4">
              <button
                className="block w-full py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                Home
              </button>
              <button
                className="block w-full py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                About
              </button>
              {/* Add more menu items as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
        {/* User Icons */}
        {/* Dark Mode / Light Mode toggle */}
        <div className="flex space-x-3">
                <ThemeSwitcher />
                {/* Notification Bell */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div
                            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-indigo-800 dark:text-white bg-transparent rounded-lg hover:bg-green-300 dark:hover:bg-green-700"
                        >
                            <Bell />
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0.5 -end-1 dark:border-gray-900">20</div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div
                                className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
                                role="alert"
                            >
                                <div className="flex">
                                    <Image src={Img} alt="img1.jpg" width={250} height={250} className="w-7 h-7 rounded-full" />
                                    <div className="ms-3 text-sm font-normal">
                                        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Koketso B.</span>
                                        <div className="mb-2 text-sm font-normal">Hi, thanks for sharing your thoughts regarding GrocCheck.<p className="font-extralight">21 Dec 2024 - 12:30</p></div>
                                        <a
                                            href="#"
                                            className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"

>                                  </a>
                                    </div>
                                    <button
                                        type="button"
                                        className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                        data-dismiss-target="#toast-message-cta"
                                        aria-label="Close"
                                    >
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* User Img / Icon */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="relative inline-flex items-center p-4 font-medium text-center text-white bg-transparent rounded-lg hover:bg-green-300 dark:hover:bg-green-700">
                            <Image src={Profile} alt="profile" width={200} height={200} className="w-7 h-7 rounded-full" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log Out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
