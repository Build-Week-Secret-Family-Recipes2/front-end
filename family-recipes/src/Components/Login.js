import React, { useState, useEffect } from 'react'; 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axiosWithAuth from '../utils/AxiosWithAuth';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Family Recipes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
    const initialState = {
      credentials: {
        username: '',
        password: ''
      }
    }
    console.log('Log in page');
    const [loginData, setLoginData] = useState(initialState);
  
    const handleChange = e => {
      setLoginData({
        credentials: {
          ...loginData.credentials,
          [e.target.name]: e.target.value
          
        }
      })
    }
  
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/auth/login', loginData.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        
      })
      .catch(err => console.log(err));
    }

//   axios 
//     .post("https://bw-grandmas-recipes.herokuapp.com/api/auth/login", loginData.credentials)
//     .then(res => {
//           localStorage.setItem('token', res.data.payload);
          
//         })
//     .catch(err => console.log(err));
// }

  const classes = useStyles();
  

  return (

    <Container component="main" maxWidth="xs">
          
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login Please
        </Typography>
        <form className={classes.form} noValidate onSubmit={login}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-center">
                <Grid item>
                    <Link href="/SignUp" variant="body2">
                        Need an account? Sign up
                    </Link>
                </Grid>
            </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}