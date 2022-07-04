import React from 'react';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';

const Gallery = () => {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        justifyContent: { lg: 'center' },
        gap: { lg: '20px', xl: '125px' },
      }}
    >
      <Categories />
      <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
        <MainBox backgroundColor={'#ffffff'}></MainBox>
      </Box>
    </Box>
  );
};

export default Gallery;
