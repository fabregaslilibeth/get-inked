import React from "react";
import axios from "axios";

class MyReviews extends React.Component {

  state = {
    userId: '',
    canAddReview: false,
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

    this.setState({userId})
  }

  addReview = (e) => {
    e.preventDefault()
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
            <div className={!this.state.canAddReview ? "d-none" : "col-8 mx-auto text-center"}>
              <button className="btn btn-outline-dark" onClick={this.addReview}>Add Review</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default MyReviews