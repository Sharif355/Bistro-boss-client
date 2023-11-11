const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="flex gap-5  ">
      <img
        className="w-[120px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div className="space-y-2">
        <div className="flex justify-between gap-5">
          <h3 className="text-xl text-black uppercase">{name}--------</h3>
          <p className="text-[#BB8506]"> ${price} </p>
        </div>
        <p className="text-[#737373]"> {recipe} </p>
      </div>
    </div>
  );
};

export default MenuItem;
