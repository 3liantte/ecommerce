"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Redemption {
  couponCode: string;
  takenBy: string;
  takeDate: string;
  status: string;
  endTime: string;
  startime: string;
  couponContent: string;
}

const RedemptionsList = () => {
  const [redemptions, setRedemptions] = useState<Redemption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRedemptions();
  }, [currentPage]);

  const fetchRedemptions = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/redemptions?page=${currentPage}&limit=10`
    );
    setRedemptions(res.data.redemptions);
    setTotalPages(res.data.totalPages);
  };

  return (
    <div>
      <p>RedemptionsList</p>
    </div>
  );
};

export default RedemptionsList;
