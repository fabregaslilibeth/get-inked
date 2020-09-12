import React from "react";
import {Link} from "react-router-dom"

class Dropdown extends React.Component {

  state = {
    name: ''
  }

  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem('user')) || ''
    if (user) {
      let name = user.name
      let Name = name.charAt(0).toUpperCase() + name.slice(1)
      this.setState({name: Name})
    }
  }

  logout = (e) => {
    e.preventDefault()
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    window.location.href = '/'
  }

  render() {
    if (!sessionStorage.getItem('token')) {
      return (
        <li className="nav-item dropdown">

          <a id="navbarDropdown" className="nav-link text-white text-uppercase dropdown-toggle" href="#" role="button"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span> Guest
          </a>

          <div className="dropdown-menu bg-transparent dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item text-white text-uppercase" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
            <a className="dropdown-item text-white text-uppercase" href="#" data-toggle="modal" data-target="#registerModal">Register</a>
          </div>
        </li>
      )
    }
    if (sessionStorage.getItem('token') && ((JSON.parse(sessionStorage.getItem('user')).isAdmin) === false )) {
      return (
        <li className="nav-item dropdown">

          <a id="navbarDropdown" className="nav-link text-white text-uppercase dropdown-toggle" href="#" role="button"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span> {this.state.name}
          </a>

          <div className="dropdown-menu bg-transparent dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link to="/my-bookings" className="dropdown-item text-white text-uppercase">My Bookings</Link>
            <Link to="/my-reviews" className="dropdown-item text-white text-uppercase">My Reviews</Link>
            <a className="dropdown-item text-white text-uppercase" href="#" onClick={this.logout}>Logout</a>
          </div>
        </li>
      )
    } else {
      return (
        <li className="nav-item dropdown">

          <a id="navbarDropdown" className="nav-link text-white text-uppercase dropdown-toggle" href="#" role="button"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">

            <span className="caret"></span> {this.state.name}
          </a>

          <div className="dropdown-menu bg-transparent dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link to="/packages" className="dropdown-item text-white text-uppercase">Packages</Link>
            <Link to="/availabilities" className="dropdown-item text-white text-uppercase">Availabilities</Link>
            <Link to="/reviews" className="dropdown-item text-white text-uppercase">Reviews</Link>
            <Link to="/gallery" className="dropdown-item text-white text-uppercase">Gallery</Link>
            <a className="dropdown-item text-white text-uppercase" href="#" onClick={this.logout}>Logout</a>
          </div>
        </li>
      )
    }
  }
}


export default Dropdown