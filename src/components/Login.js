import React from "react"
import '../index.css';
import axios from "axios";

class Login extends React.Component {

  emailRef = React.createRef()
  passwordRef = React.createRef()

  state = {
    result: '',
  }

  login = e => {
    e.preventDefault()

    const credentials = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value
    }

    axios.post('https://get-inked-backend.herokuapp.com/login', credentials)
      .then(({data}) => {
        if (data.status === 404) {
          this.setState({result: data.message})
          setTimeout(() => {
            this.setState({result: ''})
          }, 5000);
        } else {
          sessionStorage.setItem('token', data.token)
          sessionStorage.setItem('user', JSON.stringify(data.user))
          window.location.href = '/'

          this.clearFields()
        }
      }).catch(({data}) =>
      this.setState({result: data})
    )
  }

  clearFields() {
    this.emailRef.current.value = ''
    this.passwordRef.current.value = ''
    setTimeout(() => {
      this.setState({result: ''})
    }, 2000);
  }

  render() {
    return (
      <div className="modal fade" id="loginModal" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-app">
            <div className="modal-header">
              <h5 className="modal-title headers mx-auto text-uppercase" id="exampleModalLabel">Login</h5>
             <p className="text-white"><a href="" className="nav-link text-white" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></a></p>
            </div>
            <form className="col-12 mx-auto" onSubmit={this.login}>
            <div className="modal-body">
              <div className="container my-4">
                <div className="text-center">
                    <span className={!this.state.result ? 'd-none' : 'alert alert-custom'}>
                    <i className="fas fa-exclamation-circle mr-2 text-danger"></i><small>{this.state.result}</small>
                   </span>
                </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input ref={this.emailRef} type="email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                      else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input ref={this.passwordRef} type="password" className="form-control" id="exampleInputPassword1"
                           placeholder="Password"/>
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

export default Login;