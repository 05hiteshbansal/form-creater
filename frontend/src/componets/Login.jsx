import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import logo from '../media/logo.png'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from "react-redux";
import {loginDetails} from '../features/counter/counterSlice'
import { useNavigate } from "react-router-dom";
//import toast, { Toaster } from 'react-hot-toast';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ToastContainer, toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://suvidhafoundationedutech.org">
        Suvidha Foundation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let error =  useSelector((state) => state.counter.message)
  const [errors,setErrors]=React.useState(false)
   React.useEffect(()=>{
    setErrors(error)
//   //const status =useSelector((state) => state.counter.status)
 },[errors])
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const y={
      email: data.get('email'),
      password: data.get('password'),
    }
   const islogged= await dispatch(loginDetails(y))
    console.log(islogged)
    //error= useSelector((state) => state.counter.message)
    if(!islogged.error){
      Navigate("/form");
    }
  //  if(status==='loading' ){
  //   toast.loading('Waiting...');
  //  }
  //  if(status==='fulfilled' ){
  //   ;;
  //  }


  };

  return (
    <ThemeProvider  theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(src/media/${Math.floor(Math.random() * 6) + 1}.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             {/* <Avatar sx={{ m: 5, bgcolor: 'secondary.main' }}>
          <AccountCircleOutlinedIcon/>
          </Avatar> */}
          <div style={{backgroundColor:"black" , borderRadius:"10px" , margin: "5px"}}>
          <img src={logo} sx={{ width: 500, height: 450}} />
          </div>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}