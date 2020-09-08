import React from "react";
import axios from "axios";
import Package from "../components/Package";

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
      <div className="">
        <div className="row my-4" id="investment">
          <div className="col-lg-12">

              <div className="row mx-auto  justify-content-center">
                {Object.keys(this.state.packages).map(
                  key => <Package
                    key={key}
                    index={key}
                    details={this.state.packages[key]}
                  />
                )}
              </div>

          </div>
        </div>
      </div>
    )
  }
}


export default Packages