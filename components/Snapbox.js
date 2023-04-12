import { useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

function Snapbox({ children, id, setState, state }) {
  const ref = useRef(null);
  const intersectionObserver = useInView(ref);
  useEffect(() => {
    if (intersectionObserver) {
      setState(id);
    }
  }, [intersectionObserver, id, setState]);
  return (
    <div
      id={id}
      className="z-0 lg:h-fit h-full min-h-full w-full shrink-0 snap-start snap-mandatory snap-always lg:flex lg:flex-col lg:justify-center lg:pb-0 relative text-white "
    >
      {children}
      <div ref={ref} className="absolute left-1/2 top-1/2"></div>
    </div>
  );
}

export default Snapbox;
