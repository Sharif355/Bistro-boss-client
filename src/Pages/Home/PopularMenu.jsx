import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div className="my-16">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10 max-w-screen-lg mx-auto">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className=" btn btn-outline border-0 text-xl font-medium text-black mx-auto flex justify-center  border-b-4 border-black">
        View Full Menu
      </button>
    </div>
  );
};

export default PopularMenu;
