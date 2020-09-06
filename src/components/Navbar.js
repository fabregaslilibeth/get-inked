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
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item ">
                <a href="/blogsUser" className="nav-link">Blogs</a>
              </li>
              <li className="nav-item ">
                <a href="/#testimonials" className="nav-link">Client Reviews</a>
              </li>
              <li className="nav-item ">
                <a href="/#investment" className="nav-link">Packages</a>
              </li>

              <li className="nav-item ">
                <a href="/#contact" className="nav-link">Contact</a>
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