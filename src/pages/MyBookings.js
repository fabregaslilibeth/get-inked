import React from "react";
import axios from "axios";

class MyBookings extends React.Component {

  state = {
    user: []
  }

  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    //const bookingss = []

    axios.get('http://localhost:5000/contact/')
      .then(({data}) => {
        data.forEach(e => {
          if (e.userId === user.id) {
            //bookingss.push(e.date)
            //this.setState({bookings: bookingss})
            //check if e.date is past
            if (new Date(e.date) <= new Date()) {
              this.setState({canAddReview: true})
            }
          }
        })
      })

    this.setState({user: user})
    console.log(this.state.bookings)
  }

  render() {
    return (
      <div>
        MyBookings
      </div>
    )
  }
}


export default MyBookings