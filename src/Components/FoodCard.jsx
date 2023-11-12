const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className=" w-96 bg-base-100 shadow-xl">
        <figure className=" relative ">
          <img className="w-full" src={image} alt={name} />
          <p className=" bg-black text-white absolute top-5 right-0 mr-2 p-2 ">
            ${price}
          </p>
        </figure>
        <div className="flex flex-col items-center space-y-3 justify-center p-3 bg-[#F3F3F3] ">
          <h2 className="card-title">{name}</h2>
          <p className="flex-grow">{recipe}</p>
          <div className="">
            <button className="btn bg-[#E8E8E8] btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
