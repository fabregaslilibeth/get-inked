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
          <div className="col-12">
            <p>{this.props.review.title}</p>
            <p>{this.props.review.message}</p>
            <label htmlFor="is_displayed">Display?</label>
            <input type="checkbox" id="is_displayed" checked={this.state.checked ? "checked" : ''} onChange={this.toggleDisplay}/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Review