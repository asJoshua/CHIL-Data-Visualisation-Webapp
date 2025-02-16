import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Card = styled(Paper)(({ theme }) => ({
  width: '320px',
  height: '350px',
  color: '#FFF',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#526980',
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: "4px 4px 4px rgba(0, 36, 62, 1)",
}));

export default function DirectionStack() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '50px'}}>
      <Stack direction="row" spacing={6}>
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
      </Stack>
    </div>
  );
};

export { DirectionStack };