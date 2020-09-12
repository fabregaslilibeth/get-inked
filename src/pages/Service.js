import React from "react";
import axios from "axios"
import EditService from "../components/EditService";

class Service extends React.Component {

  delete = () => {
    let id = this.props.details._id
    axios.delete(`http://localhost:5000/packages/${id}`)
      .then(() => window.location.reload())
  }

  render() {
    return (
      <>
        <div className={this.props.index % 2 === 0 ?
          "text-white col-12 col-md-3 d-flex flex-column bg-gray" :
          "text-white col-12 col-md-3 d-flex flex-column bg-dark-gray"}>
          <h1 className="my-auto package-card text-uppercase">{this.props.details.name} </h1>
          <p>{this.props.details.description}</p>
          <div className="d-flex p-4">
            <a className="buttons-sm text-center nav-link text-white" data-toggle="modal" data-target="#editServiceModal">Edit</a>
            <button className="buttons-sm" onClick={this.delete}>Delete</button>
          </div>
        </div>
        <EditService name={this.props.details.name} description={this.props.details.description} id={this.props.details._id}/>
      </>
    )
  }
}

export default Service