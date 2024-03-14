/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function RichRibbitLive() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let shown = sessionStorage.getItem("richribbitStaking") || false;
    if (!shown) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, []);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full z-40 bg-black/80 flex items-center justify-center">
          <div className="w-[90%] lg:w-[550px] h-[480px] py-10 relative">
            <img
              src="/assets/radialGradientModal.png"
              className="absolute inset-0 h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 h-full w-full">
              <div className="relative h-full w-full pt-20">
                <button
                  onClick={() => {
                    sessionStorage.setItem("richribbitStaking", true);
                    setIsOpen(false);
                  }}
                  className="bg-[#30C952] h-[45px] w-[45px] rounded-full absolute -top-5 -right-5  flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M17.9375 10.0625L10.0625 17.9375M10.0625 10.0625L17.9375 17.9375"
                      stroke="#010417"
                      stroke-width="3.15"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div className="absolute left-1/2 top-0 -translate-y-[55%] -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M50 8.3335C26.9875 8.3335 8.33337 26.9877 8.33337 50.0002C8.33337 73.0127 26.9875 91.6668 50 91.6668C73.0125 91.6668 91.6667 73.0127 91.6667 50.0002C91.6667 26.9877 73.0125 8.3335 50 8.3335ZM54.1667 70.8335H45.8334V62.5002H54.1667V70.8335ZM54.1667 54.1668H45.8334L43.75 29.1668H56.25L54.1667 54.1668Z"
                      fill="#30C952"
                    />
                  </svg>
                </div>
                <h2 className="uppercase text-2xl text-center font-black tracking-wide text-[#30C952]">
                  RichRibbit is now live!
                </h2>
                <p className="text-center text-[#EDEDED] mt-4">
                  Stake your $FRGST with 40% APR!
                </p>
                <img
                  src="/assets/richribbitExpanded.png"
                  className="h-60 mx-auto mt-0"
                  alt=""
                />
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      sessionStorage.setItem("richribbitStaking", true);
                      setIsOpen(false);
                      window.open("https://richribbit.io/", "_blank");
                    }}
                    className="px-5 font-medium mx-auto h-[48px] bg-[#30C952] w-[185px] font-poppins rounded-full text-[#010417]"
                  >
                    Stake Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RichRibbitLive;
