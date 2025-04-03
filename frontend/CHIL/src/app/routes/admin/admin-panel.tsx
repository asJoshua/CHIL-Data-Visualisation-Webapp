import React from "react";
import { VariableLayout } from "@/components/layouts/variable-layout";
import { Container, Grid2 as Grid, Typography } from "@mui/material";
import { Button } from "@/components/ui/button/button";

const AdminPanelRoot = (props: { itemLink: string }): React.JSX.Element => {
  return (
    <VariableLayout>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid>
            <Typography variant="h2" color="textSecondary">
              Dashboard
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </VariableLayout>
  );
};

export { AdminPanelRoot };
