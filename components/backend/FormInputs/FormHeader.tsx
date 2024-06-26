import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FormHeader({title}:any) {
  const router = useRouter();
  return (
    <div>
        <div className="flex item-center justify-between py-6 px-12
        dark:bg-slate-600 rounded-lg bg-slate-300 text-slate-950 
        dark:text-slate-50">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button onClick={()=> router.back()} className="hover:text-red-600">
                <X />
            </button>
        </div>
    </div>
  )
}
