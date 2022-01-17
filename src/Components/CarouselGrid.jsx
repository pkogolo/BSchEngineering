import React from "react";
import Carousel from "./Carousel";

function CarouselGrid({
  topArray,
  leftArray,
  rightArray,
  bottomArray,
  showText,
  textArray,
}) {
  return (
    <div id="carousel" className="">
      <div className="grid sm:grid-cols-12 grid-cols-1 gap-5  ">
        <div className="sm:col-span-12 col-span-1  sm:pb-[72rem] pb-[36rem]">
          <Carousel showtext={showText} text={textArray[0]} array={topArray} />
        </div>
        <div className="sm:col-span-6 col-span-1 sm:pb-[72rem] pb-[36rem]">
          <Carousel showtext={showText} text={textArray[1]} array={leftArray} />
        </div>

        <div className="sm:col-span-6 col-span-1 sm:pb-[72rem] pb-[36rem]">
          <Carousel
            showtext={showText}
            text={textArray[2]}
            array={rightArray}
          />
        </div>

        <div className="sm:col-span-12 col-span-1 ">
          <Carousel
            showtext={showText}
            text={textArray[3]}
            array={bottomArray}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselGrid;
