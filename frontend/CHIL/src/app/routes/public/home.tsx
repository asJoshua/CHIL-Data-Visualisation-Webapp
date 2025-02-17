import React from "react";
import { PublicLayout } from "../../../components/layouts/public-layout";
import { HeroTitle } from "../../../features/hero-title/hero-title";
import { DirectionStack } from "../../../components/ui/stack/stack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import { Typography } from "@mui/material";
import imagePlaceholder from "../../../assets/BgICe.jpg"; // Sample image

// Define content for the stack
const stackItems = [
  {
    imageSrc: imagePlaceholder,
    text: "Deployment in the Arctic region for climate monitoring.",
  },
  {
    imageSrc: imagePlaceholder,
    text: "Our instruments in action on remote glaciers.",
  },
  {
    imageSrc: imagePlaceholder,
    text: "Hydrological equipment deployed for river studies.",
  },
];

const HomeRoot = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <PublicLayout>
        <HeroTitle />
        <section style={{ margin: "100px 0px 0px 230px" }}>
          <Typography variant="h2" color="primary">
            Deployments
          </Typography>
          <Typography variant="h3" color="secondary">
            All instances where our instruments are implemented.
          </Typography>
        </section>
        <DirectionStack items={stackItems} />
      </PublicLayout>
    </ThemeProvider>
  );
};

export { HomeRoot };
