import React from "react";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
import "./dashboard.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../footer/footer";

function Dashboard() {
  const [loading, setloading] = React.useState(true);
  const [menu, setmenu] = React.useState(false);
  const [mobilemenu, setmobilemenu] = React.useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const openMenu = () => {
    setmenu(!menu);
  };

  const openMobileMenu = () => {
    console.log(!mobilemenu);
    setmobilemenu(!mobilemenu);
  };

  React.useEffect(() => {
    document.title = "Dashboard | Netflix";
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  let loading_indicator = (
    <div className="myLoader">
      <Loader type="Oval" color="white" height={40} width={40} />
      <p>Please Wait</p>
    </div>
  );

  return loading ? (
    loading_indicator
  ) : (
    <React.Fragment>
      <div
        className="backdrop"
        style={
          mobilemenu
            ? { opacity: "1", visibility: "visible" }
            : { opacity: "0" }
        }
        onClick={openMobileMenu}
      ></div>
      <div
        className="mobile_nav"
        style={
          mobilemenu
            ? { width: "250px", marginLeft: "0px" }
            : { width: "0px", marginLeft: "-250px" }
        }
      >
        <div className="close_menu" onClick={openMobileMenu}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">TV Shows</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
        </ul>
      </div>
      <div
        className="dashboard_hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),transparent,rgba(0, 0, 0, 0.9)),url(${"https://www.themoviedb.org/t/p/original/hd8H2TvqtAbqYnBUbf5AdXZf87s.jpg"})`,
        }}
      >
        <div className="top_navbar">
          <div className="mobile_menu_icon" onClick={openMobileMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="dashboard_logo">
            <img
              src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
              width={100}
              alt="netflix_logo"
            />
          </div>
          <div className="navbar_items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">TV Shows</Link>
              </li>
              <li>
                <Link to="/">Movies</Link>
              </li>
              <li>
                <Link to="/">My List</Link>
              </li>
            </ul>
          </div>
          <div className="right_sidenav">
            <div className="search_box">
              <input type="text" placeholder="Search"></input>
              <button>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="right_sidenav_mobile">
            <ul>
              <li>
                <i class="fa fa-bell" aria-hidden="true"></i>
              </li>
              <li className="profile" onClick={openMenu}>
                Profile&nbsp;
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </li>
            </ul>

            <div
              className="profile_dropdown"
              style={menu ? { opacity: "1" } : { opacity: "0" }}
            >
              <ul>
                <li className="account">
                  <a>Account</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero_buttons">
          <button style={{ marginLeft: "0px" }}>
            <i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp;Play
          </button>
          <button>
            <i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;My List
          </button>
          <button>
            <i class="fa fa-info" aria-hidden="true"></i>&nbsp;&nbsp;More Info
          </button>
        </div>
      </div>
      <div className="fadded_bottom"></div>

      <div className="section1">
        <h3>Comedy Movies</h3>
        <div className="cards_images">
          {/* <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img> */}
          <Carousel
            responsive={responsive}
            swipeable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          </Carousel>
        </div>
      </div>

      <div className="section1">
        <h3>New on netflix</h3>
        <div className="cards_images">
          {/* <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img> */}
          <Carousel
            responsive={responsive}
            swipeable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          </Carousel>
        </div>
      </div>

      <div className="section1">
        <h3>Tv Series</h3>
        <div className="cards_images">
          {/* <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img> */}
          <Carousel
            responsive={responsive}
            swipeable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
            <img src="https://www.themoviedb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"></img>
          </Carousel>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;
