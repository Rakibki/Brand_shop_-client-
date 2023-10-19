import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  return (
    <div>
      <div className=" shadow-xl">
        <figure>
          <img src={item.image} />
        </figure>
        <div className="card-body">
          <small className="text-[#8d8d8d] font-semibold">
            {item.BrandName}
          </small>
          <h2 className="card-title">{item.name}</h2>
          <p className="text-[#8d8d8d] text-sm">{item.ShortDescription}</p>

          <div className="flex justify-between">
            <h1>{item.Price}</h1>
            <div>******{item.Rating}</div>
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
