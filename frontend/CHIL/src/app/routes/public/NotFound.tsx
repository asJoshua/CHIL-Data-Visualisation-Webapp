import React from 'react';
import { Box, Grid2 as Grid, styled, Typography} from '@mui/material';
import { VariableLayout } from "@/components/layouts/variable-layout";
import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Button } from '@/stories/Button';

const StyledGrid = styled(Grid)(({ theme }) => ({
    height: '83vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
  }));

const NotFound = () => {
  return (
    <VariableLayout>
    <Grid container>
      <StyledGrid container size={12}>
        <Box>
          <Typography variant="h1" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1">
            The page you are looking for does not exist or has been moved.
          </Typography>
          <Box mt={4}>
          <Link to={paths.public.home.getHref()}>
                <Button primary label="Go to Home" />
              </Link>
          </Box>
        </Box>
      </StyledGrid>
    </Grid>
    </VariableLayout>
  );
};

export default NotFound;