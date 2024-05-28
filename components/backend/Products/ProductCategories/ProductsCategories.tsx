import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
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
      price: 198,
      description: "Premium quality Maze",
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
