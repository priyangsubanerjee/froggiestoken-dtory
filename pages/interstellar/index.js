/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";

function Interstellar() {
  const [state, setState] = useState(0);
  return (
    <div className="fixed inset-0 h-screen w-screen bg-[#010417]">
      <div className="h-full w-full relative">
        <div className="absolute z-10 h-full w-full flex justify-center items-center">
          <ul className="text-white/50 space-y-16">
            <motion.li
              onMouseEnter={() => {
                setState(1);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              className="text-5xl font-poppins font-extrabold text-center hover:text-white transition-all duration-300 ease-in-out"
              initial={{
                transform: "translateY(-100px)",
                opacity: 0,
              }}
              whileInView={{
                transform: "translateY(0px)",
                opacity: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <span>FUELING SUCCESS</span>
            </motion.li>
            <motion.li
              onMouseEnter={() => {
                setState(2);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              className="text-5xl font-poppins font-extrabold text-center hover:text-white transition-all duration-300 ease-in-out"
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
              <span>ORBITING P2E</span>
            </motion.li>
            <motion.li
              onMouseEnter={() => {
                setState(3);
              }}
              onMouseLeave={() => {
                setState(0);
              }}
              className="text-5xl font-poppins font-extrabold text-center hover:text-white transition-all duration-300 ease-in-out"
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
              <span>STELLAR INNOVATION</span>
            </motion.li>
            <motion.li
              className="text-5xl font-poppins font-extrabold text-center hover:text-white transition-all duration-300 ease-in-out"
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
              <span>EXPANDING HORIZONS</span>
            </motion.li>
            <motion.li
              className="text-5xl font-poppins font-extrabold text-center hover:text-white transition-all duration-300 ease-in-out"
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
              <span>GALACTIC CONTRIBUTIONS</span>
            </motion.li>
          </ul>
        </div>
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
  );
}

export default Interstellar;
