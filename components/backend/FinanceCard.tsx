import { Layers } from 'lucide-react'
import React from 'react'

export default function FinanceCard({data}) {
  return (
    <div className={'rounded-lg outline shadow-md p-8 text-white flex items-center flex-col gap-2'}>
        {/* Cards */}
        <Layers />
        <h4>{data.title}</h4>
        <h2 className="lg:text-2xl lg-1xl">ZAR.{data.sales}</h2>
    </div>
  )
}
