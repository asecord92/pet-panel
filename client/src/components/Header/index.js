import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Auth from "../../utils/auth";
import { Link } from "@mui/material";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#463F3A" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => window.location.replace("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", cursor: "pointer" },
            }}
          >
            Pet Panel
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Auth.loggedIn() ? (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      href="/profile"
                      sx={{ color: "black" }}
                      underline="none"
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      href="/"
                      underline="none"
                      onClick={logout}
                      sx={{ color: "black" }}
                    >
                      Logout
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      href="/login"
                      sx={{ color: "black" }}
                      underline="none"
                    >
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      href="/signup"
                      sx={{ color: "black" }}
                      underline="none"
                    >
                      Signup
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Pet Panel
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {Auth.loggedIn() ? (
              <>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    href="/profile"
                    sx={{ color: "white" }}
                    underline="none"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/" sx={{ color: "white" }} onClick={logout}>
                    Logout
                  </Link>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/login" sx={{ color: "white" }} nderline="none">
                    Login
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/signup" sx={{ color: "white" }} underline="none">
                    Signup
                  </Link>
                </MenuItem>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
