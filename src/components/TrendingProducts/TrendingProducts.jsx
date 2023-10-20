import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { authContext } from "../../providers/AuthProvider";

const TrendingProducts = () => {
  const [TrendingProducts, setTrendingProducts] = useState([]);

  const {isDark} = useContext(authContext)

  useEffect(() => {
    fetch("https://server-rakibki.vercel.app/TrendingProducts")
      .then((res) => res.json())
      .then((data) => setTrendingProducts(data));
  }, []);

  return (
    <section className="my-16  px-6 py-2 md:px-10 lg:px-16">
      <div className="flex mb-4 items-center gap-2">
        <div className="bg-[#e14040] w-2 h-6"></div>
        <h1 className={`text-2xl ${isDark ? "text-white" : "text-black"} font-semibold`}>Trending Products</h1>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {TrendingProducts?.map((item) => {
          return (
            <div key={item._id}>
              <div className="border-2 border-[#eaeaea] hover:shadow-xl">
                <figure>
                  <img src={item.img} />
                </figure>
                <div className="p-6">
                  <small className=" text-[#7d879c]">{item.name}</small>
                  <h3 className={`text-sm hover:text-[#e14040]  ${isDark ? "text-white" : "text-black"} mt-2 mb-4 font-semibold`}>
                    {item.desc}
                  </h3>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[#e14040] font-bold">
                        ${item.price}
                      </h3>
                    </div>
                    <div className="flex text-[#f29f29] gap-.5 text-lg">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
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
