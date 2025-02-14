import React from "react";
import { PublicLayout } from "../../../components/layouts/public-layout";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../theme/theme";

const HomeRoot = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <PublicLayout></PublicLayout>
    </ThemeProvider>
  );
};

export { HomeRoot };
