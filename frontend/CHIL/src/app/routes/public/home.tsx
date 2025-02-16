import React from "react";
import { PublicLayout } from "../../../components/layouts/public-layout";
import { HeroTitle } from '../../../features/hero-title/hero-title'
import { DirectionStack } from '../../../components/ui/stack/stack'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../theme/theme";

const HomeRoot = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <PublicLayout>
        <HeroTitle></HeroTitle>
        <DirectionStack></DirectionStack>
      </PublicLayout>
    </ThemeProvider>
  );
};

export { HomeRoot };
