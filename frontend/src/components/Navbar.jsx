import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
        <div className="container">
          <Link
            className="navbar-brand fw-bolder"
            to="/home"
            style={{ color: "whitesmoke", fontFamily: "Montserrat" }}
          >
            <span style={{ fontSize: "30px" }}>E</span>pisode{" "}
            <span style={{ fontSize: "30px" }}>R</span>andomizer
          </Link>

         <NavLink to= 'https://github.com/VibhashDwivedi/Random-Episode-Generator' style={{ color: "whitesmoke"}}>
         <i class="fa-brands fa-2x fa-github"></i>
         </NavLink>
         
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
