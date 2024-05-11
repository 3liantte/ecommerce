import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  PackageOpen,
  Users,
  Store,
  Tractor,
  ShoppingBasket,
  User,
  Settings,
  Globe2,
  ShoppingBag,
  Tag,
  Ticket,
  Flag,
  FileBox,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import logo from "../../public/GrocCheck_Logo-removebg.png";

export default function Sidebar() {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  const sidebarLinks = [
    { title: "Customers", icon: Users, href: "/dashboard/customers" },
    { title: "Markets", icon: Store, href: "/dashboard/markets" },
    { title: "Farmers", icon: Tractor, href: "/dashboard/farmers" },
    { title: "Orders", icon: ShoppingBasket, href: "/dashboard/orders" },
    { title: "Staff", icon: User, href: "/dashboard/staff" },
    { title: "Settings", icon: Settings, href: "/dashboard/settings" },
    { title: "Online Store", icon: Globe2, href: "/dashboard/online store" },
  ];

  const catalogueLinks = [
    { title: "Products", icon: ShoppingBag, href: "/dashboard/products" },
    { title: "Categories", icon: FileBox, href: "/dashboard/categories" },
    { title: "Attributes", icon: Tag, href: "/dashboard/attributes" },
    { title: "Coupons", icon: Ticket, href: "/dashboard/coupons" },
    { title: "Banners", icon: Flag, href: "/dashboard/banners" },
  ];

  return (
    <div className="dark:bg-slate-900 sm:block bg-slate-200 space-y-6 w-52 h-screen dark:text-slate-50 top-0 left-0 fixed p-3">
      <Link className="flex justify-center" href="#">
        <Image src={logo} alt="GrocCheck Logo" className="w-24" />
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
                <PackageOpen />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronRight /> : <ChevronDown />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex items-start flex-col rounded-lg px-3 dark:bg-slate-950 bg-slate-300 text-sm">
            {catalogueLinks.map((item, i) => (
              <Link
                key={i}
                className={`flex items-center space-x-4 py-2 px-4 ${
                  pathName == item.href ? "text-green-500" : ""
                }`}
                href={item.href}
              >
                <span className="px-2">
                  <item.icon width={15} />
                </span>
                <span>{item.title}</span>
              </Link>
            ))}
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

        <button
          onClick={handleLogout}
          className="px-6 py-3.5 space-x-2 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <LogOut />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
