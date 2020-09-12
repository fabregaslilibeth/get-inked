import React from "react";
import axios from "axios";
import DisplayedReview from "./DisplayedReview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Package from "./Package";

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
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 2,
      arrows: true,
    };

    return (
      <div className="row text-white spacer">
        <div className="col-7 mx-auto">
          <h2 className="headers font-weight-bolder text-uppercase text-white text-center mt-4">
            See <span className="text-span-color">What our clients has to say</span>
          </h2>
          <Slider {...settings}>
            {Object.keys(this.state.reviews).map(
              key => <DisplayedReview
                key={key}
                index={key}
                review={this.state.reviews[key]}
              />
            )}
          </Slider>
        </div>
      </div>
    )
  }
}


export default DisplayedReviews