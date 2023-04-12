import React from "react";

function Snapbox({ children, id }) {
  return (
    <div
      id={`${id}`}
      className="h-full text-white w-full lg:flex lg:flex-col lg:justify-center shrink-0 snap-start snap-always px-6 lg:px-24 pt-10"
    >
      {children}
    </div>
  );
}

export default Snapbox;
