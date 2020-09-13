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

    axios.get('https://get-inked-backend.herokuapp.com/contact/')
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
    return (
      <div className="container my-4" style={{minHeight: "80vh"}}>
        <div className="row">
          <div className="col-12 col-md-7 calendar-container">
            <Calendar bookings={this.state.bookings} getClickedEvent={this.getClickedEvent}/>
          </div>
          <div className={this.state.clickedEvent.length < 1 ?  "d-none" : "col-12 col-md-4 my-4 ml-auto clicked-event" }>
            <h3 className="text-uppercase font-weight-bolder py-4">{this.state.clickedEvent.name}</h3>
         <div className="p-4">
           <p><small><strong className="text-span-color">SERVICE:  </strong> </small>{this.state.clickedEvent.preferred_package}</p>
           <p><small><strong className="text-span-color">NOTES: </strong> </small>{this.state.clickedEvent.message}</p>
           <p><small><strong className="text-span-color">MOBILE: </strong> </small>{this.state.clickedEvent.mobile}</p>
         </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Availabilities