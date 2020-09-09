import React from "react";
import Calendar from "./Calendar";
import axios from "axios";

class Availabilities extends React.Component {

  state = {
    bookings: [],
    clickedEvent: [],
    allBookings: []
  }

  componentDidMount() {
    this.getBookedDates()
  }

  getBookedDates() {
    const bookings = []

    let booking = {}

    axios.get('http://localhost:5000/contact/')
      .then(({data}) => {
        data.forEach(e => {
          booking = {title: e.name, date: new Date(e.date)}
          bookings.push(booking)
        })

        this.setState({bookings: bookings})
        this.setState({allBookings: data})
      }).catch(err => console.log(err))
  }

  getClickedEvent = (event) => {
    this.state.allBookings.find(booking => {
      if ( booking.name.toLowerCase() === event.toLowerCase()) {
        this.setState({clickedEvent: booking})
      }
    })
  }

  render() {
    const transitionOptions = {
      classNames: "order",
      timeout: {enter: 250, exit: 250}
    }
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-7 calendar-container">
            <Calendar bookings={this.state.bookings} getClickedEvent={this.getClickedEvent}/>
          </div>
          <div className={this.state.clickedEvent.length < 1 ?  "d-none" : "col-12 col-md-3 my-4 ml-auto text-center clicked-event" }>
            <h3 className="clicked-event-header py-4">{this.state.clickedEvent.name} && {this.state.clickedEvent.partner} </h3>
            <p>{this.state.clickedEvent.preferred_package}</p>
            <p>{this.state.clickedEvent.mobile}</p>
            <p>{this.state.clickedEvent.message}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Availabilities