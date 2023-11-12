import { Helmet } from "react-helmet-async";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Categories from "./Categories";
import Featured from "./FeaturedItem/Featured";
import PopularMenu from "./PopularMenu";
import CoverBanner from "./CoverBanner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant || Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <CoverBanner></CoverBanner>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
