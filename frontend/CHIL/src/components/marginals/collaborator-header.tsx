import React from 'react';
import { collaboratorHeaderConfig } from '@/config/headerLinks';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Button } from '@/components/ui/button/button';
import { theme } from '@/theme/theme';
import { logout } from '../auth/logout';
import { useAuth } from '../auth/authenticationProvider';

export type CollaboratorHeaderProps = {
    imageSrc?: string
}

const CollaboratorHeader = ({imageSrc}:CollaboratorHeaderProps): React.JSX.Element => {

    const navigate = useNavigate();
    const { setToken } = useAuth();

    return (
        <AppBar position="sticky">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: theme.palette.primary.main}}>
                <img src={imageSrc} alt="CHIL Logo" style={{ height: 25 }} />
                <Box>
                    {collaboratorHeaderConfig.map((item) => (
                        <Button sx={{
                            color: theme.palette.text.primary, 
                            fontWeight: 300, 
                            transition: 'color 0.3s ease-in-out',
                            '&:hover': { color: theme.palette.secondary.main } 
                            }} key={item[0]} onClick={() => {navigate(item[1])}}>
                            {item[0]}
                        </Button>
                    ))}

                    <Button
                        sx={{
                            ml: 2, 
                            fontWeight: 300,
                            backgroundColor: theme.palette.primary.light, 
                            color: theme.palette.text.primary,
                            transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                            '&:hover': { 
                                backgroundColor: theme.palette.secondary.main,
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' 
                            }}}
                        onClick={() => {
                            logout('chil/auth/logout/', setToken, navigate)
                        }}
                    >
                        Logout
                    </Button>


                </Box>

            </Toolbar>
        </AppBar>
    )
}

export { CollaboratorHeader }