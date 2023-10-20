import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct";
import slide_brand1 from "../../assets/images/slide_brand-1.jpeg";
import slide_bran2 from "../../assets/images/slide_brand-2.jpeg";

import advertisement1 from "../../assets/images/advertisement/advertisement1.jpg";
import advertisement2 from "../../assets/images/advertisement/advertisement2.jpg";
import advertisement3 from "../../assets/images/advertisement/advertisement3.jpg";

const BrandCollection = () => {
  const LoddedProducts = useLoaderData();
  const [products, setProducts] = useState(LoddedProducts);

  return (
    <div className="px-10 md:px-10 lg:px-16">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide_brand1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide_bran2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {products.length < 1 && (
        <h1 className="text-2xl text-center my-6 text-[#e03737]">
          This brand has no products
        </h1>
      )}

      <div className="grid gap-3 grid-cols-4">
        <div className="flex flex-col gap-3">
            <div><img src={advertisement1} alt="" /></div>
            <div><img src={advertisement2} alt="" /></div>
            <div><img src={advertisement3} alt="" /></div>
        </div>
        <div className="col-span-3">
          <div className="grid my-3 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {products?.map((item) => (
              <SingleProduct key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCollection;
