import React from "react"
import '../index.css';
import axios from "axios";

class EditService extends React.Component {

  nameRef = React.createRef()
  descriptionRef = React.createRef()

  state = {
    result: '',
    token: '',
    isAdmin: '',
    userId: '',
    name: this.props.name,
    description: this.props.description,
  }

  componentDidMount() {
    let userFromStorage = JSON.parse(sessionStorage.getItem('user')) || ''
    let token = sessionStorage.getItem('token') || ''

    this.setState({token, modal: 'show'})

    this.nameRef = this.props.name
    this.descriptionRef = this.props.description

    axios.get('https://get-inked-backend.herokuapp.com/users')
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

  handleNameChange = (e) => {
    this.setState({name: e.currentTarget.value})
  }

  handleDescChange = (e) => {
    this.setState({description: e.currentTarget.value})
  }

  submit = e => {
    e.preventDefault()

    const service = {
      isAdmin: this.state.isAdmin,
      userId: this.state.userId,
      name: this.state.name,
      description: this.state.description,
    }

    const head = {
      "Content-Type": "application/json",
      "X-Auth-Token": this.state.token
    };

    axios.put(`https://get-inked-backend.herokuapp.com/packages/update/${this.props.id}`, service)
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
      <div className="modal fade" id="editServiceModal" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-app">
            <div className="modal-header">
              <h5 className="modal-title headers mx-auto text-uppercase" id="exampleModalLabel">Edit Service</h5>
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
                    <label htmlFor="serviceName">Service Name</label>
                    <input onChange={this.handleNameChange} type="text" className="form-control" id="serviceName"
                           placeholder="Service name" defaultValue={this.props.name}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={this.handleDescChange} className="form-control" id="description" rows="5"
                              placeholder="Service Description" defaultValue={this.props.description}></textarea>
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

export default EditService;