import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "active" : "none",
    }
  }


  return (
    <div className="navbar">
      <div className="nav-top">
        <img src={require("../images/Logo.png")} alt="logo"  className="home-logo"/>
        <h2>
          <i class="fa-solid fa-motorcycle"></i> express delivery +1 234 567 890
        </h2>
      </div>

      <ul className="nav-itens">
        <li className="nav-iten
        ">
          <NavLink to={"/"} className="iten" style={navLinkStyle}>
            home
          </NavLink>
        </li>
        <li className="nav-iten
        ">
          <NavLink to={"/menu"} className="iten" style={navLinkStyle}>
            menu
          </NavLink>
        </li>
        <li className="nav-iten
        ">
          <NavLink to={"/story"} className="iten" style={navLinkStyle}>
            our story
          </NavLink>
        </li>
        <li className="nav-iten
        ">
          <NavLink to={"/contact"} className="iten" style={navLinkStyle}>
            contact us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
