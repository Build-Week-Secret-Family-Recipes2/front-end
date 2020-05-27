import React from 'react';
import Profile from './Components/Profile'
import { Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import './App.css';
import { Switch, NavLink } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import { Nav } from "reactstrap";
import AddRecipe from './Components/AddRecipe';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import axios from "axios";

function App() {
  return (
    <div className="App">

      {/* <NavBar /> */}

      <> 
        <Nav>
          <NavLink to ='/'>Home </NavLink>
          <NavLink to ='/Login'>Login  </NavLink>
          <NavLink to ='/SignUp'>Sign Up </NavLink>
          
          <Switch>
            <Route path = "/Login" component = {Login} />
            <Route path = "/SignUp" component = {SignUp} />
            <Route path = "/AddRecipe" component = {AddRecipe} /> 
            <Route path = "/" component = {Home} /> 
            <Route path = "/Profile" component = {Profile} />
          </Switch>
        </Nav>
      </>
    </div>
  );
}

export default App;
