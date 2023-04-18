import Navbar from "@/components/Navbar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Sitemap() {
  return (
    <div className="fixed inset-0 h-full w-full overflow-auto scrollContent">
      <Navbar />
      <div className="h-[150px] lg:h-[200px] flex flex-col justify-end bg-[#030835] pt-16 lg:pt-20 px-6 lg:px-20">
        <h1 className="text-white text-4xl lg:text-6xl font-extrabold">
          SITEMAP
        </h1>
      </div>
      <div className="bg-[#030835] h-16 lg:h-20 sticky top-0"></div>
      <div className="px-6 space-y-8 lg:space-y-0 lg:px-44 py-16 lg:flex lg:justify-evenly">
        <div>
          <h2 className="text-xl font-extrabold">ABOUT</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>
              <Link
                href="https://drive.google.com/file/d/1oGf6O1Gq6YJOdazJBeHxGK_3wO3OZSTM/view?usp=sharing"
                target="_blank"
              >
                Whitepaper
              </Link>
            </li>
            <li>
              <Link href="/manifesto">Manifesto</Link>
            </li>
            <li>
              <Link href="https://www.everlost.io/" target="_blank">
                Everlost
              </Link>
            </li>
            <li>
              <Link href="/#2">Team</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/partners">Partners</Link>
            </li>
            <li>Ambassador Program</li>
            <li>Liquidity Lock</li>
            <li>KYC</li>
            <li>P2E</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">Interstellar</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>
              <Link href="interstellar/fuelingSuccess">Fueling Success</Link>
            </li>
            <li>
              <Link href="interstellar/orbitingP2e">Orbiting P2E</Link>
            </li>
            <li>
              <Link href="interstellar/stellarInnovation">
                Stellar Innovation
              </Link>
            </li>
            <li>
              <Link href="interstellar/expandingHorizons">
                Expanding Horizons
              </Link>
            </li>
            <li>
              <Link href="interstellar/galacticContribution">
                Galactic Contributions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">LISTINGS</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>
              <Link
                href="https://bscscan.com/token/0x7029994f28fd39ff934a96b25591d250a2183f67"
                target="_blank"
              >
                BSC Scan
              </Link>
            </li>
            <li>CoinMarketCap</li>

            <li>
              <Link
                href="https://www.coingecko.com/en/coins/froggies-token"
                target="_blank"
              >
                CoinGecko
              </Link>
            </li>
            <li>Crypto.com</li>
            <li>DexTools</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">SOCIALS</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>
              <Link
                target="_blank"
                className="flex items-center space-x-2"
                href={"https://t.me/officialfroggiestoken"}
              >
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                className="flex items-center space-x-2"
                href={"https://twitter.com/froggiestoken/"}
              >
                <span>Twitter</span>
              </Link>
            </li>

            <li>Medium</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
