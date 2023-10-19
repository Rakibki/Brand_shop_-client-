import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetails = () => {
    const loddedData = useLoaderData()
    const [product, setProduct] = useState(loddedData)
    
    const handleCard = () => {
        fetch('http://localhost:5000/myProducts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
    return (
    <div className='grid  px-6 py-2 md:px-10 lg:px-16 grid-cols-2'>
        <div>
            <img src={product.image} alt="" />
        </div>
        <div>
            <h1 className='text-3xl '>{product.name}</h1>
            <div className='flex gap-4'>
                <p>Brand: {product.BrandName}</p>
                <p>Category: {product.Category}</p>
            </div>
            <p>{product.ShortDescription}</p>
            <div>
                ********
            </div>
            <h3>{product.Price}</h3>
            <button onClick={handleCard} className="py-3 px-5 rounded-md w-full mt-3 font-medium hover:opacity-70 bg-[#e03737] text-white">
            {" "}
            Add Card{" "}
          </button>
        </div>
    </div>
  )
}

export default ProductDetails