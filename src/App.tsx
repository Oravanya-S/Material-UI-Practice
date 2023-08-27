import { ThemeProvider } from "./providers/mui/ThemeProvider";
import { originalTheme } from "./themes";
import EnhancedTable from "./components/TableUser";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { Add } from "@mui/icons-material";
import ImgMediaCard from "./components/ImgMediaCard";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppbar";
import Sidebar from "./components/Sidebar/Sidebar";


const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#fafafa",
  padding: theme.spacing(3),
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));

function App() {
  return (
    <ThemeProvider theme={originalTheme}>
      <Stack direction={"row"} spacing={0} justifyContent={"space-between"}>
          <Sidebar />
        <Stack sx={{ flex: 6 }}>
          <ResponsiveAppBar />
          {/* <Container> */}
            {/* <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h2">User</Typography>
              <Button startIcon={<Add></Add>}>New User</Button>
            </Stack> */}
            {/* <EnhancedTable /> */}
          {/* </Container> */}

          <Container>
            <Typography variant="h3">Products</Typography>
            <ImgMediaCard />
          </Container>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
