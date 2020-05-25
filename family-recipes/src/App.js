import React from 'react';
import Profile from './Components/Profile'
import { Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Home page
        </p>
        <Route exact path="/"></Route>
        <Route path="/profile" component={Profile}></Route>
        <Link to="/profile">Profile</Link>
    </div>
  );
}

export default App;
