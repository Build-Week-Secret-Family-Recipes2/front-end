import React from "react";
import SearchBar from "./SearchBar";
import './Profile.css';

function Profile() {
    return (
        <div>
            <div className="navBar">Nav Bar Here</div>
            <div className="headerAlign">
                <h1 className="h1Profile">HELLO, USERNAME</h1>
                <h1 className="h1Profile2">PROFILE PIC HERE</h1>
            </div>
            <div className="border"> </div>
            <h2 className="h2Profile">YOUR RECIPES</h2>
            <div className="searchBar">
                <SearchBar />
            </div>
        </div>
    )
}

export default Profile;