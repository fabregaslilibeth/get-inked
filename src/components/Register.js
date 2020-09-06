import React from "react"
import '../index.css';
import axios from "axios"

class Register extends React.Component {

  nameRef = React.createRef()
  emailRef = React.createRef()
  passwordRef = React.createRef()

  state = {
    result: '',
  }

  register = e => {
    e.preventDefault()

    const credentials = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    }

    axios.post('http://localhost:5000/register', credentials)
      .then(({data}) => {
        this.setState({result: data})
        this.clearFields()
      }).catch(({data}) =>
      this.setState({result: data})
    )
  }

  clearFields() {
    this.nameRef.current.value = ''
    this.emailRef.current.value = ''
    this.passwordRef.current.value = ''
    setTimeout(() => {
      this.setState({result: ''})
    }, 2000);
  }

  render() {
    return (
      <div className="modal fade" id="registerModal" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form className="col-12 mx-auto" onSubmit={this.register}>
              <div className="modal-body">

                <div className="container my-4">
                  <div className="text-center">
                    <span className={!this.state.result ? 'd-none' : 'alert alert-success p-4 flash'}>
                    {this.state.result}
                   </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input ref={this.nameRef} type="text" className="form-control" id="name"
                           aria-describedby="emailHelp"
                           placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input ref={this.emailRef} type="email" className="form-control" id="email"
                           aria-describedby="emailHelp"
                           placeholder="Email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                      else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input ref={this.passwordRef} type="password" className="form-control" id="password"
                           placeholder="Password"/>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>


    )
  }
}

export default Register;