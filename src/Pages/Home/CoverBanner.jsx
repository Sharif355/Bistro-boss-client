import chefService from "../../assets/home/chef-service.jpg";
import { Parallax } from "react-parallax";

const CoverBanner = () => {
  return (
    <div className="max-w-screen-lg  mx-auto">
      <Parallax bgImage={chefService} bgImageAlt="the menu" strength={-200}>
        <div className="hero h-[572px]">
          <div className="hero-content text-center  bg-white text-black bg-opacity-80 w-3/4 h-1/2">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CoverBanner;
