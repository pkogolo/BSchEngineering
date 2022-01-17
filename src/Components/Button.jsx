import React from "react";
import { Link } from "react-router-dom";

function Button({ text, link, color }) {
  return (
    <Link to={link} className="flex items-center justify-center mt-8 cursor-pointer">
      <h1
        style={{ color: `${color}` }}
        className="font-bold text-center text-2xl sm:text-4xl"
      >
        {text}
      </h1>
      <div className="sm:ml-8 ml-0 ">
        <svg
          width={39}
          height={39}
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2 35.2C28.0365 35.2 35.2 28.0365 35.2 19.2C35.2 10.3634 28.0365 3.19995 19.2 3.19995C10.3634 3.19995 3.19995 10.3634 3.19995 19.2C3.19995 28.0365 10.3634 35.2 19.2 35.2Z"
            stroke="#133574"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.2 25.6L25.6 19.2L19.2 12.8"
            stroke="#133574"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8 19.2H25.6"
            stroke="#133574"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}

export default Button;
