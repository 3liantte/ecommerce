import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Pen } from "lucide-react";
import toast from "react-hot-toast";

interface Coupon {
  _id: string;
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
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCoupons();
  }, [currentPage, search]);

  const fetchCoupons = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/coupons?page=${currentPage}&limit=10&search=${search}`
      );
      console.log("Coupons fetched:", res.data.coupons);
      setCoupons(res.data.coupons);
      setTotalPages(res.data.totalPages);
      setError(null);
    } catch (err) {
      setError(
        "Network Error: Unable to fetch coupons. Please try again later."
      );
      console.error(err);
    }
  };

  const deleteCoupon = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/coupons/${id}`);
      toast.success("Coupon deleted successfully");
      fetchCoupons();
    } catch (error) {
      toast.error("Error deleting coupon");
      console.error(error);
    }
  };

  const updateCoupon = async (id: string, updatedCoupon: Partial<Coupon>) => {
    try {
      const {
        code,
        discount,
        limit,
        startDate,
        endDate,
        dealType,
        couponType,
        remaining,
      } = updatedCoupon;

      const remainingNum =
        typeof remaining === "string" ? parseInt(remaining, 10) : remaining;

      const updatedData: Partial<Coupon> = {
        code,
        discount,
        limit,
        startDate,
        endDate,
        dealType,
        couponType,
        remaining: remainingNum,
      };

      await axios.put(`http://localhost:5000/api/coupons/${id}`, updatedData);
      toast.success("Coupon updated successfully");
      fetchCoupons();
    } catch (error) {
      toast.error("Error updating coupon");
      console.error(error);
    }
  };

  return (
    <div className="p-6 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      {error && (
        <div className="flex justify-center p-2 text-red-500">{error}</div>
      )}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Code
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Discount
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Limit
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Start Date
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              End Date
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Deal Type
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Coupon Type
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Remaining
            </th>
            <th className="border border-slate-900 dark:border-slate-200 p-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon._id}>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {coupon.code}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {coupon.discount}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {coupon.limit}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {new Date(coupon.startDate).toLocaleDateString()}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {new Date(coupon.endDate).toLocaleDateString()}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {coupon.dealType}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {coupon.couponType}
              </td>
              <td className="border border-slate-900 dark:border-slate-200 p-2">
                {coupon.remaining}
              </td>
              <td className="flex justify-between border border-slate-900 dark:border-slate-200 p-2">
                <button
                  onClick={() =>
                    updateCoupon(coupon._id, {
                      code: coupon.code,
                      discount: coupon.discount,
                      limit: coupon.limit,
                      startDate: coupon.startDate,
                      endDate: coupon.endDate,
                      dealType: coupon.dealType,
                      couponType: coupon.couponType,
                      remaining: coupon.remaining,
                    })
                  }
                  className="bg-green-500 text-white p-1 rounded-lg hover:bg-green-600 mr-2"
                >
                  <Pen />
                </button>
                <button
                  onClick={() => deleteCoupon(coupon._id)}
                  className="bg-red-500 text-white p-1 rounded-lg hover:bg-red-600"
                >
                  <Trash2 />
                </button>
              </td>
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
