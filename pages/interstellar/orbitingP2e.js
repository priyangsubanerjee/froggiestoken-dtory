/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

function OrbitingP2E() {
  const router = useRouter();
  const handleClose = () => {
    router.push("/interstellar");
  };
  return (
    <div className="fixed inset-0 h-full w-full bg-[url('/background.png')]  bg-cover overflow-hidden">
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
              ORBITING P2E
            </h1>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Continuous development of our P2E</p>
              <p className="mt-2">
                More functionalities, visuals, levels, and gameplay will be
                added to Everlost.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Staking platform release</p>
              <p className="mt-2">
                The time has arrived to reward those that believe in us. Stake
                your FROGGIES Token and gain more rewards with time.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Space Entertainment</p>
              <p className="mt-2">
                We are planning and development of our entertainment platform.
                This platform will allow our holders to use their Froggies Token
                for means of entertainment and more game play.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Share our wealth from Galaxy</p>
              <p className="mt-2">
                We are aiming for a listing on a top 50 Centralized Exchange to
                allow more $FRGST to be traded and increase our overall volume
                and exposure.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-0">
          <img
            src="/assets/orbiting_p2e.png"
            className={`h-[800px] transition-all duration-500 hidden lg:block`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OrbitingP2E;
