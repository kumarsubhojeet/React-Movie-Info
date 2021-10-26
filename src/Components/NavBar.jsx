import React from "react";
import '../Css/Navbar.css'

import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light NavBar_main">
        <Link class="NavTitle" to="/">
          React Movies DB
        </Link>
        <h3
        
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         
          <span className="Burger"><i class="fas fa-bars nabburger"></i></span>
       
        </h3>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <Link class="nav-item active" to="About">
              About <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-item" to="/TV">
              TV
            </Link>
            <Link class="nav-item" to="/Home">
              Movies
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
