import CarouselParent from "@/components/CarouselParent";
import Navbar from "@/components/Navbar";
import Snapbox from "@/components/Snapbox";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <CarouselParent>
        <Snapbox />
        <Snapbox />
        <Snapbox />
      </CarouselParent>
    </div>
  );
}
