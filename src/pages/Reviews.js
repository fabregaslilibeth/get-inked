import React from "react";
import axios from "axios";
import Review from "./Review";

class Reviews extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    let reviews = []

    axios.get('https://get-inked-backend.herokuapp.com/reviews/')
      .then(({data}) => {
        data.forEach(review => {
          reviews.push(review)
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
              key => <Review
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


export default Reviews