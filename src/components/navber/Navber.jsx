import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import logo from "../../assets/images/logo.png";
import log2 from "../../assets/images/logo-light.png";
import { authContext } from "../../providers/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.confic";

const Navber = () => {
  const { setIsDark, isDark, user } = useContext(authContext);

  const handleDark = () => {
    setIsDark(!isDark)
  }

  const navItems = (
    <div className={`flex flex-col ${isDark ? "bg-black text-white" : "bg-white"} lg:flex-row text-[#334155] text-base gap-6`}>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-semibold text-[#e03737]" : ""
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to={"/addProduct"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-semibold text-[#e03737]" : ""
        }
      >
        <li>Add Product</li>
      </NavLink>

      <NavLink
        to={"/myCard"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "font-semibold text-[#e03737]" : ""
        }
      >
        <li>My Cart</li>
      </NavLink>
    </div>
  );


  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Log Out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full ">
      <div className={`navbar  px-6 py-2 ${isDark ? "bg-black text-white" : "bg-white"} md:px-10 lg:px-16`}>
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
          <div className="hidden md:block">
            <Link to={"/"}>
              {
                isDark ? <img src={log2} alt="Logo" /> : <img src={logo} alt="Logo" />
              }
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? <h1>{user?.displayName}</h1> : ""}
          <div className="w-10">
            <img
              className="rounded-full"
              src={user ? user?.photoURL : userPhoto}
            />
          </div>

          <input onChange={handleDark} type="checkbox" className="toggle"  />

          {user ? (
            <button
              onClick={handleLogOut}
              className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="py-2 px-5 font-medium hover:opacity-70 bg-[#e03737] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
