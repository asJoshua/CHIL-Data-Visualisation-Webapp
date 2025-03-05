import { createTheme } from "@mui/material/styles";
import { primary, secondary } from '../assets/theme/colors'

export const theme = createTheme({
  palette: {
    primary: { 
      main: primary[700],
      light: primary[400]
    }, 
    secondary: { 
      main: secondary[900] 
    }, 
    text: { 
      primary: "#FFF" 
    }, 
    background: { 
      default: "#FFF" 
    }
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontSize: "2.25rem", // 36px
      "@media (min-width:600px)": {
        fontSize: "3rem", // 48px
      },
      "@media (min-width:960px)": {
        fontSize: "4.5rem", // 72px
      },
      color: '#FFF',
      fontWeight: 'bolder',
    },
    h2: {
      fontSize: "1.5rem", // 24px
      "@media (min-width:600px)": {
        fontSize: "2rem", // 32px
      },
      color: secondary[900],
      fontWeight: 'bold',
    },
    h3: {
      fontSize: "1.25rem", // 20px
      "@media (min-width:600px)": {
        fontSize: "1.5rem", // 24px
      },
      color: primary[700],
    },
    h4: {
      fontSize: "1rem", // 16px
      "@media (min-width:600px)": {
        fontSize: "1.25rem", // 20px
      },
    },
    body1: {
      fontSize: "1rem", // 16px
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
          root: {
            color: '#000',
          }, 
          input: {
            color: '#000'
          }    
      }
    }
  }
});