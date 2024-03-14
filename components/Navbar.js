/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Sidenav from "./Sidenav";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Icon } from "@iconify/react";

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
        <Link href={"/"}>
          <img
            src={
              theme == "dark"
                ? "/assets/logo_white.png"
                : "/assets/logo_black.png"
            }
            className="h-7 lg:h-8"
            alt=""
          />
        </Link>
      </div>
      <div className="ml-auto block lg:hidden">
        <button
          onClick={() => {
            setSideNavOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={`w-7 h-7 ${theme == "dark" ? "text-white" : "text-black"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`ml-auto hidden lg:flex items-center font-poppins text-sm space-x-2 ${
          theme == "dark" ? "text-white/90" : "text-black"
        }`}
      >
        <li
          className={`${
            theme == "dark" ? "bg-linkdark" : "bg-linklight"
          } rounded px-5 py-2 h-9 flex items-center justify-center transition-all cursor-pointer`}
        >
          <Link href={"https://richribbit.io/"} target="_blank">
            <div className="flex items-center space-x-2">
              <img
                src={
                  theme == "dark"
                    ? "/assets/richribbit.png"
                    : "/assets/richribbit.png"
                }
                alt=""
                className="h-8 grayscale"
              />
              <span className="font-semibold">Staking</span>
            </div>
          </Link>
        </li>
        <li
          className={`${
            theme == "dark" ? "bg-linkdark" : "bg-linklight"
          } rounded px-5 py-2 h-9 flex items-center justify-center transition-all cursor-pointer`}
        >
          <Link href={"https://www.everlost.io/"} target="_blank">
            <img
              src={
                theme == "dark"
                  ? "/assets/everlost_logo.png"
                  : "/assets/everlost_black_logo.png"
              }
              alt=""
              className="h-3"
            />
          </Link>
        </li>
        <Link href={"/interstellar"}>
          <li
            className={`${
              theme == "dark" ? "bg-linkdark" : "bg-linklight"
            } rounded px-5 py-2 h-10 flex items-center justify-center cursor-pointer transition-all`}
          >
            <span>Interstellar</span>
          </li>
        </Link>
        <Link href={"/manifesto"}>
          <li
            className={`${
              theme == "dark" ? "bg-linkdark" : "bg-linklight"
            } rounded px-5 py-2 h-10 flex items-center justify-center cursor-pointer`}
          >
            <span>Manifesto</span>
          </li>
        </Link>

        <Popover className="relative">
          <Popover.Button className="outline-none">
            <li
              className={`${
                theme == "dark" ? "bg-linkdark" : "bg-linklight"
              } rounded px-5 py-2 h-10 flex items-center justify-center cursor-pointer`}
            >
              <span>Buy</span>
              <Icon
                height={"24"}
                width={"24"}
                icon="material-symbols:arrow-drop-down-rounded"
              />
            </li>
          </Popover.Button>

          <Popover.Panel className="absolute p-4 w-44 left-1/2 -translate-x-1/2 flex flex-col items-center bg-slate-900 mt-3 text-sm text-white/80 rounded">
            <ul className="space-y-3 text-white font-medium">
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://pancakeswap.finance/swap?outputCurrency=0x440758dF68A045DB3F2517257F27330a12438656"
                  }
                >
                  Pancakeswap - BSC
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xCF6a03E353f0AdB2c05992264835b4f03a371117"
                  }
                >
                  Uniswap - ETH
                </Link>
              </li>
            </ul>
          </Popover.Panel>
        </Popover>
        <li
          className={`${
            theme == "dark" ? "bg-linkdark" : "bg-linklight"
          } rounded px-5 py-2 h-10 flex items-center justify-center cursor-pointer`}
        >
          <Link target="_blank" href={"/documents/white-paper.pdf"}>
            <span>Whitepaper</span>
          </Link>
        </li>
        <Popover className="relative">
          <Popover.Button className="outline-none">
            <li
              className={`${
                theme == "dark" ? "bg-linkdark" : "bg-linklight"
              } rounded px-5 py-2 h-10 flex items-center justify-center cursor-pointer`}
            >
              <span>Socials</span>
              <Icon
                height={"24"}
                width={"24"}
                icon="material-symbols:arrow-drop-down-rounded"
              />
            </li>
          </Popover.Button>

          <Popover.Panel className="absolute p-4 w-36 left-1/2 -translate-x-1/2 flex flex-col items-center bg-slate-900 mt-3 text-sm text-white/80 rounded">
            <ul className="space-y-3 text-white font-medium">
              <li>
                <Link
                  target="_blank"
                  className="flex items-center space-x-2"
                  href={"https://t.me/officialfroggiestoken"}
                >
                  <Icon icon="file-icons:telegram" width={"18"} height={"18"} />
                  <span>Telegram</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="flex items-center space-x-2"
                  href={"https://twitter.com/froggiestoken/"}
                >
                  <Icon icon="mdi:twitter" width={"18"} height={"18"} />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="flex items-center space-x-2"
                  href={"https://discord.gg/Zr8VfbpNsq"}
                >
                  <Icon icon="ic:baseline-discord" width={"18"} height={"18"} />
                  <span>Discord</span>
                </Link>
              </li>
            </ul>
          </Popover.Panel>
        </Popover>
        <Popover className="relative">
          <Popover.Button className="outline-none">
            <li
              className={`${
                theme == "dark" ? "bg-linkdark" : "bg-linklight"
              } rounded px-5 py-2 h-10 flex items-center justify-center cursor-pointer`}
            >
              <span>More</span>
              <Icon
                height={"24"}
                width={"24"}
                icon="material-symbols:arrow-drop-down-rounded"
              />
            </li>
          </Popover.Button>

          <Popover.Panel className="absolute w-36 left-1/2 -translate-x-1/2 flex flex-col space-y-4 items-center bg-slate-900 p-5 mt-3 text-sm text-white/80 rounded">
            <ul className="space-y-3 text-white font-medium">
              <li>
                <Link href={"/partners"}>Partners</Link>
              </li>
              <li>
                <Link href={"/sitemap"}>Sitemap</Link>
              </li>
              <li>
                <Link href={"/astronomics"}>Astronomics</Link>
              </li>
              <li>
                <Link href={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://skynet.certik.com/projects/froggies-token"}
                >
                  KYC
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://bscscan.com/token/0x440758df68a045db3f2517257f27330a12438656"
                  }
                >
                  BSCScan
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.coingecko.com/en/coins/froggies-token"}
                >
                  CoinGecko
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  href={"https://coinmarketcap.com/currencies/froggies-v2/"}
                >
                  CMC
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://bscscan.com/address/0xdd59a14d12086d0137811d85d516ae9f8afd5700"
                  }
                >
                  Multi-sig Wallet
                </Link>
              </li>
            </ul>
          </Popover.Panel>
        </Popover>
      </ul>
      <AnimatePresence>
        {sideNavOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                ease: "easeIn",
              },
            }}
          >
            <Sidenav
              setSideNavOpen={setSideNavOpen}
              sideNavOpen={sideNavOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
