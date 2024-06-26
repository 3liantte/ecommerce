"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/GrocCheck_Logo-removebg.png";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  FileBox,
  Flag,
  Globe2,
  LayoutDashboard,
  LogOut,
  Minus,
  Settings,
  ShoppingBag,
  ShoppingBasket,
  Slack,
  Store,
  Tag,
  Ticket,
  Tractor,
  User,
  Users,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion } from "framer-motion";

export default function Sidebar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Store,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: ShoppingBasket,
      href: "/dashboard/orders",
    },
    {
      title: "Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: Globe2,
      href: "/dashboard/online store",
    },
  ];

  const catalogueLinks = [
    { title: "Products", icon: ShoppingBag, href: "/dashboard/products" },
    { title: "Categories", icon: FileBox, href: "/dashboard/categories" },
    { title: "Attributes", icon: Tag, href: "/dashboard/attributes" },
    { title: "Coupons", icon: Ticket, href: "/dashboard/coupons" },
    { title: "Banners", icon: Flag, href: "/dashboard/banners" },
  ];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="dark:bg-slate-900 sm:block bg-slate-200 space-y-6 w-52 h-screen dark:text-slate-50 top-0 left-0 fixed p-3">
      <Link className="flex items-center justify-center" href="#">
        <Image src={logo} alt={"GrocCheck Logo"} className="w-24" />
      </Link>

      <div className="space-y-3 flex flex-col">
        <Link
          className={`flex items-center space-x-4 py-2 px-2 border-l-4 ${
            pathName == "/dashboard" ? "border-green-500 text-green-500" : ""
          }`}
          href="/dashboard"
        >
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
              {openMenu ? <ChevronRight /> : <ChevronDown />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg px-10 dark:bg-slate-950 bg-slate-300 text-sm py-1">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  className={
                    pathName == item.href
                      ? "flex items-center space-x-4 py-1 px-2 text-green-500"
                      : "flex items-center space-x-4 py-2 px-2"
                  }
                  href={item.href}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={15} />
                    <span>{item.title}</span>
                  </span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              className={`flex items-center space-x-4 py-2 px-2 border-l-4 ${
                item.href == pathName ? "border-green-500 text-green-500" : ""
              }`}
              href={item.href}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}

        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={handleLogout}
          className="px-6 py-3.5 space-x-2 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <LogOut />
          <span>Log Out</span>
        </motion.button>
      </div>
    </div>
  );
}
