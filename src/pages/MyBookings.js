import React from "react";
import axios from "axios";
import Booking from "../components/Booking";

class MyBookings extends React.Component {

  state = {
    user: [],
    bookings: [],
  }

  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    const bookings = []

    axios.get('http://localhost:5000/contact/')
      .then(({data}) => {
        data.forEach(e => {
          if (e.userId === user.id) {
            bookings.push(e)
            this.setState({bookings: bookings})
            console.log(this.state.bookings)
          }
        })
      })

    this.setState({user: user})
  }

  render() {
    return (
      <div className="container-fluid " style={{minHeight: "80vh"}}>

        <div className={this.state.bookings.length !== 0 ? "d-none" : "col-8 mx-auto text-center"}>
          <p className="spacer"> <i className="fas fa-exclamation-circle mr-2 text-danger"></i>You don't have any confirmed schedules yet.</p>
          <br/>
          <p><a href="/#contact" className="buttons text-uppercase">Book now</a></p>
        </div>

        <div className={this.state.bookings.length === 0 ? "d-none" : "row"}>
          {Object.keys(this.state.bookings).map(
            key => <Booking
              key={key}
              index={key}
              details={this.state.bookings[key]}
            />
          )}
        </div>
      </div>
    )
  }
}


export default MyBookings