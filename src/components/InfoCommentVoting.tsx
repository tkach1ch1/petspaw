import '../styles/styles.css'
import { Typography } from '@mui/material'
import heart from 'src/img/svg/heart.svg'
import smile_green from 'src/img/svg/smile_green.svg'
import smile_yellow from 'src/img/svg/smile_yellow.svg'
import { CommentBox, CommentWrapper, ImgStyle, StyleId, TimeBox } from './style/style'

interface InfoCommentVotingProps {
    id: string
    date: string
    value?: number
    votingValue?: string
}

//NOTE: Info about action that user did on VotingPage
export const InfoCommentVoting = ({ id, date, value, votingValue }: InfoCommentVotingProps) => {
    return (
        <CommentWrapper sx={{ padding: { xs: '15px', sm: 0 }, mb: '10px' }}>
            <CommentBox>
                <TimeBox>{date}</TimeBox>
                {/*Text position for tablet and laptop displays */}
                <Typography
                    sx={{
                        color: 'var(--gray)',
                        display: { xs: 'none', sm: 'block' },
                        textAlign: { sm: 'center' },
                    }}
                >
                    Image ID:
                    <StyleId>&nbsp;{id}&nbsp;</StyleId>
                    {votingValue ? 'was added to ' : 'was removed from '}
                    {value === 0 ? 'Dislikes' : value === 1 ? 'Likes' : 'Favourites'}
                </Typography>
                {value === 0 ? (
                    <ImgStyle
                        src={smile_yellow}
                        alt='sign'
                    />
                ) : value === 1 ? (
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
                <StyleId>&nbsp;{id}&nbsp;</StyleId>
                {votingValue ? 'was added to ' : 'was removed from '}
                {value === 0 ? 'Dislikes' : value === 1 ? 'Likes' : 'Favourites'}
            </Typography>
        </CommentWrapper>
    )
}
