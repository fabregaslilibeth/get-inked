import React from "react";
import axios from "axios";
import DisplayedReview from "./DisplayedReview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DisplayedReviews extends React.Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    let reviews = []

    axios.get('https://get-inked-backend.herokuapp.com/reviews/')
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
      centerPadding: "20",
      slidesToShow: 2,
      arrows: true,
      fade: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "20",
          }
        }
      ]
    };

    return (
      <div className="row text-white spacer">
        <div className="col-11 col-md-8 col-lg-5 mx-auto">
          <h2 className="headers font-weight-bolder m-4 p-4 text-uppercase text-white text-center d-none d-lg-block">
            See What our <span className="text-span-color"> clients has to say</span>
          </h2>
          <h5 className="headers font-weight-bolder text-uppercase text-white text-center d-block d-lg-none">
           <span className="text-span-color">Reviews</span>
          </h5>
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