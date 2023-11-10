import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { userLoggedOut } from '../features/counter/counterSlice';
import { useSelector, useDispatch } from "react-redux";
//import AdbIcon from '@mui/icons-material/Adb';
//import logo from "../media/logo.png"
//import { auth } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
//const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Logout'];
//import {signOut,deleteUser} from "firebase/auth";

 

function ResponsiveAppBar(props) {
    const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const delUser =() => {
//     const user = auth.currentUser;
//     deleteUser(user)
//       .then(() => {
//         console.log("User is deleted successfully");
//         Navigate('/');
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };


const signout =async() => {
   // const user = await signOut(auth);
    console.log(1)
    dispatch(userLoggedOut());
    localStorage.removeItem("Authorization");
    Navigate('/');
};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 1, ml:2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none', }}>
            Suvidha Foundation
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={props.profile} />
              </IconButton>
  </Tooltip>
            <Menu sx={{ mt: '45px',display: "inline-block",margin: "5px" }} id="menu-appbar" anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}> 
{/* <MenuItem  onClick={handleCloseUserMenu}>
                 <Typography textAlign="center" onClick={delUser} >Delete User</Typography>
                </MenuItem> */}
                <MenuItem  onClick={handleCloseUserMenu}>
                 <Typography textAlign="center" onClick={signout} >Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;