import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-[#FAF9F6] flex py-4 px-4 justify-between items-center drop-shadow">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <ul className="sm:flex hidden items-center py-4 justify-around  text-2xl w-3/4">
        <NavLink to="/admissions">Admissions</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Enrol now</NavLink>
        <NavLink to="/">Login</NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
