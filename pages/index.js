import CarouselParent from "@/components/CarouselParent";
import Navbar from "@/components/Navbar";
import Snapbox from "@/components/Snapbox";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselParent>
        <Snapbox />
        <Snapbox />
        <Snapbox />
      </CarouselParent>
    </div>
  );
}
