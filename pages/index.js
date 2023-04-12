/* eslint-disable @next/next/no-img-element */
import CarouselParent from "@/components/CarouselParent";
import Navbar from "@/components/Navbar";
import Snapbox from "@/components/Snapbox";
import About from "@/components/fragments/About";
import Progress from "@/components/fragments/Progress";
import Team from "@/components/fragments/Team";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(1);
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
      </CarouselParent>
      <img
        src="/assets/frog_landing_avatar.png"
        className="fixed right-0 bottom-6 opacity-30 lg:opacity-100 lg:bottom-0 h-[300px] lg:h-[700px] z-0"
        alt=""
      />
    </div>
  );
}
