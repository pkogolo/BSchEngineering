import React from "react";

function CourseCard({ text, photo, description, number }) {
  return (
    <div className="lg:h-[450px] md:h-[460px] h-[460px] w-[280px]">
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className="w-full bg-cover bg-center w-full lg:h-[180px] md:h-[220px] h-[220px] p-6 text-white"
      >
      {/* <h1 className="text-4xl">{number}</h1> */}
      </div>
      <div className="p-6  bg-[#081733] text-white  h-full">
        <h1 className="font-bold border-b mb-2 pb-2">{text}</h1>
        <div className=" hover:h-full h- w-full">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
