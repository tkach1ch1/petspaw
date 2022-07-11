import React from 'react';
import '../styles/styles.css';
import { Box, styled } from '@mui/system';
import { StyledCircularProgress } from '../components/ChosenImage';
import GridItem from './GridItem';

const StyledGrid = styled(Box)({
  position: 'relative',
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

const ImageGalleryTemplate = ({ ...props }) => {
  const array = props.arr;

  // console.log(array.map(elem => elem.sort()))

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
        ? array.map((elem) => (
            <GridItem
              id={elem.id}
              key={elem.id}
              name={elem.name}
              image={elem.image}
              imageUrl={elem.image && elem.image.url}
            />
          )).reverse()
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
      {/* <StyledItem sx={{ gridArea: 'a', height: { xs: '205px', md: '100%' } }}>
        <StyledImg src={foto} alt='foto' />
        <BackBox>
          <ToInfoPageButton width={props.width} height={props.height} padding={props.padding} bottom={props.bottom}>
            {props.param}
          </ToInfoPageButton>
        </BackBox>
      </StyledItem> */}
      {/* <StyledItem sx={{ height: { xs: '205px', md: '100%' } }}>
        <StyledImg src={foto} alt='foto' />
        <BackBox>
          <ToInfoPageButton
            width={props.width}
            height={props.height}
            padding={props.padding}
            bottom={props.bottom}
          >
            {props.param}
          </ToInfoPageButton>
        </BackBox>
      </StyledItem>
      <StyledItem></StyledItem>
      <StyledItem sx={{ gridArea: 'd' }}></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem sx={{ gridArea: 'h' }}></StyledItem>
      <StyledItem></StyledItem>
      <StyledItem sx={{ gridArea: 'i' }}></StyledItem>
      <StyledItem></StyledItem> */}
    </StyledGrid>
  );
};

export default ImageGalleryTemplate;
