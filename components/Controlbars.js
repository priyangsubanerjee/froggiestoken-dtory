import React from "react";

function Controlbars({ totalBars, state }) {
  const scrollOnClick = (id) => {
    const firstSection = document.getElementById(`${id}`);
    firstSection.scrollIntoView({ behavior: "smooth" });
  };
  const menu = ["About us", "Team", "Progress", "Buy", "Black Hole"];
  return (
    <div>
      <div className="fixed bottom-0 z-20 left-0 inset-y-0 w-16 hidden lg:flex lg:flex-col justify-center items-center space-y-7">
        {[...Array(totalBars)].map((_, index) => {
          return (
            <div key={index} className="w-full flex justify-center">
              <div
                onClick={() => {
                  scrollOnClick(index + 1);
                }}
                className="flex justify-center w-[50%] cursor-pointer"
              >
                <div
                  className={`${
                    state == index + 1 ? "bg-white" : "bg-white/20"
                  } h-20 w-1 rounded-full transition-all duration-500 cursor-pointer`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#000000] h-20 space-x-3 fixed bottom-0 inset-x-0 flex items-center overflow-auto text-sm w-full mt-auto shrink-0 lg:hidden text-white p-4 z-10">
        {[...Array(totalBars)].map((_, index) => {
          return (
            <button
              onClick={() => {
                scrollOnClick(index + 1);
              }}
              key={index}
              className={`flex items-center space-x-2 ${
                state == index + 1
                  ? "bg-white text-black"
                  : "bg-[#030835] text-primaryGray_100"
              } h-full px-5 rounded transition-all duration-500 shrink-0`}
            >
              <span className="font-mono text-sm">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}.
              </span>
              <span>{menu[index]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Controlbars;
