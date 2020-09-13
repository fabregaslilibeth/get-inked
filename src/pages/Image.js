import React from "react";
import axios from "axios"
import EditImage from "../components/EditImage";

class Image extends React.Component {

  state = {
    checked: false,
  }

  componentDidMount() {
    this.setState({checked: this.props.details.is_displayed})
  }

  delete = () => {
    let id = this.props.details._id
    axios.delete(`http://localhost:5000/gallery/${id}`)
      .then(() => window.location.reload())
  }

  toggleDisplay = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/gallery/display/${this.props.details._id}`)
      .then(({data}) =>
        this.setState({checked: data}))
  }

  render() {
    return (
      <>
        <div className="col-12 col-lg-4 my-4">

          <div className="image-container">
            <div className="image-border" style={{
              background: `url(${this.props.details.url}) center center no-repeat`,
              height: "300px",
              width: "100%"
            }}>
              <div className="image-details p-4">
                <h5
                  className="font-weight-bolder text-span-color text-uppercase text-center">{this.props.details.title}</h5>
                <div className="text-center my-4">
                  <label htmlFor="is_displayed"
                         className="font-weight-bolder ml-auto">{this.state.checked ? "Displayed" : 'Not displayed'}  </label>
                  <input type="checkbox" id="is_displayed" checked={this.state.checked ? "checked" : ''}
                         className="ml-4 form-check-inline" onChange={this.toggleDisplay}/>
                </div>
                <div className="d-flex p-4 mt-4 justify-content-center">
                  <a className="buttons-sm text-center nav-link text-white mt-4" data-toggle="modal"
                     data-target="#editImageModal">Edit</a>
                  <button className="buttons-sm mt-4" onClick={this.delete}>Delete</button>
                </div>
              </div>
            </div>


          </div>

        </div>
        <EditImage title={this.props.details.title} url={this.props.details.url} id={this.props.details._id}/>
      </>
    )
  }
}

export default Image