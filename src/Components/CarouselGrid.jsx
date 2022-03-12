import React from "react";
import Carousel from "./Carousel";
import SmallCarousel from "./SmallCarousel";

function CarouselGrid({
  topArray,
  leftArray,
  rightArray,
  bottomArray,
  showText,
  textArray,
  small,
}) {
  return (
    <div id="carousel" className="">
      {!small && (
        <div className="grid sm:grid-cols-12 grid-cols-1 gap-5  ">
          <div className="sm:col-span-6 col-span-1  sm:pb-[72rem] pb-[36rem]">
            {showText ? (
              <Carousel
                delay={1000}
                showtext={showText}
                text={textArray[0]}
                array={topArray}
              />
            ) : (
              <Carousel delay={1000} array={topArray} />
            )}
          </div>
          <div className="sm:col-span-6 col-span-1 sm:pb-[72rem] pb-[36rem]">
            {showText ? (
              <Carousel
                delay={3000}
                showtext={showText}
                text={textArray[1]}
                array={leftArray}
              />
            ) : (
              <Carousel delay={3000} array={leftArray} />
            )}
          </div>

          <div className="sm:col-span-6 col-span-1 sm:pb-[72rem] pb-[36rem]">
            {showText ? (
              <Carousel
                delay={2000}
                showtext={showText}
                text={textArray[2]}
                array={rightArray}
              />
            ) : (
              <Carousel delay={2000} array={rightArray} />
            )}
          </div>

          <div className="sm:col-span-6 col-span-1 ">
            {showText ? (
              <Carousel
                delay={3500}
                showtext={showText}
                text={textArray[3]}
                array={bottomArray}
              />
            ) : (
              <Carousel delay={3500} array={bottomArray} />
            )}
          </div>
        </div>
      )}
      {small && (
        <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 ">
          <div className="sm:col-span-3 grid-rows-1 col-span-1 sm:mb-[25rem]">
            {showText ? (
              <SmallCarousel
                delay={1000}
                showtext={showText}
                text={textArray[0]}
                array={topArray}
              />
            ) : (
              <SmallCarousel delay={1000} array={topArray} />
            )}
          </div>
          <div className="sm:col-span-3 grid-rows-1 col-span-1">
            {showText ? (
              <SmallCarousel
                delay={3000}
                showtext={showText}
                text={textArray[1]}
                array={leftArray}
              />
            ) : (
              <SmallCarousel delay={3000} array={leftArray} />
            )}
          </div>

          <div className="sm:col-span-3 grid-rows-1 col-span-1 ">
            {showText ? (
              <SmallCarousel
                delay={2000}
                showtext={showText}
                text={textArray[2]}
                array={rightArray}
              />
            ) : (
              <SmallCarousel delay={2000} array={rightArray} />
            )}
          </div>

          <div className="sm:col-span-3 grid-rows-1 col-span-1 ">
            {showText ? (
              <SmallCarousel
                delay={3500}
                showtext={showText}
                text={textArray[3]}
                array={bottomArray}
              />
            ) : (
              <SmallCarousel delay={3500} array={bottomArray} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselGrid;
