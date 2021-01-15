import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import Footer from "../../footer/footer";

function Login() {
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

        <div class="login_form">
          <h2>Sign in</h2>
          <form action="" class="login_f">
            <input type="text" name="email" id="" placeholder="Email Address" />
            <input type="password" placeholder="Passowrd" />
            <button type="submit">
              {/* <Loader type="TailSpin" color="white" height={20} width={20}  /> */}
              Login
            </button>
          </form>

          <div className="signup_text">
            <h4>
              New to Netflix? <Link to="/signup">Sign up now</Link>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
