import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import LogoDev from '@mui/icons-material/LogoDev';

const navItems = ["Home", "Regions", "Data", "Newsletter", "About Us", "Contact"]

const PublicHeader = (): React.JSX.Element => {
    return (
        <AppBar position="absolute">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <LogoDev/>

                <Box>
                    {navItems.map((item) => (
                    <Button color='inherit' key={item}>
                        {item}
                    </Button>
                    ))}

                    <Button color='inherit' variant='outlined' sx={{ml: 2}}>
                        Login
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export { PublicHeader }