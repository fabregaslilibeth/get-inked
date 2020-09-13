import React from "react";
import axios from "axios";
import AddImage from "../components/AddImage";
import Image from "./Image";

class Gallery extends React.Component {

  state = {
    images: {}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/gallery/')
      .then(({data}) => {
        this.setState({images: data})
        console.log(this.state.images)
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container" style={{minHeight: "80vh"}}>
        <div className="my-4 py-4">
          <p className="text-center"><a className="buttons" href="#" data-toggle="modal" data-target="#addImageModal">Add new image</a></p>
        </div>
        <div className="row">
          {Object.keys(this.state.images).map(
            key => <Image
              key={key}
              index={key}
              details={this.state.images[key]}
            />
          )}
        </div>

        <AddImage/>
      </div>
    )
  }
}


export default Gallery