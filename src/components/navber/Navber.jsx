import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";

const Navber = () => {
  const navItems = (
    <div className="flex flex-col lg:flex-row text-[#334155] text-base gap-5">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-semibold underline" : ""
        }
      >
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>Home</li>
      </NavLink>
    </div>
  );

  return (
    <div className="px-6 py-2 md:px-10 lg:px-16">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="w-10 rounded-full">
            <img src={user} />
          </div>
          <button className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
