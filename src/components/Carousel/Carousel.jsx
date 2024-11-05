import { vector2 } from "../../assets";
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

const Carousel = () => {
  SwiperCore.use([Navigation]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="py-20 px-5 md:px-16 lg:px-24 xl:px-40 relative bg-[#fbf7f2]">
      <img
        src={vector2}
        alt="vector image"
        className="absolute left-0 top-[40%] lg:block hidden h-[256px]"
      />

      <section>
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#BD1F17] w-[10px] h-[10px]"></div>
            <h6 className="text-[#BD1F17] font-semibold">
              Crispy, Every Bite Taste
            </h6>
          </div>
          <h3 className="uppercase font-bebasNeue text-[62px] leading-[62px]">
            POPULAR FOOD ITEMS
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
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay]}
        className="mt-10 h-[300px]"
      >
        {foods.map((item) => (
          <SwiperSlide key={item.id} className="bg-white">
            <div className="flex flex-col items-center justify-center gap-5 p-5">
              <img src={item.img} alt={item.title} />

              <div className="h-[3px] bg-[#BD1F17] w-16"></div>

              <div className="text-center">
                <h4 className="font-bebasNeue font-semibold text-[24px] leading-[36px]">
                  {item.title}
                </h4>
                <p className="text-[16px] leading-[32px]">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Carousel;
