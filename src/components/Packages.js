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

  render () {
    return (
      <div>
        <div className="row my-4" id="investment">
          <div className="col-lg-12">
            <h1 className="text-center py-4 custom-header">Packages</h1>

            <div className="col-lg-10 text-center mx-auto">
              <p>Peak Summer 2019 collections start at P50,000 and include at least 6 hours of continuous wedding
                photography, a collection of digital images and a shareable online gallery.</p>

              <div className="row mx-auto d-flex justify-content-center">
                {Object.keys(this.state.packages).map(
                  key => <Package
                    key={key}
                    index={key}
                    details={this.state.packages[key]}
                  />
                )}
              </div>

              <p>Additional files, albums and other products are available for purchase.</p>
              <p>Additional sales tax is applicable to all sessions and products.</p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Packages