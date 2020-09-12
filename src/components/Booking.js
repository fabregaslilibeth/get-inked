import React from "react";

class Booking extends React.Component {

  render() {
    let index = this.props.index
    let packge = this.props.details.preferred_package
    let day = new Date(this.props.details.date).getDate()
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthIndex = new Date(this.props.details.date).getMonth()
    let month = monthArray[monthIndex]
    let year = new Date(this.props.details.date).getFullYear()
    let status = new Date(this.props.details.date) <= new Date() ? "completed" : "upcoming"

    return (
      <div className={ index%2 === 0 ?
        "text-white col-7 mx-auto bg-gray m-2 booking-card" :
        "text-white col-7 mx-auto bg-dark-gray m-2 p-4 booking-card" }>

        <h1 className="p-4 text-uppercase"> {packge} </h1>
       <div className="p-4">
         <p><small><strong className="text-span-color">DATE:  </strong> </small>{month} {day}, {year}</p>
         <p><small><strong className="text-span-color">NOTES: </strong> </small>{this.props.details.message}</p>
         <p><small><strong className="text-span-color">STATUS: </strong> </small> {status} </p>
       </div>

      </div>
    )
  }
}

export default Booking