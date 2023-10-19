const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const BrandName = e.target.BrandName.value;
    const Category = e.target.Category.value;
    const Price = e.target.Price.value;
    const Rating = e.target.Rating.value;
    const ShortDescription = e.target.ShortDescription.value;
    const image = e.target.image.value;
    const product = {
      name,
      BrandName,
      Category,
      Price,
      Rating,
      ShortDescription,
      image,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        e.target.reset()
      });
  };

  return (
    <div className="w-full py-16 flex justify-center bg-[#73b1b0]">
      <div className="w-[80%] shadow-2xl p-8 bg-white md:w-[70%] lg:w-[50%]">
        <form onSubmit={handleAddProduct}>
          <div className="flex gap-3">
            <div className="mb-4 md:w-1/2">
              <label htmlFor="name">Name</label> <br />
              <div className="relative">
                <input
                  className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
            </div>

            <div className="mb-4 md:w-1/2">
              <label htmlFor="Price">Price</label> <br />
              <div className="relative">
                <input
                  className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                  type="text"
                  id="Price"
                  name="Price"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mb-4 md:w-1/2">
              <label htmlFor="Rating">Rating</label> <br />
              <div className="relative">
                <input
                  className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                  type="text"
                  id="Rating"
                  name="Rating"
                />
              </div>
            </div>

            <div className="mb-4 md:w-1/2">
              <label htmlFor="ShortDescription">Short description</label> <br />
              <div className="relative">
                <input
                  className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                  type="text"
                  id="ShortDescription"
                  name="ShortDescription"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mb-4 md:w-1/2">
              <label htmlFor="ShortDescription">Category</label> <br />
              <select
                className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                name="Category"
                id="Category"
              >
                <option value="">Select</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="Leplop">Leplop</option>
                <option value="Smart Watches">Smart Watches</option>
                <option value="Headphones">Headphones</option>
              </select>
            </div>

            <div className="mb-4 md:w-1/2">
              <label htmlFor="ShortDescription">Brand Name</label> <br />
              <select
                className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                name="BrandName"
                id="BrandName"
              >
                <option value="">Select</option>
                <option value="sony">sony</option>
                <option value="mircosoft">mircosoft</option>
                <option value="canon">canon</option>
                <option value="amazon">amazon</option>
                <option value="sennheiser">sennheiser</option>
                <option value="motorola">motorola</option>
                <option value="sansung">sansung</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="image">Image URL</label> <br />
            <div className="relative">
              <input
                className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                type="text"
                id="image"
                name="image"
              />
            </div>
          </div>

          <button className="py-3 px-5 rounded-md w-full mt-3 font-medium hover:opacity-70 bg-[#e03737] text-white">
            {" "}
            Add Product{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
