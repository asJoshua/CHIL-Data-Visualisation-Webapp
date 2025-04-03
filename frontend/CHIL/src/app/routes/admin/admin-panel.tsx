import React from "react";
import { VariableLayout } from "@/components/layouts/variable-layout";
import { ListItemLink } from "@/components/ui/ListItemLink/ListItemLink";

import { Container, Grid2 as Grid, Typography } from "@mui/material";

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
        <Grid>
          <ListItemLink itemLink="/home" itemTitle="Home" />
        </Grid>
      </Container>
    </VariableLayout>
  );
};

export { AdminPanelRoot };
