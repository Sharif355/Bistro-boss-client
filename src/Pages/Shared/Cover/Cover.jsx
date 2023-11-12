import { Parallax } from "react-parallax";

const Cover = ({ img, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-content text-center text-neutral-content bg-[#15151599] bg-opacity-60 w-3/4 h-1/2">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5">{subHeading}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
