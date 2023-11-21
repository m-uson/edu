import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import Person1 from "../assets/image/person7.png";
import Person2 from "../assets/image/person8.png";
import Person3 from "../assets/image/person9.png";

export const Employs = () => {
  return (
    <section className="py-14">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="text-[42px] font-bold text-center mb-3 sm:text-[30px]"
        >
          Our Latest Blog
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-[560px] text-[16px] text-center mb-12 m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam at entum.
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="p-10 shadow-sh">
            <p className="text-[16px] text-c-55 mb-5">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
              mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
              egestas.
            </p>
            <div className="flex">
              <img className="w-[72px] h-[72px] mr-[18px]" src={Person1} />
              <div>
                <p className="text-[20px] font-semibold mb-2">Jony Ahmed</p>
                <p className="text-[15px] text-c-55">UI/UX Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10 shadow-sh">
            <p className="text-[16px] text-c-55 mb-5">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
              mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
              egestas.
            </p>
            <div className="flex">
              <img className="w-[72px] h-[72px] mr-[18px]" src={Person2} />
              <div>
                <p className="text-[20px] font-semibold mb-2">Jony Ahmed</p>
                <p className="text-[15px] text-c-55">Fullstack Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10 shadow-sh">
            <p className="text-[16px] text-c-55 mb-5">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
              mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
              egestas.
            </p>
            <div className="flex">
              <img className="w-[72px] h-[72px] mr-[18px]" src={Person3} />
              <div>
                <p className="text-[20px] font-semibold mb-2">Jony Ahmed</p>
                <p className="text-[15px] text-c-55">Frontend Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10 shadow-sh">
            <p className="text-[16px] text-c-55 mb-5">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
              mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
              egestas.
            </p>
            <div className="flex">
              <img className="w-[72px] h-[72px] mr-[18px]" src={Person1} />
              <div>
                <p className="text-[20px] font-semibold mb-2">Jony Ahmed</p>
                <p className="text-[15px] text-c-55">UI/UX Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10 shadow-sh">
            <p className="text-[16px] text-c-55 mb-5">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
              mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
              egestas.
            </p>
            <div className="flex">
              <img className="w-[72px] h-[72px] mr-[18px]" src={Person2} />
              <div>
                <p className="text-[20px] font-semibold mb-2">Jony Ahmed</p>
                <p className="text-[15px] text-c-55">Fullstack Student</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10 shadow-sh">
            <p className="text-[16px] text-c-55 mb-5">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Placerat
              mauris non dictumst in leo etiam. Proin iaculis arcu iaculis
              egestas.
            </p>
            <div className="flex">
              <img className="w-[72px] h-[72px] mr-[18px]" src={Person3} />
              <div>
                <p className="text-[20px] font-semibold mb-2">Jony Ahmed</p>
                <p className="text-[15px] text-c-55">Frontend Student</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
