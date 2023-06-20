import React from "react";
import laptop from "../assets/img/laptop.jpg";
export default function Exports() {
  return (
    <div className="mx-w-[1240px] p-3  mx-auto my-10  md:grid grid-cols-2 select-none">
      <div className=" col-span-1md: w-[80%] text-center">
        <img src={laptop} alt="" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center ">
        <h1 className="font-bold text-center text-[#10b981] my-2 justify-center">
          CONNECT WITH ME
        </h1>
        <h1 className="font-bold">
          <br />
          Logo Design & Branding
          <br />
          Website Design
          <br />
          Mobile App Design
          <br />
          Software Development
        </h1>
        <p className="my-2 text-justify select-none">
          We Provide IT Services with Best Performance..!! We Build the Solution
          based on our extensive business domain knowledge with Technology
          competency and proven methodologies to deliver high quality results in
          a cost-effective manner to maximize your competitive advantage and
          productivity.
        </p>
        <button
          url="https://manojcpf55@gmail.com"
          className=" w-[35%] bg-[#09090b] text-[#d6d3d1] p-3 rounded "
        >
          Get Connect
        </button>
      </div>
    </div>
  );
}
