import React from "react";
import Typed from "react-typed";
export default function Banner() {
  return (
    <div className="bg-[#ccfbf1] w-full py-[100px] text-center">
      <div className=" max-w-[1240px] py-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl font-bold md:p-[24px]">
          Learn with Us.
        </div>

        <h2 className="text-[#0f172a]  text-3xl  md:text-[50px] md:p-[24px]">
          Grow with Us.
        </h2>

        <div className=" text-[20px] md:text-[30px] md:p-[24px] text-black">
          <Typed
            className="pl-3"
            strings={[
              " Software Development.!!",
              "Freelancing with MERN And Other Technologies..!!",
              "Tuition Class with MERN Technology..!!",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-[#09090b] text-[#d6d3d1] p-3 rounded">
          Get Connect
        </button>
      </div>
    </div>
  );
}
