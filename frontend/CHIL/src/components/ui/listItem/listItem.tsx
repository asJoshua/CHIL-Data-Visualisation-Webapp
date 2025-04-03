import { Container, Grid2 as Grid, Typography } from "@mui/material";
import { Button } from "../button/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const listItem = (props: { itemLink: string; itemTitle: string }) => {
  const navigate = useNavigate();
  const goToItemLink = () => {
    return navigate(props.itemLink);
  };

  return (
    <Container
      sx={{ border: "1px solid black", borderRadius: "5px", padding: "1em" }}
      key={props.itemTitle}
    >
      <Grid container justifyContent="space-between">
        <Grid alignContent="center">
          <Typography variant="h6">{props.itemTitle}</Typography>
        </Grid>
        <Grid>
          <Button variant="contained" size="large" onClick={goToItemLink}>
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export { listItem };
