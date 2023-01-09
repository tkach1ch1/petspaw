import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import notfound from 'src/img/notfound.png'
import 'src/styles/styles.css'
import { StyledSwiperImg, StyledImgNotFound, StyledSwiper } from '../style/style'
import { nanoid } from 'nanoid'
import { ImagesByIdElements } from 'src/redux/allBreedsReducer'

interface SwiperInfoPageProps {
    allImagesByIdArray: ImagesByIdElements[]
}

//NOTE: Swiper on BreedsInfoPage
export const SwiperInfoPage = ({ allImagesByIdArray }: SwiperInfoPageProps) => {
    const pagination = {
        clickable: true,
    }

    return (
        <StyledSwiper
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
        >
            {allImagesByIdArray.map((elem) =>
                elem.url ? (
                    <SwiperSlide key={nanoid()}>
                        <StyledSwiperImg
                            src={elem.url}
                            alt={elem.name}
                        />
                    </SwiperSlide>
                ) : (
                    <StyledImgNotFound
                        src={notfound}
                        alt='Not found'
                    />
                )
            )}
        </StyledSwiper>
    )
}
