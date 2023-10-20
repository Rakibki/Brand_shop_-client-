import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const loddedData = useLoaderData();
  const [product, setProduct] = useState(loddedData);

  const handleCard = () => {
    fetch("https://server-rakibki.vercel.app/myProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      swal({
        title: "Good job!",
        text: "Card added successfully!",
        icon: "success",
        button: "Aww yiss!",
      });
  };
  return (
    <div className="grid items-center bg-[#f4f4f4] px-6 py-2 md:px-10 lg:px-16 grid-cols-2">
      <div>
        <img className="h-full w-full" src={product.image} alt="" />
      </div>
      <div className="p-5">
        <h1 className="text-3xl mb-3 font-medium ">{product.name}</h1>
        <div className="flex mb-5 gap-10">
          <p>
            Brand: <span className="text-[#85858c]">{product.BrandName}</span>{" "}
          </p>
          <p>
            Category: <span className="text-[#85858c]">{product.Category}</span>
          </p>
        </div>
        <p className="mb-3">{product.ShortDescription}</p>
        <div className="mb-6"> 
          <h3 className="text-xl font-bold text-[#0961b3]">${product.Price}</h3>
        </div>

        <div className="grid items-center gap-4 grid-cols-3">
          <div className="flex justify-center items-start">
            <div className="border-2 flex gap-6 text-xl py-2 px-5">
              <span onClick={() => setCount(count - 1)} className="hover:text-[#e03737]">-</span>{" "}
              <span className="hover:text-[#e03737]">{count}</span>{" "}
              <span  onClick={() => setCount(count + 1)} className="hover:text-[#e03737]">+</span>
            </div>
          </div>
          <div className="col-span-2">
            <button
              onClick={handleCard}
              className="py-3 px-5 rounded-md w-full mt-3 font-medium hover:opacity-70 bg-[#e03737] text-white"
            >
              {" "}
              Add Card{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
