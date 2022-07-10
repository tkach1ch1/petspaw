import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import foto from '../img/image 1.png';

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SwiperInfoPage = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]}>
      <SwiperSlide>
        <StyledImg src={foto} alt='foto' />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImg src={foto} alt='foto' />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImg src={foto} alt='foto' />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImg src={foto} alt='foto' />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperInfoPage;