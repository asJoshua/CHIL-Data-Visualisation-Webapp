import React from 'react'
import { publicHeaderConfig } from '../../config/headerLinks';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { LogoDev } from '@mui/icons-material';

const PublicHeader = (): React.JSX.Element => {

    const navigate = useNavigate();

    return (
        <AppBar position="absolute">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <LogoDev/>

                <Box>
                    {publicHeaderConfig.map((item) => (
                        <Button color='inherit' key={item[0]} onClick={() => {navigate(item[1])}}>
                            {item[0]}
                        </Button>
                    ))}

                    <Button
                        color='inherit'
                        variant='outlined'
                        sx={{ml: 2}}
                        onClick={() => {navigate('/login')}}
                    >
                        Login
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export { PublicHeader }
