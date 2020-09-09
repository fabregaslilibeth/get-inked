import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class Calendar extends React.Component {

  handleDateClick = (arg) => {
    let re = /[a-zA-Z]/;
    let str = arg.dayEl.textContent
    let index = str.search(re);
    let name = str.substring(index);
    this.props.getClickedEvent(name)
  }

  renderEventContent = (eventInfo) => {
    return (
      <>
        <small className="text-wrap text-center text-capitalize event-detail">{eventInfo.event.title}</small>
      </>
    )
  }

  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events={this.props.bookings}
        eventContent={this.renderEventContent}
        dateClick={this.handleDateClick}
      />
    )
  }
}