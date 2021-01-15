import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/footer";
import Navbar from "../../home/navbar/navbar";
import "./signup.css";

function Signup() {
  return (
    <React.Fragment>
      <div class="main_hero">
        <Navbar />

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
