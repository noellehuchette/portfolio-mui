import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LightMode, DarkMode } from '@mui/icons-material';
import { toggleTheme } from '../../store/settings';
import './style.css';

const pages = ['home', 'about', 'projects', 'contact'];

function Nav() {
  const theme = useSelector((state) => state.settings.theme);
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const executeScroll = (page) => {
    const elem = document.getElementById(page);
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start'
    });
  };

  return (
    <AppBar sx={{ zIndex: '1000' }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            Noelle Huchette
          </Typography>

          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page + 'menuitem'}
                  onClick={() => executeScroll(page)}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: 'monospace' }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            {' '}
            Noelle Huchette
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'right'
            }}
          >
            {pages.map((page) => (
              <Button
                color="inherit"
                key={page}
                onClick={() => executeScroll(page)}
                sx={{ my: 2, display: 'block', fontFamily: 'monospace' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            color="secondary"
            size="large"
            sx={{
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ml: { xs: 0, sm: 2 }
            }}
            onClick={() => dispatch(toggleTheme())}
          >
            {' '}
            {theme.palette.type === 'light' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
