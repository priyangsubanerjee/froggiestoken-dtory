/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Menu } from "@headlessui/react";

function Sidenav({ sideNavOpen, setSideNavOpen, theme = "dark" }) {
  const router = useRouter();

  useEffect(() => {
    // disable sidenav on route change start
    const handleRouteChangeStart = () => {
      setSideNavOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
  }, [router, setSideNavOpen]);

  return (
    <div className="fixed inset-0 bg-[#010417] h-screen w-screen z-30 overflow-auto">
      <div className="flex sticky top-0 inset-x-0 items-center justify-between h-16 px-6 backdrop-blur-sm">
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
        <button
          onClick={() => {
            setSideNavOpen(false);
          }}
          className={`${theme == "dark" ? "text-white" : "text-black"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="w-full mt-16 text-sm font-poppins space-y-9  text-white font-medium mb-44">
        <li className="flex items-center justify-center">
          <Link href={"https://richribbit.com/"} target="_blank">
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
              <span className="font-semibold">Staking (soon)</span>
            </div>
          </Link>
        </li>
        <li className="flex items-center justify-center">
          <img
            src={
              theme == "dark"
                ? "/assets/everlost_logo.png"
                : "/assets/everlost_black_logo.png"
            }
            alt=""
            className="h-3"
          />
        </li>
        <li>
          <Link href={"/interstellar"}>
            <div className="flex items-center justify-center">
              <span>Interstellar</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/manifesto"}>
            <div className="flex items-center justify-center">
              <span>Manifesto</span>
            </div>
          </Link>
        </li>

        <div className="flex items-center justify-center">
          <Menu>
            <div className="flex flex-col items-center text-sm">
              <Menu.Button>
                <span>Buy</span>
              </Menu.Button>
              <Menu.Items
                className={
                  "flex flex-col space-y-4 items-center bg-slate-900 p-5 mt-3 text-sm text-white/80 rounded"
                }
              >
                <Menu.Item>
                  <a href="">PancakeSwap</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="">Poocoin</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="">Coinstore</a>
                </Menu.Item>
              </Menu.Items>
            </div>
          </Menu>
        </div>
        <li className="flex items-center justify-center">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1oGf6O1Gq6YJOdazJBeHxGK_3wO3OZSTM/view"
          >
            <span>Whitepaper</span>
          </Link>
        </li>
        <div className="flex items-center justify-center">
          <Menu>
            <div className="flex flex-col items-center">
              <Menu.Button>
                <span>More</span>
              </Menu.Button>
              <Menu.Items
                className={
                  "flex flex-col space-y-4 items-center bg-slate-900 p-5 mt-3 text-sm rounded text-white/80"
                }
              >
                <Menu.Item>
                  <Link href={"/partners"}>Partners</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={"/sitemap"}>Sitemap</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={"/astronomics"}>Astronomics</Link>
                </Menu.Item>
                <Menu.Item>
                  <a href="">FAQ</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="">KYC</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="">BSC Scan</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="">Coingecko</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="">CMC</a>
                </Menu.Item>
              </Menu.Items>
            </div>
          </Menu>
        </div>
        <li className="flex items-center justify-center">
          <span>Telegram</span>
        </li>
        <li className="flex items-center justify-center">
          <span>Twitter</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
