"use client";

import React, { useState } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

const CreateCoupon = () => {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dealType, setDealType] = useState("Discount");
  const [couponType, setCouponType] = useState("");

  const createCoupon = async () => {
    try {
      await axios.post("http://localhost:5000/api/coupons", {
        code,
        discount,
        limit,
        startDate,
        endDate,
        dealType,
        couponType,
      });
      toast.success("Coupon created successfully");
    } catch (error) {
      toast.error("Error creating coupon");
      console.error(error);
    }
  };

  return (
    <div className="mt-6 p-6 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400">
          Set Default
        </button>
        <button
          onClick={createCoupon}
          className="flex space-x-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          <Plus />
          <span>Create Coupon</span>
        </button>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/6 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/12 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">Limit</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/12 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">Percentage</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/6 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">Deal Type</label>
          <select
            value={dealType}
            onChange={(e) => setDealType(e.target.value)}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="Discount">Discount</option>
            <option value="Sale">Sale</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/6 px-2 mb-4">
          <label className="block mb-2 text-sm font-medium">Coupon Type</label>
          <select
            value={couponType}
            onChange={(e) => setCouponType(e.target.value)}
            className="text-slate-900 w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="String">String</option>
            <option value="Number">Number</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateCoupon;
