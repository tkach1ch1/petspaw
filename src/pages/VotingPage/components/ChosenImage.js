import React, { useEffect } from 'react'
import '../../../styles/styles.css'
import { fetchImage } from '../../../redux/votingPageReducer'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { StyledCircularProgress } from '../../../components/style/style'
import { nanoid } from 'nanoid'

const ImgStyle = styled('img')`
    ${(props) => props.theme.breakpoints.up('xs')} {
        height: 170px;
    }
    ${(props) => props.theme.breakpoints.up('sm')} {
        height: 250px;
    }
    ${(props) => props.theme.breakpoints.up('md')} {
        height: 360px;
    }
`

export const ChosenImage = () => {
    const dispatch = useDispatch()

    const imageVoting = useSelector((state) => state.votingPage.image)
    const imageStatus = useSelector((state) => state.votingPage.status)
    const imageError = useSelector((state) => state.votingPage.error)

    useEffect(() => {
        dispatch(fetchImage())
    }, [dispatch])

    let content

    //NOTE: Taking image from API and showing it on Voting page

    if (imageStatus === 'loading') {
        content = (
            <StyledCircularProgress
                sx={{ top: { xs: '10px', sm: '30px', md: '90px' } }}
                size={'100px'}
                color='secondary'
            />
        )
    } else if (imageStatus === 'succeeded' && imageVoting.length > 0) {
        content = imageVoting.map((elem) => (
            <ImgStyle
                src={imageVoting && elem.url}
                key={nanoid}
                alt='cat_photo'
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '20px',
                }}
            />
        ))
    } else if (imageStatus === 'failed') {
        content = <div>{imageError}</div>
    }

    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            position={'relative'}
        >
            {content}
        </Box>
    )
}
