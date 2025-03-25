import React, { useEffect, useState} from "react";
import { VariableLayout } from "@/components/layouts/variable-layout";
import { HeroTitle } from "@/features/hero-title/hero-title";
import { Box } from "@/components/ui/box/box"
import { DirectionStack } from "@/components/ui/stack/stack";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";
import { Container, Typography } from "@mui/material";
import axios from "axios";

const HomeRoot = (): React.JSX.Element => {
  
const [stackItems, setStackItems] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: "http://localhost:8000/chil/api/campaign/list",
      withCredentials: true,
    })
      .then((response) => {
        const formattedData = response.data.map((campaign: { image_url: any; name: any; description: any; }) => ({
          imageSrc: "",
          text: `${campaign.name}: ${campaign.description}`
        }));
        setStackItems(formattedData);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error fetching campaigns:", error.response.data);
        } else {
          console.error("Network error:", error.message);
        }
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <VariableLayout>
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
      </VariableLayout>
    </ThemeProvider>
  );
};

export { HomeRoot };
