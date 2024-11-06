import { IoClose } from "react-icons/io5";
import { navLists } from "../../constants";
import { useEffect, useRef } from "react";
const MobileMenuDrawer = ({ open, setOpen }) => {
  const drawerRef = useRef();

  const handleCloseDrawer = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  //   close the drawer if the user clicks outside of it
  const closeOnClick = (e) => {
    if (!drawerRef?.current?.contains(e?.target)) {
      handleCloseDrawer();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", closeOnClick);
    return () => {
      window.removeEventListener("mousedown", closeOnClick);
    };
  }, [open]);

  return (
    <nav
      ref={drawerRef}
      className={`${
        open ? "left-0 opacity-100" : "-left-[100%] opacity-0"
      } bg-white/65 backdrop-blur h-screen fixed top-0 w-1/2 transition-all ease-in-out z-40 shadow-inner shadow-black/85 p-5`}
    >
      <IoClose
        onClick={handleCloseDrawer}
        className="cursor-pointer size-7 bg-[#BD1F17] text-white p-2 rounded-full float-end"
      />

      <ul className="mt-16 text-start">
        {navLists.map((list) => (
          <li
            key={list.id}
            className=" text-[16px] font-semibold hover:bg-[#BD1F17] hover:text-white transition-all cursor-pointer"
          >
            <p className="py-2 px-5">{list.list}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenuDrawer;
