"use client";

import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
}

const ProductsCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");

  const addCategory = () => {
    if (newCategory.trim() === "") return;
    const newCat: Category = { id: Date.now(), name: newCategory };
    setCategories([...categories, newCat]);
    setNewCategory("");
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Products Categories</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          onClick={addCategory}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add Category
        </button>
      </div>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex justify-between items-center mb-2"
          >
            <span>{category.name}</span>
            <button
              onClick={() => deleteCategory(category.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCategories;
