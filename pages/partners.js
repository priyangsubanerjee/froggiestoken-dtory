import Navbar from "@/components/Navbar";
import React from "react";

function Partners() {
  return (
    <div className="fixed inset-0 h-full w-full overflow-auto scrollContent">
      <Navbar />
      <div className="h-[150px] lg:h-[200px] flex flex-col justify-end bg-[#030835] pt-16 lg:pt-20 px-6 lg:px-20">
        <h1 className="text-white text-4xl lg:text-6xl font-extrabold">
          PARTNERS
        </h1>
      </div>
      <div className="bg-[#030835] h-16 lg:h-20 sticky top-0"></div>
      <div className="px-6 space-y-8 lg:space-y-0 lg:px-44 py-16 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl leading-[1.2]">
            Uniting Forces to Reach for the Stars
          </h1>
          <p className="leading-7 mt-7">
            Even in the far Galaxies permanent foundations are created through
            interplanetary connections, think of the stars; Sagittarius, Leo,
            Taurus.
          </p>
          <p className="leading-7 mt-4">
            We at FROGGIES connect in the same way through meaningful
            partnerships, those that really matter now, and many light-years to
            come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partners;
