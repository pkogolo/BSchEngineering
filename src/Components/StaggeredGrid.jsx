import React from "react";
import equipment1 from "../images/equipment-1.jpg";
import equipment2 from "../images/equipment-2.jpg";
import equipment3 from "../images/equipment-3.jpg";
import equipment4 from "../images/equipment-4.jpg";

function StaggeredGrid() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 sm:p-40 p-0">
      <div
        style={{ backgroundImage: `url(${equipment2})` }}
        className="py-80 mb-40 w-full col-span-1  bg-no-repeat bg-cover bg-top"
      ></div>
      <div
        style={{ backgroundImage: `url(${equipment3})` }}
        className=" py-80  w-full col-span-1 bg-no-repeat bg-cover bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${equipment4})` }}
        className=" py-80 -mt-40 w-full col-span-1 bg-no-repeat bg-cover bg-top"
      ></div>
      <div
        style={{ backgroundImage: `url(${equipment1})` }}
        className="py-80 w-full col-span-1 bg-no-repeat bg-cover bg-top"
      ></div>
    </div>
  );
}

export default StaggeredGrid;
