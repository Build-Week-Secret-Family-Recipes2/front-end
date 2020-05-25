import React from "react";
import SearchBar from "./SearchBar";
import './Profile.css';

function Profile() {
    return (
        <div>
            <div className="navBar">Nav Bar Here</div>
            <h1>HELLO, USERNAME</h1>
            <div className="border"> </div>
            <div className="searchBar">
                <SearchBar />
            </div>
        </div>
    )
}

export default Profile;