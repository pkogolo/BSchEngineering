import React, { useState, useEffect } from "react";

function SmallCarousel({ button, text, array, showtext, delay }) {
  let [index, setIndex] = useState(0);

  function changeImage(array) {
    if (index < array.length) {
      setTimeout(() => {
        setIndex((index += 1));
      }, delay + 3000);
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
            ? "w-full bg-cover bg-center sm:py-[12rem] py-[8rem] opacity-100 absolute top-0 left-0 "
            : "w-full bg-cover bg-center sm:py-[12rem] py-[8rem]  absolute top-0 left-0 opacity-0 "
        }
      ></div>
      <div
        id="carousel"
        style={{ backgroundImage: `url(${array[1]})` }}
        className={
          index == 1
            ? "w-full bg-cover bg-center sm:py-[12rem] py-[8rem] opacity-100 absolute top-0 left-0 "
            : "w-full bg-cover bg-center sm:py-[12rem] py-[8rem]  absolute top-0 left-0 opacity-0 "
        }
      ></div>
      <div
        id="carousel"
        style={{ backgroundImage: `url(${array[2]})` }}
        className={
          index == 2
            ? "w-full bg-cover bg-center sm:py-[12rem] py-[8rem] opacity-100 absolute top-0 left-0 "
            : "w-full bg-cover bg-center sm:py-[12rem] py-[8rem]  absolute top-0 left-0 opacity-0 "
        }
      ></div>

      {showtext && (
        <div
          id="carousel"
          className="rounded z-30 bg-white w-fit py-2 px-4 rounded-full absolute sm:top-[8px] sm:left-[8px] top-[8px] left-[8px] cursor-pointer hover:bg-[#133574] text-[#133574] hover:text-white"
        >
          <h1 className="text-normal  ">{text}</h1>
        </div>
      )}
    </div>
  );
}

export default SmallCarousel;
