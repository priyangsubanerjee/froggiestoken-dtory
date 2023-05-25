import React from "react";
import Navbar from "../components/Navbar";
function Manifesto() {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-white overflow-hidden">
      <div className="h-full w-full relative overflow-hidden">
        <Navbar theme="white" />
        <div className="absolute h-full w-full inset-0 pt-20 pb-28 px-6 lg:px-24 overflow-auto scrollContent">
          <div className="flex items-baseline mt-4 lg:mt-10">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-zinc-900">
              MANIFESTO .
            </h1>
            <div className="h-1 ml-3 bg-zinc-900 w-96 hidden lg:block"></div>
          </div>
          <p className="text-xs lg:text-base leading-6 lg:leading-8 mt-7 lg:mt-10">
            Beyond the stars, beyond the night, A future bright, a cosmic <br />
            sight. Vast and endless, the expanse calls, With promise of
            discovery, and new horizons for <br /> us all.
          </p>

          <p className="text-xs lg:text-base leading-6 lg:leading-8 mt-7">
            Through the void, we journey forth, To explore, to learn, to grow.
            With every step, we <br /> break new ground, And our understanding
            continues to flow.
          </p>

          <p className="text-xs lg:text-base leading-6 lg:leading-8 mt-7">
            The mysteries of the universe,
            <br /> Await to be unraveled, <br /> As we reach for the stars,
            <br />
            Our horizons are forever traveled.
          </p>

          <p className="text-xs lg:text-base leading-6 lg:leading-8 mt-7">
            With each new discovery,
            <br /> We take one step further,
            <br /> Towards a future that&apos;s bright,
            <br /> And the possibilities that we offer.
          </p>

          <p className="text-xs lg:text-base leading-6 lg:leading-8 mt-7">
            So come and join us, <br /> On this journey to the sky, <br /> For
            the future is ours, And it&apos;s time for us to fly.
          </p>

          <p className="text-xs lg:text-base leading-6 lg:leading-8 mt-7">
            - TO THE MOON AND NEVER BACK
          </p>
          <div className="flex items-center justify-end mt-10 text-sm">
            <p className="text-[#777777]">
              Partenerd with{" "}
              <a href="" className="underline">
                Dtory Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;
