import React from "react";
import Controlbars from "./Controlbars";

function CarouselParent({ children, state, setState }) {
  const totalBars = children.length;
  return (
    <div className="h-screen bg-transparent w-screen flex lg:block z-10 overflow-x-auto snap-x lg:snap-none snap-start snap-mandatory fixed inset-0 pt-16 lg:pt-0 scrollContent">
      {children}
      <Controlbars state={state} setState={setState} totalBars={totalBars} />
    </div>
  );
}

export default CarouselParent;
