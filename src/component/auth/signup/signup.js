import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/footer";
import "./signup.css";

function Signup() {
  return (
    <React.Fragment>
      <div class="main_hero">
        <div class="top_header">
          <div class="logo">
            <img
              src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
              width="100"
              alt="netflix_logo"
            />
          </div>
          <div class="navbar">
            <ul>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="signup_form">
          <h2>Sign in</h2>
          <form action="" class="login_f">
            <input
              type="text"
              name="username"
              className="error"
              placeholder="Username"
            />
            <input type="text" name="email" placeholder="Email Address" />
            <input type="password" placeholder="Passowrd" />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Signup;
