import React from "react"
import axios from "axios"
import PackageOption from "./PackageOption";

class Contact extends React.Component {

  packageRef = React.createRef()

  state = {
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: [],
    package: 0,
    packages: {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/packages/')
      .then(({data}) => {
        this.setState({packages: data})
      }).catch(err => console.log(err))
  }


  onSubmit = e => {
    e.preventDefault();

    const inquiry = {
      package: this.packageRef.current.value,
    }

    console.log(inquiry)
    //
    // axios.post('http://localhost:5000/inquiries/add', inquiry)
    //   .then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
        <div className="row my-4 py-4" id="contact">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5 mx-auto">
                <div className="form-wrapper p-4 col-lg-12">
                  <h1 className="contact-h2">contact</h1>
                  <form id="createContact" onSubmit={this.onSubmit}>

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
                              className="packageOptions border-0 form-control" ref={this.packageRef}>
                        {Object.keys(this.state.packages).map(
                          key => <PackageOption
                            key={key}
                            index={key}
                            details={this.state.packages[key]}
                          />
                        )}
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
      </div>
    )
  }
}

export default Contact;