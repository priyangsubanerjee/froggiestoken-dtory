/* eslint-disable @next/next/no-img-element */
import TeamGrid from "@/components/TeamGrid";
import { Icon } from "@iconify/react";
import React from "react";

function Team() {
  const scrollOnClick = (id) => {
    const firstSection = document.getElementById(`${id}`);
    firstSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-full w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative">
      <p className="text-primaryGray_100 text-sm font-poppins font-medium lg:block hidden">
        TEAM
      </p>
      <h1 className="text-4xl lg:text-7xl text-white font-bold leading-[1.2] lg:leading-[1.2] mt-5">
        THE COSMIC CREW
      </h1>
      <p className="hidden lg:block text-primaryGray_100 font-poppins leading-8 text-sm mt-5 lg:w-[800px] w-full">
        Meet the main people behind Froggies working hard everyday to lower
        gravity and increase lift off.
      </p>
      <TeamGrid />
      <div className="hidden lg:flex items-center text-white mt-10">
        <span>Bright Future for $FRGST .</span>
        <div className="w-[100px] h-[1px] bg-white mt-[10px] ml-1"></div>
        <div
          onClick={() => {
            scrollOnClick("3");
          }}
          className="inline-flex items-center relative cursor-pointer ml-4"
        >
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inset-y-0 h-[250%] w-[150%]">
            <img
              src="/assets/mesh_vector_1.png"
              alt=""
              className="h-full w-full absolute inset-0"
            />
          </div>
          <div className="text-black z-10 flex items-center">
            <span>Dive into the unknown</span>
            <Icon icon="mdi:arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
