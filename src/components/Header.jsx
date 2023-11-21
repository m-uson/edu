import { useState } from "react";
import { menu } from "../constants/constants";
import { Link } from "react-scroll";

export const Header = () => {
  const [isActive, setIsActive] = useState(0);
  const [isClose, setIsClose] = useState(false);

  const handleClick = (value) => {
    setIsActive(value);
  };

  return (
    <header className="fixed z-50 top-0 bg-white h-[100px] w-full flex items-center">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setIsClose(false)}
            className="text-[24px] font-bold leading-8 relative z-20"
          >
            Education
          </Link>
          <div
            onClick={() => setIsClose(!isClose)}
            className={`${
              isClose ? "h-6 " : null
            } hidden sm:block cursor-pointer relative z-50`}
          >
            <span className={`${isClose ? "one" : null} span`}></span>
            <span className={`${isClose ? "two" : "false-two"} span`}></span>
            <span className={`${isClose ? "tree" : null} span`}></span>
          </div>
          <ul className="flex sm:hidden">
            {menu &&
              menu.map((item, i) => (
                <li key={i} className="mr-[40px]">
                  <Link
                    onClick={() => handleClick(i)}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={`${
                      isActive === i ? "is-active" : ""
                    } text-lg cursor-pointer font-medium`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <nav className={`${isClose ? "active-block" : "translateY z-30"}`}>
          <ul className="mt-20 ml-3 ul">
            {menu &&
              menu.map((item, i) => (
                <li key={i} className="mb-2 ml-[4px] last:mb-0">
                  <Link
                    onClick={() => {
                      handleClick(i), setIsClose(false);
                    }}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={`${
                      isActive === i ? "is-active" : ""
                    } text-2xl cursor-pointer font-bold`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
