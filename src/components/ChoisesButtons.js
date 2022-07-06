import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/styles';
import sad_smile_act from '../img/sad_smile_act.svg';
import heart_act from '../img/heart_act.svg';
import smile_act from '../img/smile_act.svg';

const ButtonsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const Box1 = styled(Box)({
  backgroundColor: '#97EAB9',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '10px 0 0 10px',
});

const Box2 = styled(Box)({
  backgroundColor: '#FF868E',
  display: 'flex',
  alignItems: 'center',
});

const Box3 = styled(Box)({
  backgroundColor: '#FFD280',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0 10px 10px 0',
});

const ChoisesButtons = () => {
  return (
    <ButtonsWrapper>
      <Box
        sx={{
          width: '194px',
          display: 'flex',
          gap: '3px',
          position: 'relative',
          bottom: '40px',
          borderRadius: '10px',
          border: '4px solid white',
          backgroundColor: 'white',
          mb: '-36px'
        }}
      >
        <Box1 sx={{ padding: { xs: '15px' } }}>
          <img src={smile_act} alt='smile' />
        </Box1>
        <Box2 sx={{ padding: { xs: '15px' } }}>
          <img src={heart_act} alt='heart' />
        </Box2>
        <Box3 sx={{ padding: { xs: '15px' } }}>
          <img src={sad_smile_act} alt='sad_smile' />
        </Box3>
      </Box>
    </ButtonsWrapper>
  );
};

export default ChoisesButtons;
