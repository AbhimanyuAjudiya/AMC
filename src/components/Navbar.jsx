import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";

function Navbar() {

    const [currActive, setCurrActive] = useState();
    
  return (
    <div className="hero_area">
      {/* <!-- header section strats --> */}
      <div className="top_nav">
        <div className="container">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
              <img src="images/location.png" alt="" />
              <span>Lorem ipsum dolor sit amet,</span>
            </a>
            <a href="" className="contact_link2">
              <img src="images/call.png" alt="" />
              <span>Call : +01 1234567890</span>
            </a>
            <a href="" className="contact_link3">
              <img src="images/mail.png" alt="" />
              <span>demo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <img src="images/logo.png" alt="" />
              <span>AMC</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse ml-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li onClick={() => setCurrActive("home")} className={currActive === "home" ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li onClick={() => setCurrActive("about")} className={currActive === "about" ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="about">
                    {" "}
                    About
                  </a>
                </li>
                <li onClick={() => setCurrActive("service")} className={currActive === "service" ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="service">
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li onClick={() => setCurrActive("product")} className={currActive === "product" ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="product">
                    {" "}
                    Products{" "}
                  </a>
                </li>
                <li onClick={() => setCurrActive("contact")} className={currActive === "contact" ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="contact">
                    Contact us
                  </a>
                </li>
              </ul>
              {/* <!-- <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <input type="search" placeholder="Search" />
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form> --> */}
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- end header section --> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default Navbar;
