import { MenuIcon, PanelLeftClose } from 'lucide-react';
import React, { useState } from 'react'
import Sidebar from './Sidebar';

export default function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
      setShowMenu(prev => !prev);
  }

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
      setIsOpen(false);
  };

  return (
    <div>
    <div className='flex item-center justify-center flex-row'>
        <button
            onClick={toggleMenu}
            className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
        >
            {isOpen ? <PanelLeftClose className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
    </div>
    {isOpen && (
        <div className="fixed inset-0 z-50" onClick={closeSidebar}>
            <div className="absolute inset-y-0 left-0 flex flex-col w-64 shadow" onClick={(e) => e.stopPropagation()}>
                <div className="p-4">
                    <Sidebar />
                    {/* Add more menu items as needed */}
                </div>
            </div>
        </div>
    )}
</div>

  )
}

