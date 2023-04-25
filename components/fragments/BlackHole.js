/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function BlackHole() {
  const scrollOnClick = (id) => {
    const firstSection = document.getElementById(`${id}`);
    firstSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-fit lg:min-h-screen w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative pt-20 lg:pt-0 pb-28 lg:pb-0 px-6 lg:px-24">
      <p className="text-primaryGray_100 text-sm font-poppins font-medium lg:block hidden">
        BLACK HOLE
      </p>
      <h1 className="text-4xl lg:text-7xl text-white font-extrabold leading-[1.3] lg:leading-[1.3] mt-5">
        INTO THE BLACK HOLE
      </h1>
      <div className="hidden lg:block text-primaryGray_100 font-poppins leading-8 text-sm mt-5 lg:w-[800px] w-full">
        Brave the unknown and embark on a journey into a black hole&apos;s
        embrace to uncover secrets beyond reality. Embrace the darkness and
        <div className="inline-flex items-center relative">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inset-y-0 h-[140%] w-[130%]">
            <img
              src="/assets/mesh_vector_1.png"
              alt=""
              className="h-full w-full absolute inset-0"
            />
          </div>
          <span className="text-black z-10">
            unlock the mysteries of the universe.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 w-[350px] lg:w-[600px] mt-10">
        <div className="h-20 relative">
          <img
            src="/assets/grid_border.png"
            className="absolute inset-0 h-full w-full"
            alt=""
          />
          <div className="absolute inset-0 h-full w-full flex items-center">
            <div className="h-full flex items-end">
              <img src="/assets/buy_token_grid.png" className="w-20" alt="" />
            </div>
            <div
              className="ml-4 cursor-pointer"
              onClick={() => {
                scrollOnClick("4");
              }}
            >
              <p className="font-bold text-white">BUY</p>
              <span className="text-[#cccccc] text-sm">
                Buy froggies token now
              </span>
            </div>
          </div>
        </div>
        <div className="h-20 relative lg:-ml-1 -mt-1 lg:mt-0">
          <img
            src="/assets/grid_border.png"
            className="absolute inset-0 h-full w-full"
            alt=""
          />
          <div className="absolute inset-0 h-full w-full flex items-center">
            <div className="h-full flex items-top">
              <img
                src="/assets/interstellar_grid.png"
                className="w-20"
                alt=""
              />
            </div>
            <Link href={"/interstellar"}>
              <div className="ml-4">
                <p className="font-bold text-white">INTERSTELLAR</p>
                <span className="text-[#cccccc] text-sm">Learn more</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-20 relative -mt-2 lg:-mt-1">
          <img
            src="/assets/grid_border.png"
            className="absolute inset-0 h-full w-full"
            alt=""
          />
          <div className="absolute inset-0 h-full w-full flex items-center">
            <div className="h-full flex items-end">
              <img src="/assets/manifesto_grid.png" className="w-20" alt="" />
            </div>
            <Link href={"/manifesto"}>
              <div className="ml-4">
                <p className="font-bold text-white">MANIFESTO</p>
                <span className="text-[#cccccc] text-sm">
                  Short cosmic trip
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-20 relative -mt-1 lg:-mt-1 lg:-ml-1">
          <img
            src="/assets/grid_border.png"
            className="absolute inset-0 h-full w-full"
            alt=""
          />
          <div className="absolute inset-0 h-full w-full flex items-center">
            <div className="h-full flex items-end">
              <img src="/assets/astronomics_grid.png" className="w-20" alt="" />
            </div>
            <Link href={"/astronomics"}>
              <div className="ml-4">
                <p className="font-bold text-white">ASTRONOMICS</p>
                <span className="text-[#cccccc] text-sm">
                  Outerspace finance
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center text-white mt-10">
        <span className="font-bold">TO THE MOON &amp; NEVER BACK.</span>
        <div className="w-[100px] h-[1px] bg-white mt-[10px] ml-2"></div>
      </div>
      <div className="hidden lg:block">
        <img
          src="/assets/frgst_right.png"
          className="absolute right-0 top-7 w-[500px]"
          alt=""
        />
      </div>
      <div className="hidden lg:block">
        <img
          src="/assets/frgst_left.png"
          className="absolute left-0 bottom-4 w-[500px]"
          alt=""
        />
      </div>
    </div>
  );
}

export default BlackHole;
