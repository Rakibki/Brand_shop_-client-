import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCard = () => {
  const looderCardData = useLoaderData();
  const [myCard, setMyCard] = useState(looderCardData);

  const handleDelete = (id) => {
    fetch(`https://server-rakibki.vercel.app/myProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterProducts = myCard.filter((item) => item._id !== id);
        setMyCard(filterProducts);
        swal({
          title: "Good job!",
          text: "Deleted from card!",
          icon: "success",
          button: "Aww yiss!",
        });
      });
  };

  return (
    <div className=" px-6 py-2 md:px-10 lg:px-16">
      {myCard.length > 0 ? (
        <div className="flex mb-4 items-center gap-2">
          <div className="bg-[#e14040] w-1 h-6"></div>
          <h1 className="text-2xl font-semibold">My Card</h1>
        </div>
      ) : (
        ""
      )}
      {myCard.length > 0 ? "" : <h1 className="border-2 p-2">There are no products on my card</h1>}

      {myCard?.map((item) => {
        return (
          <div className="grid border-2 gap-4 items-center mb-6 grid-cols-4">
            <div>
              <img src={item.image} />
            </div>
            <div className="col-span-2">
              <h1 className="text-lg mb-2 text-[#495160] font-semibold">{item.name}</h1>
              <p><span className="text-[#939aa6] mb-1">Brand</span>: {item.BrandName}</p>
              <p><span className="text-[#939aa6]">Category</span>: {item.Category}</p>
              <h2 className="text-lg font-semibold mt-3 text-[#0961b3]">${item.Price}</h2>
            </div>
            <div>
              <button
                onClick={() => handleDelete(item._id)}
                className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCard;
