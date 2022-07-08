import React, { useRef } from 'react';
import { styled } from '@mui/styles';
import { useHover } from 'usehooks-ts';
import { Box } from '@mui/system';
import sad_smile_act from '../img/sad_smile_act.svg';
import heart_act from '../img/heart_act.svg';
import heart from '../img/heart.svg';
import smile_act from '../img/smile_act.svg';
import smile_green from '../img/smile_green.svg';
import smile_yellow from '../img/smile_yellow.svg';

const MainWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const ButtonsWrapper = styled(Box)({
  display: 'flex',
  gap: '3px',
  position: 'relative',
  bottom: '40px',
  border: '4px solid white',
  backgroundColor: 'white',
});

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    transition: 'all 0.3s',
  },
});

const ChoisesButtons = () => {
  const hoverRefLike = useRef(null);
  const isHoverLike = useHover(hoverRefLike);

  const hoverRefFav = useRef(null);
  const isHoverFav = useHover(hoverRefFav);

  const hoverRefDislike = useRef(null);
  const isHoverDislike = useHover(hoverRefDislike);

  return (
    <MainWrapper>
      <ButtonsWrapper sx={{ borderRadius: { xs: '10px', sm: '20px' } }}>
        <StyledBox
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
            <img src={smile_green} alt='smile' />
          ) : (
            <img src={smile_act} alt='smile' />
          )}
        </StyledBox>
        <StyledBox
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
            <img src={heart} alt='heart' />
          ) : (
            <img src={heart_act} alt='heart' />
          )}
        </StyledBox>
        <StyledBox
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
            <img src={smile_yellow} alt='sad_smile' />
          ) : (
            <img src={sad_smile_act} alt='sad_smile' />
          )}
        </StyledBox>
      </ButtonsWrapper>
    </MainWrapper>
  );
};

export default ChoisesButtons;
