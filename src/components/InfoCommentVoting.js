import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/styles';
import '../styles/styles.css';
import heart from '../img/heart.svg';

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

const InfoCommentVoting = () => {
  const date = () => {
    let now = new Date();
    return now.getMinutes() < 10
      ? now.getHours() + ':' + 0 + now.getMinutes()
      : now.getHours() + ':' + now.getMinutes();
  };

  return (
    <CommentWrapper sx={{ padding: { xs: '15px', sm: 0 } }} mb={'10px'}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: 0, sm: '15px' },
        }}
        mb={'10px'}
      >
        <TimeBox>{date()}</TimeBox>
        <Typography
          sx={{
            color: 'var(--gray)',
            display: { xs: 'none', sm: 'block' },
            textAlign: { sm: 'center' },
          }}
        >
          Image ID:
          <StyleId variant='span'>&nbsp;fQSunHvl8s&nbsp;</StyleId>
          was added to Favourites
        </Typography>
        <ImgStyle src={heart} alt='sign' />
      </Box>
      <Typography
        sx={{ color: 'var(--gray)', display: { xs: 'block', sm: 'none' } }}
      >
        Image ID:
        <StyleId variant='span'>&nbsp;fQSunHvl8s&nbsp;</StyleId>
        was added to Favourites
      </Typography>
    </CommentWrapper>
  );
};
export default InfoCommentVoting;
