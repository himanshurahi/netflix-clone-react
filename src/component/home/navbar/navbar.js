import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div className="top_header">
      <div className="logo">
        <Link
          to="/
  "
        >
          <img
            src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
            width={100}
            alt="netflix_logo"
          />
        </Link>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/login">Login</Link>
            {/* <a>Login</a> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
