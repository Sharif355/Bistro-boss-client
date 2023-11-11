import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Categories from "./Categories";
import Featured from "./FeaturedItem/Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
