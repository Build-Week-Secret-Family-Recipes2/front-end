import React from "react";
import SearchBar from "./SearchBar";
import './Profile.css';
import RecipeCard from "./RecipeCard";
import RecipeShell from "./RecipeShell";



function Profile() {
    return (
        <>
        
        <div>
            
            {/* <div className="navBar">Nav Bar Here</div> */}
            <div className="headerAlign">
                <div>
                    <h1 className="h1Profile2">PROFILE PIC HERE</h1>
                </div>

                <div>
                    <h1 className="h1Profile">HELLO, USERNAME</h1>
                </div>
            </div>
            <div className="border"> </div>
            <h2 className="h2Profile">YOUR RECIPES</h2>
            <div className="searchBar">
                <SearchBar />                
            </div>
        </div>

        <div>
            <RecipeShell />
        </div>

        </>
       
    )
}

export default Profile;