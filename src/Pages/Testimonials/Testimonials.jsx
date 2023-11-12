import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-16 max-w-screen-lg mx-auto">
      <SectionTitle
        heading={"testimonials"}
        subHeading={"What our client say"}
      ></SectionTitle>
      <div>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mt-5 "
        >
          {reviews?.map((review) => (
            <SwiperSlide className="space-y-2" key={review._id}>
              <Rating
                className="  mx-auto"
                style={{ maxWidth: 180 }}
                value={review.rating}
              />
              <img
                className="mx-auto"
                src="https://i.ibb.co/Hg3PwsB/quote-left-1.png"
                alt=""
              />
              <p className="text-lg text-black px-20 text-justify">
                {" "}
                {review.details}{" "}
              </p>
              <h2 className="text-[#CD9003] text-3xl font-medium text-center ">
                {review.name}
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
