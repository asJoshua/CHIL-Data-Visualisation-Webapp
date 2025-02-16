import { Box } from "../../components/ui/box/box";
import background from "../../assets/BgICe.jpg";

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
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)", 
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "72px", color: "#00243E", fontWeight: "600" }}>
          CHIL RESEARCH
        </h1>
        <h2 style={{ fontSize: "32px", color: "#526980", fontWeight: "400" }}>
          Cryospheric and Hydrological Instrumentation Laboratory
        </h2>
      </Box>
    </Box>
  );
};

export { HeroTitle };
