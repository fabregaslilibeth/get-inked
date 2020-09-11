import React from "react";
import axios from "axios";
import DisplayedReview from "./DisplayedReview";

class DisplayedReviews extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    let reviews = []

    axios.get('http://localhost:5000/reviews/')
      .then(({data}) => {
        data.forEach(review => {
          if (review.is_displayed === true) {
            reviews.push(review)
          }
        })

        this.setState({reviews})
      })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mx-auto d-flex justify-content-center">
            {Object.keys(this.state.reviews).map(
              key => <DisplayedReview
                key={key}
                index={key}
                review={this.state.reviews[key]}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}


export default DisplayedReviews