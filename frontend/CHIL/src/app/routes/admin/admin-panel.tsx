import React from "react";
import { VariableLayout } from "@/components/layouts/variable-layout";
import { Container, Grid2 as Grid, Typography } from "@mui/material";

const AdminPanelRoot = (): React.JSX.Element => {
  return (
    <VariableLayout>
      <Container>
        <Grid>
          <Typography variant="h2" color="textSecondary">
            Dashboard
          </Typography>
        </Grid>
      </Container>
    </VariableLayout>
  );
};

export { AdminPanelRoot };
