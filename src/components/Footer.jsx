import { callAlt, clock, mail, mapPin } from "../assets";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="footer-bg h-[143dvh] lg:h-[80dvh] relative mt-5">
      <div className="absolute bg-black/60 w-full h-full z-10 top-0"></div>

      <section className=" px-5 md:px-16 lg:px-24 xl:px-40 flex flex-col items-center absolute z-20 mt-16">
        <div className="text-white lg:w-[70rem]">
          <h1 className="text-center text-[40px] lg:text-6xl leading-[48px] lg:leading-[64px] font-bold font-bebasNeue ">
            We ready to have you the best dining experiences
          </h1>
          <div className="flex flex-col lg:flex-row justify-between gap-5 items-center mt-10">
            <div className="flex flex-col items-center gap-3">
              <img src={clock} alt="clock" />
              <h6 className="uppercase font-semibold font-bebasNeue text-[24px] leading-[28px]">
                Opening Hours
              </h6>
              <div className="text-center text-[16px] leading-[25px]">
                <p>Monday - Sunday</p>
                <p>9:00 AM to 11:30 PM</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={callAlt} alt="call" />
              <h6 className="uppercase font-semibold font-bebasNeue text-[24px] leading-[28px]">
                Lets's talk
              </h6>
              <div className="text-center text-[16px] leading-[25px]">
                <p>Phone: 1-800-222-4545</p>
                <p>Fax: 1-800-222-4545</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={mail} alt="mail" />
              <h6 className="uppercase font-semibold font-bebasNeue text-[24px] leading-[28px]">
                Book a table
              </h6>
              <div className="text-center text-[16px] leading-[25px]">
                <p>Email: demo@website.com</p>
                <p>Support: support@website.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img src={mapPin} alt="map pin" />
              <h6 className="uppercase font-semibold font-bebasNeue text-[24px] leading-[28px]">
                Our Address
              </h6>

              <div className="text-center text-[16px] leading-[25px]">
                <p>123 Stree New York City ,</p>
                <p>United States Of America.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-14 lg:mt-28 gap-5">
            <div className="flex items-center gap-3">
              <a
                href="www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border-[1px] border-white"
              >
                <FaFacebookSquare className="text-white cursor-pointer" />
              </a>
              <a
                href="www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border-[1px] border-white"
              >
                <FaLinkedin className="text-white cursor-pointer" />
              </a>
              <a
                href="www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border-[1px] border-white"
              >
                <FaTwitterSquare className="text-white cursor-pointer" />
              </a>
              <a
                href="www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border-[1px] border-white"
              >
                <FaInstagramSquare className="text-white cursor-pointer" />
              </a>
            </div>
            <h6>
              © 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights
              Reserved{" "}
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
