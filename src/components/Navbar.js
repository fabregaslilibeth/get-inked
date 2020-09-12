import React from "react"
import '../index.css';
import {Link} from "react-router-dom"
import Login from "./Login";
import Register from "./Register";
import Dropdown from "./Dropdown";

class Navbar extends React.Component {

  state = {
    token: '',
    isAdmin: false
  }

    //not needed anymore since I already used session storage
  // setToken = (token, isAdmin) => {
  //   this.setState({
  //     token,
  //     isAdmin
  //   })
  // }

  render() {

    return (
      <div>
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
                <a href="/#gallery" className="nav-link text-uppercase text-white">GALLERY</a>
              </li>
              <li className="nav-item ">
                <a href="/#reviews" className="nav-link text-uppercase text-white">Reviews</a>
              </li>
              <li className="nav-item ">
                <a href="/#packages" className="nav-link text-uppercase text-white">Packages</a>
              </li>

              <li className="nav-item ">
                <a href="/#contact" className="nav-link text-uppercase text-white">Contact</a>
              </li>

              <Dropdown token={this.state.token} isAdmin={this.state.isAdmin}/>

            </ul>
          </div>

        </nav>
        <Login />
        <Register />
      </div>
    )
  }
}

export default Navbar;