import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import notfound from '../img/notfound.png';

const StyledImg = styled('img')({
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '20px',
});

const useStyles = makeStyles((theme) => ({
  imgSize: {
    [theme.breakpoints.up('xs')]: {
      height: '170px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '210px',
    },
    [theme.breakpoints.up('md')]: {
      height: '360px',
    },
  },
}));

const StyledImgNotFound = styled('img')({
  width: '100%',
  borderRadius: '20px',
});

//NOTE: Swiper on BreedsInfoPage

const SwiperInfoPage = (props) => {
  const classes = useStyles();

  const pagination = {
    clickable: true,
  };
  return (
    <Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]}>
      {props.allImagesById.map((elem) =>
        elem.url ? (
          <SwiperSlide key={elem.id}>
            <StyledImg src={elem.url} alt='foto' className={classes.imgSize} />
          </SwiperSlide>
        ) : (
          <StyledImgNotFound src={notfound} alt='Not found' />
        )
      )}
    </Swiper>
  );
};

export default SwiperInfoPage;
