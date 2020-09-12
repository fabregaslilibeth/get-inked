import React from "react";
import axios from 'axios';


class Review extends React.Component {

  state = {
    checked: false,
  }

  componentDidMount() {
    this.setState({checked: this.props.review.is_displayed})
  }

  toggleDisplay = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/reviews/update/${this.props.review._id}`)
      .then(({data}) =>
        this.setState({checked: data}))
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mx-auto d-flex justify-content-center">
          <div className="col-12 my-4">
            <h5 className="font-weight-bolder text-span-color">{this.props.review.title}</h5>
            <p>{this.props.review.message}</p>
            <label htmlFor="is_displayed" className="font-weight-bolder ml-auto">{this.state.checked ? "Displayed" : 'Not displayed'}  </label>
            <input type="checkbox" id="is_displayed" checked={this.state.checked ? "checked" : ''} className="ml-4 form-check-inline" onChange={this.toggleDisplay}/>


          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Review