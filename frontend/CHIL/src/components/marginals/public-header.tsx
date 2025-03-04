import React from 'react'
import { publicHeaderConfig } from '@/config/headerLinks';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Button } from '@/components/ui/button/button'
import { LogoDev } from '@mui/icons-material';
import { theme } from '@/theme/theme'

const PublicHeader = (): React.JSX.Element => {

    const navigate = useNavigate();

    return (
        <AppBar position="sticky">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: theme.palette.primary.main}}>
                <LogoDev/>

                <Box>
                    {publicHeaderConfig.map((item) => (
                        <Button sx={{color: theme.palette.text.primary, fontWeight: 300}} key={item[0]} onClick={() => {navigate(item[1])}}>
                            {item[0]}
                        </Button>
                    ))}

                    <Button 
                        sx={{ml: 2, fontWeight: 300, backgroundColor: theme.palette.primary.light, color: theme.palette.text.primary}}
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