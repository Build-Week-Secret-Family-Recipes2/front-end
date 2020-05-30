import React from 'react';
import './App.css';
import { Switch, NavLink } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import { Nav } from "reactstrap";
import AddRecipe from './Components/AddRecipe';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">

      <NavBar />
    <div onLoad = {refreshPage}>

    </div>
      

      {/* <> 
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
      </> */}
    </div>
    
  );
  
}

export default App;
