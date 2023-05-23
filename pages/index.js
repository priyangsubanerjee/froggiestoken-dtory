/* eslint-disable @next/next/no-img-element */
import CarouselParent from "@/components/CarouselParent";
import Navbar from "@/components/Navbar";
import Snapbox from "@/components/Snapbox";
import About from "@/components/fragments/About";
import BlackHole from "@/components/fragments/BlackHole";
import Buy from "@/components/fragments/Buy";
import Progress from "@/components/fragments/Progress";
import Team from "@/components/fragments/Team";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState(1);
  const [walletModal, setWalletModal] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem("walletModal")) {
      if (localStorage.getItem("walletModal") == "true") {
        setWalletModal(false);
      } else {
        setWalletModal(true);
      }
    } else {
      setWalletModal(true);
    }
  }, []);
  return (
    <div className="bg-[#010417] w-screen fixed inset-0 h-screen z-0">
      <Navbar />
      <CarouselParent state={state} setState={setState}>
        <Snapbox id={1} state={state} setState={setState}>
          <About />
        </Snapbox>
        <Snapbox id={2} state={state} setState={setState}>
          <Team />
        </Snapbox>
        <Snapbox id={3} state={state} setState={setState}>
          <Progress />
        </Snapbox>
        {/* <Snapbox id={4} state={state} setState={setState}>
          <Buy />
        </Snapbox> */}
        <Snapbox id={4} state={state} setState={setState}>
          <BlackHole />
        </Snapbox>
      </CarouselParent>
      <img
        src="/assets/frog_landing_avatar.png"
        className="fixed right-0 bottom-0 opacity-30 lg:opacity-100 lg:bottom-0 h-[300px] lg:h-[600px] z-0"
        alt=""
      />
      <AnimatePresence>
        {walletModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen z-20 bg-black/70 flex items-center justify-center"
          >
            <div className="bg-[#010417] rounded-md w-[90%] lg:w-[600px] relative p-6 lg:p-8">
              <i className="text-red-400 absolute -top-10 left-1/2 -translate-x-1/2">
                <iconify-icon
                  className="mr-5 block"
                  height="100"
                  width="100"
                  icon="gridicons:notice"
                ></iconify-icon>
              </i>
              <button
                onClick={() => {
                  setWalletModal(false);
                  localStorage.setItem("walletModal", "true");
                }}
                className="absolute -top-3 flex  items-center justify-center -right-3 h-10 w-10 rounded-full bg-[#9DA7FF]"
              >
                <iconify-icon
                  height="18"
                  width="18"
                  icon="ion:close"
                ></iconify-icon>
              </button>
              <h1 className="text-center text-[#EF626C] font-poppins font-bold text-xl mt-12">
                IMPORTANT NOTICE!
              </h1>
              <p className="text-white font-poppins font-medium text-sm mt-4 leading-7">
                We have recently migrated to a new contract (Binance Smart
                Chain), if you bought our previous contract please add below
                contract address to your wallet:
              </p>
              <div className="mt-5 border rounded-md flex items-center justify-between text-white p-3">
                <span className="w-[80%] text-ellipsis whitespace-nowrap overflow-hidden">
                  0x440758dF68A045DB3F2517257F27330a12438656
                </span>
                <button
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(
                        "0x440758dF68A045DB3F2517257F27330a12438656"
                      );
                      alert("Copied to clipboard");
                    } catch (error) {}
                  }}
                >
                  <iconify-icon
                    className="mr-5 block"
                    icon="ph:copy"
                  ></iconify-icon>
                </button>
              </div>

              <p className="text-white font-medium font-poppins text-sm mt-5 leading-6">
                You have received an airdrop 1000:1, with the same fiat (USD)
                value as before migration.
              </p>
              <p className="text-[#DEAB28] font-medium mt-6">
                Please be aware of scammers, do not connect to any sites to
                migrate.
              </p>

              <div className="flex items-center justify-center mt-10">
                <button
                  onClick={() => {
                    setWalletModal(false);
                    localStorage.setItem("walletModal", true);
                  }}
                  className="bg-[#9DA7FF] px-8 py-3 rounded-full text-[#010417] font-popins font-medium"
                >
                  Okay
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
