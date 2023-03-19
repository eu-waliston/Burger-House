import React from "react";
import "./Menu.css";

import Navbar from "../Navbar/Navbar";

const Menu = () => {
  return (
    <div className="menu">
      <Navbar />

      <div className="itens-1">
        <div className="grid-itens-1">
            <div className="p-1">
              <p className="p-1-p">try it today</p>
              <h1 className="p-1-h1">most popular burger</h1>
              <img src={require("../images/burger-square-1.png")} alt="burger" />
            </div>
        </div>
        <div className="grid-itens-2">
            <div className="p-2">
              <p className="p-2-p">try it today</p>
              <h1 className="p-2-h1-1">most fun</h1>
              <h1 className="p-2-h1-2">most taste</h1>
              <img src={require("../images/burger-square-2.png")} alt="burger" />
            </div>
            <div className="p-3">
              <p className="p-3-p">try it today</p>
              <h1 className="p-3-h1">fresh & chili</h1>
              <img src={require("../images/burger-square-3.png")} alt="burger" />
            </div>
        </div>
      </div>

      <div className="itens-2">
        <div className="itens-2-p1">
          <h2 className="itens-2-p1-h2">always tasty burger</h2>
          <h1 className="itens-2-p1-h1">choose and enjoy</h1>
          <p className="itens-2-p1-p">
            Veniam consequat aliqua aute mollit cupidatat do ex exercitation
            culpa esse nisi irure consequat consequat. Cillum sunt magna do ea
            quis sit ea anim dolor reprehenderit voluptate fugiat. Cupidatat
            nulla eu ea ad elit excepteur.
          </p>
        </div>

        <div className="itens-2-p2">
          <div className="itens-2-div-1">
            <img
              alt="burger"
              className="burger-item"
              src={require("../images/Burger-Grid-1.png")}
            />
            <div className="sahdow"></div>
            <h1 className="itens-2-p2-h1">lorem inpsun dolor</h1>
            <p className="itens-2-p2-p">
              Veniam consequat aliqua aute mollit cupidatat do ex exercitation

            </p>
            <button className="itens-2-p2-btn">order now</button>
          </div>

          <div className="itens-2-div-2">
            <img
              alt="burger"
              className="burger-item"
              src={require("../images/Burger-Grid-2.png")}
            />
            <div className="sahdow s2"></div>
            <h1 className="itens-2-p2-h1">lorem inpsun dolor</h1>
            <p className="itens-2-p2-p">
              Veniam consequat aliqua aute mollit cupidatat do ex exercitation

            </p>
            <button className="itens-2-p2-btn">order now</button>
          </div>

          <div className="itens-2-div-3">
            <img
              alt="burger"
              className="burger-item"
              src={require("../images/Burger-Grid-3.png")}
            />
            <div className="sahdow"></div>
            <h1 className="itens-2-p2-h1">lorem inpsun dolor</h1>
            <p className="itens-2-p2-p">
              Veniam consequat aliqua aute mollit cupidatat do ex exercitation

            </p>
            <button className="itens-2-p2-btn">order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
