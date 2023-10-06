/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

function GalacticContributions() {
  const router = useRouter();
  const handleClose = () => {
    router.push("/interstellar");
  };
  return (
    <div className="fixed inset-0 h-full w-full bg-[url('/background.png')]  bg-cover bg-no-repeat overflow-hidden">
      <div className="fixed flex items-center px-6 lg:px-20 z-20 h-16 lg:h-20 backdrop-blur w-full top-0 inset-x-0">
        <button
          onClick={() => {
            handleClose();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute z-10 inset-0 h-full w-full text-white pt-16 pb-20 lg:pt-20 overflow-auto px-6 lg:px-20">
          <div className="mt-6 lg:mt-7">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white">
              GALACTIC CONTRIBUTIONS
            </h1>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="mt-2">
                Submit your ideas and become a contributor in the galaxy.
              </p>
            </div>
            <div className="mt-10 lg:w-[600px]">
              <textarea
                name=""
                className="bg-[#B1B3C4] placeholder:text-zinc-800 p-5 h-52 w-full rounded"
                placeholder="Add a description"
              ></textarea>
              <button className="text-black bg-[#B1B3C4] px-5 py-3 rounded font-semibold text-sm mt-5">
                SEND
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src="/assets/galactic_contributions.png"
            className={`h-[800px] transition-all duration-500 hidden lg:block`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default GalacticContributions;
