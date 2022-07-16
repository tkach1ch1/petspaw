import React from 'react';
import { Box, styled } from '@mui/system';
import { MainTypography, SubTypography } from './ModalUpload';

const StyledLink = styled('a')({
  color: 'var(--main-red)',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.6',
    transition: 'all 0.3s',
  },
});

const ModalUploadInfo = () => {
  return (
    <Box mb={{xs: '40px', lg: '20px', xl: '40px' }} textAlign={'center'}>
      <MainTypography
        sx={{
          fontSize: { xs: '20px', md: '36px', lg: '26px', xxl: '36px' },
          mb: '20px',
        }}
      >
        Upload a .jpg or .png Cat Image
      </MainTypography>
      <SubTypography sx={{ fontSize: { xs: '20px', lg: '18px', xxl: '20px' } }}>
        Any uploads must comply with the{' '}
        <StyledLink href='https://thecatapi.com/privacy' target='_blank'>
          upload guidelines
        </StyledLink>{' '}
        or face deletion.
      </SubTypography>
    </Box>
  );
};

export default ModalUploadInfo;
