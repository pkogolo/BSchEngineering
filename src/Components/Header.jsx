import React from "react";
import { motion } from "framer-motion";

function Header({ headerImage, headerText, headerParagraph }) {
  window.reload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="sm:text-5xl text-3xl text-[#2F2D2D] w-full sm:w-1/2 text-center sm:mb-40 mb-20 sm:mt-20 mt-10 "
        >
          {headerText}
        </motion.h1>
        <div
          style={{ backgroundImage: `url(${headerImage})` }}
          className="w-full sm:py-[22rem] py-[14rem] bg-cover bg-center  "
        ></div>

        <p className="text-[#68696F] sm:my-36 my-8 sm:w-1/2 w-full text-2xl text-center leading-10">
          {headerParagraph}
        </p>
      </div>
    </div>
  );
}

export default Header;
