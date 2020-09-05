import React from "react"
import axios from "axios"

class CreateExercise extends React.Component {
  // constructor(props) {
  //   super(props);
  usernameRef = React.createRef()

    state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

    componentDidMount() {
      this.setState({
        users: ['beth test', 'test 2'],
        username: 'test user'
      })
    }

    onSubmit = e => {
      e.preventDefault();

      const exercise = {
        username: this.usernameRef.current.value,
        description: 'loogdf',
        duration: 9,
        date: '2020-09-05T03:58:02.837+00:00'
      }

      axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data))
      console.log(exercise)
    }
  // }

  render () {
    return (
      <div>
        <h3>Create New Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <select
              ref={this.usernameRef}
              required
              className="form-control"
            >
              {
                this.state.users.map(user => {
                  return <option key={user} value={user}>{user}</option>
                })
              }
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateExercise;