import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isSmallScreen = window.innerWidth <= 600;

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="fixed" sx={{ '@media (max-width: 600px)': { flexDirection: 'column' } }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: 'theme.palette.primary.main',
                marginRight: '0.5rem',
              }}
            >
              <Typography
                variant="h6"
                component="span"
                sx={{ color: 'theme.palette.text.primary', marginRight: '105rem' }}
              >
                T
              </Typography>
            </span>
          </Link>
        </div>
        {isSmallScreen && (
          <>
            <IconButton
              color={menuAnchor ? 'primary' : 'inherit'}
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ display: 'flex', marginRight: '0.5rem' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: '#FFFFFF', // Update the background color
                  minWidth: '12rem', // Set the minimum width
                },
              }}
            >
              <MenuItem
                component={Link}
                to="/"
                onClick={handleMenuClose}
                sx={{ color: '#4A148C' }}
              >
                <Typography variant="body1" sx={{ color: 'inherit' }}>Home</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/about"
                onClick={handleMenuClose}
                sx={{ color: '#4A148C' }}
              >
                <Typography variant="body1" sx={{ color: 'inherit' }}>About</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/projects"
                onClick={handleMenuClose}
                sx={{ color: '#4A148C' }}
              >
                <Typography variant="body1" sx={{ color: 'inherit' }}>Projects</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleMenuClose}
                sx={{ color: '#4A148C' }}
              >
                <Typography variant="body1" sx={{ color: 'inherit' }}>Contact</Typography>
              </MenuItem>
            </Menu>
          </>
        )}
        {!isSmallScreen && (
          <nav>
            <Typography variant="body1" component="div" sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center', // Add this line to center-align the text items
            }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1">Home</Typography>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1">About</Typography>
              </Link>
              <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1">Projects</Typography>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1">Contact</Typography>
              </Link>
            </Typography>
          </nav>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;