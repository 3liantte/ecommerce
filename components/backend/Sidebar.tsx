"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import logo from '../../public/GrocCheck_Logo-removebg.png';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Globe2, LayoutDashboard, LogOut, Minus, Settings, ShoppingBasket, Slack, Store, Tractor, User, Users, Wallet, icons } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useRouter } from 'next/navigation';



export default function Sidebar() {
  const pathName = usePathname();
  const router = useRouter();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users,
      href: "/dashboard/customers"
    },
    {
      title: "Markets",
      icon: Store,
      href: "/dashboard/markets"
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers"
    },
    {
      title: "Orders",
      icon: ShoppingBasket,
      href: "/dashboard/orders"
    },
    {
      title: "Wallet",
      icon: Wallet,
      href: "/dashboard/wallet"
    },
    {
      title: "Staff",
      icon: User,
      href: "/dashboard/staff"
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings"
    },
    {
      title: "Online Store",
      icon: Globe2,
      href: "/dashboard/online store"
    },
  ]
  const catalogueLinks = [
    {
      title: "Products",

      href: "/dashboard/products"
    },
    {
      title: "Categories",
      href: "/dashboard/categories"
    },
    {
      title: "Attributes",
      href: "/dashboard/attributes"
    },
    {
      title: "Coupons",
      href: "/dashboard/coupons"
    },
    {
      title: "Banners",
      href: "/dashboard/banners"
    },
  ]
  const  [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="dark:bg-slate-900 sm:block bg-slate-200 space-y-6 w-52 h-screen dark:text-slate-50 top-0 left-0 fixed p-3">

        <button className='flex items-center justify-center px-10' onClick={()=> router.push('/dashboard')}>
          <Image src={logo} alt={"GrocCheck Logo"} className="w-24"/>
        </button>

        <div className="space-y-3 flex flex-col">
          <Link className = {pathName == "/dashboard" ? "flex items-center space-x-4 py-2 px-2 border-l-4 border-green-500 text-green-500" : "flex items-center space-x-4 py-2 px-2 border-l-4"}
          href="/dashboard">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>

        <Collapsible>
        <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
        <button className="flex items-center space-x-2">
          <div className="flex items-center space-x-4 py-2 px-2">
            <Slack />
            <span>Catalogue</span>
          </div>
          {openMenu? <ChevronRight /> : <ChevronDown />}
        </button>
        </CollapsibleTrigger>
        <CollapsibleContent className='rounded-lg px-10 dark:bg-slate-950 bg-slate-400 text-sm py-1'>
          {
            catalogueLinks.map((item,i)=>{
              return(
                <Link key={i}
                    className = {pathName == item.href ? "flex items-center space-x-4 py-1 px-2 text-green-500" : "flex items-center space-x-4 py-2 px-2"}
                    href={item.href}>
                    <span>{item.title}</span>
                  </Link>
              )
            })
          }
        </CollapsibleContent>
      </Collapsible>


        {
          sidebarLinks.map((item,i)=>{
            const Icon = item.icon
            return(
              <Link key={i}
              className = {item.href == pathName?"flex items-center space-x-4 py-2 px-2 border-l-4 border-green-500 text-green-500" : "flex items-center space-x-4 py-2 px-2 border-l-4"}
              href={item.href}>
              <Icon />
              <span>{item.title}</span>
            </Link>
            )
          })
        }

        <button className='px-6 py-3.5 space-x-2 text-base font-medium text-white inline-flex items-center 
        bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
        rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
          <LogOut />
          <span>Log Out</span>
        </button>
        </div>
    </div>
  );
}
