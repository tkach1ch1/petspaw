import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { StyledIconButton } from './BurgerMenu';
import CloseIcon from '@mui/icons-material/Close';
import Category from './Category';

const StyledMenuDrawer = styled(Box)({
  position: 'absolute',
  zIndex: 10,
  right: 0,
  top: 0,
  left: 0,
  height: '100%',
  backgroundColor: '#F8F8F7',
  padding: '20px',
});

const MenuDrawer = (props) => {
  return (
    <StyledMenuDrawer sx={{ display: { xs: 'block', lg: 'none' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledIconButton sx={{ mb: '20px' }} onClick={props.handleMenuClose}>
          <CloseIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
        </StyledIconButton>
      </Box>

      <Category />
    </StyledMenuDrawer>
  );
};

export default MenuDrawer;
