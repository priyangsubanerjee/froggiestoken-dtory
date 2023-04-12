import Navbar from "@/components/Navbar";
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
            <li>Stellar Doc</li>
            <li>Manifesto</li>
            <li>Everlost</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Partners</li>
            <li>Ambassador Program</li>
            <li>Liquidity Lock</li>
            <li>KYC</li>
            <li>P2E</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">Interstellar</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>Fueling Success</li>
            <li>Orbiting P2E</li>
            <li>Stellar Innovation</li>
            <li>Expanding Horizons</li>
            <li>Galactic Contributions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">LISTINGS</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>BSC Scan</li>
            <li>CoinMarketCap</li>
            <li>CoinGecko</li>
            <li>Crypto.com</li>
            <li>DexTools</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">SOCIALS</h2>
          <ul className="font-poppins mt-6 space-y-3">
            <li>Official Instagram</li>
            <li>Twitter</li>
            <li>Medium</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sitemap;
