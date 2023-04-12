import React from "react";

function QuestionPanel({ state, setState, index, question, answer }) {
  return (
    <div
      onClick={() => {
        if (state === index) {
          setState(null);
        } else {
          setState(index);
        }
      }}
      className="text-white border-b border-slate-600 lg:px-5 py-5 cursor-pointer"
    >
      <div className="flex items-center w-full">
        <h1 className="mr-auto font-poppins font-medium">{question}</h1>
        {state === index ? (
          <iconify-icon icon="ic:round-remove"></iconify-icon>
        ) : (
          <iconify-icon icon="ic:round-add"></iconify-icon>
        )}
      </div>
      {state === index && (
        <p className="text-sm leading-6 mt-2 text-secondaryGrey">{answer}</p>
      )}
    </div>
  );
}

export default QuestionPanel;
