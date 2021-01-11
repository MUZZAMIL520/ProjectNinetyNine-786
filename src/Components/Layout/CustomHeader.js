import React, { Component } from "react";
import "./CustomHeader.css";
import { Link } from "react-router-dom";

export default class CustomHeader extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav
        style={{ backgroundColor: "#006400" }}
        class="navbar navbar-expand-lg navbar-light py-0"
      >
        <a class="navbar-brand" href="/">
          <img
            src="/99.png"
            class="mr-auto"
            width="40"
            height="40"
            alt=""
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
              <Link to="/surahlist" id="hadith" class="nav-link">
                HOLY QURAN
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/naats" id="hadith" class="nav-link">
                NAAT
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/hadith" id="hadith" class="nav-link">
                HADITH
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/zakaat" id="hadith" class="nav-link">
                ZAKAT
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/umrah" id="hadith" class="nav-link">
                UMRAH GUIDANCE
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/supplication" id="hadith" class="nav-link">
                SUPPLICATIONS
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/prayer" id="hadith" class="nav-link">
                PRAYER'S TIMING
              </Link>
            </li>
            <li key="adminLogin" class="nav-item">
              <Link to="/admin" id="admin" class="nav-link">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
