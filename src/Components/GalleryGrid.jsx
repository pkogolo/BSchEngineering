import React from "react";
import Button from "./Button";

function GalleryGrid({ imageArray }) {
  return (
    <div>
      <div className="grid sm:grid-cols-12 grid-cols-1 gap-5  ">
        <div
          id="carousel"
          style={{ backgroundImage: `url(${imageArray[0]})` }}
          className="sm:col-span-12 bg-cover bg-no-repeat col-span-1   relative sm:pb-[72rem] pb-[36rem]"
        >
          <div className="absolute text-2xl sm:m-12 m-4">
            <h1 className="sm:text-4xl pb-4 text-2xl text-[#6D6767]">
              Winter Cohort
            </h1>
            <p className="text-[#6D6767]"> Sept 15th 2022 - Jan 22nd 2023</p>
          </div>
          <div className="absolute right-[50%] translate-x-[50%] bottom-10 ">
            <Button text="Enroll Now" color={"#68696F"} />
          </div>
        </div>
        <div
          id="carousel"
          style={{ backgroundImage: `url(${imageArray[1]})` }}
          className="sm:col-span-6 bg-cover bg-no-repeat col-span-1   relative sm:pb-[72rem] pb-[36rem]"
        >
          <div className="absolute text-2xl sm:m-12 m-4">
            <h1 className="sm:text-4xl pb-4 text-2xl text-white drop-shadow">
              Fall Cohort
            </h1>
            <p className="text-white drop-shadow">
              {" "}
              Sept 15th 2022 - Jan 22nd 2023
            </p>
          </div>
          <div className="absolute right-[50%] translate-x-[50%] bottom-10 ">
          <Button text="Enroll Now" color="white" />
          </div>
        </div>

        <div
          id="carousel"
          style={{ backgroundImage: `url(${imageArray[2]})` }}
          className="sm:col-span-6 bg-cover bg-no-repeat col-span-1   relative sm:pb-[72rem] pb-[36rem]"
        >
          <div className="absolute text-2xl sm:m-12 m-4">
            <h1 className="sm:text-4xl pb-4 text-2xl text-white drop-shadow">
              Spring Cohort
            </h1>
            <p className="text-white drop-shadow">
              {" "}
              Sept 15th 2022 - Jan 22nd 2023
            </p>
          </div>
          <div className="absolute right-[50%] translate-x-[50%] bottom-10 ">
          <Button text="Enroll Now" color="white" />
          </div>
        </div>

        <div
          id="carousel"
          style={{ backgroundImage: `url(${imageArray[3]})` }}
          className="sm:col-span-12 bg-cover bg-no-repeat col-span-1   relative sm:pb-[72rem] pb-[36rem]"
        >
          <div className="absolute text-2xl sm:m-12 m-4">
            <h1 className="sm:text-4xl pb-4 text-2xl text-white drop-shadow">
              Summer Cohort
            </h1>
            <p className="text-white drop-shadow">
              {" "}
              Sept 15th 2022 - Jan 22nd 2023
            </p>
          </div>
          <div className="absolute right-[50%] translate-x-[50%] bottom-10 ">
            <Button text="Enroll Now" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;
