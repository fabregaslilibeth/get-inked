import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import ScrollArrow from "./components/ScrollArrow";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import MyBookings from "./pages/MyBookings";
import MyReviews from "./pages/MyReviews";

import Packages from "./pages/Packages";
import Availabilities from "./pages/Availabilities";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid banner p-0">
          <div className="row m-0">
            <Link to="/" className="nav-link text-white col-12">
              <h1 className="logo display-4 d-none d-lg-block text-center font-weight-bolder py-4">GET INKED</h1>
            </Link>

            <Navbar/>

            <ul className="navbar-nav ml-auto menu col-4">
              <li className="nav-item ">
                <Link to="/" className="nav-link text-white">
                  <h1 className="logo h5 d-block d-lg-none text-left font-weight-bolder">GET INKED</h1>
                </Link>
              </li>
            </ul>
          </div>

          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/my-bookings" component={MyBookings}/>
          <Route path="/my-reviews" component={MyReviews}/>
          <Route path="/packages" component={Packages}/>
          <Route path="/availabilities" component={Availabilities}/>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/gallery" component={Gallery}/>

        </div>
      </Router>
      <ScrollArrow/>
    </>
  );
}

export default App;
