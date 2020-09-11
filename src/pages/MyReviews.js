import React, {createRef} from "react";
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

    axios.get('http://localhost:5000/contact/')
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
    axios.get('http://localhost:5000/reviews/')
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

    axios.post('http://localhost:5000/reviews/', review)
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
        <div className="container">
          <div className="row">
            <div className={this.state.canAddReview ? "d-none" : "col-8 mx-auto text-center"}>
              <p>You cannot add a review yet. Please wait for the session to be finished. Thank you.</p>
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
                <textarea ref={this.messageRef} id="message" cols="30" rows="10" className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-dark" onClick={this.addReview}>Add Review</button>
            </div>
            <div className={this.state.hasAddedReview ? "col-8 mx-auto text-center" : "d-none"}>
              {this.state.title} {this.state.message}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default MyReviews