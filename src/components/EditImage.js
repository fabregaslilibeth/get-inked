import React from "react"
import '../index.css';
import axios from "axios";

class EditImage extends React.Component {

  titleRef = React.createRef()
  urlRef = React.createRef()

  state = {
    result: '',
    token: '',
    isAdmin: '',
    userId: '',
    title: this.props.title,
    url: this.props.url,
  }

  componentDidMount() {
    let userFromStorage = JSON.parse(sessionStorage.getItem('user')) || ''
    let token = sessionStorage.getItem('token') || ''

    this.setState({token, modal: 'show'})

    this.titleRef = this.props.title
    this.urlRef = this.props.url

    axios.get('http://localhost:5000/users')
      .then(({data}) => {
        data.forEach(user => {
          if (user._id === userFromStorage.id) {
            this.setState({
              isAdmin: user.isAdmin,
              userId: user._id,
            })
          }
        })
      })
  }

  handleTitleChange = (e) => {
    this.setState({title: e.currentTarget.value})
  }

  handleUrlChange = (e) => {
    this.setState({url: e.currentTarget.value})
  }

  submit = e => {
    e.preventDefault()

    const image = {
      isAdmin: this.state.isAdmin,
      userId: this.state.userId,
      title: this.state.title,
      url: this.state.url,
    }

    const head = {
      "Content-Type": "application/json",
      "X-Auth-Token": this.state.token
    };

    axios.put(`http://localhost:5000/gallery/update/${this.props.id}`, image)
      .then(({data}) => {
        if (data.status === 404 || data.status === 401) {
          this.setState({result: data.message})
          setTimeout(() => {
            this.setState({result: ''})
          }, 5000);
        } else {
          window.location.reload()
        }
      }).catch(({data}) =>
      this.setState({result: data})
    )
  }

  render() {
    return (
      <div className="modal fade" id="editImageModal" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-app">
            <div className="modal-header">
              <h5 className="modal-title headers mx-auto text-uppercase" id="exampleModalLabel">Edit Image</h5>
              <p className="text-white">
                <a href="" className="nav-link text-white" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times"></i>
                </a>
              </p>
            </div>
            <form className="col-12 mx-auto" onSubmit={this.submit}>
              <div className="modal-body">
                <div className="container my-4">
                  <div className="text-center">
                    <span className={!this.state.result ? 'd-none' : 'alert alert-custom'}>
                    <i className="fas fa-exclamation-circle mr-2 text-danger"></i><small>{this.state.result}</small>
                   </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="imageTitle">Image Title</label>
                    <input onChange={this.handleTitleChange} type="text" className="form-control" id="imageTitle"
                           placeholder="Image title" defaultValue={this.props.title}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="url">Image URL</label>
                    <input type="text" onChange={this.handleUrlChange} className="form-control" id="url"
                              placeholder="Image URL" defaultValue={this.props.url} />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="buttons">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default EditImage;