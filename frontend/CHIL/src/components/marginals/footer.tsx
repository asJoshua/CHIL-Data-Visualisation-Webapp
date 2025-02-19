import React from "react";
import { footerConfig } from "@/config/footerLinks";
import { ThemeProvider } from "@mui/material/styles";
import { BottomNavigation} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@/components/ui/box/box"
import { Button } from "@/components/ui/button/button"
import { theme } from "@/theme/theme";
import { LogoDev } from '@mui/icons-material';

const Footer = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <BottomNavigation sx={{padding: theme.spacing(2) ,display: 'flex', justifyContent: 'space-between', backgroundColor:theme.palette.secondary.main}}>
          <LogoDev sx={{color: '#fff'}}/>
          <Box>
            {footerConfig.map((item) => (
              <Button sx={{color: theme.palette.text.primary, fontWeight: 300}} key={item[0]} onClick={() => {navigate(item[1])}}>
              {item[0]}
          </Button>
            ))}
          </Box>
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export { Footer };
