import React from "react";

class GallerySlideItem extends React.Component {

  state = {
    checked: false,
  }

  componentDidMount() {
    this.setState({checked: this.props.image.is_displayed})
  }

  render() {
    return (
      <div className="col-12 mx-1">
        <div className="gallery-item" style={{
          background: `url(${this.props.image.url}) center center no-repeat`,
          backgroundSize: "cover",
        }}></div>
      </div>

    )
  }
}


export default GallerySlideItem