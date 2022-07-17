import React from 'react';
import { styled } from '@mui/system';
import '../styles/styles.css';
import { useHover } from 'react-haiku';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import arrow from '../img/Arrow.svg';
import arrowHov from '../img/ArrowHov.svg';

const StyledBackButton = styled(Box)({
  padding: '10px 14px',
  backgroundColor: 'var(--light-red)',
  borderRadius: '10px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'var(--main-red)',
    transition: 'all 0.3s',
  },
});

export const StyledPageName = styled(Box)({
  backgroundColor: 'var(--main-red)',
  padding: '5px 30px',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: '500',
  borderRadius: '10px',
  letterSpacing: '2px',
});

const PageName = (props) => {
  const { hovered, ref } = useHover();

  const navigate = useNavigate();

  return (
    <Box display={'flex'} gap={'10px'} sx={{ mb: { xs: '10px', sm: '20px' } }}>
      <StyledBackButton ref={ref} onClick={() => navigate(-1)}>
        {hovered ? (
          <img src={arrowHov} alt='arrowHov' />
        ) : (
          <img src={arrow} alt='arrow' />
        )}
      </StyledBackButton>
      <StyledPageName>{props.name}</StyledPageName>
    </Box>
  );
};

export default PageName;
