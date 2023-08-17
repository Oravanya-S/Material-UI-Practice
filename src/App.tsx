import { ThemeProvider } from "./providers/mui/ThemeProvider";
import { originalTheme } from "./themes";
import { Playground } from "./components/CardUser";
import EnhancedTable from "./components/TableUser";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { Add } from "@mui/icons-material";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#fafafa',
  padding: theme.spacing(4),
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '60px'
}));

function App() {
  
  const userArr = [
    {
      firstName: "Oravanya",
      lastName: "Sapsrithong",
      age: "25",
      img: "https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-4.png",
    },
    {
      firstName: "Winnie",
      lastName: "In the pooh",
      age: "20",
      img: "https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-5.png",
    },
    {
      firstName: "Boom",
      lastName: "Kanyaphasawee",
      age: "35",
      img: "https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-3.png",
    },
  ];
  return (
    <ThemeProvider theme={originalTheme}>
      <Container>
          <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant='h2'>User</Typography>
            <Button startIcon={<Add></Add>}>New User</Button>
          </Stack>
          <EnhancedTable />
          {userArr.map((el) => (
            <Playground
              {...el}
            ></Playground>
          ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
