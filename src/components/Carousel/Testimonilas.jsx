import { play, profileImg, testimonialsImg, vector4, vector5, vector6, vector7 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { foods } from "../../../constants";

const Testimonials = () => {
  SwiperCore.use([Navigation]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="py-20 px-5 md:px-16 lg:px-24 xl:px-40 relative">
      <div>
        <img
          src={vector4}
          alt="vector image"
          className="absolute left-0 top-[10%] lg:block hidden h-[256px]"
        />

        <img
          src={vector5}
          alt="vector image"
          className="absolute right-0 top-[55%] lg:block hidden h-[310px]"
        />
      </div>

      <section>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#BD1F17] w-[10px] h-[10px]"></div>
            <h6 className="text-[#BD1F17] font-semibold">
              Crispy, Every Bite Taste
            </h6>
          </div>
          <h3 className="uppercase font-bebasNeue text-[62px] leading-[62px]">
            What Some of my Customers Say
          </h3>
        </div>
        <div className="flex gap-4 absolute bottom-0 right-[35%] lg:right-40 lg:top-24">
          <button
            ref={prevRef}
            className="bg-white shadow-lg p-4 rounded-full hover:text-[#BD1F17] transition-all w-[60px] h-[60px]"
          >
            <MdOutlineKeyboardArrowLeft className="size-7" />
          </button>
          <button
            ref={nextRef}
            className="bg-white shadow-lg p-4 rounded-full hover:text-[#BD1F17] transition-all w-[60px] h-[60px]"
          >
            <MdOutlineKeyboardArrowRight className="size-7" />
          </button>
        </div>
      </section>

      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mt-10"
      >
        {[1,2,3].map((item) => (
          <SwiperSlide key={item.id} className="bg-gray-200/60">
            <div className="flex flex-col-reverse lg:flex-row">
              <section className="bg-[#febf00] relative lg:w-[45%]">
                <img
                  src={vector6}
                  alt="vector image"
                  className="absolute bottom-0"
                />
                <div className="p-10 lg:p-20">
                  <div>
                    <img src={vector7} alt="vector image" />
                    <p className="ml-5 mt-1 text-[20px] leading-[34px]">
                      You can't go wrong with Chicken Mandi, I had it twice. The
                      chicken was cooked perfectly, juicy & soft (usually mandi
                      chicken is a bit dry). I would defiantly recommend it.
                    </p>

                    <div className="flex items-center justify-between ml-5 mt-10">
                      <div>
                        <h6 className="font-bebasNeue text-[18px] leading-[20px]">
                          Khalid Al Dawsry
                        </h6>
                        <p className="text-[14px] leading-[13.50px]">
                          Jeddah, Saudi
                        </p>
                      </div>
                      <img src={profileImg} alt="profile" />
                    </div>
                    <div className=" relative mt-5">
                      <div className="h-[4px] bg-[#BD1F17] w-10 absolute right-0 -top-1  "></div>
                      <div className="h-[1px] w-full bg-black "></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-[#febf00] relative lg:w-[55%]">
                <img src={testimonialsImg} alt="testimonials image" className="h-96 lg:h-full object-cover"/>
                <img src={play} alt="play" className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"/>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Testimonials;
