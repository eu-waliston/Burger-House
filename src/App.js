import React from "react";
import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path={"/"} element={<Home />}/>
            <Route exact path={"/menu"} element={<Menu />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
