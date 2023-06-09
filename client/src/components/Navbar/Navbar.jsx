import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Button color="inherit" onClick={()=>navigate('/login') }>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
