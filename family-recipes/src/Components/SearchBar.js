import React from "react";
// ^will need to import useState and useHook


function SearchBar() {
    // const [recipes, setRecipes] = useState("");
    // ^axios call to pull in recipes data and set that data to setRecipes while using useHook

    // const [word, setWord] = useState("");
    // ^this will track any change to the input in the filter box

    // const [filterDisplay, setFilterDisplay] = useState("recipes")
    // ^this will display the list depending on what's typed in the search bar

    // const handleChange = e => {let oldList = recipes.map(meal => { return {recipe: meal.recipes.toLowerCase()};}); 
    // ^this will run anytime there's a change in the input field

    // if (e !== "") { let newList = [];
    // setWord(e); newList = oldList.filter(meal => meal.recipes.includes(word.toLowerCase()));
    // ^if the input bar is not empty, run the following

    // setFilterDisplay(newList);
    // } else { setFilterDisplay(recipes);}};}
    // ^else, setFilterDisplay to the original recipe list


    return (
        <div>
            <h2>Search Your Recipes</h2>
            {/* <input onChange={e => handleChange(e.target.value)} />
            {filterDisplay.map(recipes, i) => (
                <div key={i}>
                    <li>
                        {recipes.recipe} &nbsp;
                    </li>
                </div>
            )} */}
        </div>
    )
}

export default SearchBar;