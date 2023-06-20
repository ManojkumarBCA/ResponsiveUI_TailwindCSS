import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#bbf7d0] p-4">
      <div className="max-w-[1240px] py-[15px] text-center  flex justify-between mx-auto">
        <div className="text-1xl text-[#fb7185] font-bold">
          GMTechRatan Technology
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-[#171717] md:hidden block"
          />
        ) : (
          <CgMenuGridR
            onClick={() => setToggle(!toggle)}
            className="text-[#171717] md:hidden block "
          />
        )}

        <ul className="hidden md:flex text-[#111827] gap-5">
          <li>Home</li>
          <li>Company</li>
          <li>Resource</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        {/* Responsive menu */}
        <ul
          className={` duration-1000 md:hidden w-full h-screen text-[#e0f2fe] fixed bg-[#022c22] top-[87px] 
          ${toggle ? "left-[0]" : "left-[-100%]"} `}
        >
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resource</li>
          <li className="p-3">About Us</li>
          <li className="p-3">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
