/* eslint-disable @next/next/no-img-element */
import CarouselParent from "@/components/CarouselParent";
import Navbar from "@/components/Navbar";
import Snapbox from "@/components/Snapbox";
import About from "@/components/fragments/About";

export default function Home() {
  return (
    <div className="bg-[#010417] w-screen fixed inset-0 h-screen z-0">
      <Navbar />
      <CarouselParent>
        <Snapbox id={1}>
          <About />
        </Snapbox>
        <Snapbox id={2} />
        <Snapbox />
      </CarouselParent>
      <img
        src="/assets/frog_landing_avatar.png"
        className="fixed right-0 bottom-6 opacity-30 lg:opacity-100 lg:bottom-0 h-[300px] lg:h-[700px] z-0"
        alt=""
      />
    </div>
  );
}
