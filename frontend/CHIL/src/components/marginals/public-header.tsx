import React from 'react'
import { publicHeaderConfig } from '../../config/headerLinks';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Button } from '../ui/button/button'
import { LogoDev } from '@mui/icons-material';

const PublicHeader = (): React.JSX.Element => {

    const navigate = useNavigate();

    return (
        <AppBar position="sticky">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <LogoDev/>

                <Box>
                    {publicHeaderConfig.map((item) => (
                        <Button color='inherit' sx={{fontWeight: 300}} key={item[0]} onClick={() => {navigate(item[1])}}>
                            {item[0]}
                        </Button>
                    ))}

                    <Button 
                        sx={{ml: 2, fontWeight: 300,backgroundColor: '#F71735', color: '#FFF'}}
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