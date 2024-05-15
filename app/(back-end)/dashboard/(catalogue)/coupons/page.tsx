"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/backend/CouponManegement/Header";
import CreateCoupon from "@/components/backend/CouponManegement/CreateCoupon";
import CouponsList from "@/components/backend/CouponManegement/CouponsList";

const page = () => {
  const [search, setSearch] = useState("");
  const [totalCoupons, setTotalCoupons] = useState(0);

  useEffect(() => {
    fetchTotalCoupons();
  }, []);

  const fetchTotalCoupons = async () => {
    const res = await axios.get("http://localhost:5000/api/coupons");
    setTotalCoupons(res.data.coupons.length);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="p-4">
      <Header totalCoupons={totalCoupons} onSearch={handleSearch} />
      <CreateCoupon />
      <h2 className="text-2xl my-4">Coupons List</h2>
      <CouponsList search={search} />
      {/* <h2 className="text-2xl my-4">Redemptions List</h2>
      <RedemptionsList /> */}
    </div>
  );
};

export default page;
