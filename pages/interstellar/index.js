/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

function Interstellar() {
  const [state, setState] = useState(0);
  const router = useRouter();

  const handleClose = () => {
    // check if can go back
    if (router.asPath !== router.route) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <div className="fixed inset-0 h-screen w-screen bg-[#010417]">
      <div className="h-full w-full relative">
        <div className="absolute z-10 h-full w-full flex justify-center items-center">
          <ul className="text-white/50 space-y-12 lg:space-y-16 text-2xl lg:text-5xl font-poppins font-extrabold text-center ">
            <motion.li
              onMouseEnter={() => {
                setState(1);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              className="hover:text-white transition-all duration-300 ease-in-out"
              initial={{
                transform: "translateY(-100px)",
                opacity: 0,
              }}
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{
                once: true,
              }}
            >
              <Link href={"/interstellar/fuelingSuccess"}>
                <span>FUELING SUCCESS</span>
              </Link>
            </motion.li>
            <motion.li
              onMouseEnter={() => {
                setState(2);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              className="hover:text-white transition-all duration-300 ease-in-out"
              initial={{
                transform: "translateY(-100px)",
                opacity: 0,
              }}
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: { duration: 1, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              <Link href={"/interstellar/orbitingP2e"}>
                <span>ORBITING P2E</span>
              </Link>
            </motion.li>
            <motion.li
              onMouseEnter={() => {
                setState(3);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              className="hover:text-white transition-all duration-300 ease-in-out"
              initial={{
                transform: "translateY(-100px)",
                opacity: 0,
              }}
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: { duration: 1, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <Link href={"/interstellar/stellarInnovation"}>
                <span>STELLAR INNOVATION</span>
              </Link>
            </motion.li>
            <motion.li
              className="hover:text-white transition-all duration-300 ease-in-out"
              onMouseEnter={() => {
                setState(4);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              initial={{
                transform: "translateY(-100px)",
                opacity: 0,
              }}
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: { duration: 1, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              <Link href={"/interstellar/expandingHorizons"}>
                <span>EXPANDING HORIZONS</span>
              </Link>
            </motion.li>
            <motion.li
              className="hover:text-white transition-all duration-300 ease-in-out"
              onMouseEnter={() => {
                setState(5);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              initial={{
                transform: "translateY(-100px)",
                opacity: 0,
              }}
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: { duration: 1, delay: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <Link href={"/interstellar/galacticContribution"}>
                <span>GALACTIC CONTRIBUTIONS</span>
              </Link>
            </motion.li>
          </ul>
        </div>
        <div className="absolute top-10 left-6 lg:left-10 h-fit w-fit z-20">
          <button onClick={() => handleClose()} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="absolute bottom-0 right-0 z-0">
            <img
              src="/assets/fueling_success.png"
              className={`h-[500px] ${
                state == 1 ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
              alt=""
            />
          </div>
          <div className="absolute top-0 right-0 z-0">
            <img
              src="/assets/orbiting_p2e.png"
              className={`h-[700px] ${
                state == 2 ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 right-0 z-0">
            <img
              src="/assets/stellar_innovation.png"
              className={`h-[500px] ${
                state == 3 ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 z-0">
            <img
              src="/assets/expanding_horizons.png"
              className={`h-[500px] ${
                state == 4 ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 right-0 z-0">
            <img
              src="/assets/galactic_contributions.png"
              className={`h-[700px] ${
                state == 5 ? "opacity-100" : "opacity-0"
              } transition-all duration-500`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interstellar;
