import React from "react";
import company1 from "../images/company-1.png";
import company2 from "../images/company-2.png";
import company3 from "../images/company-3.png";

function CompanyCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 justify-around ">
      <div
        style={{
          backgroundImage: `url(https://lindumgroup.com/media/uploads/2019/07/lindum.svg)`,
        }}
        className="w-[240px] h-[118px] bg-contain col-span-3 bg-no-repeat bg-center"
      ></div>
      <div
        style={{
          backgroundImage: `url(https://i2.wp.com/www.andrewscott.co.uk/wp-content/uploads/2020/02/150-Staff-Email-signature-041219t-CMYK-100-85-5-36-mid-Scott-Blue-CMYK-v3-927x304px.png?fit=927%2C304&ssl=1)`,
        }}
        className="w-[347px] h-[118px] bg-contain col-span-3  bg-no-repeat bg-center"
      ></div>
      <div
        style={{
          backgroundImage: `url(https://www.srm.com/media/2198/srm-logo-white.png)`,
        }}
        className="w-[288px] h-[118px] bg-contain col-span-3  bg-no-repeat bg-center"
      ></div>
      <div
        style={{
          backgroundImage: `url(https://19gppb2lci9f117x8y1gd4lo-wpengine.netdna-ssl.com/wp-content/themes/childtheme/assets/images/stepnell-logo-white.svg)`,
        }}
        className="w-[288px] h-[118px] bg-contain col-span-3  bg-no-repeat bg-center"
      ></div>
    </div>
  );
}

export default CompanyCarousel;
