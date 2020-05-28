
import React, { useState } from 'react';
import axios from 'axios';
// import React, { useState, useEffect } from 'react';
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
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';

import "./SignUp.css"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Did submit')

    axios.post(`https://bw-grandmas-recipes.herokuapp.com/api/auth/register`)
    .then(res=> {
      console.log(res);
      console.log('SENT TO BACK END');
    })
    .catch(err => {
      console.log(err);
    })
  };
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // marginRight: "35%",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formSchema = yup.object().shape({
  firstName: yup
      .string()
      .min(2)
      .required("Must provide your first name"),
  lastName: yup
      .string()
      .min(2)
      .required("Must provide your last name"),
  email: yup
      .string()
      .email("Must provide a valid email address: name@email.com")
      .required("Must include email address"),
  password: yup
      .string()
      .min(8)
      .required("Must include a password at least 8 characters"),
  allowExtraEmails: yup
      .bool()
      .oneOf([true], ""),
});

export default function SignUp() {
  const classes = useStyles();

  let history = useHistory();

  const orderNewPage = () => {
    return history.push("/profile")
}

  const formSubmit = (e) => {
    e.preventDefault();
    setFormState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    allowExtraEmails: false   
    })

    axios
    .post("https://bw-grandmas-recipes.herokuapp.com/api/auth/register", formState)
    .then(response => {console.log("Response received.", response);})
    .catch(err => console.log(err));
    orderNewPage()
  };


  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    allowExtraEmails: false      
  });

  const [errorState, setErrorState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const inputChange = (e) => {
    e.persist()
    validate(e);
      let value =
          e.target.name === "allowExtraEmails" ?
          e.target.checked : 
          e.target.value;
      setFormState({ ...formState, [e.target.name]: e.target.value});
  }

  const validate = (e) => {

    yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrorState({
                ...errorState, [e.target.name]: ""
            });
        })
        .catch(err => {
            setErrorState({
                ...errorState,
                [e.target.name]: err.errors[0]
            });
        });
  };

  return (
    <form onSubmit={formSubmit}>
      <Container component="main" maxWidth="xs">
        {/* <h1>Sign UP page</h1> */}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="signUp" component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formState.firstName}
                  onChange={inputChange}
                />
                {errorState.firstName.length > 0 ? (
                    <p className="error">
                    {errorState.firstName}
                </p> ): null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={formState.lastName}
                  onChange={inputChange}
                />
                {errorState.lastName.length > 0 ? (
                    <p className="error">
                    {errorState.lastName}
                </p> ): null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formState.email}
                  onChange={inputChange}
                />
                {errorState.email.length > 0 ? (
                    <p className="error">
                    {errorState.email}
                </p> ): null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formState.password}
                  onChange={inputChange}
                />
                {errorState.password.length > 0 ? (
                    <p className="error">
                    {errorState.password}
                </p> ): null}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions, and updates via email."
                  checked={formState.allowExtraEmails}
                  value={formState.allowExtraEmails}
                  onChange={inputChange}
                />
                <p className="error">
                    {errorState.allowExtraEmails}
                </p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link href="#" className="alreadyHaveAccount" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </form>
  );
}