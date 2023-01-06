import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImage } from '../../../redux/votingPageReducer'
import { Box } from '@mui/system'
import sad_smile_act from '../../../img/sad_smile_act.svg'
import heart_act from '../../../img/heart_act.svg'
import heart from '../../../img/heart.svg'
import smile_act from '../../../img/smile_act.svg'
import smile_green from '../../../img/smile_green.svg'
import smile_yellow from '../../../img/smile_yellow.svg'
import {
    addToAll,
    addToDislikes,
    addToFavourites,
    addToLikes,
} from '../../../redux/favLikesDislikesReducer'
import styled from '@emotion/styled'

const MainWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
})

const ButtonsWrapper = styled(Box)({
    display: 'flex',
    gap: '3px',
    position: 'relative',
    border: '4px solid white',
    backgroundColor: 'white',
})

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        transition: 'all 0.3s',
    },
})

//NOTE: On Voting page user can choose between three buttons and add onClick choosen image to likes/favourites/dislikes page

export const ChoisesButtons = () => {
    const dispatch = useDispatch()

    const fetchImageInfo = useSelector((state) => state.votingPage.image)

    const hoverRefLike = useRef(null)
    const isHoverLike = useHover(hoverRefLike)

    const hoverRefFav = useRef(null)
    const isHoverFav = useHover(hoverRefFav)

    const hoverRefDislike = useRef(null)
    const isHoverDislike = useHover(hoverRefDislike)

    const nowDate = () => {
        let dateNow = new Date()
        let dateNowMinAndSec =
            dateNow.getMinutes() < 10
                ? dateNow.getHours() + ':' + 0 + dateNow.getMinutes()
                : dateNow.getHours() + ':' + dateNow.getMinutes()
        return dateNowMinAndSec.toString()
    }

    const getInfoFav = () => {
        const newFav = {
            id: fetchImageInfo[0].id,
            url: fetchImageInfo[0].url,
            value: 2,
            date: nowDate(),
        }

        return newFav
    }
    const getInfoLikes = () => {
        const newFav = {
            id: fetchImageInfo[0].id,
            url: fetchImageInfo[0].url,
            value: 1,
            date: nowDate(),
        }

        return newFav
    }
    const getInfoDislikes = () => {
        const newFav = {
            id: fetchImageInfo[0].id,
            url: fetchImageInfo[0].url,
            value: 0,
            date: nowDate(),
        }

        return newFav
    }

    //On one of three buttons click action
    //At first the image will be added to separate array in order to show it on certain page (likes/dis/fav)
    //Then the image will be added to main array where all actions are stacking to show them in the InfoCommentVoting component
    //The last one dispatch reloaded the image

    const handleClickFav = () => {
        dispatch(addToFavourites(getInfoFav()))
        dispatch(addToAll(getInfoFav()))
        dispatch(fetchImage())
    }
    const handleClickLikes = () => {
        dispatch(addToLikes(getInfoLikes()))
        dispatch(addToAll(getInfoLikes()))
        dispatch(fetchImage())
    }

    const handleClickDislikes = () => {
        dispatch(addToDislikes(getInfoDislikes()))
        dispatch(addToAll(getInfoDislikes()))
        dispatch(fetchImage())
    }

    return (
        <MainWrapper>
            <ButtonsWrapper
                sx={{
                    borderRadius: { xs: '10px', sm: '20px' },
                    bottom: { xs: '60px', sm: '45px', md: '85px' },
                }}
            >
                <StyledBox
                    onClick={handleClickLikes}
                    sx={{
                        padding: { xs: '15px', sm: '25px' },
                        borderRadius: { xs: '10px 0 0 10px', sm: '20px 0 0 20px' },
                        backgroundColor: '#97EAB9',
                        '&:hover': {
                            backgroundColor: 'rgba(151, 234, 185, 0.3)',
                        },
                    }}
                    ref={hoverRefLike}
                >
                    {isHoverLike ? (
                        <img
                            src={smile_green}
                            alt='smile'
                        />
                    ) : (
                        <img
                            src={smile_act}
                            alt='smile'
                        />
                    )}
                </StyledBox>
                <StyledBox
                    onClick={handleClickFav}
                    sx={{
                        padding: { xs: '15px', sm: '25px' },
                        backgroundColor: '#FF868E',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 134, 142, 0.3)',
                        },
                    }}
                    ref={hoverRefFav}
                >
                    {isHoverFav ? (
                        <img
                            src={heart}
                            alt='heart'
                        />
                    ) : (
                        <img
                            src={heart_act}
                            alt='heart'
                        />
                    )}
                </StyledBox>
                <StyledBox
                    onClick={handleClickDislikes}
                    sx={{
                        padding: { xs: '15px', sm: '25px' },
                        borderRadius: { xs: '0 10px 10px 0', sm: '0 20px 20px 0' },
                        backgroundColor: '#FFD280',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 210, 128, 0.3)',
                        },
                    }}
                    ref={hoverRefDislike}
                >
                    {isHoverDislike ? (
                        <img
                            src={smile_yellow}
                            alt='sad_smile'
                        />
                    ) : (
                        <img
                            src={sad_smile_act}
                            alt='sad_smile'
                        />
                    )}
                </StyledBox>
            </ButtonsWrapper>
        </MainWrapper>
    )
}
