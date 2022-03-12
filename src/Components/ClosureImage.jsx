import React from "react";
import closure from "../images/galleryImages/closure.jpg";

function ClosureImage() {
  return (
    <div
      id="carousel"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
      }}
      className="w-full brightness-50 hover:brightness-100 py-40 sm:py-80 bg-cover sm:mt-36 mt-8"
    ></div>
  );
}

export default ClosureImage;
