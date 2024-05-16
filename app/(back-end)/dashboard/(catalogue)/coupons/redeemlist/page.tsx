import RedemptionsList from "@/components/backend/CouponManegement/RedemptionsList";
import { TicketCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2
          className="flex space-x-2 items-center my-4 text-slate-950 
        dark:text-slate-50"
        >
          <span>
            <TicketCheck size={40} />
          </span>
          <span className="text-3xl font-bold">Redeem List</span>
        </h2>
        <Link href={"/dashboard/coupons"}>
          <button className="bg-green-500 p-2 rounded-lg cursor-pointer">
            Back
          </button>
        </Link>
      </div>
      <RedemptionsList />
    </div>
  );
};

export default page;
