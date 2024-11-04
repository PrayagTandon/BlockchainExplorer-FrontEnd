import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(67 20 7)', borderBottom: '2px solid black' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ethereum Blockchain Explorer
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
