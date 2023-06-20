import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full bg-[#60a5fa] p-4 ">
      <div className=" max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className=" text-[20px] md:font-[40px] font-bold text-white ">
            Want to Get Services ?
          </h1>
          <span className="text-white  ">
            Sign up to Our Newsletter and stay up to date.
          </span>
        </div>
        <div className="m-2">
          <input 
            type="text"
            className="p-3 mr-2 text-slate-600 w-full rounded mb-2"
            placeholder="Email"
          />
          <button className="bg-black text-white p-3 rounded   ">
            Get Connect
          </button>
          <br />
          <p className="text-white">
            We care but the protection of your data. React our <br />
            <a href="manojport.netlify.app" className="text-black"> Privacy Policy </a>
          </p>
        </div>
      </div>
    </div>
  );
}
