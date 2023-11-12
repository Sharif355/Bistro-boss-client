import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, heading, subHeading, menuCover, btnText }) => {
  return (
    <div className="my-10">
      {heading && (
        <Cover
          img={menuCover}
          heading={heading}
          subHeading={subHeading}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10 max-w-screen-lg mx-auto">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/shop/${heading}`}>
        <button className=" btn btn-outline border-0 text-xl font-medium text-black mx-auto flex justify-center  border-b-4 border-black normal-case">
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
