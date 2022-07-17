import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import notfound from '../img/notfound.png';
import '../styles/styles.css';
import styled from '@emotion/styled';

const StyledImg = styled('img')`
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  ${(props) => props.theme.breakpoints.up('xs')} {
    height: 170px;
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    height: 210px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 360px;
  } ;
`;

const StyledImgNotFound = styled('img')({
  width: '100%',
  borderRadius: '20px',
});

//NOTE: Swiper on BreedsInfoPage

const SwiperInfoPage = (props) => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper slidesPerView={1} pagination={pagination} modules={[Pagination]}>
      {props.allImagesById.map((elem) =>
        elem.url ? (
          <SwiperSlide key={elem.id}>
            <StyledImg src={elem.url} alt='foto' />
          </SwiperSlide>
        ) : (
          <StyledImgNotFound src={notfound} alt='Not found' />
        )
      )}
    </Swiper>
  );
};

export default SwiperInfoPage;
