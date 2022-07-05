import { styled } from '@mui/system';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton } from '@mui/material';
import '../styles/styles.css';
import MenuDrawer from './MenuDrawer';
import PropTypes from 'prop-types';

export const StyledIconButton = styled(IconButton)({
  padding: '10px',
  width: '60px',
  backgroundColor: 'white',
  borderRadius: '20px',
});

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <StyledIconButton
        size='medium'
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={handleMenuOpen}
        sx={{
          display: { sx: 'block', lg: 'none' },
          mr: { sx: '10px' },
        }}
      >
        <MenuIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
      </StyledIconButton>
      {open && <MenuDrawer handleMenuClose={handleMenuClose} />}
    </Box>
  );
};

BurgerMenu.propTypes = {
  handleMenuOpen: PropTypes.func,
  handleMenuClose: PropTypes.func,
  open: PropTypes.bool,
};

export default BurgerMenu;
