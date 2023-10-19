import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BrandCollection = () => {
  const LoddedProducts = useLoaderData();
  const [products, setProducts] = useState(LoddedProducts);

  return (
    <div className=" my-6 md:px-10 lg:px-16">
      {/* <h2>List of products by brand</h2> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((item) => {
          return (
            <div>
              <div className=" shadow-xl">
                <figure>
                  <img src={item.image}/>
                </figure>
                <div className="card-body">
                <small className="text-[#8d8d8d] font-semibold">{item.BrandName}</small>
                  <h2 className="card-title">
                    {item.name}
                  </h2>
                  <p className="text-[#8d8d8d] text-sm">{item.ShortDescription}</p>

                    <div className="flex justify-between">
                        <h1>{item.Price}</h1>
                        <div>******{item.Rating}</div>
                    </div>  

                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandCollection;
