import Facebook from "../assets/image/facebook.svg";
import Twitter from "../assets/image/twitter.svg";
import Instagram from "../assets/image/instagram.svg";
import Linkedin from "../assets/image/linkedn.svg";
import Phone from "../assets/image/icon-phone.svg";
import Email from "../assets/image/icon-email.svg";
import Location from "../assets/image/icon-lacation.svg";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer id="contact" data-aos="fade-up" className="py-28 bg-c-d3">
      <div className="container flex justify-between md:flex-wrap">
        <div className="md:mb-16">
          <div className="mb-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-[24px] font-bold leading-8"
            >
              Education
            </Link>
            <p className="block text-[16px] text-c-55 max-w-[350px] lg:max-w-[300px] mt-6 md:max-w-[245px] mos:max-w-[350px]">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
              vestibulum euismod nullam the elementum. Urna, posuere nisi sit
              gravid.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] font-bold mb-6">Follow Us</h4>
            <div className="flex">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="mr-4" src={Facebook} />
              </Link>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="mr-4" src={Twitter} />
              </Link>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img className="mr-4" src={Instagram} />
              </Link>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <img src={Linkedin} />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:mb-16">
          <h4 className="text-[24px] font-bold mb-6">Feature Links</h4>
          <ul>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Graduation
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Scholarship
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Admissions
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                International
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[24px] font-bold mb-6">Support</h4>
          <ul>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Language
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                WordPress
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Privacy{" "}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-base text-c-44"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[24px] font-bold mb-6">Contact Us</h4>
          <p className="text-[16px] text-c-55 w-[200px]">
            230,Mirpur Area, Mirpur 10, Dhaka,Bangladesh
          </p>
          <div className="flex mt-4">
            <img src={Phone} />
            <p className="text-[16px] text-c-44 ml-2">+017 4845 7269</p>
          </div>
          <div className="flex mt-4">
            <img src={Email} />
            <p className="text-[16px] text-c-44 ml-2">info@gmail.com</p>
          </div>
          <div className="flex mt-4">
            <img src={Location} />
            <p className="text-[16px] text-c-44 ml-2">www.yourdomain.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
