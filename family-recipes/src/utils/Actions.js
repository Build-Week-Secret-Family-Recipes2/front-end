import { AxiosWithAuth } from '../utils/AxiosWithAuth';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';
export const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE';
export const DELETE_LOGIN = 'DELETE_LOGIN';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
        return AxiosWithAuth() 
            .post('/api/auth/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch(err => {
                console.log(err);
            });
};

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA_START });
    AxiosWithAuth()
        .get('/RegisterPage')
        .then(response => {
            dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: GET_DATA_FAIL, payload: error.response.error});
        });
};

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

export const addRecipe = recipe => dispatch => {
  dispatch({ type: ADD_RECIPE_START, payload: recipe });
  console.log(recipe);
  AxiosWithAuth()
    .post("/recipes/post", recipe)
    .then(res => {
      dispatch({ type: ADD_RECIPE_SUCCESS });

      console.log(`this is the response ${res.data}`);
    })
    .catch(err => {
      dispatch({ type: ADD_RECIPE_FAILURE, payload: err.response });
    });
};