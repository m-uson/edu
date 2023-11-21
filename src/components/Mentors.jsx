import Mentor1 from "../assets/image/mentor1.jpg";
import Mentor2 from "../assets/image/mentor2.png";
import Mentor3 from "../assets/image/mentor3.png";
import Men from "../assets/image/men-icon.svg";
import Star from "../assets/image/star-icon.svg";
import Img1 from "../assets/image/image7.png";
import Img2 from "../assets/image/image8.png";
import Img3 from "../assets/image/image9.png";
import Clock from "../assets/image/icon-clock.svg";
import Location from "../assets/image/icon-location.svg";

const Mentors = () => {
  return (
    <section className="py-28 bg-c-ef">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="text-[42px] font-bold text-center mb-3 sm:text-[30px]"
        >
          Meet with Our Mentor
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-[560px] text-[16px] text-center mb-12 m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida
          massa.
        </p>
        <div className="flex w-full gap-3 justify-between sm:flex-wrap sm:justify-center mb-32">
          <div
            data-aos="fade-up"
            className="max-w-[360px] w-full rounded-b-md shadow-sh lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px] sm:mb-12"
          >
            <img className="rounded-t-md w-full object-cover" src={Mentor1} />
            <div className="bg-white p-7 rounded-b-md">
              <span className="inline-block text-[24px] font-bold mb-2 md:text-[22px]">
                Mohammod Ali
              </span>
              <p className="text-[16px] text-c-55 mb-4">CEO, Developer</p>
              <div className="flex justify-between md:flex-wrap">
                <div className="flex items-cente md:mb-4">
                  <img className="mr-[6px]" src={Men} />
                  <p className="mr-[16px]">8.2k</p>
                  <img className="mr-[6px]" src={Star} />
                  <p>4.5</p>
                </div>
                <h4>25+ Courses</h4>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[360px] rounded-b-md shadow-sh lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px] sm:mb-12"
          >
            <img className="rounded-t-md w-full object-cover" src={Mentor2} />
            <div className="bg-white p-7 rounded-b-md">
              <span className="inline-block text-[24px] font-bold mb-2 md:text-[22px]">
                Braniya Lara
              </span>
              <p className="text-[16px] text-c-55 mb-4">Content Writter</p>
              <div className="flex justify-between md:flex-wrap">
                <div className="flex items-center md:mb-4">
                  <img className="mr-[6px]" src={Men} />
                  <p className="mr-[16px]">8.2k</p>
                  <img className="mr-[6px]" src={Star} />
                  <p>4.5</p>
                </div>
                <h4>25+ Courses</h4>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[360px] rounded-b-md shadow-sh lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px]"
          >
            <img className="rounded-t-md w-full object-cover" src={Mentor3} />
            <div className="bg-white p-7 rounded-b-md">
              <span className="inline-block text-[24px] font-bold mb-2 md:text-[22px]">
                John Smith
              </span>
              <p className="text-[16px] text-c-55 mb-4">Content Writter</p>
              <div className="flex justify-between md:flex-wrap">
                <div className="flex items-center md:mb-4">
                  <img className="mr-[6px]" src={Men} />
                  <p className="mr-[16px]">8.2k</p>
                  <img className="mr-[6px]" src={Star} />
                  <p>4.5</p>
                </div>
                <h4>25+ Courses</h4>
              </div>
            </div>
          </div>
        </div>
        <h2
          data-aos="fade-up"
          className="text-[42px] font-bold text-center mb-3 sm:text-[30px]"
        >
          Upcoming Event
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-[560px] text-[16px] text-center mb-12 m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum.
        </p>
        <div className="flex w-full gap-3 justify-between sm:flex-wrap sm:justify-center">
          <div
            data-aos="fade-up"
            className="max-w-[360px] w-full rounded-b-md shadow-sh relative lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px] sm:mb-12"
          >
            <img
              className="rounded-t-md w-full object-cover nim-h-full"
              src={Img1}
            />
            <div className="radius-b absolute left-0 top-0 h-[62px] w-[62px] bg-c-86 text-white text-[18px] font-medium flex items-center justify-center flex-col">
              <span className="block text-white text-[18px] font-medium">
                10
              </span>
              <span className="block text-white text-[18px] font-medium">
                APR
              </span>
            </div>
            <div className="bg-white p-7 rounded-b-md">
              <span className="inline-block text-[20px] font-medium mb-4 sm:text-[16px] sm:font-semibold">
                TED Talks at UCF College of Education
              </span>
              <div className="flex justify-between items-baseline lg:flex-wrap">
                <div className="flex items-center mb-2">
                  <img className="mr-2" src={Clock} />
                  <span className="text-[14px] text-c-55">4.00 pm-8.00 pm</span>
                </div>
                <div className="flex items-center">
                  <img className="mr-2" src={Location} />
                  <h5 className="text-[14px] text-c-55">Dhaka Bangladesh</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[360px] rounded-b-md shadow-sh relative lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px] sm:mb-12"
          >
            <img
              className="rounded-t-md w-full object-cover nim-h-full"
              src={Img2}
            />
            <div className="radius-b absolute left-0 top-0 h-[62px] w-[62px] bg-c-86 text-white text-[18px] font-medium flex items-center justify-center flex-col">
              <span className="block text-white text-[18px] font-medium">
                10
              </span>
              <span className="block text-white text-[18px] font-medium">
                APR
              </span>
            </div>
            <div className="bg-white p-7 rounded-b-md">
              <span className="inline-block text-[20px] font-medium mb-4 sm:text-[16px] sm:font-semibold">
                TED Talks at UCF College of Education
              </span>
              <div className="flex justify-between items-baseline lg:flex-wrap">
                <div className="flex items-center mb-2">
                  <img className="mr-2" src={Clock} />
                  <span className="text-[14px] text-c-55">4.00 pm-8.00 pm</span>
                </div>
                <div className="flex items-center">
                  <img className="mr-2" src={Location} />
                  <h5 className="text-[14px] text-c-55">Dhaka Bangladesh</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[360px] rounded-b-md shadow-sh relative lg:max-w-[300px] md:max-w-[230px] sm:lg:max-w-[360px]"
          >
            <img
              className="rounded-t-md w-full object-cover nim-h-full"
              src={Img3}
            />
            <div className="radius-b absolute left-0 top-0 h-[62px] w-[62px] bg-c-86 text-white text-[18px] font-medium flex items-center justify-center flex-col">
              <span className="block text-white text-[18px] font-medium">
                10
              </span>
              <span className="block text-white text-[18px] font-medium">
                APR
              </span>
            </div>
            <div className="bg-white p-7 rounded-b-md">
              <span className="inline-block text-[20px] font-medium mb-4 sm:text-[16px] sm:font-semibold">
                TED Talks at UCF College of Education
              </span>
              <div className="flex justify-between align-baseline items-baseline lg:flex-wrap">
                <div className="flex items-center mb-2">
                  <img className="mr-2" src={Clock} />
                  <span className="text-[14px] text-c-55">4.00 pm-8.00 pm</span>
                </div>
                <div className="flex items-center">
                  <img className="mr-2" src={Location} />
                  <h5 className="text-[14px] text-c-55">Dhaka Bangladesh</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
