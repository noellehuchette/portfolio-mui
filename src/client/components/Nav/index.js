import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { LinkedIn, GitHub, Article } from '@mui/icons-material';
import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

const pages = ['Projects', 'Contact', 'Resume'];
const links = { Projects: '', Contact: '', Resume: '' };

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
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
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'baseline',
              gap: 1
            }}
          >
            <Avatar alt="Noelle Huchette" src="/headshot.jpg" />
            NOELLE HUCHETTE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'baseline',
              gap: 1
            }}
          >
            {' '}
            <Avatar alt="Noelle Huchette" src="/headshot.jpg" />
            NEH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0.2 }}>
            <IconButton
              aria-label="LinkedIn"
              onClick={() =>
                window.open('https://www.linkedin.com/in/noelle-huchette/')
              }
              color="inherit"
            >
              <LinkedIn sx={{ fontSize: { sm: '1.5rem', md: '2.5rem' } }} />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              onClick={() => window.open('https://github.com/noellehuchette')}
              color="inherit"
            >
              <GitHub sx={{ fontSize: { sm: '1.5rem', md: '2.5rem' } }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
