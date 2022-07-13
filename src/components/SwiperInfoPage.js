import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import notfound from '../img/notfound.png';

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
});

const StyledImgNotFound = styled('img')({
  width: '100%',
  height: '450px',
  borderRadius: '20px',
});

//NOTE: Swiper on BreedsInfoPage

const SwiperInfoPage = (props) => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]}>
      <SwiperSlide>
        {props.image ? (
          <StyledImg src={props.image} alt='foto' />
        ) : (
          <StyledImgNotFound src={notfound} alt='Not found' />
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperInfoPage;
