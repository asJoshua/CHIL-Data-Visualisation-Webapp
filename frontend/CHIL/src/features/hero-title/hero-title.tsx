import { Box } from "../../components/ui/box/box";
import background from "../../assets/BgICe.jpg";
import { theme } from "../../theme/theme"
import { Typography } from "@mui/material";

const HeroTitle = () => {
  return (
    <Box
      sx={{
        maxWidth: "100vw",
        height: "60vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundPosition: "center -70px", 
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
       sx={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: '20px',
        borderRadius: '8px',
       }}
      >
        <Typography variant="h1">
          CHIL RESEARCH
        </Typography >
        <Typography variant="h2" style={{ color: theme.palette.text.primary, fontWeight: "400" }}>
          Cryospheric and Hydrological Instrumentation Laboratory
        </Typography>
      </Box>
    </Box>
  );
};

export { HeroTitle };
