import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import { Nav } from "reactstrap";
import AddRecipe from './Components/AddRecipe';

function App() {
  return (
    <div className="App">
      <h1>Family Recipes</h1>
      <> 
        <Nav>
          <Switch>
            <Route path = "/Login" component = {Login} />
            <Route path = "/SignUp" component = {SignUp} />
            <Route path = "/AddRecipe" component = {AddRecipe} /> 
          </Switch>
        </Nav>
      </>

    </div>
  );
}

export default App;
