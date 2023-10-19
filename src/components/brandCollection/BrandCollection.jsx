import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";

const BrandCollection = () => {
  const LoddedProducts = useLoaderData();
  const [products, setProducts] = useState(LoddedProducts);

  console.log(products);
  return (
    <div className=" my-6 md:px-10 lg:px-16">
      <h2 className="text-2xl font-semibold text-center my-16">{products.length < 1 ? "This brand has no products" : ""}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((item) => <SingleProduct key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default BrandCollection;
