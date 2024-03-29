/* eslint-disable @next/next/no-img-element */
import ProgressItem from "@/components/ProgressItem";
import React from "react";
import { Icon } from "@iconify/react";

function Progress() {
  const scrollOnClick = (id) => {
    const firstSection = document.getElementById(`${id}`);
    firstSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-full w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative pt-20 pb-28 lg:pb-0 lg:pt-0 px-6 lg:px-24">
      <h1 className="text-3xl lg:text-6xl text-white font-extrabold leading-[1.6] lg:leading-[1.3]">
        TEAM IS CONSTANTLY <br /> BUILDING, WHATS NEXT?
      </h1>
      <p className="text-white/70 mt-5 text-sm">
        Scroll down the list to discover more.
      </p>
      <div className="mt-6 lg:mt-10 w-full lg:w-[500px] relative">
        {/* <div className="w-full hidden lg:block absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#010417] to-transparent"></div> */}
        <div className="space-y-6 lg:h-[400px] pt-1 lg:py-10 overflow-auto progressScroll">
          <ProgressItem
            type={"completed"}
            text={"P2E Beta testing"}
            date={"16th Jan 2023"}
          />
          <ProgressItem
            type={"completed"}
            text={"Migration to upgraded BSC contract"}
            date={"16th Jan 2023"}
          />{" "}
          <ProgressItem
            type={"completed"}
            text={"CoinMarketCap and Coingecko listing"}
            date={"16th Jan 2023"}
          />
          <ProgressItem
            type={"completed"}
            text={"Succesfull launch and adaptation of Ambassador program"}
            date={"16th Jan 2023"}
          />
          <ProgressItem
            type={"completed"}
            text={"Create our 3D mascot: Froggie"}
            date={"16th Jan 2023"}
          />
          <ProgressItem
            type={"completed"}
            text={"Milestone: 2,000 $FRGST holders"}
            date={"21 Feb 2023"}
          />
          <ProgressItem
            type={"completed"}
            text={"Kill one zero"}
            date={"21 Feb 2023"}
          />
          <ProgressItem
            type={"completed"}
            text={"Staking contract development"}
            date={"21 Feb 2023"}
          />
          <ProgressItem
            type={"progress"}
            text={"Milestone: 5,000 $FRGST holders"}
          />
          <ProgressItem
            type={"progress"}
            text={"P2E Mobile compatability and Wallet Connect integration"}
          />
          <ProgressItem
            type={"progress"}
            text={"Increasing marketing opportunities"}
          />
          <ProgressItem
            type={"progress"}
            text={"Increase Ambassador Program"}
          />
          <ProgressItem type={"progress"} text={"Burn events"} />
          <ProgressItem
            type={"progress"}
            text={"Video's featuring our mascot"}
          />
          <ProgressItem
            type={"progress"}
            text={"Find more meaningful partnerships"}
          />
          <ProgressItem
            type={"progress"}
            text={"Developemnt of FroggiesFortune (Entertainment)"}
          />
          <ProgressItem
            type={"progress"}
            text={"Testing of staking platform"}
          />
          <ProgressItem
            type={"progress"}
            text={"Listing on a CEX that fits our needs"}
          />
          <ProgressItem text={"Continued development of P2E"} />
          <ProgressItem text={"Start planning on an NFT usecase collection"} />
          <ProgressItem text={"Release Staking Platform"} />
          <ProgressItem text={"More (list will be updated)"} />
          <ProgressItem text={"Bridge to ERC (Ethereum)"} />
          <ProgressItem text={"FroggiesFortune (Entertainment) launch"} />
        </div>
        {/* <div className="w-full hidden lg:block absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#010417] to-transparent"></div> */}
      </div>
      <div className="hidden lg:flex items-center text-white mt-10">
        <span>Bright Future for $FRGST .</span>
        <div className="w-[100px] h-[1px] bg-white mt-[10px] ml-1"></div>
        <div
          onClick={() => {
            scrollOnClick("4");
          }}
          className="inline-flex items-center relative cursor-pointer ml-4"
        >
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inset-y-0 h-[250%] w-[150%]">
            <img
              src="/assets/mesh_vector_1.png"
              alt=""
              className="h-full w-full absolute inset-0"
            />
          </div>
          <div className="text-black z-10 flex items-center">
            <span>Dive into the unknown</span>
            <Icon icon="mdi:arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
