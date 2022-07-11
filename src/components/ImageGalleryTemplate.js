import React from 'react';
import '../styles/styles.css';
import { Box, styled } from '@mui/system';
import { StyledCircularProgress } from '../components/ChosenImage';
import notfound from '../img/notfound.png';

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

const StyledItem = styled(Box)({
  backgroundColor: '#C4C4C4',
  position: 'relative',
  borderRadius: '20px',
  cursor: 'pointer',
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

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '20px',
});

const ImageGalleryTemplate = ({ ...props }) => {
  const array = props.arr;

  // const newArray = {...array}

  // newArray[30].image = {
  //     url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG',
  //   };
  // array[41] = {
  //   url: 'https://www.thegreatcat.org/wp-content/uploads/2020/05/Malayan-Cat.jpg',
  // };

  // console.log(newArray[30]);

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
      <StyledItem key={elem.id} sx={{ height: { xs: '205px', md: '100%' } }}>
        {elem.image ? (
          <StyledImg src={elem.image.url} alt={elem.name} />
        ) : (
          <StyledImg src={notfound} alt='Not found' />
        )}

        <BackBox>
          <ToInfoPageButton
            width={props.width}
            height={props.height}
            padding={props.padding}
            bottom={props.bottom}
          >
            {elem.name}
          </ToInfoPageButton>
        </BackBox>
      </StyledItem>
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
