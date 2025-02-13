import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: "#00243E"},
        secondary: { main: "#526980"},
        text: { primary: "#FFF"},
        background: { default: "#F71735"},
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    }
})

export default theme;