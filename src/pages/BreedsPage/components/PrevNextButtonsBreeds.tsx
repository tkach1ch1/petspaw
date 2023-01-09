import React from 'react'
import { useHover } from 'usehooks-ts'
import 'src/styles/styles.css'
import { Box } from '@mui/material'
import { MainStyledButton } from 'src/components/MainStyledButton'
import arrow_prev from 'src/img/svg/arrow_prew.svg'
import arrow_next from 'src/img/svg/arrow_next.svg'
import arrow_prev_hov from 'src/img/svg/arrow_prew_hov.svg'
import arrow_next_hov from 'src/img/svg/arrow_next_hov.svg'
import arrow_prev_dis from 'src/img/svg/arrow_prev_dis.svg'
import arrow_next_dis from 'src/img/svg/arrow_next_dis.svg'
import { StyledTypography } from 'src/components/style/style'
import { DisabledButton } from '../style/style'
import { usePrevAndNextButtons } from '../hooks/usePrevAndNextButtons'
import { useAppSelector } from 'src/hooks/reduxHooks'

interface PrevNextButtonsBreedsProps {
    limit: number
}

export const PrevNextButtonsBreeds = ({ limit }: PrevNextButtonsBreedsProps) => {
    // Buttons hover
    const hoverRefPrev = React.createRef<HTMLButtonElement>()
    const isHoverPrev = useHover(hoverRefPrev)

    const hoverRefNext = React.createRef<HTMLButtonElement>()
    const isHoverNext = useHover(hoverRefNext)

    const breedPage = useAppSelector((state) => state.breedPage.page)
    const limitedBreeds = useAppSelector((state) => state.allBreeds.limBreeds)

    const { onHandleNextClick, onHandlePrevClick } = usePrevAndNextButtons(limit)

    return (
        <Box
            display={'flex'}
            mt={{ xs: '50px', xxl: '130px', xxxl: '150px' }}
            justifyContent={'center'}
            gap={{ xs: '20px', sm: '40px' }}
        >
            {/* User can't click one more page backwards if it is already a first page */}
            {breedPage !== 0 ? (
                <MainStyledButton
                    padding='11px 35px'
                    ref={hoverRefPrev}
                    onClick={onHandlePrevClick}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        {isHoverPrev ? (
                            <img
                                src={arrow_prev_hov}
                                alt='arrow_prev_hov'
                            />
                        ) : (
                            <img
                                src={arrow_prev}
                                alt='arrow_prev'
                            />
                        )}
                    </Box>
                    <StyledTypography>Prev</StyledTypography>
                </MainStyledButton>
            ) : (
                <DisabledButton
                    padding='11px 35px'
                    ref={hoverRefPrev}
                    onClick={onHandlePrevClick}
                >
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <img
                            src={arrow_prev_dis}
                            alt='disabled'
                        />
                    </Box>
                    <StyledTypography>Prev</StyledTypography>
                </DisabledButton>
            )}

            {/* User can't click one more page forward if it is already a last page */}
            {limitedBreeds.length === Number(limit) ? (
                <MainStyledButton
                    padding='11px 35px'
                    ref={hoverRefNext}
                    onClick={onHandleNextClick}
                >
                    <StyledTypography>Next</StyledTypography>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        {isHoverNext ? (
                            <img
                                src={arrow_next_hov}
                                alt='arrow_next_hov'
                            />
                        ) : (
                            <img
                                src={arrow_next}
                                alt='arrow_next'
                            />
                        )}
                    </Box>
                </MainStyledButton>
            ) : (
                <DisabledButton
                    padding='11px 35px'
                    ref={hoverRefNext}
                    onClick={onHandleNextClick}
                >
                    <StyledTypography>Next</StyledTypography>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <img
                            src={arrow_next_dis}
                            alt='arrow_next_hov'
                        />
                    </Box>
                </DisabledButton>
            )}
        </Box>
    )
}
