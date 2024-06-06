// import { seeding } from "../../src/assets/index";
// import {NavLink} from "react-router-dom"
// import {useLocation} from "react-router-dom"

// const Navbar = () => {

//   return (
//     <nav className=" text-center grid grid-cols-3 gap-4 text-3xl ">
//   <div>
//  <NavLink to="/" className="nav-logo">
//    <img src={seeding} alt="Logo" width="48" height="42"/>
//  </NavLink>
//   </div>
//     <div className="text-center">
//       <NavLink to="/plants" className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main">Plants</NavLink>
//       <NavLink to="/gallery" className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main">Gallery</NavLink>
//     </div>
//     <div className="text-right">
//       <NavLink to="/signup" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sign up</NavLink>
//       <NavLink to="/login" className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main">Log in</NavLink>
//     </div>
//    </nav>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "/seedling.png";

const Navbar = () => {
  const [auth] = useAuth();
  const [userId , setUserId] = useState();

  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(()=>{
    setUserId(auth?.user?._id);
  }, [auth]);

  return (
    <nav className="p-4 text-3xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* <img src="/seedling.png" alt="Plant Logo" className="h-10 w-10 mr-2"/> */}
          <Link to="/">
            <img className="h-8 w-auto" src={logo} alt="Plant Logo" />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="/plants/all"
            className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main"
          >
            Plant
          </a>
          <a
            href="/gallery"
            className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main"
          >
            Gallery
          </a>
        </div>

        {/* Login Button */}
        {auth?.user !== null ?(
          <div className="hidden md:flex justify-between align-middle">
              <img
                className="rounded-full me-5"
                src={`http://localhost:8000/api/v1/auth/loginUserPhoto/${userId}`}
                alt=""
                width={"30px"}
                height={'20px'}
                 />
              <span className="me-5">{auth?.user?.name}</span>
          </div>
        ) : (
          <div className="hidden md:flex">
            <NavLink
              to={"/login"}
              className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main"
            >
              Login
            </NavLink>
            <button className="font-bold px-3 py-2 text-main rounded-lg hover:bg-slate-100 hover:text-main">
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-main">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="text-center md:hidden flex flex-col space-y-2 mt-2">
          <a href="/plant" className="text-main hover:text-black">
            Plant
          </a>
          <a href="/gallery" className="text-main hover:text-black">
            Gallery
          </a>
          <a href="/login" className="text-main hover:text-black">
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
