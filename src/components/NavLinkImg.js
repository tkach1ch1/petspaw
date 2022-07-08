import React from 'react';
import { styled } from '@mui/system';
import { NavLink as BaseNavLink } from 'react-router-dom';

const StyledBaseNavLinkImg = styled(BaseNavLink)({
  borderRadius: '20px',
  '&:hover': {
    border: '4px solid #FFFFFF',
    transition: '0.4s ease',
  },
});

const NavLinkImg = React.forwardRef(({ ...props }, ref) => {
  let activeStyle = {
    border: '4px solid #FBE0DC',
  };
  return (
    <StyledBaseNavLinkImg
      ref={ref}
      {...props}
      style={({ isActive }) => ({
        ...props.style,
        ...(isActive ? activeStyle : null),
      })}
      sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: props.backgroundcolor, border: props.border }}
    />
  );
});

export default NavLinkImg;
