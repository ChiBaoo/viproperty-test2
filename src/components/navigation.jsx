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

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
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
            <a style={{ textDecoration: "none" }} href='https://viproperty.vn/'>Viproperty</a>
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to='/' style={{ textDecoration: "none" }}>Home</Link>
                  {/* <a style={{ textDecoration: "none" }} href='https://viproperty.vn/'>Home</a> */}
                </Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/sendMail' style={{ textDecoration: "none" }}>Send an email</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/buy' style={{ textDecoration: "none" }}>Buy</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/rent' style={{ textDecoration: "none" }}>Rent</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/marketResearch' style={{ textDecoration: "none" }}>Market Research</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/investmentPolicy' style={{ textDecoration: "none" }}>Investment Policy</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/contact' style={{ textDecoration: "none" }}>Contact</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/about' style={{ textDecoration: "none" }}>About us</Link></Typography>
              </MenuItem>

            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
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
            {/* <Link to='/' style={{ textDecoration: "none" }}>Viproperty</Link> */}
            <a style={{ textDecoration: "none" }} href='https://viproperty.vn/'>Viproperty</a>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center">
                <Link to='/' style={{ textDecoration: "none" }}>Home</Link>
                {/* <a style={{ textDecoration: "none" }} href='https://viproperty.vn/'>Home</a> */}

              </Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/sendMail' style={{ textDecoration: "none" }}>Send an email</Link></Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/buy' style={{ textDecoration: "none" }}>Buy</Link></Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/rent' style={{ textDecoration: "none" }}>Rent</Link></Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/marketResearch' style={{ textDecoration: "none" }}>Market Research</Link></Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/investmentPolicy' style={{ textDecoration: "none" }}>Investment Policy</Link></Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/contact' style={{ textDecoration: "none" }}>Contact</Link></Typography>
            </Button>

            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign="center"><Link to='/about' style={{ textDecoration: "none" }}>About us</Link></Typography>
            </Button>


            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;