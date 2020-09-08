import React from "react";
import axios from "axios"

class Package extends React.Component {

  nameRef = React.createRef()
  photographerRef = React.createRef()
  videographerRef = React.createRef()
  lightsmenRef = React.createRef()
  videoRef = React.createRef()
  frameRef = React.createRef()
  albumRef = React.createRef()

  state = {
    editingName: false,
    editingPhotographer: false,
    editingVideographer: false,
    editingLightsmen: false,
    editingVideo: false,
    editingFrame: false,
    editingAlbum: false,
    name: this.props.details.name
  }


  editName = (e) => {
    console.log(this.props.details.name)
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingName: true})
    }
  }

  editPhotographer = (e) => {
    console.log(this.props.details.photographers)
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingPhotographer: true})
    }
  }

  editVideographer = (e) => {
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingVideographer: true})
    }
  }

  editLightsmen = (e) => {
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingLightsmen: true})
    }
  }

  editVideo = (e) => {
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingVideo: true})
    }
  }

  editFrame = (e) => {
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingFrame: true})
    }
  }
  editAlbum = (e) => {
    if (sessionStorage.getItem('isAdmin') === 'true') {
      e.preventDefault()
      this.setState({editingAlbum: true})
    }
  }

  changeName = (e) =>  {
    e.preventDefault()
    if (e.keyCode === 13) {

      const headers = {
        'Content-Type': 'application/json',
        'X-Auth-Token': sessionStorage.getItem('token')
      };

      console.log(this.nameRef.current.name)
      const packge = {
        name: this.nameRef.current.value !== '' ? this.nameRef.current.value : this.props.details.name,
        photographers: this.photographerRef.current.value !== '' ? this.photographerRef.current.value : this.props.details.photographers,
        videographers:  this.videographerRef.current.value  !== '' ? this.videographerRef.current.value : this.props.details.videographers,
        lightsmen: this.lightsmenRef.current.value  !== '' ? this.lightsmenRef.current.value : this.props.details.lightsmen,
        video: this.videoRef.current.value  !== '' ? this.videoRef.current.value : this.props.details.video,
        frame: this.frameRef.current.value  !== '' ? this.frameRef.current.value : this.props.details.frame,
        album: this.albumRef.current.value  !== '' ? this.albumRef.current.value : this.props.details.album,
      }

      axios.post(`http://localhost:5000/packages/update/${this.props.details._id}`,
         {packge}, {headers}

      ).then(({data}) => console.log('success'))
      console.log(packge)
    }
  }

  render() {
    return (
      <div className="card col-12 col-md-3 mx-2 package-card">
        <div className="row">

          <div className="col-12 py-4 package-card-header">
            <h3 className={this.state.editingName ? 'd-none' : 'card-custom-header'} onDoubleClick={this.editName}>{ this.props.details.name }</h3>
            <input ref={this.nameRef} className={this.state.editingName ? '' : 'd-none'} onKeyUp={this.changeName} name="Name"/>
          </div>

          <div className="col-12 py-3">
            <p className={this.state.editingPhotographer ? 'd-none' : ''} onDoubleClick={this.editPhotographer}>{ this.props.details.photographers } photographers</p>
            <input ref={this.photographerRef} className={this.state.editingPhotographer ? '' : 'd-none'} onKeyUp={this.changePhotographer}/>
          </div>

          <div className="col-12 py-1">
            <p onDoubleClick={this.editVideographer}>{ this.props.details.videographers } videographers & { this.props.details.lightsmen } lightsmen</p>
            <input ref={this.videographerRef} className={this.state.editingVideographer ? '' : 'd-none'} onKeyUp={this.changeVideographer}/>
            <input ref={this.lightsmenRef} className={this.state.editingLightsmen ? '' : 'd-none'} onKeyUp={this.changeLightsmen}/>
          </div>

          <div className="col-12 py-1">
            <p onDoubleClick={this.editVideo}>{ this.props.details.video }</p>
            <input ref={this.videoRef} className={this.state.editingVideo ? '' : 'd-none'} onKeyUp={this.changeVideo}/>
          </div>

          <div className="col-12 py-1">
            <p onDoubleClick={this.editFrame}>{ this.props.details.frame }</p>
            <input ref={this.frameRef} className={this.state.editingFrame ? '' : 'd-none'} onKeyUp={this.changeFrame}/>
          </div>

          <div className="col-12 py-1">
            <p onDoubleClick={this.editAlbum}>{ this.props.details.album }</p>
            <input ref={this.albumRef} className={this.state.editingAlbum ? '' : 'd-none'} onKeyUp={this.changeAlbum}/>
          </div>

        </div>
      </div>
    )
  }
}

export default Package