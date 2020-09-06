import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
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
    <Router>
      <div className="container-fluid project-container">
        <Link to="/" className="nav-link">
          <h1 className="logo text-center py-4">One Flash Photography</h1>
        </Link>

        <Navbar/>

        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/my-bookings" component={MyBookings} />
        <Route path="/my-reviews" component={MyReviews} />
        <Route path="/packages" component={Packages} />
        <Route path="/availabilities" component={Availabilities} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/gallery" component={Gallery} />

      </div>
    </Router>
  );
}

export default App;
