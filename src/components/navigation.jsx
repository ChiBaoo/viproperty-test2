import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import { data } from '../Data/NavbarData'

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar sx={{ backgroundColor: 'white', boxShadow: 0, color: '#FBC231', marginBottom: 100 }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />s */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* <Link to='/' style={{ textDecoration: "none" }}>Viproperty</Link> */}
            <a style={{ textDecoration: "none" }} href='https://viproperty.vn/'>
              <img
                src="https://viproperty.vn/uploads/logo/logo.webp"
                alt="example"
              />
            </a>
          </Typography>
          {/* PHONE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClick={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {data.map((Navbar) => (
                <MenuItem sx={{ color: 'yellow' }} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{}}>
                    <Link to={Navbar.link} style={{ textDecoration: "none", color: 'green' }}>{Navbar.label}</Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem >
                <PhoneInTalkRoundedIcon color="success" /> <Contact color='green' fontSize='0.8rem' />
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <a style={{ textDecoration: "none" }} href='https://viproperty.vn/'>
              <img
                src="https://viproperty.vn/uploads/logo/logo.webp"
                alt="example"
              />
            </a>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {data.map((navbar) => (
              <Link to={navbar.link} style={{ textDecoration: "none" }}>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Typography textAlign="center" color='green'>
                    {navbar.label}
                  </Typography>
                </Button>
              </Link>
            ))}


            <Button onClick={handleCloseNavMenu} sx={{ marginLeft: '25%' }}>
              <PhoneInTalkRoundedIcon color="success" /> <Contact color='green' fontSize='0.8rem' />
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;