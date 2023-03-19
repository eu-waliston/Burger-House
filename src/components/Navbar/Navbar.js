import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-top">
        <img src={require("../images/Logo.png")} alt="logo" />
        <h2>
          <i class="fa-solid fa-motorcycle"></i> express delivery +1 234 567 890
        </h2>
      </div>

      <ul className="nav-itens">
        <li className="nav-iten
        ">
          <Link to={"/"} className="iten">
            home
          </Link>
        </li>
        <li className="nav-iten
        ">
          <Link to={"/"} className="iten">
            menu
          </Link>
        </li>
        <li className="nav-iten
        ">
          <Link to={"/"} className="iten">
            our story
          </Link>
        </li>
        <li className="nav-iten
        ">
          <Link to={"/"} className="iten">
            contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
