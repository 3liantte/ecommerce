"use client";

import { useState } from "react";
import PayPalButton from "./PayPalButton";
import { Ticket } from "lucide-react";

const CouponForm = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState<number | null>(null);

  const applyCoupon = async () => {
    const res = await fetch("http://localhost:5000/api/apply-coupon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage(`Coupon applied! Discount: ${data.discount}%`);
      setDiscount(data.discount);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div>
      <h2 className="flex items-center space-x-2 text-2xl font-semibold text-slate-900 dark:text-slate-50 p-4">
        <Ticket size={30} />
        <span>Coupons</span>
      </h2>
      <div className="flex space-x-2 p-4 mt-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter coupon code"
          className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900
           shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
           focus:ring-2 dark:bg-transparent dark:text-slate-50
           focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={applyCoupon}
          className="px-6 py-3.5 space-x-2 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Apply Coupon
        </button>
        {message && <p className="mt-2">{message}</p>}
        {discount !== null && (
          <PayPalButton amount={100 * (1 - discount / 100)} />
        )}
      </div>
    </div>
  );
};

export default CouponForm;
