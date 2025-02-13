import React from 'react'
import { publicHeaderConfig } from '@/config/headerLinks';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Button } from '../ui/button/button'
import { LogoDev } from '@mui/icons-material';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/theme";

const PublicHeader = (): React.JSX.Element => {

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" sx={{backgroundColor: 'background'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <LogoDev/> {/* TO DO: Replace with company logo*/}

                    <Box >
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
        </ThemeProvider>
    )
}

export { PublicHeader }
