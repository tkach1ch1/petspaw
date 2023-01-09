import { useRef } from 'react'
import { useHover } from 'usehooks-ts'
import sad_smile_act from 'src/img/svg/sad_smile_act.svg'
import heart_act from 'src/img/svg/heart_act.svg'
import heart from 'src/img/svg/heart.svg'
import smile_act from 'src/img/svg/smile_act.svg'
import smile_green from 'src/img/svg/smile_green.svg'
import smile_yellow from 'src/img/svg/smile_yellow.svg'
import { ButtonsWrapper, MainWrapper, StyledBox } from '../style/style'
import { useChoisesButtons } from '../hooks/useChoisesButtons'

//NOTE: On Voting page user can choose between three buttons and add onClick choosen image to likes/favourites/dislikes page

export const ChoisesButtons = () => {
    const hoverRefLike = useRef(null)
    const isHoverLike = useHover(hoverRefLike)

    const hoverRefFav = useRef(null)
    const isHoverFav = useHover(hoverRefFav)

    const hoverRefDislike = useRef(null)
    const isHoverDislike = useHover(hoverRefDislike)

    const { handleClickFav, handleClickLikes, handleClickDislikes } = useChoisesButtons()

    return (
        <MainWrapper>
            <ButtonsWrapper
                sx={{
                    borderRadius: { xs: '10px', sm: '20px' },
                    bottom: '0px',
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
