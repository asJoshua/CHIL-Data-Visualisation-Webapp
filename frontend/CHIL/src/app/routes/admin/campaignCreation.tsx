import React from "react";
import { VariableLayout } from "@/components/layouts/variable-layout";

import { Container, Grid2 as Grid, Typography } from "@mui/material";

const CapaignCreationRoot = (): React.JSX.Element => {
  return (
    <VariableLayout>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid>
            <Typography variant="h2" color="textSecondary">
              Test
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </VariableLayout>
  );
};

export { CapaignCreationRoot };
