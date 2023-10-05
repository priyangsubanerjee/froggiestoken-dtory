/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

function FuelingSuccess() {
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
              FUELING SUCCESS
            </h1>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Migration to an upgraded BSC contract</p>
              <p className="mt-2">
                We migrated to BSC to ensure a more stable liquidity pool and
                provide holders and investors with lower gas fees. Building
                utility on BSC means building on security and affordable
                transactions.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Release fully functional P2E</p>
              <p className="mt-2">
                We have been working on our P2E for many months, and we are
                close to delivering. &apos;Fully functional&apos; means our P2E
                (https://www.everlost.io) is working on both PC and Mobile Phone
                and is supported by Wallet Connect.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Launching an upgraded website</p>
              <p className="mt-2">
                The website you are reading right now is FROGGIES new and
                upgraded website. Lots of time and creativity went into the
                creation of this beautiful collaboration of outer space art.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Start development of staking contract</p>
              <p className="mt-2">
                We are starting the development of a safe, and well rewarding
                staking platform. Generative APY&apos;s, and safety one can rely
                on. Release the satellites FROGGIES is scaling up its ambassador
                program, increasing marketing capabilities and investments while
                finding meaningful collaborations to achieve broader market
                exposure.
              </p>
            </div>
            <div className="mt-7 lg:w-[700px] leading-7">
              <p className="underline">Release the satellites</p>
              <p className="mt-2">
                FROGGIES is scaling up its ambassador program, increasing
                marketing capabilities and investments while finding meaningful
                collaborations to achieve broader market exposure.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src="/assets/fueling_success.png"
            className={`h-[500px] transition-all duration-500 hidden lg:block`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FuelingSuccess;
