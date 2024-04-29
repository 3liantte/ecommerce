import React from 'react'
import OrderDetailsCard from './OrderDetailsCard'
import { CheckCheck, Loader, RefreshCcw, ShoppingBag} from 'lucide-react'
import { color } from 'chart.js/helpers';

export default function OrderDetailsCards() {
  const orderStats = [
    {
      title: "Total Orders",
      number: 5000,
      icon:  ShoppingBag,
    },
    {
      title: "Pending Orders",
      number: 250,
      icon: Loader,
    },
    {
      title: "Orders Processing",
      number: 1500,
      icon: RefreshCcw,
    },
    {
      title: "Delivered Orders",
      number: 18000,
      icon: CheckCheck,
    }
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">

      {
        orderStats.map((data,i)=>{
          return(
            <OrderDetailsCard data={data} />
          )
        })
      }


    </div>
  )
}
