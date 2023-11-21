import Img from "../assets/image/picture1.png";

export const About = () => {
  return (
    <section
      data-aos="fade-up"
      className="pt-28 container flex justify-between sm:flex-col"
    >
      <div className="sm:text-center w-full">
        <h2
          data-aos="fade-up"
          className="text-[40px] mb-5 leading-[62px] font-bold md:text-[35px] md:leading-[45px] sm:text-[25px] sm:leading-[35px]"
        >
          Find Your Course That Makes Bright Future
        </h2>
        <p
          data-aos="fade-up"
          className="text-[15px] leading-[150%] text-c-55 mb-3 md:text-[13px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at
          diam magnis faucibus et faucibus gravida. malesuada fauci bus iaculis
          eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate
          quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi,
        </p>
        <h4
          data-aos="fade-up"
          className="text-[20px] leading-[28px] text-c-33 mb-8 md:text-[17px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          hendrerit euismod fusce sit.
        </h4>
        <a
          data-aos="fade-up"
          href="#"
          className="inline-block text-c-blue text-[16px] p-4 text-white rounded bg-c-86"
        >
          Learn More
        </a>
      </div>
      <img
        data-aos="fade-up"
        className="ml-8 w-full lg:min-h-[443px] lg:max-w-[450px] md:max-w-[400px] md:min-h-[400px] sm:ml-0 sm:mt-16 sm:min-h-[100%] sm:max-w-[100%]"
        src={Img}
      />
    </section>
  );
};
