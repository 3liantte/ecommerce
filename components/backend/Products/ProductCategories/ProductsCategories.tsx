import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  price: number;
}

const ProductsCategories: React.FC = () => {
  const products = [
    {
      name: "Rice",
      price: 195,
      description: "Premium quality rice",
      imageUrl: "/rice.jpg",
    },
    {
      name: "Chicken",
      price: 115,
      description: "Organic chicken breast",
      imageUrl: "/chicken.jpg",
    },
    {
      name: "Coco-Butter",
      price: 80,
      description: "Natural coco-butter",
      imageUrl: "/coco-butter.jpg",
    },
    {
      name: "Soap",
      price: 50,
      description: "Gentle cleansing soap",
      imageUrl: "/soap.jpg",
    },
    {
      name: "Fish",
      price: 145,
      description: "Freshly caught fish",
      imageUrl: "/fish.jpg",
    },
    {
      name: "Maze-Meal",
      price: 198,
      description: "Fresh and Fine Maze-Meal",
      imageUrl: "/Maze_Meal.jpg",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold">Products Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsCategories;
