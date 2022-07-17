import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const StyledButton = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  justifyContent: 'center',
  gap: '15px',
  backgroundColor: 'var(--light-red)',
  color: 'var(--main-red)',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '500',
  borderRadius: '10px',
  letterSpacing: '2px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'var(--main-red)',
    color: 'white',
    transition: 'all 0.4s',
  },
});

export const StyledTypography = styled(Typography)({
  fontSize: '12px',
  fontFamily: 'Jost',
  fontWeight: '500',
});

const MainStyledButton = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledButton
      sx={{ padding: props.padding }}
      ref={ref}
      onClick={props.onClick}
    >
      {children}
    </StyledButton>
  );
});

export default MainStyledButton;
