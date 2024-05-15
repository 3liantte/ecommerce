import React, { useEffect, useState } from "react";
import axios from "axios";

interface Coupon {
  code: string;
  discount: number;
  limit: string;
  startDate: string;
  endDate: string;
  dealType: string;
  couponType: string;
  remaining: number;
}

const CouponsList = ({ search }: { search: string }) => {
  const [coupon, setCoupon] = useState<Coupon[]>([]);
  const [curretPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  return <div>CouponsList</div>;
};

export default CouponsList;
