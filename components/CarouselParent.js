import React from "react";

function CarouselParent({ children }) {
  return (
    <div className="h-screen bg-transparent w-screen flex lg:block z-10 overflow-x-auto snap-x lg:snap-none snap-start snap-mandatory fixed inset-0 pt-16 lg:pt-0 scrollContent">
      {children}
    </div>
  );
}

export default CarouselParent;
