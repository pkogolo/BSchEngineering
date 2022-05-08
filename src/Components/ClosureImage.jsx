import React from "react";
import closure from "../images/footerImage.jpg";

function ClosureImage() {
  return (
    <div
      id="carousel"
      style={{
        backgroundImage: `url(${closure})`,
      }}
      className="w-full brightness-50 hover:brightness-100 py-40 sm:py-80 bg-cover sm:mt-36 mt-8"
    ></div>
  );
}

export default ClosureImage;
