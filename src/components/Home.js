import React from "react"

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
                    <h4>So this is us..</h4>
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
          <h1 className="text-center mx-auto ">What our clients say about us</h1>
          <div className="col-lg-12" id="testimonials">
            {/*// <!-- START CAROUSEL HERE -->*/}
            <div className="testi-wrapper mx-auto">


              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" id="reviews">

                  <div className="carousel-item active">
                    <div className="testi-text-container">
                      <h3 className="text-center">Beyond Grateful</h3>
                      <p className="text-center">" I am a mother of two, but I don't want to be 'JUST A MOTHER'. So I
                        enrolled in Cupcake Cinema Photography Class and I can completely say it has changed my life
                        forever."</p>
                      <p className="text-right px-4">photoG@graphics.com</p>
                      <p className="text-right px-4">June 15th 2019, 6:10:15 pm</p>

                    </div>
                  </div>

                  {/*<a className="carousel-control-prev" href="#carouselExampleControls" role="button"*/}
                  {/*   data-slide="prev">*/}
                  {/*  <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                  {/*  <span className="sr-only">Previous</span>*/}
                  {/*</a>*/}
                  {/*<a className="carousel-control-next" href="#carouselExampleControls" role="button"*/}
                  {/*   data-slide="next">*/}
                  {/*  <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                  {/*  <span className="sr-only">Next</span>*/}
                  {/*</a>*/}

                </div>
              </div>
              {/*// <!-- END CAROUSEL HERE -->*/}
            </div>
          </div>
        </div>
        {/*// <!-- end testi row -->*/}

        <hr/>
        <div className="row my-4" id="investment">
          <div className="col-lg-12">
            <h1 className="text-center py-4">PACKAGES</h1>

            <div className="col-lg-6 text-center mx-auto">
              <p>Peak Summer 2019 collections start at P50,000 and include at least 6 hours of continuous wedding
                photography, a collection of digital images and a shareable online gallery.</p>

              <table className="table table-striped mx-auto text-center">
                <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">Inclusions</th>
                  <th scope="col">Price</th>
                </tr>
                </thead>

                <tbody id="packageList">

                </tbody>
              </table>

              <p>Additional files, albums and other products are available for purchase.</p>
              <p>Additional sales tax is applicable to all sessions and products.</p>

            </div>
          </div>
        </div>
        {/*// <!-- end of row-investments -->*/}

        <hr/>
        <div className="row my-4 py-4" id="contact">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 mx-auto">
                <div className="form-wrapper p-4 col-lg-12">
                  <h2 className="contact-h2">contact</h2>
                  <form id="createContact">

                    <div className="form-group">
                      <label htmlFor="name1">Name: </label>
                      <input type="text" id="name1" className="form-control" name="name1" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name2">Partner's Name: </label>
                      <input type="text" id="name2" className="form-control" name="name2"
                             placeholder="Your Partner's Name"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="package_id">Preferred Package </label>
                      <select name="package_id" id="package_id"
                              className="packageOptions border-0 text-center form-control">
                        <option value="">Your preferred package</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="wedding_date">Preferred Date</label>
                      <input type="date" id="wedding_date" className="form-control" name="wedding_date"
                             placeholder="Preferred Date"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile: </label>
                      <input type="text" id="mobile" className="form-control" name="mobile" placeholder="Mobile"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="content">Message: </label>
                      <textarea id="message" rows="3" className="form-control" name="message"
                                placeholder="Message"> </textarea>
                    </div>

                    <button id="createReviewButton"
                            className="btn btn-outline-secondary btn-block" data-dismiss="modal"> Submit
                    </button>
                  </form>

                </div>
              </div>

            </div>

          </div>
        </div>
        {/*// <!-- end of row for contact -->*/}

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