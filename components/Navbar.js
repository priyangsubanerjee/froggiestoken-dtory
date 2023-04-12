/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

function Navbar({ theme = "dark" }) {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    const scrollContents = document.querySelectorAll(".scrollContent");
    scrollContents.forEach((scrollContent) => {
      if (scrollContent) {
        scrollContent.addEventListener("scroll", () => {
          console.log("scrolling", scrollContent.scrollTop);
          if (scrollContent.scrollTop > 50) {
            setScrollDirection("down");
            console.log("scrolling down");
          } else {
            setScrollDirection("up");
            console.log("scrolling up");
          }
        });
      } else {
        console.log("scrollContent not found");
      }
    });
  }, [scrollDirection, prevScrollPosition]);

  return (
    <div
      className={`${
        scrollDirection == "down" ? "lg:-translate-y-20" : "translate-y-0"
      } fixed top-0 inset-x-0 z-30 h-16 lg:h-20 w-full flex items-center px-6 lg:px-20 backdrop-blur transition-all duration-500 ease-in-out`}
    >
      <div>
        <img
          src={
            theme == "dark"
              ? "/assets/logo_white.png"
              : "/assets/logo_black.png"
          }
          className="h-7 lg:h-8"
          alt=""
        />
      </div>
      <div className="ml-auto block lg:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex ml-auto space-x-6 text-sm">
        <li
          className={`${
            theme == "dark"
              ? "bg-[#000728]  text-white"
              : "bg-[#e8ecff]  text-black"
          } h-9 flex items-center px-5 rounded`}
        >
          <span>Everlost</span>
        </li>
        <li
          className={`${
            theme == "dark"
              ? "bg-[#000728]  text-white"
              : "bg-[#e8ecff]  text-black"
          } h-9 flex items-center px-5 rounded`}
        >
          <span>Interstellar</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
