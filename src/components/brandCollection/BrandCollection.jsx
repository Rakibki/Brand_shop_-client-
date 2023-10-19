import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const BrandCollection = () => {
  const LoddedProducts = useLoaderData();
  const [products, setProducts] = useState(LoddedProducts);

  console.log(products);

  return (
    <div className=" my-6 md:px-10 lg:px-16">
      {/* <h2>List of products by brand</h2> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((item) => {
          return (
            <div key={item._id}>
              <div className=" shadow-xl">
                <figure>
                  <img src={item.image} />
                </figure>
                <div className="card-body">
                  <small className="text-[#8d8d8d] font-semibold">
                    {item.BrandName}
                  </small>
                  <h2 className="card-title">{item.name}</h2>
                  <p className="text-[#8d8d8d] text-sm">
                    {item.ShortDescription}
                  </p>

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
                    <button className="py-1 px-2 text-sm hover:opacity-70 bg-[#e03737] text-white">
                      Update
                    </button>{" "}
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
