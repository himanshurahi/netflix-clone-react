import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/spinner";
import "./home.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import Footer from "../footer/footer";
import Navbar from "./navbar/navbar";

function Home() {
  return (
    <React.Fragment>
      <div className="main_hero" style={{ height: "500px" }}>
       <Navbar />
        <div className="main_banner">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div className="get_started">
            <input type="text" placeholder="Email Address" />

            <button type="submit" disabled={false}>
              {/* <Loader type="TailSpin" color="white" height={40} width={40} style = {{display : "flex"}} /> */}
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="offline">
        <div className="offline_image">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>
        <div className="offline_text">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
