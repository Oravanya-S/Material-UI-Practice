import {
  Box,
  BoxProps,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TocIcon from "@mui/icons-material/Toc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface PlaygroundProps extends BoxProps {
  //   img: string;
  //   name: string;
  //   price: number;
  //   discount: number;
}

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

// const Frame = styled(Box)(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   borderRadius: '12px',
// }));

export const Navbar: React.FC<PlaygroundProps> = () => {
  return (
    <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"}>
                <IconButton aria-label="toc">
                    <TocIcon />
                </IconButton>
                <IconButton aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Stack>
            <Stack direction={"row"}>
                <IconButton aria-label="notification">
                    <NotificationsIcon />
                </IconButton>
                <IconButton aria-label="cart">
                    <ShoppingCartIcon />
                </IconButton>
            </Stack>
        </Stack>
    </Container>
  );
};
