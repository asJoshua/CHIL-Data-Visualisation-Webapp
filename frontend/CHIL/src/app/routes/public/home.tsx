import React from "react";
import { PublicLayout } from "@/components/layouts/public-layout";
import { HeroTitle } from "@/features/hero-title/hero-title";
import { Box } from "@/components/ui/box/box"
import { DirectionStack } from "@/components/ui/stack/stack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";
import { Container, Typography } from "@mui/material";
import imagePlaceholder from "@/assets/images/BgICe.jpg"; // Sample image

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
        <Container>
          <Box sx={{margin: '80px 0px 0px 50px'}}>
            <Typography variant="h2" color="primary">
              Deployments
            </Typography>
            <Typography variant="h3" color="secondary">
              All instances where our instruments are implemented.
            </Typography>
          </Box>
          <DirectionStack items={stackItems} />
        </Container>
      </PublicLayout>
    </ThemeProvider>
  );
};

export { HomeRoot };
