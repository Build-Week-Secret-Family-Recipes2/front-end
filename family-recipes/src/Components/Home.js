import React from 'react';

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://bw-grandmas-recipes.herokuapp.com/')
  .then(res => {
    console.log("These are the results from the API" , res);
    console.log("These are the results from the API RES.DATA" , res.data);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


export default function Home() {
    return(
        <> 
        <section>
            <img src = {require("../Images/kitchenimg.jpg")}/>
        </section>

        </>


    )
}

