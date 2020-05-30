import React, { useEffect, useState } from "react";
import "../App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import PrivateRoute from "../utils/PrivateRoute";
import { Nav } from "reactstrap";
import AddRecipe from './AddRecipe';
import Home from './Home';
import Profile from './Profile';


const PrivateNav = () => {
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

        <nav className = "navContainer">
          
            <NavLink className="navBar" to="/Profile">Profile</NavLink>
            <NavLink className="navBar" to="/AddRecipe">Add Recipe</NavLink>
            <NavLink className="navBar" to="/login" onClick={() => {
              signOut();
            }} >Sign Out</NavLink>
            <PrivateRoute path = '/Profile' component = {Profile} />
            <PrivateRoute path = '/AddRecipe' component = {AddRecipe} />         
            

        </nav>

    );
    } else {
      return (
        <> 
        <Nav className = "navContainer">
          <NavLink className="navBar" to ='/'>Home </NavLink>
          <NavLink className="navBar" to ='/Login'>Login  </NavLink>
          <NavLink className="navBar" to ='/SignUp'>Sign Up </NavLink>
          
          <Switch>
            <Route path = "/Login" component = {Login} />
            <Route path = "/SignUp" component = {SignUp} />
            <Route path = "/" component = {Home} /> 
          </Switch>
        </Nav>
      </>
      );
    }

  };



    // return (

    //     <nav>


    //       <NavLink to ='/'> Home </NavLink>
    //       <NavLink to ='/Login'>Login  </NavLink>
    //       <NavLink to ='/SignUp'>Sign Up </NavLink>
          
    //       <NavLink className="navBar" to="/Profile">Profile </NavLink>
    //       <NavLink className="navBar" to="/AddRecipe">Add Recipe </NavLink>
    //       <NavLink className="navBar" to="/login" onClick={() => {
    //           signOut();
    //         }} >Sign Out</NavLink>
    //       <Switch>
    //         <Route path = "/Login" component = {Login} />
    //         <Route path = "/SignUp" component = {SignUp} />
    //         <Route path = "/AddRecipe" component = {AddRecipe} /> 
    //         <Route path = "/" component = {Home} /> 
    //       </Switch>

        
    //     </nav>

    // );
  // };
  
  export default PrivateNav;