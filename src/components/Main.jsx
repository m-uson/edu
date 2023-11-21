import Content from "../assets/image/content.jpg";

export const Main = () => {
  return (
    <main
      id="home"
      className="relative max-w-full min-h-[700px] flex items-center"
    >
      <img
        className="absolute left-0 top-0 w-full object-cover h-full"
        src={Content}
        alt="img"
      />
      <div className="container max-w-full flex items-center justify-center flex-col">
        <h1
          data-aos="zoom-in"
          className="font-bold text-[56px] text-white text-center mb-[24px] lg:text-[46px] md:text-[36px] sm:text-[26px]"
        >
          Self-Paced Learning Courses Online
        </h1>
        <p
          data-aos="zoom-in"
          className="text-lg max-w-3xl text-white text-center mb-[55px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida
          massa. Ultrices bibendum sagittis pellentesque vitae sit.
        </p>
        <a
          data-aos="zoom-in"
          className="inline-block p-4 bg-c-86 text-[16px] font-medium text-white text-center rounded"
          href="#"
        >
          Start a coures
        </a>
      </div>
    </main>
  );
};
