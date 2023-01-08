import '../styles/styles.css'
import { useHover } from 'react-haiku'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import arrow from 'src/img/svg/Arrow.svg'
import arrowHov from 'src/img/svg/ArrowHov.svg'
import { StyledBackButton, StyledPageName } from './style/style'

interface PageNameProps {
    name: string
}

export const PageName = ({ name }: PageNameProps) => {
    const { hovered, ref } = useHover()

    const navigate = useNavigate()

    return (
        <Box
            display={'flex'}
            gap={'10px'}
            sx={{ mb: { xs: '10px', sm: '20px' } }}
        >
            <StyledBackButton
                ref={ref}
                onClick={() => navigate(-1)}
            >
                {hovered ? (
                    <img
                        src={arrowHov}
                        alt='arrowHov'
                    />
                ) : (
                    <img
                        src={arrow}
                        alt='arrow'
                    />
                )}
            </StyledBackButton>
            <StyledPageName>{name}</StyledPageName>
        </Box>
    )
}
