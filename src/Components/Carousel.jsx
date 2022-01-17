import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel1 from "../images/carousel-1.jpg";

import Carousel4 from "../images/carousel-4.jpg";
import Carousel5 from "../images/carousel-5.jpg";

function Carousel({ button, text, array, showtext }) {
  let [index, setIndex] = useState(0);

  function changeImage(array) {
    if (index < array.length) {
      setTimeout(() => {
        setIndex((index += 1));
      }, 3000);
    } else {
      setIndex(0);
    }
  }

  useEffect(() => {
    changeImage(array);
  }, [index]);

  return (
    <div id="carousel" className="relative w-full">
      <div
        id="carousel"
        style={{ backgroundImage: `url(${array[0]})` }}
        className={
          index == 0
            ? "w-full bg-cover bg-center sm:py-[36rem] py-[18rem] opacity-100 absolute top-0 left-0 "
            : "w-full bg-cover bg-center sm:py-[36rem] py-[18rem]  absolute top-0 left-0 opacity-0 "
        }
      ></div>
      <div
        id="carousel"
        style={{ backgroundImage: `url(${array[1]})` }}
        className={
          index == 1
            ? "w-full bg-cover bg-center sm:py-[36rem] py-[18rem] opacity-100 absolute top-0 left-0 "
            : "w-full bg-cover bg-center sm:py-[36rem] py-[18rem]  absolute top-0 left-0 opacity-0 "
        }
      ></div>
      <div
        id="carousel"
        style={{ backgroundImage: `url(${array[2]})` }}
        className={
          index == 2
            ? "w-full bg-cover bg-center sm:py-[36rem] py-[18rem] opacity-100 absolute top-0 left-0 "
            : "w-full bg-cover bg-center sm:py-[36rem] py-[18rem]  absolute top-0 left-0 opacity-0 "
        }
      ></div>

      {showtext && (
        <div
          id="carousel"
          className="rounded z-30 bg-white w-fit py-4 px-8 rounded-full absolute sm:top-20 sm:left-10 top-[8px] left-[8px] cursor-pointer hover:bg-[#133574] text-[#133574] hover:text-white"
        >
          <h1 className="sm:text-2xl text-normal  ">{text}</h1>
        </div>
      )}
    </div>
  );
}

export default Carousel;
