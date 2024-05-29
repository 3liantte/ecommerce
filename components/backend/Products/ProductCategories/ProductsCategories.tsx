"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

const ProductsCategories = () => {
  const products = [
    {
      name: "Rice",
      price: 195,
      description: "Premium quality rice",
      imageUrl: "/rice.jpg",
      category: "Staple",
    },
    {
      name: "Chicken",
      price: 115,
      description: "Organic chicken breast",
      imageUrl: "/chicken.jpg",
      category: "Meat",
    },
    {
      name: "Coco-Butter",
      price: 80,
      description: "Natural coco-butter",
      imageUrl: "/coco-butter.jpg",
      category: "Health",
    },
    {
      name: "Maze-Meal",
      price: 195,
      description: "Premium quality Maze-Meal",
      imageUrl: "/Maze.jpg",
      category: "Staple",
    },
    {
      name: "Soap",
      price: 50,
      description: "Gentle cleansing soap",
      imageUrl: "/soap.jpg",
      category: "Personal Care",
    },
    {
      name: "Fish",
      price: 145,
      description: "Freshly caught fish",
      imageUrl: "/fish.jpg",
      category: "Seafood",
    },
  ];

  const allCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategorySelect = (selectedCategory: string | null) => {
    if (selectedCategory === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <CategoryFilter
        categories={["Staple", "Meat", "Health", "Personal Care", "Seafood"]}
        onSelectCategory={handleCategorySelect}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
