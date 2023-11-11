import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Categories = () => {
  return (
    <div className="my-16">
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-12 md:max-w-screen-lg text-white uppercase"
      >
        <SwiperSlide>
          <img className="relative" src={slide1} alt="" />
          <p className="text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" />
          <p className="text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" />
          <p className="text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} alt="" />
          <p className="text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Deserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} alt="" />
          <p className="text-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
