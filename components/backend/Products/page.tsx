import React from "react";
import ProductsCategories from "./ProductCategories/ProductsCategories";
import ProductList from "./ProductList/ProductList";

const ProductsPage = () => {
  return (
    <div>
      <ProductsCategories />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
