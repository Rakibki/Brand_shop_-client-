
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

    console.log(name, BrandName, Category, Price, Rating, ShortDescription, image);

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
              <label htmlFor="BrandName">Brand Name</label> <br />
              <div className="relative">
                <input
                  className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                  type="text"
                  id="BrandName"
                  name="BrandName"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mb-4 md:w-1/2">
              <label htmlFor="Category">Category</label> <br />
              <div className="relative">
                <input
                  className="outline-none focus:border-[#e03737] border-2 w-full p-1.5 mt-1"
                  type="text"
                  id="Category"
                  name="Category"
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
