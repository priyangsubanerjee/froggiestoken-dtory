/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProgressItem({ type, text, date }) {
  return (
    <div className="flex items-center">
      <img
        src={
          type == "completed"
            ? "/assets/check_green.png"
            : type == "progress"
            ? "/assets/check_yellow.png"
            : "/assets/check_gray.png"
        }
        className="h-5"
        alt=""
      />
      <div className="ml-4 font-poppins">
        <p className={`text-white ${type == "completed" && "line-through"}`}>
          {text}
        </p>
        <span className="text-[#cccccc] text-xs mt-2">
          {type == "completed" && date}
        </span>
      </div>
    </div>
  );
}

export default ProgressItem;
