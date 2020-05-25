import React from 'react';
import Profile from './Components/Profile'
import { Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path="/"></Route>
        <Route path="/profile" component={Profile}></Route>
        <div className="profile">
          <Link to="/profile"><button>Profile</button></Link>
        </div>
    </div>
  );
}

export default App;
