import SectionTitle from "../../../Components/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="my-16 featured-item bg-fixed text-white max-w-screen-lg mx-auto">
      <div className="bg-slate-800 bg-opacity-60  p-10  ">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="flex items-center gap-16 mt-10 max-w-screen-lg mx-auto ">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div className="space-y-2">
            <p>
              March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Error voluptate
              facere, deserunt dolores maiores quod nobis quas quasi. Eaque
              repellat recusandae ad laudantium tempore consequatur consequuntur
              omnis ullam maxime tenetur.
            </p>
            <button className="uppercase text-white border-0 border-b-4 btn btn-outline border-white ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
