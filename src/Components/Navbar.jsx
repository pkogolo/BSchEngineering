import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const openNav = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className=" sm:flex hidden w-full bg-[#FAF9F6] flex py-4 px-4 justify-between items-center drop-shadow">
        <NavLink className="" to="/">
          <Logo mobile={false} />
        </NavLink>
        <ul className=" flex items-center py-4 justify-around  text-2xl w-3/4">
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Enrol now</NavLink>
          <NavLink to="/">Login</NavLink>
        </ul>
      </div>
      <div className=" sm:hidden flex w-full bg-[#FAF9F6] flex py-4 px-4 justify-between items-center drop-shadow">
        <NavLink
          onClick={() => {
            setOpen(false);
          }}
          className="z-50 "
          to="/"
        >
          <Logo mobile={true} />
        </NavLink>

        <motion.ul
          animate={open ? "open" : "closed"}
          variants={variants}
          className="  py-4 flex flex-col fixed top-0 left-0   text-2xl w-full h-screen bg-white px-4 pt-24 bg-blend-multiply "
        >
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            className="text-3xl text-black border-b border-gray-200 py-4 "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            className="text-3xl text-black border-b border-gray-200 py-4 "
            to="/admissions"
          >
            Admissions
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            className="text-3xl text-black border-b border-gray-200 py-4 "
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            className="text-3xl text-black border-b border-gray-200 py-4 "
            to="/"
          >
            Enrol now
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(false);
            }}
            className="text-3xl text-black border-b border-gray-200 py-4 "
            to="/"
          >
            Login
          </NavLink>
        </motion.ul>

        <div className="z-50" onClick={openNav}>
          {!open ? (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0278 6.01483L6.02783 18.0148"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.02783 6.01483L18.0278 18.0148"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
