import Navbar from "./Navbar"
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from "react-redux";
import {formDetails} from '../features/counter/counterSlice'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../media/logo.png'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://suvidhafoundationedutech.org">
        Suvidha Foundation
      </Link>{" "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Form() {
 // const Navigate = useNavigate();
 //const loader= useSelector((state) => (state.counter.loading))
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const y={
      email: data.get('email'),
      name: data.get('firstName')+" "+data.get('lastName'),
      role : data.get('role'),
      work:data.get('work'),
      duration:data.get('duration'),
      from:data.get('from'),
      to:data.get('to')
    }
    dispatch(formDetails(y));
    console.log(y);
  };

  return (
      <>
      <Navbar/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <div style={{backgroundColor:"black" , borderRadius:"10px" , margin: "5px"}}>
          <img src={logo} sx={{ width: 500, height: 450}} />
          </div>
          <Typography component="h1" variant="h5">
            Role Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  autoComplete="role"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="work"
                  label="Work"
                  name="work"
                  autoComplete="work"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Duration"
                  name="duration"
                  autoComplete="duration"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="from"
                  name="from"
                  required
                  fullWidth
                  id="from"
                  label="From"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="to"
                  name="to"
                  required
                  fullWidth
                  id="to"
                  label="To"
                  autoFocus
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Form
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
      );
}