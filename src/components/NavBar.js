import React from "react";
import { NavLink } from "react-router-dom";

// While this looks similar to App in terms of the switch and route statements, this is specifying individual links of the navbar. Think of this as we're writing out <a href> tags
// The components in the App were dealing with conditional rendering, but this is going to change the URL to meet the conditions in that conditional rendering. 
function NavBar() {
  return (
    <div className="navbar">
      <ul>
      <li>
      <NavLink 
        to="/"
        exact
        >
          Home
      </NavLink>
      </li>
      <li>
      <NavLink 
        to="/movies"
        exact
        >
          Movies
      </NavLink>
      </li>
      <li>
      <NavLink 
        to="/directors"
        exact
        >
          Directors
      </NavLink>
      </li>
      <li>
      <NavLink 
        to="/actors"
        exact
        >
          Actors
      </NavLink>
      </li>
      </ul>
    </div>
  ) 
  
}

export default NavBar;
