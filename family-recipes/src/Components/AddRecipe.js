import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../utils/Actions';
import { Link } from "react-router-dom";
import RecipeCard from './RecipeCard';
import styled from "styled-components"
import PrivateNav from "./NavBar";


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
        props.addRecipe(recipe);
        // props.history.push(`/PROFILE PAGE/${userId}`);
        console.log("the recipe pushed");
    }
   
        const [ingredients, setIngredients] = useState([{ value: null }]);
        const [fields, setFields] = useState([{ value: null }]);


        function handleBtnIng(i, event) {
          const values = [...ingredients];
          values[i].value = event.target.value;
          setIngredients(values);
        }
      
        
        function handleAddIng() {
          const values = [...ingredients];
          values.push({ value: null });
          setIngredients(values);
        }
      
        function handleRemoveIng(i) {
          const values = [...ingredients];
          values.splice(i, 1);
          setIngredients(values);
        }

        function handleBtnDir(i, event) {
            const values = [...fields];
            values[i].value = event.target.value;
            setFields(values);
          }

        function handleAddDir() {
            const values = [...fields];
            values.push({ value: null });
            setFields(values);
          }
        
          function handleRemoveDir(i) {
            const values = [...fields];
            values.splice(i, 1);
            setFields(values);
          }
        

    return (
        <> 
        <PrivateNav />
        <form className="PostForm" onSubmit={handleSubmit}>
            <span>
                <p> <span> 
                    <input
                        size="50"
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
                        size="50"
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
                        size="50"
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
                        size="50"
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
                        size="50"
                        className="name"
                        type="text"
                        name="recipe_photo"
                        placeholder="Image URL"
                        value={recipe.recipe_photo}
                        onChange={handleChanges}
                    />
                    </span> </p>
            </span>
            <p>
                <span>                    
                    {ingredients.map((Ingredients, idx) => {
                        return (
                        <div key={`${Ingredients}-${idx}`}>
                            <input
                            size="42"
                            type="text"
                            placeholder="Ingredients"
                            value={Ingredients.value || ""}
                            onChange={e => handleBtnIng(idx, e)}
                            />
                            <span> <button type="button" onClick = {() => handleAddIng()}>+</button> </span> 
                            <button type="button" onClick={() => handleRemoveIng(idx)}>
                            X
                            </button>
                        </div>
                        );
                    })}                
                </span>
            </p>

            <span>
                <span>
                    {fields.map((field, idx) => {
                            return (
                            <div key={`${field}-${idx}`}>
                                <input
                                size="42"
                                type="text"
                                placeholder="Step"
                                value={field.value || ""}
                                onChange={e => handleBtnDir(idx, e)}
                                />
                                <span>  <button type="button" onClick = {() => handleAddDir()}>+</button> </span>
                                <button type="button" onClick={() => handleRemoveDir(idx)}>
                                X
                                </button>
                            </div>
                            );
                        })} 
                </span>                 
            </span>

            <span>
                <p> <span> 
                    <textarea
                        rows="10"
                        cols="52"
                        className="name"
                        type="text"
                        name="recipe_history"
                        placeholder="Recipe history AKA the sob story..."
                        value={recipe.recipe_history}
                        onChange={handleChanges}
                    />
                    </span></p>
            </span>
            <button className="addButton" type="submit">Post Recipe</button>
            </form>
        </>
       
    )
}


const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, {addRecipe })(CreateRecipe);

  //addRecipe