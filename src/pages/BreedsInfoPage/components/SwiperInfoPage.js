import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import notfound from '../../../img/notfound.png'
import '../../../styles/styles.css'
import { StyledSwiperImg, StyledImgNotFound } from '../style/style'
import { nanoid } from 'nanoid'

//NOTE: Swiper on BreedsInfoPage

export const SwiperInfoPage = (props) => {
    const pagination = {
        clickable: true,
    }
    return (
        <Swiper
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            style={{ width: '100%', position: 'absolute', height: '100%' }}
        >
            {props.allImagesById.map((elem) =>
                elem.url ? (
                    <SwiperSlide key={nanoid}>
                        <StyledSwiperImg
                            src={elem.url}
                            alt='foto'
                        />
                    </SwiperSlide>
                ) : (
                    <StyledImgNotFound
                        src={notfound}
                        alt='Not found'
                    />
                )
            )}
        </Swiper>
    )
}
