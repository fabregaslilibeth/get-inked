import React from "react";
import {Link} from "react-router-dom"

class Dropdown extends React.Component {

  state = {
    name: ''
  }

  componentDidMount() {
    let name = JSON.parse(sessionStorage.getItem('user')).name
    let Name = name.charAt(0).toUpperCase() + name.slice(1)
    this.setState({name: Name})
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

          <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span> Guest
          </a>

          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#registerModal">Register</a>
          </div>
        </li>
      )
    }
    if (sessionStorage.getItem('token') && ((JSON.parse(sessionStorage.getItem('user')).isAdmin) === false )) {
      return (
        <li className="nav-item dropdown">

          <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">

            <span className="caret"></span> {this.state.name}
          </a>

          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link to="/my-bookings" className="dropdown-item">My Bookings</Link>
            <Link to="/my-reviews" className="dropdown-item">My Reviews</Link>
            <a className="dropdown-item" href="#" onClick={this.logout}>Logout</a>
          </div>
        </li>
      )
    } else {
      return (
        <li className="nav-item dropdown">

          <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
             data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">

            <span className="caret"></span> {this.state.name}
          </a>

          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link to="/packages" className="dropdown-item">Packages</Link>
            <Link to="/availabilities" className="dropdown-item">Availabilities</Link>
            <Link to="/reviews" className="dropdown-item">Reviews</Link>
            <Link to="/gallery" className="dropdown-item">Gallery</Link>
            <a className="dropdown-item" href="#" onClick={this.logout}>Logout</a>
          </div>
        </li>
      )
    }
  }
}


export default Dropdown