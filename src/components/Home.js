import React from "react"
import Packages from "./Packages";
import Contact from "./Contact";
import DisplayedReviews from "./DisplayedReviews";

class Home extends React.Component {
  render () {
    return (
      <div className="mx-auto">
        <div className="row">
          <div className="col-lg-12" id="home">
          </div>
        </div>
        <div className="row" id="about">
          <div className="col-lg-8 mx-auto py-4">
            <div className="about-wrapper ">
              <div className="row">
                <div className="about-text-container col-lg-6 col-md-12 col-sm-12">
                  <div className="headers">
                    <h4 className="custom-header">So this is us..</h4>
                    <h1>about</h1>
                  </div>
                  <p className="about-text">They say that anyone can pick up a camera and start taking beautiful
                    photographs, as long as the camera that they use is of utmost quality type. I tend to disagree.
                    While there are natural born gifted photographers, many have to go through countless years of
                    learning and hardship to achieve a remarkable standard in photography.</p>
                </div>

                <div className="about-image-container col-lg-6 mx-auto">
                  <div className="about-image mx-auto">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/*// <!-- end of about row -->*/}

        <div className="row" id="testimonials">
          <h1 className="text-center mx-auto custom-header my-4">What our clients say about us</h1>
          <div className="col-lg-12" id="testimonials">
            {/*// <!-- START CAROUSEL HERE -->*/}
            <div className="testi-wrapper mx-auto">

              <DisplayedReviews />

            </div>
          </div>
        </div>
        {/*// <!-- end testi row -->*/}

        <hr/>

       <Packages />

        <hr/>
       <Contact />

        <div className="row" id="footer">
          <div className="col-lg-10 mx-auto">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-wrapper">
                  <p>Cupcake Cinema</p>
                  <p>Same experience as a cake, only more affordable. </p>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-links">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link nav-link-footer" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link nav-link-footer" href="/blogsUser">Blogs</a></li>
                    <li className="nav-item"><a className="nav-link nav-link-footer" href="#testimonials">Client
                      Reviews</a></li>
                    <li className="nav-item"><a className="nav-link nav-link-footer" href="#investment">Packages</a>
                    </li>
                    <li className="nav-item"><a className="nav-link nav-link-footer" href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="footer-contact">
                  <p>24 Block D. Taft Avenue, Manila</p>
                  <p>info@cupcakecinema.com</p>
                  <p>857-2140</p>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <div className="footer-newsletter">
                  Be updated with our promos and upcoming events.
                  <form action="">
                    <input className="form-control  my-2    " type="email" placeholder="Your Email Address"
                           required=""/>
                    <button className="btn btn-block btn-secondary">Subscribe now</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="copyright col-lg-12">
          <p className="text-center h4">CUPCAKE CINEMA || &copy; 2015</p>
        </div>
      </div>
    )
  }
}

export default Home;