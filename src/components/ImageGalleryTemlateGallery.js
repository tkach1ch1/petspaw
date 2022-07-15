import React from 'react';
import '../styles/styles.css';
import { Box, styled } from '@mui/system';
import { StyledCircularProgress } from './ChosenImage';
import GridItem from './GridItem';

export const StyledGrid = styled(Box)({
  position: 'relative',
  gridGap: '20px',
  gridAutoRows: '150px',
  gridAutoFlow: 'dense',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

//NOTE: Grid for GalleryPage

const ImageGalleryTemplateGallery = ({ ...props }) => {
  const array = props.arr;

  let content;

  if (props.status === 'loading') {
    content = (
      <StyledCircularProgress
        sx={{
          top: {
            xs: '150px',
            md: '200px',
            lg: '100px',
            xxl: '200px',
            xxxl: '200px',
          },
          right: {
            md: '300px',
            lg: '190px',
            xl: '220px',
            xxl: '280px',
            xxxl: '310px',
          },
        }}
        size={'100px'}
        color='secondary'
      />
    );
  } else if (props.status === 'succeeded') {
    content = array.map((elem) => (
      <GridItem
        id={Math.floor(Math.random() * 100000)}
        key={elem.id}
        imageUrl={elem.url}
        galleryValue={'gallery'}
      />
    ));
  }
  return (
    <StyledGrid
      sx={{
        display: { xs: 'flex', md: 'grid' },
        flexDirection: { xs: 'column' },
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      {content}
    </StyledGrid>
  );
};

export default ImageGalleryTemplateGallery;
