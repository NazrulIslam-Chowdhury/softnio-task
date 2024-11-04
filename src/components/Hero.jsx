import { useEffect, useState } from "react";
import { navLists } from "../../constants";
import { heroBg, heroImg, logo, offer, vector } from "../assets/index";
import { IoMenuSharp } from "react-icons/io5";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      <div className="bg-gradient-to-br from-[#BD1F17] via-[#A61D13] to-[#8E1B0F] absolute h-full w-full lg:h-screen lg:w-screen">
        <img src={heroBg} alt="hero" className="h-full lg:w-full" />
      </div>

      {/* navigation bar */}
      <header
        className={`${
          scrolled ? "bg-[#A61D13]" : "bg-transparent"
        } fixed top-0 container mx-auto z-20 transition-all`}
      >
        <nav className=" flex items-center justify-between py-3 px-5 md:px-16 lg:px-24 xl:px-40">
          <div className="flex gap-[60px]">
            <div>
              <div className="flex items-center gap-1">
                <img src={logo} alt="logo" />
                <p className="font-semibold text-white text-3xl tracking-widest">
                  Restau<span className="font-thin">rant</span>
                </p>
              </div>
            </div>
            <ul className="lg:flex items-center gap-10 text-white font-medium text-base hidden">
              {navLists.map((list) => (
                <li key={list.id} className="cursor-pointer">
                  {list.list}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#febf00] px-5 py-2 hidden lg:block">
            <button className=" font-semibold uppercase">Book a table</button>
          </div>

          {/* sm device menu bar later*/}
          <div className="lg:hidden block">
            <IoMenuSharp className="text-white size-[36px] cursor-pointer" />
          </div>
        </nav>
      </header>

      <section className="relative flex lg:flex-row flex-col gap-12 justify-between items-center px-5 md:px-16 lg:px-24 xl:px-40 py-20 lg:py-0 lg:pt-[7.5rem] mx-auto">
        <div className=" space-y-5 lg:space-y-64 text-white ">
          <div>
            <h1 className="lg:font-semibold font-bebasNeue text-[48px] leading-[56px] lg:leading-[130px] lg:text-[6rem] uppercase lg:absolute whitespace-nowrap z-10">
              Taste the authentic <br />
              Saudi cuisine
            </h1>
          </div>

          <div className="space-y-8">
            <p className="w-[25rem]">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.{" "}
            </p>
            <button className=" font-semibold uppercase text-black bg-[#febf00] px-5 py-2">
              Explore Menu
            </button>
          </div>
        </div>
        <div className="lg:w-[45rem] lg:h-[31rem] relative">
          <img
            src={heroImg}
            alt="hero image"
            className="h-full w-full object-cover"
          />
          <img
            src={vector}
            alt="vector image"
            className="absolute -top-6 -right-4 lg:-right-6"
          />
          <div className="absolute -bottom-4 -right-2 lg:-right-16">
            <img src={offer} alt="vector image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
