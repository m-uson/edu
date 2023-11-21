import Per from "../assets/image/icon-per.svg";
import Star from "../assets/image/icon-star.svg";
import IconE from "../assets/image/icon-e.svg";
import Person1 from "../assets/image/person1.png";
import { courses } from "../constants/constants";
import { Link } from "react-scroll";

export const Course = () => {
  return (
    <>
      <section id="courses" className="py-28 bg-c-d3 scroll-m-12">
        <div className="container flex flex-col justify-center items-center">
          <h2
            data-aos="fade-up"
            className="text-[42px] font-bold text-center mb-3 sm:text-[30px]"
          >
            Our All The Online Courses
          </h2>
          <p
            data-aos="fade-up"
            className="max-w-[560px] text-[16px] text-center mb-12 m-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
            mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div className="flex flex-wrap justify-between lg:justify-around">
            {courses &&
              courses.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  className="p-5 max-w-[360px] mb-12"
                >
                  <img
                    className="mb-5 rounded-md w-full object-cover"
                    src={item.img}
                  />
                  <div className="flex justify-between items-center mb-5">
                    <img src={Per} />
                    <span className="text-[16px] text-c-55 mr">5.8k</span>
                    <img src={IconE} />
                    <span className="text-[16px] text-c-55 mr">65k</span>
                    <img src={Star} />
                    <span className="text-[16px] text-c-55 mr">4.5k</span>
                    <img src={Person1} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[24px] font-bold text-c-33 sm:text-xl">
                        {item.title}
                      </p>
                      <span className="text-[24px] font-bold text-c-86">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[14px] text-c-55 mt-[18px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            data-aos="zoom-in"
            className="inline-block p-4 bg-c-86 text-[16px] font-medium text-white text-center rounded cursor-pointer"
          >
            View All Course
          </Link>
        </div>
      </section>
    </>
  );
};
