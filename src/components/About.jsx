import {
  aboutImg,
  bag,
  expBadge,
  medal,
  packageIcon,
  vector3,
} from "../assets";
import Tabs from "./Tabs";

const About = () => {
  return (
    <main className="py-20 lg:mt-20 px-5 md:px-16 lg:px-24 xl:px-40 relative">
      <section className="flex lg:flex-row flex-col gap-11">
        <div className="relative">
          <img src={aboutImg} alt="about image" />
          <img
            src={expBadge}
            alt="experience badge"
            className="absolute top-6 left-0"
          />
        </div>
        <div className="lg:w-[624px]">
          <Tabs />
        </div>
      </section>

      <section className="mt-10 flex items-center justify-between flex-wrap gap-5">
        <div className="flex gap-3 items-center">
          <div className="rounded-full shadow-lg p-4 ">
            <img src={packageIcon} alt="package" />
          </div>
          <div>
            <h6 className="uppercase font-medium font-bebasNeue text-[30px] leading-[36px]">
              Fast Delivery
            </h6>
            <p className="text-[20px] leading-[32px]">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full shadow-lg p-4 ">
            <img src={medal} alt="package" />
          </div>
          <div>
            <h6 className="uppercase font-medium font-bebasNeue text-[30px] leading-[36px]">
              Absolute Dining
            </h6>
            <p className="text-[20px] leading-[32px]">Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full shadow-lg p-4 ">
            <img src={bag} alt="package" />
          </div>
          <div>
            <h6 className="uppercase font-medium font-bebasNeue text-[30px] leading-[36px]">
              Pickup Delivery
            </h6>
            <p className="text-[20px] leading-[32px]">Grab your food order</p>
          </div>
        </div>
      </section>

      <div className="hidden lg:block absolute top-[40%] right-0 ">
        <img src={vector3} alt="vector" />
      </div>
    </main>
  );
};

export default About;
