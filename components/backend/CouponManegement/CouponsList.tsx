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
  const [coupon, setCoupons] = useState<Coupon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCoupons();
  }, [currentPage, search]);

  const fetchCoupons = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/coupons?page=${currentPage}&limit=10&search=${search}`
    );
    setCoupons(res.data.coupons);
    setTotalPages(res.data.tatalPages);
  };

  return (
    <div className=" bg-slate-200 dark:bg-slate-900  text-slate-900 dark:text-slate-50">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">code</th>
            <th className="border p-2">Discount</th>
            <th className="border p-2">Limit</th>
            <th className="border p-2">Start Date</th>
            <th className="border p-2">End Date</th>
            <th className="border p-2">Deal Type</th>
            <th className="border p-2">Coupon</th>
            <th className="border p-2">Remaining</th>
          </tr>
        </thead>
        <tbody>
          {coupon.map((coupon) => (
            <tr key={coupon.code}>
              <td className="border p-2">{coupon.code}</td>
              <td className="border p-2">{coupon.discount}</td>
              <td className="border p-2">{coupon.limit}</td>
              <td className="border p-2">
                {new Date(coupon.startDate).toLocaleDateString()}
              </td>
              <td className="border p-2">
                {new Date(coupon.endDate).toLocaleDateString()}
              </td>
              <td className="border p-2">{coupon.dealType}</td>
              <td className="border p-2">{coupon.couponType}</td>
              <td className="border p-2">{coupon.remaining}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="space-x-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 cursor-pointer"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="space-x-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CouponsList;
