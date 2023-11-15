import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Link, Box } from '@mui/material';
import Image from 'next/image'


function Navbar() {
    return (
        <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mx: 2 }}>
                <Image
                    src="/logo.svg"
                    width={50}
                    height={50}
                    alt="Logo"
                />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Link href="#" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>Emotions</Link>
                    <Link href="#" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>Manifesto</Link>
                    <Link href="#" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>Self-awareness Test</Link>
                    <Link href="#" color="inherit" sx={{ mx: 2, textDecoration: 'none' }}>Work With Us</Link>
                </Box>
                <Button sx={{ mx: 2, py: 1.5,px: 2.5 ,textTransform: 'none', bgcolor: 'black', color: 'white', borderRadius: '30px' }}>Download App</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;