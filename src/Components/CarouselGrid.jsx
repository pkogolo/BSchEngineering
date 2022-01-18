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
          {showText ? (
            <Carousel
              showtext={showText}
              text={textArray[0]}
              array={topArray}
            />
          ) : (
            <Carousel array={topArray} />
          )}
        </div>
        <div className="sm:col-span-6 col-span-1 sm:pb-[72rem] pb-[36rem]">
          {showText ? (
            <Carousel
              showtext={showText}
              text={textArray[1]}
              array={leftArray}
            />
          ) : (
            <Carousel array={leftArray} />
          )}
        </div>

        <div className="sm:col-span-6 col-span-1 sm:pb-[72rem] pb-[36rem]">
          {showText ? (
            <Carousel
              showtext={showText}
              text={textArray[2]}
              array={rightArray}
            />
          ) : (
            <Carousel array={rightArray} />
          )}
        </div>

        <div className="sm:col-span-12 col-span-1 ">
          {showText ? (
            <Carousel
              showtext={showText}
              text={textArray[3]}
              array={bottomArray}
            />
          ) : (
            <Carousel array={bottomArray} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CarouselGrid;
