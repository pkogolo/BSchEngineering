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
        className="py-40 sm:py-80 sm:mb-40 mb-0 w-full col-span-1  bg-no-repeat bg-cover bg-top"
      ></div>
      <div
        style={{ backgroundImage: `url(${equipment3})` }}
        className=" py-40 sm:py-80  w-full col-span-1 bg-no-repeat bg-cover bg-center"
      ></div>
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80)`,
        }}
        className=" py-40 sm:py-80 sm:-mt-40 mt-0 w-full col-span-1 bg-no-repeat bg-cover bg-top"
      ></div>
      <div
        style={{ backgroundImage: `url(${equipment1})` }}
        className="py-40 sm:py-80 w-full col-span-1 bg-no-repeat bg-cover bg-top"
      ></div>
    </div>
  );
}

export default StaggeredGrid;
