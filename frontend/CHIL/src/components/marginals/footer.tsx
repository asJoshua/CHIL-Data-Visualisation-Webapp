import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BottomNavigation, IconButton } from "@mui/material";
import { Box } from "@/components/ui/box/box";
import { theme } from "@/theme/theme";
import logo from "@/assets/images/CHIL-Logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = (): React.JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <BottomNavigation
          sx={{
            padding: theme.spacing(2),
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#E4405F" }}
            >
              <InstagramIcon
                sx={{
                  color: "white",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: theme.palette.primary.light },
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#0077B5" }}
            >
              <LinkedInIcon
                sx={{
                  color: "white",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: theme.palette.primary.light },
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#1877F2" }}
            >
              <FacebookIcon
                sx={{
                  color: "white",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: theme.palette.primary.light },
                }}
              />
            </IconButton>
          </Box>
          <img src={logo} alt="CHIL Logo" style={{ height: 25 }} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export { Footer };
