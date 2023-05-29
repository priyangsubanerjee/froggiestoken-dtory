/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Icon } from "@iconify/react";

function About() {
  const scrollToId = (id) => {
    const firstSection = document.getElementById(`${id}`);
    firstSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20 lg:pt-0 px-6 lg:px-24 pb-28 lg:pb-0 z-0 h-fit bg-emerald-50/0">
      <h1 className="text-4xl lg:text-7xl text-white font-extrabold leading-[1.2] lg:leading-[1.2] mt-10 lg:mt-0">
        FROM FROGGIES <br /> TO SPACE D.
      </h1>
      <div className="text-primaryGray_100 font-poppins leading-8 text-sm mt-7 lg:w-[650px] w-full">
        We are Froggies, a memecoin launched in November 2021. Flew passed bulls
        and bears, hype and fud. <br />
        <br /> We are still here, and ready to provide the market with a Second
        Gen Memecoin. Our ultimate destination is Moon, and to assure our
        landing zone in Space we build on community,{" "}
        <div className="inline-flex items-center relative z-0">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inset-y-0 h-[140%] w-[130%] z-0">
            <img
              src="/assets/mesh_vector_1.png"
              alt=""
              className="h-full w-full absolute inset-0"
            />
          </div>
          <span className="text-black z-10">utility and usability</span>
        </div>
        . Froggies is an open community and drive a free market. Our team is
        devoted to delivering the best to our holders, and securing a long-term
        project.
      </div>
      <div className="hidden lg:flex items-center text-white mt-10">
        <span>Join us while we build on common goals .</span>
        <div className="w-[100px] h-[1px] bg-white mt-[10px] ml-2"></div>
        <div
          onClick={() => {
            scrollToId("2");
          }}
          className="inline-flex items-center relative cursor-pointer"
        >
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inset-y-0 h-[250%] w-[150%]">
            <img
              src="/assets/mesh_vector_1.png"
              alt=""
              className="h-full w-full absolute inset-0"
            />
          </div>
          <div className="text-black z-10 flex items-center">
            <span>Moon</span>
            <Icon icon="mdi:arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
