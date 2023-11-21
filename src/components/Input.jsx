import { useState } from "react";

export const Input = () => {
  const [event, setEvent] = useState("");

  const clear = (e) => {
    setEvent(e.target.value);
  };

  return (
    <section data-aos="fade-up" className="py-28">
      <div className="container bg-c-86 p-12 flex flex-col justify-center items-center">
        <h2 className="text-[42px] font-bold text-center mb-3 text-white sm:text-[30px]">
          Our Latest Blog
        </h2>
        <p className="max-w-[560px] text-[16px] text-center mb-12 text-white m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam at entum.
        </p>
        <div className="flex items-center justify-between sm:flex-col">
          <input
            className="inline-block w-[400px] h-[40px] px-5 rounded-md mr-2 sm:mb-5 sm:mr-0 mos:w-[300px]"
            value={event}
            onChange={(e) => clear(e)}
            placeholder="Enter your email..."
          />
          <button
            onClick={() => setEvent("")}
            className="text-c-86 bg-white px-5 py-2 rounded-md"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
