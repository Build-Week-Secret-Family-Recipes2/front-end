import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { addRecipe } from '../ReduxStuff/Actions';
import { Link } from "react-router-dom";
import RecipeCard from './RecipeCard';
import styled from "styled-components"


    const CreateRecipe = props => {
        let userId= localStorage.getItem('userId')
        const [recipe, setRecipe] = useState({
            userId: userId
    });

    const handleChanges = e => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // props.addRecipe(recipe);
        props.history.push(`/chefdashboard/${userId}`);
    }
   
        const [fields, setFields] = useState([{ value: null }]);

        function handleBtn(i, event) {
          const values = [...fields];
          values[i].value = event.target.value;
          setFields(values);
        }
      
        function handleAdd() {
          const values = [...fields];
          values.push({ value: null });
          setFields(values);
        }
      
        function handleRemove(i) {
          const values = [...fields];
          values.splice(i, 1);
          setFields(values);
        }
        

    return (

        <form className="PostForm" onSubmit={handleSubmit}>
            <span>
                <p> <span> 
                    <input
                        className="name"
                        type="text"
                        name="recipe_name"
                        placeholder="Recipe Name"
                        value={recipe.recipe_name}
                        onChange={handleChanges}
                    />
                    </span></p>

            </span>
            <span>
                <p><span>
                    <input
                        type="text"
                        name="prep_time"
                        placeholder="Prep Time"
                        value={recipe.prep_time}
                        onChange={handleChanges}
                    />
                        </span></p>

            </span>
            <span>
                <p> <span> 
                    <input
                        type="text"
                        name="cook_time"
                        placeholder="Cook Time"
                        value={recipe.cook_time}
                        onChange={handleChanges}
                    />
                    </span></p>

            </span>
            <span>
                <p> <span>
                    <input
                        type="text"
                        name="servings"
                        placeholder="Servings"
                        value={recipe.servings}
                        onChange={handleChanges}
                    />
                     </span> </p>

            </span>

            <span>
                <p> <span>
                    <input
                        className="name"
                        type="text"
                        name="recipe_photo"
                        placeholder="Image URL"
                        value={recipe.recipe_photo}
                        onChange={handleChanges}
                    />
                    </span> </p>

            </span>

            <div>
                <p className="bottom-text">Ingredients: <span>  <button type="button" onClick = {() => handleAdd()}>+</button> </span> </p>
                
                {fields.map((field, idx) => {
                    return (
                    <div key={`${field}-${idx}`}>
                        <input
                        type="text"
                        placeholder="Ingredients"
                        value={field.value || ""}
                        onChange={e => handleBtn(idx, e)}
                        />
                        <button type="button" onClick={() => handleRemove(idx)}>
                        X
                        </button>
                    </div>
                    );
                })}

                {/* <textarea
                    className="ingredients"
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients:"
                    rows="2"
                    cols="30"
                    value={recipe.ingredients}
                    onChange={handleChanges}
                ></textarea> */}
                
            </div>

            <div>
                <p className="bottom-text">Add Instructions</p>
                <textarea
                    className="directions"
                    type="text"
                    name="instructions"
                    placeholder="Directions:"
                    rows="2"
                    cols="30"
                    value={recipe.instructions}
                    onChange={handleChanges}
                ></textarea>
            </div>
            <button className="addButton" type="submit">Post Recipe</button>
        </form>

    )
}


const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, { })(CreateRecipe);

  //addRecipe