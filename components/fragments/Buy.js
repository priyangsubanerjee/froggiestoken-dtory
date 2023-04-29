/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Buy() {
  return (
    <div className="h-full w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative pt-20 pb-28 lg:pb-0 lg:pt-0 px-6 lg:px-24">
      <div className="mt-6 lg:mt-10 w-full lg:flex lg:items-center">
        <div className="h-[700px] w-full lg:w-[450px] rounded-[30px] overflow-hidden">
          <iframe
            width={"100%"}
            height="700"
            frameborder="0"
            className="overflow-hidden rounded-4xl"
            allow="clipboard-read ; clipboard-write; web-share ; accelerometer; autoplay ; camera; gyroscope ; payment; geolocation *"
            src="https://flooz.trade/embed/trade?swapDisabled=false&swapToTokenAddress=0x7029994f28fd39ff934A96b25591D250A2183f67&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=true&onRampDefaultAmount=200&network=bsc&lightMode=false&primaryColor=%235e38f4&roundedCorners=28&padding=20"
          ></iframe>
        </div>
        <div className="lg:ml-16 mt-16 lg:mt-0">
          <div>
            <h1 className="text-lg font-bold">BUY ON DEX</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              <Link
                target="_blank"
                href={
                  "https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB"
                }
              >
                <div className="h-32 min-w-[128px px-3 bg-[#121728] flex flex-col items-center justify-evenly rounded-lg hover:scale-105 transition-all">
                  <img
                    src="/assets/pancake_swap.png"
                    className="h-12 w-12 grayscale"
                    alt=""
                  />
                  <div className="flex items-center text-sm">
                    <span>Pancake Swap</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://poocoin.app/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f7"
                }
              >
                <div className="h-32 min-w-[128px] px-3 bg-[#121728] flex flex-col items-center justify-evenly rounded-lg hover:scale-105 transition-all">
                  <img
                    src="/assets/poocoin.png"
                    className="h-12 w-12 grayscale"
                    alt=""
                  />
                  <div className="flex items-center text-sm">
                    <span>Poocoin</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-lg font-bold">BUY ON CEX</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              <Link
                href={"https://www.coinstore.com/#/spot/FRGSTUSDT"}
                target="_blank"
              >
                <div className="h-32 min-w-[128px] px-3 bg-[#121728] flex flex-col items-center justify-evenly rounded-lg hover:scale-105 transition-all">
                  <img
                    src="/assets/coinstore.png"
                    className="h-12 w-12 grayscale"
                    alt=""
                  />
                  <div className="flex items-center text-sm">
                    <span>Coinstore</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://p2pb2b.com/trade/FRGST_USDT/"}
              >
                <div className="h-32 min-w-[128px] px-3 bg-[#121728] flex flex-col items-center justify-evenly rounded-lg hover:scale-105 transition-all">
                  <img
                    src="/assets/p2b.png"
                    className="h-12 w-12 grayscale"
                    alt=""
                  />
                  <div className="flex items-center text-sm">
                    <span>P2B</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://coinsbit.io/trade_classic/FRGST_mUSDT"}
              >
                <div className="h-32 min-w-[128px] px-3 bg-[#121728] flex flex-col items-center justify-evenly rounded-lg hover:scale-105 transition-all">
                  <img
                    src="/assets/coinsbit.png"
                    className="h-12 w-12 grayscale"
                    alt=""
                  />
                  <div className="flex items-center text-sm">
                    <span>Coinsbit</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
