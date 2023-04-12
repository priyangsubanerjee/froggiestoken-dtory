/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function Buy() {
  return (
    <div className="h-full w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative pt-20 pb-28 lg:pb-0 lg:pt-0 px-6 lg:px-24">
      <div className="mt-6 lg:mt-10 w-full lg:flex lg:items-center">
        <div className="h-[500px] lg:w-[400px] bg-slate-50 rounded-md"></div>
        <div className="lg:ml-16 mt-16 lg:mt-0">
          <div>
            <h1 className="text-lg font-bold">BUY ON DEX</h1>
            <div className="flex items-center space-x-5 mt-5">
              <div className="h-24 w-24 bg-red-50"></div>
              <div className="h-24 w-24 bg-red-50"></div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-lg font-bold">BUY ON CEX</h1>
            <div className="flex items-center space-x-5 mt-5">
              <div className="h-24 w-24 bg-red-50"></div>
              <div className="h-24 w-24 bg-red-50"></div>
              <div className="h-24 w-24 bg-red-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
