import React from "react"
import axios from "axios"
import PackageOption from "./PackageOption";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Contact extends React.Component {

  nameRef = React.createRef()
  partnerRef = React.createRef()
  preferred_packageRef = React.createRef()
  dateRef = React.createRef()
  mobileRef = React.createRef()
  messageRef = React.createRef()
  packageRef = React.createRef()

  state = {
    userId: '',
    name: '',
    partner: '',
    preferred_package: '',
    date: new Date(),
    mobile: '',
    message: '',
    packages: {},
    result: '',
    excludedDates: [],
    startDate: new Date(),
  }

  componentDidMount() {
    this.getPackages()
    this.getBookedDates()

    let user = JSON.parse(sessionStorage.getItem('user'))
    this.setState({userId: user.id})
  }

  getPackages() {
    axios.get('http://localhost:5000/packages/')
      .then(({data}) => {
        this.setState({packages: data})
      }).catch(err => console.log(err))
  }

  getBookedDates() {
    const excludedDates = []

    axios.get('http://localhost:5000/contact/')
      .then(({data}) => {
        data.forEach(e => {
          excludedDates.push(new Date(e.date))
        })

        this.setState({excludedDates: excludedDates})
      }).catch(err => console.log(err))

    this.getStartDate()
  }

  getStartDate() {
    const today = new Date()
    today.setDate(today.getDate() + 7)
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    this.setState({
      startDate: new Date(date) //technically start 7 days from now
    })
  }

  handleChange = date => {
    this.setState({
      date: date
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const inquiry = {
      userId: this.state.userId,
      name: this.nameRef.current.value,
      partner: this.partnerRef.current.value,
      mobile: this.mobileRef.current.value,
      message: this.messageRef.current.value,
      date: this.state.date,
      preferred_package: this.packageRef.current.value,
    }

    const excludedDates = this.state.excludedDates

    excludedDates.push(new Date(inquiry.date))

    axios.post('http://localhost:5000/contact/add', inquiry)
      .then(({data}) => {
        this.setState({
          result: 'Thank you for your inquiry. We\'ll get in touch soon!',
          excludedDates: excludedDates,
        })

        this.clearFields()

        setTimeout(() => {
          this.setState({result: ''})
        }, 2000);
      }).catch(err => console.log(err))
  }

  clearFields() {
    this.nameRef.current.value = ''
    this.partnerRef.current.value = ''
    this.preferred_packageRef.current.value = ''
    this.mobileRef.current.value = ''
    this.messageRef.current.value = ''
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
                  <div className="text-center">
                    <span className={!this.state.result ? 'd-none' : 'alert alert-success p-4 flash'}>
                    {this.state.result}
                   </span>
                  </div>
                  <form id="createContact" onSubmit={this.onSubmit}>

                    <div className="form-group">
                      <label htmlFor="name1">Name: </label>
                      <input required ref={this.nameRef} type="text" id="name1" className="form-control" name="name1"
                             placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name2">Partner's Name: </label>
                      <input required ref={this.partnerRef} type="text" id="name2" className="form-control" name="name2"
                             placeholder="Your Partner's Name"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="package_id">Preferred Package </label>
                      <select required name="package_id" id="package_id"
                              className="packageOptions border-0 form-control" ref={this.packageRef}>
                        <option value="">Please select a package</option>
                        {Object.keys(this.state.packages).map(
                          key => <PackageOption
                            key={key}
                            index={key}
                            details={this.state.packages[key]}
                          />
                        )}
                      </select>
                    </div>

                    <div className="form-group row">
                      <label htmlFor="wedding_date" className="col-6">Preferred Date</label>
                      <DatePicker
                        className={'form-control'}
                        minDate={this.state.startDate}
                        // startDate={this.state.startDate}
                        selected={this.state.date}
                        onChange={this.handleChange}
                        excludeDates={this.state.excludedDates}
                      />
                      <span><small>Grayed out dates are unavailable.</small></span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile: </label>
                      <input required ref={this.mobileRef} type="number" id="mobile" className="form-control" name="mobile"
                             placeholder="Mobile"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="content">Message: </label>
                      <textarea ref={this.messageRef} id="message" rows="3" className="form-control" name="message"
                                placeholder="Message" minLength="20" required> </textarea>
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