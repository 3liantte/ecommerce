import React from 'react'

export default function OrderDetailsCard({data}) {
    const {title,number,icon: Icon} = data;
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
        <div className="flex space-x-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full
            flex items-center justify-center text-slate-950">
                <Icon />
            </div>
            <div className=''>
                <p>{title}</p>
                <h3 className="text-2xl font-bold">{number}</h3>
            </div>
        </div>
    </div>
  )
}
