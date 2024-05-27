"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/backend/CouponManegement/Header";
import CreateCoupon from "@/components/backend/CouponManegement/CreateCoupon";
import CouponsList from "@/components/backend/CouponManegement/CouponsList";
import Link from "next/link";
import { Ticket } from "lucide-react";

interface Coupon {
  id: string;
  value: number;
}

const page = () => {
  const [search, setSearch] = useState("");
  const [totalCoupons, setTotalCoupons] = useState(0);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/coupons");
        const coupons: Coupon[] = response.data;

        const total = coupons.reduce(
          (sum: number, coupon: Coupon) => sum + coupon.value,
          0
        );
        setTotalCoupons(total);
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    fetchCoupons();
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="p-4">
      <h2
        className="flex space-x-2 items-center my-4 text-slate-950 
        dark:text-slate-50"
      >
        <span>
          <Ticket size={40} />
        </span>
        <span className="font-bold text-3xl">Coupons</span>
      </h2>
      <Header totalCoupons={totalCoupons} onSearch={handleSearch} />
      <CreateCoupon />
      <div className="flex justify-between items-center">
        <h2
          className="text-2xl my-4 text-slate-900 
        dark:text-slate-50"
        >
          Coupons List
        </h2>
        <button className="space-x-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
          <Link href={"/dashboard/coupons/redeemlist"}>Redeemed List</Link>
        </button>
      </div>
      <CouponsList search={search} />
    </div>
  );
};

export default page;
