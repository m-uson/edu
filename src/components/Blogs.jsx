import { Link } from "react-scroll";
import Img1 from "../assets/image/image10.png";
import Img2 from "../assets/image/image11.png";
import Img3 from "../assets/image/image12.png";

export const Blogs = () => {
  return (
    <section id="blogs" className="py-28">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="text-[42px] font-bold text-center mb-3 sm:text-[30px]"
        >
          Our Latest Blog
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-[560px] w-full text-[16px] text-center mb-12 m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam at entum.
        </p>
        <div className="flex w-full gap-3 justify-between sm:flex-wrap sm:justify-center mb-10">
          <div
            data-aos="fade-up"
            className="max-w-[360px] w-full rounded-b-md shadow-sh relative lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px] sm:mb-12"
          >
            <img className="rounded-t-md w-full object-cover" src={Img1} />
            <div className="bg-white p-7 border border-x-c-bf border-b-c-bf rounded-b-md">
              <p className="text-[20px] font-medium mb-3">
                Product Marketing Creative Camping Brand Image
              </p>
              <p className="text-[14px] mb-3">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
                vestibulum euismod nullam at entum. Urna, posuere nisi sit
                gravida massa.
              </p>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                data-aos="zoom-in"
                className="text-[16px] text-c-86"
                href="#"
              >
                Read More...
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[360px] rounded-b-md shadow-sh relative lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px] sm:mb-12"
          >
            <img className="rounded-t-md w-full object-cover" src={Img2} />
            <div className="bg-white p-7 rounded-b-md border border-x-c-bf border-b-c-bf">
              <p className="text-[20px] font-medium mb-3">
                Product Marketing Creative Camping Brand Image
              </p>
              <p className="text-[14px] mb-3">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
                vestibulum euismod nullam at entum. Urna, posuere nisi sit
                gravida massa.
              </p>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                data-aos="zoom-in"
                className="text-[16px] text-c-86"
                href="#"
              >
                Read More...
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[360px] rounded-b-md shadow-sh relative lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px]"
          >
            <img className="rounded-t-md w-full object-cover" src={Img3} />
            <div className="bg-white p-7 rounded-b-md border border-x-c-bf border-b-c-bf">
              <p className="text-[20px] font-medium mb-3">
                Product Marketing Creative Camping Brand Image
              </p>
              <p className="text-[14px] mb-3">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
                vestibulum euismod nullam at entum. Urna, posuere nisi sit
                gravida massa.
              </p>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                data-aos="zoom-in"
                className="text-[16px] text-c-86"
                href="#"
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            data-aos="zoom-in"
            className="inline-block p-4 bg-c-86 text-[16px] font-medium text-white text-center rounded"
            href="#"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
