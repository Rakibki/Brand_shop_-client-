import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCard = () => {
  const looderCardData = useLoaderData();
  const [myCard, setMyCard] = useState(looderCardData);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myProducts/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const filterProducts = myCard.filter((item) => item._id !== id)
      setMyCard(filterProducts)
    })
  }

  return (
    <div className=" px-6 py-2 md:px-10 lg:px-16">
      {myCard.length > 0 ? <h1>My Card</h1> : ""}
      {myCard.length > 0 ? "" : <h1>There are no products on my card</h1>}
      {myCard?.map((item) => {
        return (
          <div className="grid items-center mb-6 grid-cols-4">
            <div>
              <img src={item.image} />
            </div>
            <div className="col-span-2">
              <h1>{item.name}</h1>
              <p>Brand {item.BrandName}</p>
              <p>Category {item.Category}</p>
              <h2>{item.Price}</h2>
            </div>
            <div>
              <button onClick={() => handleDelete(item._id)} className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white">
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
