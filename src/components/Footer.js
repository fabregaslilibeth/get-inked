import React from "react"
import '../index.css';
import {Link} from "react-router-dom";

class Footer extends React.Component {

  render() {

    return (
      <div>
        <Link to="/" className="nav-link text-white">
          <h3 className="logo  text-center font-weight-bolder">GET INKED</h3>
        </Link>
        <nav className="navbar nav navbar-expand-lg sticky-top mx-auto" id="navBar">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse custom-nav" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto menu">

              <li className="nav-item ">
                <a href="/" className="nav-link text-uppercase text-white">Home</a>
              </li>
              <li className="nav-item ">
                <a href="/blogsUser" className="nav-link text-uppercase text-white">GALLERY</a>
              </li>
              <li className="nav-item ">
                <a href="/#testimonials" className="nav-link text-uppercase text-white">Reviews</a>
              </li>
              <li className="nav-item ">
                <a href="/#investment" className="nav-link text-uppercase text-white">Packages</a>
              </li>

              <li className="nav-item ">
                <a href="/#contact" className="nav-link text-uppercase text-white">Contact</a>
              </li>

            </ul>
          </div>

        </nav>
        <p className="text-white text-center">All photos are not mine. For educational purposes only.</p>
      </div>
    )
  }
}

export default Footer;