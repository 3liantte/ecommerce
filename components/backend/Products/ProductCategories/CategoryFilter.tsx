"use client";

import React, { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onSelectCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="p-2 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-900 shadow-md rounded-lg ">
      <div className="flex items-center">
        <select
          value={selectedCategory || ""}
          onChange={(e) =>
            handleCategoryChange(e.target.value === "" ? null : e.target.value)
          }
          className="block w-1/6 px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value={""}>All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
