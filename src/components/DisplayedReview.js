import React from "react";
import axios from 'axios';


class DisplayedReview extends React.Component {

  state = {
    checked: false,
  }

  componentDidMount() {
    this.setState({checked: this.props.review.is_displayed})
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mx-auto d-flex justify-content-center">
          <div className="col-12">
            <p>{this.props.review.title}</p>
            <p>{this.props.review.message}</p>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default DisplayedReview