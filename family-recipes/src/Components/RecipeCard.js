import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';




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

function RecipesPage() {

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
            {/* add search bar here */}
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

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 400,
    maxWidth: 400,
    margin: 75,
    border: '1px solid black'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


export default function RecipeCard( {recipe_name, recipe_photo, ingredients, cook_time, prep_time, instructions, servings} ) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        
      />
      <CardMedia
        className={classes.media}
        image={recipe_photo}
      />

        title= {recipe_name}

      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients</Typography>
          <Typography paragraph>
            {ingredients}
          </Typography>
          <Typography paragraph>Instructions</Typography>
          <Typography paragraph>
            {instructions}
          </Typography>
          <Typography paragraph>
            Cook Time: {cook_time} Prep Time: {prep_time} Servings: {servings}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
  );
}