import React from "react";


class DisplayedReview extends React.Component {

  state = {
    checked: false,
  }

  componentDidMount() {
    this.setState({checked: this.props.review.is_displayed})
  }

  render() {
    return (
      <div className="col-12 text-center bg-app p-4 m-4 review-container d-flex flex-column" style={{ minHeight: "300px"}}>
        <h3 className="icons-color font-weight-bolder mt-auto py-2">{this.props.review.title}</h3>
        <p className="my-auto"><i className="fas fa-quote-left mr-2 icons-color"></i>
          {this.props.review.message}
          <i className="fas fa-quote-right ml-2 icons-color"></i></p>
      </div>

    )
  }
}


export default DisplayedReview