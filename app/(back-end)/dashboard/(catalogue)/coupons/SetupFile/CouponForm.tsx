"use client";

import { useState } from "react";
import PayPalButton from "./PayPalButton";

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
    <div className="p-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter coupon code"
        className="border p-2"
      />
      <button onClick={applyCoupon} className="bg-blue-500 text-white p-2 ml-2">
        Apply Coupon
      </button>
      {message && <p className="mt-2">{message}</p>}
      {discount !== null && (
        <PayPalButton amount={100 * (1 - discount / 100)} />
      )}
    </div>
  );
};

export default CouponForm;
