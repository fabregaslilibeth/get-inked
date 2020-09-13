import React from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GallerySlideItem from "./GallerySlideItem";

class GallerySlider extends React.Component {

  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }

  state = {
    gallery: []
  }

  componentDidMount() {
    let gallery = []

    axios.get('http://localhost:5000/gallery/')
      .then(({data}) => {
        data.forEach(image => {
          if (image.is_displayed === true) {
            gallery.push(image)
          }
        })

        this.setState({gallery})
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
      arrows: false,
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
            fade: true
          }
        }
      ]
    };

    return (
      <>
        <h2 className="headers font-weight-bolder text-uppercase text-center d-block d-lg-none">
          See <span className="text-span-color">Our Works</span>
        </h2>

        <div className="col-12 col-lg-9">
          <Slider {...settings} ref={c => (this.slider = c)}>

            {Object.keys(this.state.gallery).map(
              key => <GallerySlideItem
                key={key}
                index={key}
                image={this.state.gallery[key]}
              />
            )}

          </Slider>
        </div>

        <div className="col-12 col-lg-1 d-flex flex-column">
          <h2 className="headers font-weight-bolder text-uppercase text-white my-auto d-none d-lg-block">
            See <span className="text-span-color">Our Works</span>
          </h2>
          <div className="text-center pb-4">
           <span className="h4">
             <i className="fas fa-long-arrow-alt-left text-white mr-4 icons-color" onClick={this.previous}></i>
           </span>
            <span className="h4">
             <i className="fas fa-long-arrow-alt-right text-white mr-4 icons-color" onClick={this.next}></i>
           </span>
          </div>
        </div>
      </>
    );
  }
}

export default GallerySlider