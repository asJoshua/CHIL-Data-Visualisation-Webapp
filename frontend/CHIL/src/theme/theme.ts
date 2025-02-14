import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#00243E" }, // Deep navy blue
    secondary: { main: "#526980" }, // Muted blue-gray
    text: { primary: "#FFF" }, // White 
    background: { default: "#FFF" }, // White
    error: { main: "#F71735"} // Bright Red
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
