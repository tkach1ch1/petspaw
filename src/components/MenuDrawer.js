import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { StyledIconButton } from './BurgerMenu';
import StyledNavLink from './StyledNavLink';
import CloseIcon from '@mui/icons-material/Close';

const StyledMenuDrawer = styled(Box)({
  position: 'absolute',
  zIndex: 10,
  right: 0,
  top: 0,
  left: 0,
  backgroundColor: '#F8F8F7',
  padding: '20px',
});

const StyledCategoriesBurger = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const MenuDrawer = (props) => {
  return (
    <StyledMenuDrawer sx={{ display: { xs: 'block', lg: 'none' } }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledIconButton sx={{ mb: '20px' }} onClick={props.handleMenuClose}>
          <CloseIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
        </StyledIconButton>
      </Box>

      <StyledCategoriesBurger>
        <StyledNavLink to='/voting' borderradius={'10px'} padding={'9px 0'}>
          Voting
        </StyledNavLink>
        <StyledNavLink to='/breeds' borderradius={'10px'} padding={'9px 0'}>
          Breeds
        </StyledNavLink>
        <StyledNavLink to='/gallery' borderradius={'10px'} padding={'9px 0'}>
          Gallery
        </StyledNavLink>
      </StyledCategoriesBurger>
    </StyledMenuDrawer>
  );
};

export default MenuDrawer;
