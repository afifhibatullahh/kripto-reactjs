import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            Kriptos Grafos
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#kripting">
                  Cryptography
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
