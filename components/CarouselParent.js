import React from "react";

function CarouselParent({ children }) {
  return (
    <div className="h-screen w-screen flex lg:block z-0 overflow-x-auto snap-x lg:snap-none snap-start snap-mandatory fixed inset-0 pt-16 lg:pt-20 bg-[#010417] scrollContent">
      {children}
    </div>
  );
}

export default CarouselParent;
