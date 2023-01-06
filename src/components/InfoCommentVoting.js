import React from 'react'
import '../styles/styles.css'
import { Typography } from '@mui/material'
import heart from '../img/heart.svg'
import smile_green from '../img/smile_green.svg'
import smile_yellow from '../img/smile_yellow.svg'
import { CommentBox, CommentWrapper, ImgStyle, StyleId, TimeBox } from './style/style'

//NOTE: Info about action that user did on VotingPage

export const InfoCommentVoting = (props) => {
    return (
        <CommentWrapper sx={{ padding: { xs: '15px', sm: 0 }, mb: '10px' }}>
            <CommentBox>
                <TimeBox>{props.date}</TimeBox>
                {/*Text position for tablet and laptop displays */}
                <Typography
                    sx={{
                        color: 'var(--gray)',
                        display: { xs: 'none', sm: 'block' },
                        textAlign: { sm: 'center' },
                    }}
                >
                    Image ID:
                    <StyleId variant='span'>&nbsp;{props.id}&nbsp;</StyleId>
                    {props.votingValue ? 'was added to ' : 'was removed from '}
                    {props.value === 0 ? 'Dislikes' : props.value === 1 ? 'Likes' : 'Favourites'}
                </Typography>
                {props.value === 0 ? (
                    <ImgStyle
                        src={smile_yellow}
                        alt='sign'
                    />
                ) : props.value === 1 ? (
                    <ImgStyle
                        src={smile_green}
                        alt='sign'
                    />
                ) : (
                    <ImgStyle
                        src={heart}
                        alt='sign'
                    />
                )}
            </CommentBox>

            {/* Text position for mobile display */}
            <Typography sx={{ color: 'var(--gray)', display: { xs: 'block', sm: 'none' } }}>
                Image ID:
                <StyleId variant='span'>&nbsp;{props.id}&nbsp;</StyleId>
                {props.votingValue ? 'was added to ' : 'was removed from '}
                {props.value === 0 ? 'Dislikes' : props.value === 1 ? 'Likes' : 'Favourites'}
            </Typography>
        </CommentWrapper>
    )
}
