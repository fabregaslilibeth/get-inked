import React from "react";
import axios from "axios"
import Package from "./Package";

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
      <>
        <div className="d-flex justify-content-center flex-wrap">
          {Object.keys(this.state.packages).map(
            key => <Package
              key={key}
              index={key}
              details={this.state.packages[key]}
            />
          )}
        </div>
      </>
    )
  }
}

export default Packages