import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useSwiper } from "swiper/react";

const CustomNavigation = () => {
  const swiper = useSwiper();
  return (
    <main className="flex">
      <MdOutlineKeyboardArrowLeft
        onClick={() => {
          swiper.slidePrev();
        }}
        className="w-12 h-12 text-gray-500 transition-all duration-500 cursor-pointer hover:text-white hover:bg-gray-500 bg-opacity-90 absolute top-0"
      />
      <MdOutlineKeyboardArrowRight
        onClick={() => {
          swiper.slideNext();
        }}
        className="w-12 h-12 text-gray-500 transition-all duration-500 cursor-pointer hover:text-white hover:bg-gray-500 bg-opacity-90"
      />
    </main>
  );
};

export default CustomNavigation;
