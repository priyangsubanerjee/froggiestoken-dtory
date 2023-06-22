/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

function Astronomics() {
  const [countDown, setCountDown] = useState(0);

  const countDownTimer = () => {
    const launchDate = new Date("May 25, 2023 00:00:00").getTime();
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
    <div
      id="astronomics"
      className="h-fit lg:min-h-screen w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative pt-20 lg:pt-0 pb-[200px] lg:pb-0 px-6 lg:px-24"
    >
      <h1 className="text-white text-3xl lg:text-6xl font-extrabold mt-6 lg:mt-16">
        ASTRONOMICS
      </h1>
      <div className="border-y border-white mt-10 px-6 py-10 lg:py-7 lg:flex items-center justify-center lg:justify-between lg:w-[700px]">
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-white font-semibold uppercase">Initial supply</p>
          <p className="text-[#cccccc] text-xl font-bold uppercase">
            100 trillion
          </p>
          <p className="text-white font-semibold">Launch date - 25/05/23</p>
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
              40%
            </h1>
          </div>
        </div>
      </div>
      <div className="flex space-x-10 lg:space-x-20 mt-10">
        <div>
          <h2 className="text-white uppercase font-bold font-poppins">
            Buy TAX - 5%
          </h2>
          <p className="bg-[#5C5C5C]/20 w-fit px-6 py-2 rounded-md font-medium mt-5">
            Marketing: 5%
          </p>
        </div>
        <div className="grid grid-cols-1">
          <h2 className="text-white uppercase font-bold font-poppins">
            Sell Tax - 10%
          </h2>
          <p className="bg-[#5C5C5C]/20  px-6 py-2 rounded-md font-medium mt-5">
            Marketing: 4%
          </p>
          <p className="bg-[#5C5C5C]/20  px-6 py-2 rounded-md font-medium mt-5">
            Liquidity: 4%
          </p>
          <p className="bg-[#5C5C5C]/20 px-6 py-2 rounded-md font-medium mt-5">
            Burn: 2%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Astronomics;
