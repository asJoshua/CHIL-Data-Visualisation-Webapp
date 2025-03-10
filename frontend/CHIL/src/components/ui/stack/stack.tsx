import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Box } from "@/components/ui/box/box";
import { styled } from "@mui/material/styles";
import { theme } from "@/theme/theme";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Define props for scalability
interface CardData {
  imageSrc: string;
  text: string;
}

interface DirectionStackProps {
  items: CardData[];
}

const Card = styled(Paper)({
  width: "320px",
  height: "350px",
  color: theme.palette.text.primary,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "4px 4px 4px rgba(0, 36, 62, 1)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  cursor: "pointer", 

  "&:hover": {
    transform: "scale(1.05)", 
    boxShadow: "6px 6px 10px rgba(0, 36, 62, 0.5)", 
  },
});

export default function DirectionStack({ items }: DirectionStackProps) {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate("/deployments");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <Stack direction="row" spacing={6}>
        {items.map((item, index) => (
          <Card key={index} onClick={handleNavigate}>
            <img
              src={item.imageSrc}
              alt={`Card ${index + 1}`}
              style={{
                width: "90%",
                height: "60%",
                objectFit: "cover",
                borderRadius: "8px",
                margin: theme.spacing(2),
              }}
            />
            <Typography
              variant="body1"
              sx={{ textAlign: "left", margin: theme.spacing(2) }}
            >
              {item.text}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export { DirectionStack };
