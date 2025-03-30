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
                        <Button sx={{color: theme.palette.text.primary, fontWeight: 300}} key={item[0]} onClick={() => {navigate(item[1])}}>
                            {item[0]}
                        </Button>
                    ))}

                    <Button
                        color='inherit'
                        variant='outlined'
                        sx={{ml: 2}}
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