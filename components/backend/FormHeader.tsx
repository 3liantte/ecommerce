import { X } from 'lucide-react'
import React from 'react'

export default function FormHeader({title}:any) {
  return (
    <div>
        <div className="flex item-center justify-between py-6 px-12
        dark:bg-slate-600 rounded-lg bg-slate-300 text-slate-950 
        dark:text-slate-50">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button>
                <X />
            </button>
        </div>
    </div>
  )
}
