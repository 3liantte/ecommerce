import React from 'react'
import Heading from './Heading'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function PageHeader({heading, linkTitle, href}: any) {
  return (
    <div>
        <div className="flex justify-between">
        <Heading title={heading} />
        <Link className="text-white bg-green-500 
            hover:bg-[#16a34a]/90 focus:ring-4 
            focus:outline-none focus:ring-[#16a34a]/50 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
            items-center dark:focus:ring-[#16a34a]/55 space-x-3 me-2 mb-2" 
            href={href}>
            <Plus/>
            <span>{linkTitle}y</span>
        </Link>
      </div>
    </div>
  )
}
