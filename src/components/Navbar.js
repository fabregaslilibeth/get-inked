import React from "react"
import '../index.css';
import { Link } from "react-router-dom"

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar nav navbar-expand-lg sticky-top mx-auto" id="navBar">

        {/*<div className="collapse navbar-collapse">*/}
        {/*  <ul className="navbar-nav mr-auto">*/}
        {/*    <li className="navbar-item">*/}
        {/*      <Link to="/" className="nav-link">Exercises</Link>*/}
        {/*    </li>*/}
        {/*    <li className="navbar-item">*/}
        {/*      <Link to="/create" className="nav-link">Create Exercise</Link>*/}
        {/*    </li>*/}
        {/*    <li className="navbar-item">*/}
        {/*      <Link to="/edit/1" className="nav-link">Edit Exercise</Link>*/}
        {/*    </li>*/}
        {/*    <li className="navbar-item">*/}
        {/*      <Link to="/user" className="nav-link">Create User</Link>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}


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
            <li className="nav-item dropdown">
              <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false" v-pre>
               <span className="caret"></span>
              </a>

              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">My Bookings
                </a>
                <a className="dropdown-item" href="#">My Reviews
                </a>
                <a className="dropdown-item" href="#" id="logout">Logout
                </a>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;