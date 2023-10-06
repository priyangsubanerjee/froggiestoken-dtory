/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

function ExpandingHorizons() {
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
              EXPANDING HORIZONS
            </h1>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Sharing value</p>
              <p className="mt-2">
                By marketing and developing of our &apos;Ultimate
                Destination&apos; will be enlightened with our plans, all eyes
                will be on FROGGIES Token.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Valued on all planets</p>
              <p className="mt-2">
                We will continue collaborations with third parties to turn
                FROGGIES Token into a means of real-life payments. Envision
                online stores where you can check-out using your Froggies Token!
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Full Booster Launch</p>
              <p className="mt-2">
                The future release of our entertainment platform will be
                entirely powered by $FRGST. A whole FROGGIEVERSE of play to earn
                gaming systems.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 z-0">
          <img
            src="/assets/expanding_horizons.png"
            className={`h-[800px] transition-all duration-500 hidden lg:block`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ExpandingHorizons;
