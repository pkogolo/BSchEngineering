import React from "react";
import company1 from "../images/company-1.png";
import company2 from "../images/company-2.png";
import company3 from "../images/company-3.png";

function CompanyCarousel() {
  return (
    <div className="flex justify-around mt-36">
      <div
        style={{ backgroundImage: `url(${company1})` }}
        className="w-[240px] h-[118px] bg-cover  bg-no-repeat bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${company2})` }}
        className="w-[347px] h-[118px] bg-cover  bg-no-repeat bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${company3})` }}
        className="w-[288px] h-[118px] bg-cover  bg-no-repeat bg-center"
      ></div>
    </div>
  );
}

export default CompanyCarousel;
