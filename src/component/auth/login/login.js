import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import Footer from "../../footer/footer";
import Navbar from "../../home/navbar/navbar";

function Login() {
  return (
    <React.Fragment>
      <div class="main_hero">
        <Navbar />

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
