import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarFooter.css";
const Navbar = () => {
  const [itemsAdded , setItemsAdded]=useState(2)

  return (
    <div className="Navigator">
      <div className="NavbarTop">
        <div class="dropdown">
          <Link style={{color : "wheat"}}
            class="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            EN
          </Link >
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link  class="dropdown-item" to="#">
              EN
            </Link>
            <Link class="dropdown-item" to="#">
              FR
            </Link>
            <Link class="dropdown-item" to="#">
              ES
            </Link>
            <Link class="dropdown-item" to="#">
              DE
            </Link>
          </div>
          <div></div>
        </div>
        <div  class="dropdown">
          <Link style={{color : "wheat"}}
            class="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ₹
          </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link class="dropdown-item" to="#">
              ₹
            </Link>
            <Link class="dropdown-item" to="#">
              $
            </Link>
            <Link class="dropdown-item" to="#">
              £
            </Link>
          </div>
        </div>
        <div className="NavbarTopRight ml-auto">
          <i class="bi bi-person-fill fa-20x"></i>
          <span>My Profile</span>
        </div>
        <div className="NavbarTopRight mx-4">
          <i class="bi bi-bag-fill"></i>
          <span>{itemsAdded} Items</span>
        </div>
      </div>
      <div className="logoContainer">
        <h1>
          <span>iSHOP</span>
        </h1>
      </div>
      <div className="MainNavContainer">
        <nav class="navbar navbar-expand-lg navbar-dark px-5">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active mr-3">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item mr-3">
                <Link class="nav-link" to="/Store">
                  Store
                </Link>
              </li>
              <li class="nav-item dropdown mr-3">
                <Link
                  class="nav-link"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Audio
                </Link>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link class="dropdown-item" to="/category/1001">
                    HeadPhones
                  </Link>
                  <Link class="dropdown-item" to="/category/1002">
                    AirPods
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown mr-3">
                <Link
                  class="nav-link"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accessories
                </Link>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link class="dropdown-item" to="/category/1005">
                    Smart Watch
                  </Link>
                  <Link class="dropdown-item" to="/category/1004">
                    Home Kit
                  </Link>
                  <Link class="dropdown-item" to="/category/1003">
                    Accessories
                  </Link>
                </div>
              </li>
              <li class="nav-item mr-3">
                <Link class="nav-link" to="/category/1006">
                  iPhone
                </Link>
              </li>
              <li class="nav-item mr-3">
                <Link class="nav-link" to="/category/1007">
                  MacBook
                </Link>
              </li>
              <li class="nav-item mr-3">
                <Link class="nav-link" to="/category/1008">
                  iPad
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
