import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";

const SingleProduct = ({ item }) => {
  return (
    <div>
      <div className=" shadow-xl">
        <figure>
          <img src={item.image} />
        </figure>
        <div className="p-8 md:p-5 lg:p-3">
          <span className="text-[#8d8d8d] font-medium">{item.BrandName}</span>
          <h2 className="card-title">{item.name}</h2>
          <p className="text-[#8d8d8d] text-sm">{item.ShortDescription}</p>

          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-[#0961b3] mb-2">
              ${item.Price}
            </h1>
            <div>
              {" "}
              <Rate className="text-sm text-[#f29f29]" defaultValue={item.Rating} />
            </div>
          </div>

          <div className="flex gap-2">
            <Link to={`/product/${item._id}`}>
              <button className="py-1 px-2 text-sm hover:opacity-70 bg-[#e03737] text-white">
                Details
              </button>{" "}
            </Link>
            <Link to={`/products/${item._id}`}>
              <button className="py-1 px-2 text-sm hover:opacity-70 bg-[#e03737] text-white">
                Update
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
