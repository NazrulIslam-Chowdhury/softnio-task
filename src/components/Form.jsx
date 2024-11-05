import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";

const Form = () => {
  const [date, setDate] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitData = (data) => {
    console.log(data);
    alert("Form submitted");
    setDate("");
    reset();
  };
  return (
    <main className="form-bg bg-top mt-5">
      <section className="py-16 px-5 md:px-16 lg:px-24 xl:px-40 lg:w-[58rem] space-y-10">
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#BD1F17] w-[10px] h-[10px]"></div>
            <h6 className="text-[#BD1F17] font-semibold">Book Now</h6>
          </div>
          <h1 className="font-bebasNeue font-bold text-white text-[62px] leading-[62px]">
            Book Your Table
          </h1>
          <p className="text-white">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form onSubmit={handleSubmit(submitData)} className=" w-full space-y-5">
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full">
              <input
                {...register("name", { required: true })}
                type="text"
                className="outline-none border-2 border-white w-full py-2 px-5 bg-transparent caret-white text-white"
                placeholder="Your Name *"
              />
              {errors.name && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("email", { required: true })}
                type="email"
                className="outline-none border-2 border-white w-full py-2 px-5 bg-transparent caret-white text-white"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full">
              <div className="relative w-full ">
                <div className=" w-full py-2 px-5 h-full border-2 border-white flex justify-between items-center">
                  <p className="text-gray-50/60">
                    {date === "" ? "Reservation Date" : date}
                  </p>
                  <FaCalendarAlt className="text-white" />
                </div>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  className="outline-none border-2 border-white w-full py-2 px-5 bg-transparent caret-white text-white absolute top-0 h-full opacity-0"
                  placeholder="Reservation Date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              {date === "" && errors.date && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("people", { required: true })}
                type="number"
                className="outline-none border-2 border-white w-full py-2 px-5 bg-transparent caret-white text-white"
                placeholder="Total People"
              />
              {errors.people && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              {...register("message")}
              className="w-full h-[10rem] outline-none border-2 border-white py-2 px-5 bg-transparent caret-white text-white"
              placeholder="Message"
            />
          </div>
          <button className=" font-semibold uppercase text-black bg-[#febf00] px-5 py-2">
            Book Now
          </button>
        </form>
      </section>
    </main>
  );
};

export default Form;
