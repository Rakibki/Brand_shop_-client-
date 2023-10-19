import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";

const BrandCollection = () => {
  const LoddedProducts = useLoaderData();
  const [products, setProducts] = useState(LoddedProducts);

  return (
    <div className=" my-6 md:px-10 lg:px-16">
      {/* <h2>List of products by brand</h2> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((item) => <SingleProduct key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default BrandCollection;
