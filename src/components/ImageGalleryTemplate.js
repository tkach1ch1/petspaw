import { Box, styled } from '@mui/system';
import React from 'react';
import '../styles/styles.css';
import foto from '../img/image 1.png';

const StyledGrid = styled(Box)({
  display: 'grid',
  gridGap: '20px',
});

const StyledItem = styled(Box)({
  backgroundColor: '#C4C4C4',
  position: 'relative',
  borderRadius: '20px',
  cursor: 'pointer',
});

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
});

const BackBox = styled(Box)({
  position: 'absolute',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 134, 142, 0.6)',
  opacity: 0,
  '&: hover': {
    opacity: 1,
    transition: 'all 0.3s',
  },
});

const ToInfoPageButton = styled(Box)({
  position: 'absolute', 
  bottom: '10px',
  padding: '5px 24px',
  backgroundColor: '#ffffff',
  color: 'var(--main-red)',
  textAlign: 'center',
  borderRadius: '10px',
});

const ImageGalleryTemplate = () => {
  return (
    <StyledGrid
      sx={{
        gridAutoRows: { xs: '207px', md: '150px' },
        gridTemplateColumns: { xs: '100%', md: 'repeat(3, 1fr)' },
        gridTemplateAreas: {
          xs: 'none',
          md: `'a b c'
        'a d d'
        'e d d'
        'f g h'
        'i i h'
        'i i j'
        `,
        },
      }}
    >
      <StyledItem sx={{ gridArea: 'a' }}>
        <StyledImg src={foto} alt='foto' />
        <BackBox>
          <ToInfoPageButton>Abyssinian</ToInfoPageButton>
        </BackBox>
      </StyledItem>
      <StyledItem>
        <StyledImg src={foto} alt='foto' />
        <BackBox>
          <ToInfoPageButton>Abyssinian</ToInfoPageButton>
        </BackBox>
      </StyledItem>
      <StyledItem></StyledItem>
      <StyledItem sx={{ gridArea: 'd' }}></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem sx={{ gridArea: 'h' }}></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem sx={{ gridArea: 'i' }}></StyledItem>
      <StyledItem></StyledItem>
    </StyledGrid>
  );
};

export default ImageGalleryTemplate;
