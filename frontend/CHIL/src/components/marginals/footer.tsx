import React from "react";
import { footerConfig } from "@/config/footerLinks";
import { ThemeProvider } from "@mui/material/styles";
import { BottomNavigation, Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";

const Footer = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        style={{ position: "absolute", bottom: 0, backgroundColor: "main" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box color="secondary">
            {footerConfig.map((item) => (
              <Button
                color="inherit"
                key={item[0]}
                onClick={() => {
                  navigate(item[1]);
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </BottomNavigation>
    </ThemeProvider>
  );
};

export { Footer };
