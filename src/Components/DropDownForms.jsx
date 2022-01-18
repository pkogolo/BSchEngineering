import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

function DropDownForms({ title, optionArray, getFunction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("Please Select");

  const variants = {
    open: { opacity: 1, y: "3%", display: "block" },
    closed: { opacity: 0, y: 0, display: "none" },
  };

  return (
    <div className="mt-4">
      <h1 className="mb-2">{title}</h1>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="py-4 bg-[#F2F2F4] flex items-center justify-between px-4 mb-2"
      >
        <h1>{placeholder}</h1>
        <div>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
        {optionArray.map((item) => (
          <div className="py-4 bg-[#F2F2F4] cursor-pointer flex items-center justify-between px-4 border-b border-gray hover:bg-[#E0E0E4]">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default DropDownForms;
