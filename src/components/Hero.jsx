import { navLists } from "../../constants";
import heroImage from "../assets/hero-bg.png";
import logo from "../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <main className="relative">
        <div className="bg-gradient-to-br from-[#BD1F17] via-[#A61D13] to-[#8E1B0F] absolute">
          <img src={heroImage} alt="hero" className="" />
        </div>
      <header className=" absolute container mx-auto">
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

          {/* sm device menu bar */}
          <div className="lg:hidden block">
            <IoMenuSharp className="text-white size-[36px] cursor-pointer"/>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Hero;
