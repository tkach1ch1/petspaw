import React from 'react';
import '../styles/styles.css';
import { Box, styled } from '@mui/system';
import { StyledCircularProgress } from '../components/ChosenImage';
import GridItem from './GridItem';

const StyledGrid = styled(Box)({
  position: 'relative',
  gridGap: '20px',
  gridAutoRows: '150px',
  gridAutoFlow: 'dense',
  gridTemplateColumns: 'repeat(3, 1fr)',
});

const ImageGalleryTemplate = ({ ...props }) => {
  const array = props.arr;

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
    content =
      props.selectedBreed === '' && props.valueAB
        ? array.map((elem) => (
            <GridItem
              id={elem.id}
              key={elem.id}
              name={elem.name}
              image={elem.image}
              imageUrl={elem.image && elem.image.url}
            />
          ))
        : props.selectedBreed === '' && props.valueBA
        ? array
            .map((elem) => (
              <GridItem
                id={elem.id}
                key={elem.id}
                name={elem.name}
                image={elem.image}
                imageUrl={elem.image && elem.image.url}
              />
            ))
            .reverse()
        : array
            .filter((elem) => elem.name === props.selectedBreed)
            .map((elem) => (
              <GridItem
                id={elem.id}
                key={elem.id}
                name={elem.name}
                image={elem.image}
                imageUrl={elem.image.url}
              />
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

export default ImageGalleryTemplate;
