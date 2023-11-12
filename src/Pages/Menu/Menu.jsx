import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/CustomHook/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const deserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="mb-10">
      <Helmet>
        <title>Bistro Boss Restaurant || Our Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      <MenuCategory
        items={offered}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>
      {/* dessert */}
      <MenuCategory
        items={deserts}
        menuCover={dessertCover}
        heading={"dessert"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"Order Now"}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        items={pizza}
        menuCover={pizzaCover}
        heading={"pizza"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"Order Now"}
      ></MenuCategory>
      {/* Salads */}
      <MenuCategory
        items={salad}
        menuCover={saladCover}
        heading={"salad"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"Order Now"}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory
        items={soup}
        menuCover={soupCover}
        heading={"soup"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"Order Now"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
