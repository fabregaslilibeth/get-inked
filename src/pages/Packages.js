import React from "react";
import axios from "axios";
import AddService from "../components/AddService";
import Service from "./Service";

class Packages extends React.Component {

  state = {
    packages: {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/packages/')
      .then(({data}) => {
        this.setState({packages: data})
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="" style={{minHeight: "80vh"}}>
        <div className="row my-4">
         <div className="mx-auto my-4 py-4">
           <a className="buttons"  href="#" data-toggle="modal" data-target="#addServiceModal">Add new service</a>
         </div>
          <div className="col-lg-12">
              <div className="row mx-auto  justify-content-center">
                {Object.keys(this.state.packages).map(
                  key => <Service
                    key={key}
                    index={key}
                    details={this.state.packages[key]}
                  />
                )}
              </div>



          </div>
        </div>
        <AddService />
      </div>
    )
  }
}


export default Packages