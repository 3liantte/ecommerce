import { Download, Search, Trash2 } from 'lucide-react'
import React from 'react'

export default function TableActions() {
  return (
    <div>
      <div className="flex justify-between py-6 px-8 
      bg-slate-700 rounded-lg items-center gap-10 mt-8">
        <button className="relative inline-flex items-center justify-center 
        p-0.5 py-3 px-4 text-base space-x-3 font-medium rounded-lg 
         dark:text-white  border-green-500 border
        focus:ring-2 focus:outline-none focus:ring-green-300 
        dark:focus:ring-green-800">
          <Download />
          <span>Export</span>
        </button>

        {/* Search */}
        <div className="flex flex-grow">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className='w-4 h-4 text-gray-500
            dark:text-gray-400 '/>
            </div>
            <input type="text" id="table-search" 
            className="block py-3 ps-10 text-sm text-gray-900 border 
            border-gray-300 rounded-lg w-96 bg-gray-50 focus:ring-green-500 
            focus:border-green-500 dark:bg-gray-700 dark:border-green-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 
            dark:focus:border-green-500" placeholder="Search for items" />
        </div>
    </div>

        {/* Delete */}
        <button className="flex item-center space-x-3 bg-red-600 text-slate-50
        px-3 py-4 rounded-lg font-medium p-0.5 relative ">
          <Trash2/>
          <span>Delete</span>
        </button>

      </div>
    </div>
  )
}
