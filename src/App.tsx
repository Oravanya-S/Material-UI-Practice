import { ThemeProvider } from "./providers/mui/ThemeProvider";
import { originalTheme } from "./themes";
import EnhancedTable from "./components/TableUser";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { Add } from "@mui/icons-material";
import ImgMediaCard from "./components/ImgMediaCard";
import { Navbar } from "./components/Navbar/Navbar";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppbar";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#fafafa',
  padding: theme.spacing(3),
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '60px'
}));

function App() {
  return (
    <ThemeProvider theme={originalTheme}>
      <ResponsiveAppBar />
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
      </Container>

      <Container>
        <Navbar>

        </Navbar>
        <Typography variant='h3'>Products</Typography>
        <ImgMediaCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
