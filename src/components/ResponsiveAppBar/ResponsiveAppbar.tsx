import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import TocIcon from "@mui/icons-material/Toc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Divider, Stack } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Home", "Profile", "Settings"];
const languages = [
  {
    id: 1,
    img: "https://minimal-kit-react.vercel.app/assets/icons/ic_flag_en.svg",
    name: "England",
  },
  {
    id: 2,
    img: "https://minimal-kit-react.vercel.app/assets/icons/ic_flag_de.svg",
    name: "German",
  },
  {
    id: 3,
    img: "https://minimal-kit-react.vercel.app/assets/icons/ic_flag_fr.svg",
    name: "French",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#fafafa" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              //   sx={{
              //     display: { xs: 'block', md: 'none' },
              //   }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.id} onClick={handleCloseNavMenu}>
                  <Typography>
                    <Stack direction={"row"} gap={1}>
                      <Stack>
                        <img src={lang.img} alt="" />
                      </Stack>
                      <Stack>{lang.name}</Stack>
                    </Stack>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton aria-label="search" size="large">
              <SearchIcon />
            </IconButton>
          </Box>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          {}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton aria-label="notification">
                <img
                  src="https://minimal-kit-react.vercel.app/assets/icons/ic_flag_en.svg"
                  alt="english"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Stack sx={{ marginInline: 3, marginBlockEnd: 1, minWidth: 180 }}>
                <Typography variant="h5">Jaydon Frankie</Typography>
                <Typography
                  variant="h5"
                  color={"#7B7B7B"}
                  sx={{ color: "#7B7B7B", fontWeight: "normal" }}
                >
                  demo@minimals.cc
                </Typography>
              </Stack>
              <Divider sx={{ marginBottom: "8px" }} />
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ marginInline: "8px", borderRadius: 1 }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem
                key={"logout"}
                onClick={handleCloseUserMenu}
                sx={{ marginInline: "8px", borderRadius: 1 }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Stack direction={"row"} spacing={1}>
            <IconButton aria-label="notification">
              <img
                src="https://minimal-kit-react.vercel.app/assets/icons/ic_flag_en.svg"
                alt="english"
              />
            </IconButton>
            
            <IconButton aria-label="notification">
                <Badge badgeContent={4} color="primary">
                    <NotificationsIcon color="action" />
                </Badge>
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Emy Sharp"
                    src="https://duoplanet.com/wp-content/uploads/2023/05/duolingo-avatar-4.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Stack
                  sx={{ marginInline: 3, marginBlockEnd: 1, minWidth: 180 }}
                >
                  <Typography variant="h5">Jaydon Frankie</Typography>
                  <Typography
                    variant="h5"
                    color={"#7B7B7B"}
                    sx={{ color: "#7B7B7B", fontWeight: "normal" }}
                  >
                    demo@minimals.cc
                  </Typography>
                </Stack>
                <Divider sx={{ marginBottom: "8px" }} />
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{ marginInline: "8px", borderRadius: 1 }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem
                  key={"logout"}
                  onClick={handleCloseUserMenu}
                  sx={{ marginInline: "8px", borderRadius: 1 }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
