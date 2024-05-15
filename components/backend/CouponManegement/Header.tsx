"use client";

import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

const Header = ({
  totalCoupons,
  onSearch,
}: {
  totalCoupons: number;
  onSearch: (value: string) => void;
}) => {
  const exportCSV = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/coupons/export",
      {
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "coupons.csv");
    document.body.appendChild(link);
    link.click();
  };

  const importCSV = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      await axios.post("http://localhost:5000/api/coupons/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("CSV imported successfully");
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-slate-200 dark:bg-slate-900  text-slate-900 dark:text-slate-50 shadow rounded-lg">
      <button
        onClick={exportCSV}
        className="cursor-pointer space-x-2 px-6 py-2 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <ArrowUpFromLine /> <span>Export CSV</span>
      </button>
      <label className="cursor-pointer space-x-2 px-6 py-2 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <ArrowDownToLine />
        <span>Import CSV</span>
        <input type="file" onChange={importCSV} className="hidden" />
      </label>
      <div className="text-base font-medium px-6 py-2 rounded-lg border border-spacing-2 ">
        Total Coupons: {totalCoupons}
      </div>
      <SearchInput onSearch={onSearch} />
    </div>
  );
};

export default Header;
