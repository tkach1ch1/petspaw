import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

const StyledMainBox = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '20px',
  overflow: 'hidden',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 0,
  },
});

const MainBox = ({ children, ...props }) => {
  return (
    <StyledMainBox
      {...props}
      sx={{
        width: { lg: '500px', xl: '570px', xxl: '680px', xxxl: '750px' },
        height: {
          md: '890px',
          lg: '637px',
          xl: '590px',
          xxl: '770px',
          xxxl: '795px',
        },
        minHeight: { xs: '300px' },
      }}
    >
      {children}
    </StyledMainBox>
  );
};

export default MainBox;
