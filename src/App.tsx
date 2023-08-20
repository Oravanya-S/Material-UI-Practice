import { ThemeProvider } from "./providers/mui/ThemeProvider";
import { originalTheme } from "./themes";
import EnhancedTable from "./components/TableUser";
import { Box, Button, Input, Stack, Typography, styled } from "@mui/material";
import { Add } from "@mui/icons-material";
import ImgMediaCard from "./components/ImgMediaCard";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppbar";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <ThemeProvider theme={originalTheme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={'row'} spacing={3}>
          <Stack>
            <Input
              defaultValue=""
              placeholder="firstname"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span>firstName is required</span>}
          </Stack>
          <Stack>
            <Input
              placeholder="lastname"
              {...register("lastName", { required: true })}
            />

            {errors.lastName && <span>LastName is required</span>}
          </Stack>
          <input type="submit" />
        </Stack>
      </form>
      <ResponsiveAppBar />
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h2">User</Typography>
          <Button startIcon={<Add></Add>}>New User</Button>
        </Stack>
        <EnhancedTable />
      </Container>

      <Container>
        <Typography variant="h3">Products</Typography>
        <ImgMediaCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
