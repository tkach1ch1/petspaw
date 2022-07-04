import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledBaseNavLinkText = styled(BaseNavLink)({
  borderRadius: '10px',
  textDecoration: 'none',
  textAlign: 'center',
  textTransform: 'uppercase',
  backgroundColor: '#ffffff',
  fontSize: '12px',
  letterSpacing: '2px',
  padding: '9px 0',
  color: 'var(--main-red)',
  '&:hover': {
    color: 'var(--main-red)',
    backgroundColor: 'var(--light-red)',
    transition: '0.5s ease',
  },
});

const NavLinkText = React.forwardRef(({ ...props }, ref) => {
  let activeStyle = {
    backgroundColor: 'var(--main-red)',
    color: 'white',
  };
  return (
    <StyledBaseNavLinkText
      ref={ref}
      {...props}
      style={({ isActive }) => ({
        ...props.style,
        ...(isActive ? activeStyle : null),
      })}
    />
  );
});

export default NavLinkText;
