import RedemptionsList from "@/components/backend/CouponManegement/RedemptionsList";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl my-4">Coupons List</h2>
      <RedemptionsList />
    </div>
  );
};

export default page;
