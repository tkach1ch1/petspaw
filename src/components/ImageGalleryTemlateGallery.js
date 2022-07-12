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

const ImageGalleryTemplateGallery = ({ ...props }) => {
  const array = props.arr;

  console.log(array);

  let content;

  if (props.status === 'loading') {
    content = (
      <StyledCircularProgress
        sx={{
          top: { xs: '150px', md: '200px', lg: '180px', xxxl: '250px' },
          right: {
            md: '300px',
            lg: '190px',
            xl: '220px',
            xxl: '280px',
            xxxl: '310px',
          },
        }}
        size={'100px'}
      />
    );
  } else if (props.status === 'succeeded') {
    content = array.map((elem) => (
      <GridItem id={elem.id} key={elem.id} imageUrl={elem.url} galleryValue={'gallery'} />
    ));
  } else if (props.status === 'failed') {
    content = <div>{props.error}</div>;
  }

  return (
    <StyledGrid
      sx={{
        display: { xs: 'flex', md: 'grid' },
        flexDirection: { xs: 'column' },
      }}
    >
      {content}
    </StyledGrid>
  );
};

export default ImageGalleryTemplateGallery;
