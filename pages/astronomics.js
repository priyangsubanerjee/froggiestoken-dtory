/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

function Astronomics() {
  const [countDown, setCountDown] = useState(0);

  const countDownTimer = () => {
    const launchDate = new Date("October 24, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setCountDown(
      `${Math.abs(days)} days : ${Math.abs(hours)} hrs : ${Math.abs(
        minutes
      )} mins`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      countDownTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 h-full w-full bg-[#030835] overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 h-screen w-screen overflow-auto px-6 lg:px-20 pt-20 pb-28 scrollContent">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold mt-6 lg:mt-16">
            ASTRONOMICS
          </h1>
          <div className="border-y border-white mt-10 px-6 py-10 lg:py-7 lg:flex items-center justify-center lg:justify-between lg:w-[700px]">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-white font-semibold">TOTAL SUPPLY</p>
              <p className="text-[#cccccc] text-xl font-bold">
                100 QUADRILLION
              </p>
              <p className="text-white font-semibold">Launch date: 24/10/22</p>
              <p className="text-[#cccccc] text-xl font-bold">{countDown}</p>
            </div>
            <div className="border relative h-44 w-full lg:w-[300px] rounded-md border-white mt-10 lg:mt-0">
              <img
                src="/assets/burn_1.png"
                className="absolute bottom-0 left-0 h-28"
                alt=""
              />
              <img
                src="/assets/burn_2.png"
                className="absolute top-0 right-0 h-28"
                alt=""
              />

              <div className="absolute z-10 inset-0 h-full w-full flex flex-col items-center justify-center">
                <p className="text-white font-semibold">TOTAL SUPPLY</p>
                <h1 className="text-5xl font-extrabold text-transparent font-outline mt-3">
                  30%
                </h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[500px] mt-16 font-poppins text-white text-sm text-center">
            <div className="relative h-20">
              <img
                src="/assets/box_burn.png"
                className="absolute h-full w-full"
                alt=""
              />
              <div className="absolute inset-0 h-full w-full flex items-center justify-center">
                REFLECTIONS: 3%
              </div>
            </div>
            <div className="relative h-20">
              <img
                src="/assets/box_burn.png"
                className="absolute h-full w-full"
                alt=""
              />
              <div className="absolute inset-0 h-full w-full flex items-center justify-center">
                DEV/MARKETING: 3%
              </div>
            </div>
            <div className="relative h-20 lg:-mt-1">
              <img
                src="/assets/box_burn.png"
                className="absolute h-full w-full"
                alt=""
              />
              <div className="absolute inset-0 h-full w-full flex items-center justify-center">
                FRGST BURN: 2%
              </div>
            </div>
            <div className="relative h-20 lg:-mt-1">
              <img
                src="/assets/box_burn.png"
                className="absolute h-full w-full"
                alt=""
              />
              <div className="absolute inset-0 h-full w-full flex items-center justify-center">
                LIQUIDITY POOL: 2%
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/froggies_avatar.png"
          className="absolute bottom-0 right-0 z-0 h-[600px] hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
}

export default Astronomics;
