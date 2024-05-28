"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  categoryTitle: string;
  categoryDescription: string;
  categoryImage: string;
}

const TableList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const endpoint = "api/categories";
        const response = await axios.get<Category[]>(`${baseUrl}/${endpoint}`);
        setCategories(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-700 dark:text-gray-300">
        <span className="loader"></span>
      </p>
    );
  }

  if (error) {
    return <p className="pt-4 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 rounded-lg bg-slate-200 dark:bg-slate-900  text-slate-900 dark:text-slate-50">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="">
            <tr>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Image</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border-b">{category.categoryTitle}</td>
                <td className="px-4 py-2 border-b">
                  {category.categoryDescription}
                </td>
                <td className="px-4 py-2 border-b">
                  <img
                    src={category.categoryImage}
                    alt={category.categoryTitle}
                    className="w-12 h-12 object-cover mx-auto rounded-lg"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
