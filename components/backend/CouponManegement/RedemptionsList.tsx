"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Redemption {
  couponCode: string;
  takenBy: string;
  takeDate: string;
  status: string;
  endTime: string;
  starTime: string;
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
    <div className="rounded-tr-lg bg-slate-200 dark:bg-slate-900  text-slate-900 dark:text-slate-50">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Taken By</th>
            <th className="border p-2">Take Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">End Time</th>
            <th className="border p-2">Start Time</th>
            <th className="border p-2">Coupon Content</th>
          </tr>
        </thead>
        <tbody>
          {redemptions.map((redemption) => (
            <tr key={redemption.couponCode}>
              <td className="border p-2">{redemption.takenBy}</td>
              <td className="border p-2">
                {new Date(redemption.takeDate).toLocaleDateString()}
              </td>
              <td className="border p-2">{redemption.status}</td>
              <td className="border p-2">
                {new Date(redemption.endTime).toLocaleDateString()}
              </td>
              <td className="border p-2">
                {new Date(redemption.starTime).toLocaleDateString()}
              </td>
              <td className="border p-2">{redemption.couponContent}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-green-500 p-2 rounded-lg cursor-pointer disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-green-500 p-2 rounded-lg cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RedemptionsList;
