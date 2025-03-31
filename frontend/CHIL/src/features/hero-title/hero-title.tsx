import { Box } from "@/components/ui/box/box";
import { theme } from "@/theme/theme";
import { Typography } from "@mui/material";
import greelandIceCamp2 from "@/assets/images/greenland_ice_camp_2.jpg";

const HeroTitle = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url(${greelandIceCamp2})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }} >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", color: theme.palette.text.primary, padding: "20px" }} >
        <Typography 
          variant="h1"
          sx={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)" }}>
            CHIL RESEARCH
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: theme.palette.text.primary, fontWeight: "400",maxWidth: "80%", margin: "0 auto", textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)" }} >
            Cryospheric and Hydrological Instrumentation Laboratory
        </Typography>
      </Box>
    </Box>
  );
};

export { HeroTitle };
