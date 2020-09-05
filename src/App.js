import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser";
import EditExercise from "./components/EditExercise";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="container-fluid project-container">
        <Link to="/" className="nav-link">
          <h1 className="logo text-center py-4">One Flash Photography</h1></Link>

        <Navbar/>

        <Route path="/" exact component={Home}></Route>
        <Route path="/edit/:id" component={EditExercise}></Route>
        <Route path="/create" component={CreateExercise}></Route>
        <Route path="/user" component={CreateUser}></Route>

      </div>

    </Router>
  );
}

export default App;
