import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

const CustomThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
