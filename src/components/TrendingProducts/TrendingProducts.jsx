import React, { useEffect, useState } from "react";

const TrendingProducts = () => {
  const [TrendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/TrendingProducts")
      .then((res) => res.json())
      .then((data) => setTrendingProducts(data));
  }, []);

  console.log(TrendingProducts);

  return (
    <section className="my-16  px-6 py-2 md:px-10 lg:px-16">
      <h1 className="text-2xl font-semibold">Trending Products</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {TrendingProducts?.map((item) => {
          return (
            <div key={item._id}>
              <div className="shadow-xl">
                <figure>
                  <img src={item.img} />
                </figure>
                <div className="p-6">
                  <small className="text-[#7d879c]">{item.name}</small>
                  <h3 className="text-base font-semibold">{item.desc}</h3>
                  <div className="flex justify-between">
                      <div><h3 className="text-[#4e54c8] font-bold">${item.price}</h3></div>
                      <div>*******</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingProducts;
