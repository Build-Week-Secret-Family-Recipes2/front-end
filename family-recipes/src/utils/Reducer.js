import {
    LOGIN_START,
    LOGIN_SUCCESS,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    ADD_NEW_RECIPE,
    DELETE_LOGIN,
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAILURE
    } from "./Actions";
  
    const userId = localStorage.getItem("userId");
    const initialState = {
      loggedIn: false,
      fetchingData: false,
      error: '',
      chefInfo: {
        full_name: "",
        location: "",
        phone: "",
        email: "",
        username: "",
        password: ""
      },
      recipe: [
        {
          recipe_name: "",
          prep_time: "",
          cook_time: "",
          servings: "",
          recipe_photo: "",
          ingredients: [],
          instructions: [],
        }
      ],
      allRecipes: [
      ],
    };
    
    export const reducer = (state = initialState, action) => {
      switch (action.type) {
        case LOGIN_START:
          return {
              ...state,
              loggedIn: true,
              error: ''
          };
          case LOGIN_SUCCESS:
          return {
              ...state,
              loggedIn: false,
              error: ''
          };
          case DELETE_LOGIN:
              return {
                  ...state,
                  loggedIn: false,
                  fetchingData: false,
                  error: ''
              }
          case GET_DATA_START:
          return {
              ...state,
              fetchingData: true,
              error: ''
          };
          case GET_DATA_SUCCESS:
          return {
              ...state,
              fetchingData: false,
              recipe: action.payload
          };
          case GET_DATA_FAIL:
          return {
              ...state,
              fetchingData: false,
              error: action.payload
          };
          case ADD_RECIPE_START:
            return {
              ...state,
              isFetching: true
            };
          case ADD_RECIPE_SUCCESS:
            return {
              ...state,
              isFetching: false,
              error: ""
            };
          case ADD_RECIPE_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: action.payload
            };
          default:
          return state;
      }
    };