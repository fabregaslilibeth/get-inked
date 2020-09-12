import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class GallerySlider extends React.Component {

  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
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
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <div className="col-12 col-md-9">
          <Slider {...settings} ref={c => (this.slider = c)}>

             <div className="col-12">
               <div className="gallery-item" style={{
                 backgroundImage: "url('https://img.freepik.com/free-photo/sad-young-man-with-tattoo-his-body-standing-front-dry-leaves-against-grey-background_23-2148122109.jpg?size=626&ext=jpg')",
                 backgroundSize: "cover",
                 width: "600px",
                 height: "700px",
               }}></div>
             </div>
             <div className="col-12">
               <div className="gallery-item" style={{
                 backgroundImage: "url('https://image.freepik.com/free-photo/tattooed-stylish-girl_102671-3777.jpg')",
                 backgroundSize: "cover",
                 width: "600px",
                 height: "700px",
               }}></div>
             </div>
             <div className="col-12">
               <div className="gallery-item" style={{
                 backgroundImage: "url('https://image.freepik.com/free-photo/tattooed-stylish-girl_102671-3777.jpg')",
                 backgroundSize: "cover",
                 width: "600px",
                 height: "700px",
               }}></div>
             </div>

             {/*<div>*/}
             {/*  <div className="gallery-item" style={{*/}
             {/*    backgroundImage: "url('https://img.freepik.com/free-photo/sad-young-man-with-tattoo-his-body-standing-front-dry-leaves-against-grey-background_23-2148122109.jpg?size=626&ext=jpg')",*/}
             {/*    backgroundSize: "cover",*/}
             {/*    width: "600px",*/}
             {/*    height: "700px",*/}
             {/*  }}></div>*/}
             {/*</div>*/}
             {/*<div>*/}
             {/*  <div className="gallery-item" style={{*/}
             {/*    backgroundImage: "url('https://image.freepik.com/free-photo/tattooed-stylish-girl_102671-3777.jpg')",*/}
             {/*    backgroundSize: "cover",*/}
             {/*    width: "600px",*/}
             {/*    height: "700px",*/}
             {/*  }}></div>*/}
             {/*</div>*/}


          </Slider>
          </div>

        <div className="col-1 d-flex flex-column">
          <h2 className="headers font-weight-bolder text-uppercase text-white my-auto">
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