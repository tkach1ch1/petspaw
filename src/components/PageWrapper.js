import React from 'react';
import Box from '@mui/material/Box';

const PageWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        justifyContent: { lg: 'center' },
        gap: { lg: '30px', xl: '125px' },
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
