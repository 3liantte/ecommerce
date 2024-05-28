import React from "react";

interface Product {
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="mt-6 p-6 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-900 shadow-md rounded-lg overflow-hidden">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold text-green-500">{product.name}</h2>

        <p className="mt-2 text-slate-600">R {product.price}</p>

        {product.description && (
          <p className="mt-2 text-sm text-slate-600">{product.description}</p>
        )}

        <div className="mt-4 flex justify-end">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white ml-2 px-4 py-2 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
