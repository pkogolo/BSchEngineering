import React, { useState } from "react";

function DropDownSingleItem({ title, content }) {
  const [open, setOpen] = useState(false);

  function toggleDropDown() {
    setOpen(!open);
  }

  const dropArrow = (
    <svg
      onClick={toggleDropDown}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0002 36.6668C29.2049 36.6668 36.6668 29.2049 36.6668 20.0002C36.6668 10.7954 29.2049 3.3335 20.0002 3.3335C10.7954 3.3335 3.3335 10.7954 3.3335 20.0002C3.3335 29.2049 10.7954 36.6668 20.0002 36.6668Z"
        stroke="#68696F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 20L20.0002 26.6667L26.6668 20"
        stroke="#68696F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13.3335V26.6668"
        stroke="#68696F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="w-full sm:text-2xl text-[#68696F]">
      <div className="p-4 border-b bg-[#FAF9F6] border-gray py-4 flex items-center justify-between ">
        {title}
        {!open?<div className="rotate-0">{dropArrow}</div>: <div className="rotate-180">{dropArrow}</div>}
      </div>
      {open && (
        <div className="p-4 border-b border-gray py-4 text-[#4A4B50] bg-[#ECEFF1] ">
          {content}
        </div>
      )}
    </div>
  );
}

export default DropDownSingleItem;
