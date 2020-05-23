import React, { useEffect, useState } from "react";
import "../App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import PrivateRoute from "../utils/PrivateRoute";
import { Nav } from "reactstrap";
import AddRecipe from './AddRecipe';
import Home from './Home';



const NavBar = () => {
    function signOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("reload");
      window.location.reload();
    }
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
      if (localStorage.getItem("token")) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);

    if (loggedIn === true){
      return (

        <nav>
            <NavLink className="privatelink" to="/Profile">Profile</NavLink>
            <NavLink className="privatelink" to="/AddRecipe">Add Recipe</NavLink>
            <NavLink className="privatelink" to="/login" onClick={() => {
              signOut();
            }} >Sign Out</NavLink>
            {/* <Route path = '/Profile' component = {Profile} /> */}
            <Route path = '/AddRecipe' component = {AddRecipe} />

        </nav>

    );
    } else {
      return (
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
          </Switch>
        </Nav>
      </>
      );
    }

  };
  
  export default NavBar;