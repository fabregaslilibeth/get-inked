import React from "react";
import axios from "axios";

class MyReviews extends React.Component {

  titleRef = React.createRef()
  messageRef = React.createRef()

  state = {
    userId: '',
    canAddReview: false,
    title: '',
    message: '',
    result: '',
    hasAddedReview: false,
  }

  componentDidMount() {
    let userId = JSON.parse(sessionStorage.getItem('user')).id

    axios.get('https://get-inked-backend.herokuapp.com/contact/')
      .then(({data}) => {
        data.forEach(e => {
          if (e.userId === userId) {
            if (new Date(e.date) <= new Date()) {
              this.setState({canAddReview: true})
            }
          }
        })
      })

    //check if user has already added a review
    axios.get('https://get-inked-backend.herokuapp.com/reviews/')
      .then(({data}) => {
        data.forEach(e => {
          if (e.userId === userId) {
            this.setState({
              hasAddedReview: true,
              title: e.title,
              message: e.message
            })
          }
        })
      })

    this.setState({userId})
  }

  addReview = (e) => {
    e.preventDefault()
    let review = {
      userId: this.state.userId,
      title: this.titleRef.current.value,
      message: this.messageRef.current.value,
    }

    axios.post('https://get-inked-backend.herokuapp.com/reviews/', review)
      .then(({data}) => {
        if (data.status === 404) {
          this.setState({result: data.message})
        } else {
          this.setState({
            hasAddedReview: true,
            title: review.title,
            message: review.message
          })
        }
      })
  }

  render() {
    return (
      <div>
        {}
        <div className="container p-0" style={{minHeight: "80vh"}}>
          <div className="row">
            <div className={this.state.canAddReview ? "d-none" : "col-8 mx-auto text-center"}>
              <p className="spacer">  <i className="fas fa-exclamation-circle mr-2 text-danger"></i> You cannot add a review unless you have finished a session. </p>
              <p>Thank you.</p>
              <br/>
              <p><a href="/my-bookings" className="buttons text-uppercase">View Bookings</a></p>
            </div>

            <div className={this.state.canAddReview && !this.state.hasAddedReview ? "col-8 mx-auto text-center" : "d-none"}>
              <div className="text-center">
                <span className={!this.state.result ? 'd-none' : 'alert alert-success p-4 flash'}>
                 {this.state.result}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="title">Review Title</label>
                <input ref={this.titleRef} type="email" className="form-control" id="title"
                       placeholder="Review Title"/>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea ref={this.messageRef} id="message" cols="30" rows="10" className="form-control" placeholder="Please tell us what you think of our service."></textarea>
              </div>
              <button type="submit" className="buttons" onClick={this.addReview}>Add Review</button>
            </div>
            <div className={this.state.hasAddedReview ? "text-white col-7 mx-auto bg-gray m-2 booking-card" : "d-none"}>
              <h1 className="p-4 text-uppercase"> {this.state.title} </h1>
              <p className="p-4"> {this.state.message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default MyReviews