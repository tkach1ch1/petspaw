import { Box, styled } from '@mui/system';
import React from 'react';
import '../styles/styles.css';
import foto from '../img/image 1.png';

const StyledGrid = styled(Box)({
  gridGap: '20px',
  gridAutoRows: '150px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateAreas: `'a b c'
                      'a d d'
                      'e d d'
                      'f g h'
                      'i i h'
                      'i i j'
                      `,
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
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 134, 142, 0.6)',
  opacity: 0,
  '&: hover': {
    opacity: 1,
    transition: 'all 0.4s',
  },
});

const ToInfoPageButton = styled(Box)({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  border: 'none',
  color: 'var(--main-red)',
  textAlign: 'center',
  borderRadius: '10px',
});

const ImageGalleryTemplate = ({ ...props }) => {
  return (
    <StyledGrid
      sx={{
        display: { xs: 'flex', md: 'grid' },
        flexDirection: { xs: 'column' },
      }}
    >
      <StyledItem sx={{ gridArea: 'a', height: { xs: '205px', md: '100%' } }}>
        <StyledImg src={foto} alt='foto' />
        <BackBox>
          <ToInfoPageButton width={props.width} height={props.height} padding={props.padding} bottom={props.bottom}>
            {props.param}
          </ToInfoPageButton>
        </BackBox>
      </StyledItem>
      <StyledItem sx={{ height: { xs: '205px', md: '100%' } }}>
        <StyledImg src={foto} alt='foto' />
        <BackBox>
          <ToInfoPageButton width={props.width} height={props.height} padding={props.padding} bottom={props.bottom}>{props.param}</ToInfoPageButton>
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
