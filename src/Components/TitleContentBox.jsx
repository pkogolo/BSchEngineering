import React from "react";

function TitleContentBox({ title, paragraph }) {
  return (
    <div className="w-full flex justify-center sm:mt-36 mt-8 mb-8">
      <div className="lg:w-3/4 md:w-5/6 w-full flex flex-col items-center">
        <h1 className="font-bold text-center  lg:text-3xl md:text-2xl text-xl">{title}</h1>
        <p className="text-center lg:text-xl md:text-normal text-[#68696F] mt-8">
          {paragraph.split("/n")[0]}
        </p>
        <p className="text-center lg:text-xl md:text-normal text-[#68696F] mt-8">
          {paragraph.split("/n")[1]}
        </p>
        <p className="text-center lg:text-xl md:text-normal text-[#68696F] mt-8">
          {paragraph.split("/n")[2]}
        </p>
      </div>
    </div>
  );
}

export default TitleContentBox;
