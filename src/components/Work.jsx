import Icon1 from "../assets/image/icon1.svg";
import Icon2 from "../assets/image/icon2.svg";
import Icon3 from "../assets/image/icon3.svg";

export const Work = () => {
  return (
    <section className="py-28">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="text-[42px] font-bold text-center mb-3 sm:text-[30px]"
        >
          How It Work
        </h2>
        <p
          data-aos="fade-up"
          className="max-w-[423px] text-lg text-center mb-12 m-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          hendrerit euismod fusce sit.
        </p>
        <div className="flex justify-between sm:flex-col sm:items-center">
          <div
            data-aos="fade-up"
            className="max-w-[250px] md:max-w-[200px] sm:mb-9 sm:max-w-[300px]"
          >
            <img className="mb-6 m-auto" src={Icon1} />
            <h3 className="text-[24px] font-bold text-center mb-4 md:text-[20px]">
              Learn More Online
            </h3>
            <p className="text-sm text-c-55 text-center md:text-xs">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[250px] md:max-w-[200px] sm:mb-9 sm:max-w-[300px]"
          >
            <img className="mb-6 m-auto" src={Icon2} />
            <h3 className="text-[24px] font-bold text-center mb-4 md:text-[20px]">
              Writing Notes
            </h3>
            <p className="text-sm text-c-55 text-center md:text-xs">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-[250px] md:max-w-[200px] sm:max-w-[300px]"
          >
            <img className="mb-6 m-auto" src={Icon3} />
            <h3 className="text-[24px] font-bold text-center mb-4 md:text-[20px]">
              Interactive Sessions
            </h3>
            <p className="text-sm text-c-55 text-center md:text-xs">
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
