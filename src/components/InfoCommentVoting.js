import React from 'react';
import { styled } from '@mui/styles';
import '../styles/styles.css';
import { Box, Typography } from '@mui/material';
import heart from '../img/heart.svg';
import smile_green from '../img/smile_green.svg';
import smile_yellow from '../img/smile_yellow.svg';

const CommentWrapper = styled(Box)({
  backgroundColor: 'var(--main-gray)',
  borderRadius: '10px',
});

const TimeBox = styled(Box)({
  backgroundColor: 'white',
  color: 'var(--black)',
  padding: '3px 10px',
  borderRadius: '5px',
});

const ImgStyle = styled('img')({
  width: '20px',
  height: '20px',
});

const StyleId = styled(Typography)({
  fontWeight: '500',
  color: 'var(--black)',
});

const InfoCommentVoting = (props) => {
  return (
    <CommentWrapper sx={{ padding: { xs: '15px', sm: 0 }, mb: '10px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: 0, sm: '15px' },
          mb: '10px',
        }}
      >
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
          was added to {props.value === 0 ? 'Dislikes' : props.value === 1 ? 'Likes' : 'Favourites'}
        </Typography>
        {props.value === 0 ? (
          <ImgStyle src={smile_yellow} alt='sign' />
        ) : props.value === 1 ? (
          <ImgStyle src={smile_green} alt='sign' />
        ) : (
          <ImgStyle src={heart} alt='sign' />
        )}
      </Box>

      {/* Text position for mobile display */}
      <Typography
        sx={{ color: 'var(--gray)', display: { xs: 'block', sm: 'none' } }}
      >
        Image ID:
        <StyleId variant='span'>&nbsp;{props.id}&nbsp;</StyleId>
        was added to  {props.value === 0 ? 'Dislikes' : props.value === 1 ? 'Likes' : 'Favourites'}
      </Typography>
    </CommentWrapper>
  );
};
export default InfoCommentVoting;
