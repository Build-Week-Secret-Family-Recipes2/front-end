import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import RecipeCard from './RecipeCard'

const CardWrapper = styled.div`
    display: flex;
    margin: auto;
    padding: 0;
    justify-content: evenly;
    flex-flow: row wrap;
   
`;

const Header = styled.h1`
color: #FD8664;
font-size: 3.6rem;
text-align: center;
`

export default function RecipeShell() {

    const [recipes, SetRecipes] = useState([]);

    useEffect(() => {
        axios
            .get(`https://backend-chef.herokuapp.com/api/recipes/`)
            .then(res => {
                SetRecipes(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log('this data was not returned', err);
            })
    }, []);

    return (
      
        <section >
            <Header>Recipes</Header>
            
   
            <CardWrapper className="Recipe-Day" >
                
                    {recipes.map(recipes => (
                        <RecipeCard 
                        chef_name={recipes.chef_name}
                        recipe_photo={recipes.recipe_photo}
                        recipe_name={recipes.recipe_name} 
                        ingredients={recipes.ingredients}
                        cook_time={recipes.cook_time}
                        prep_time={recipes.prep_time}
                        instructions={recipes.instructions}
                        servings={recipes.servings}
                        />
                    ))}
                
            </CardWrapper>
           

            
        </section>
    );
}