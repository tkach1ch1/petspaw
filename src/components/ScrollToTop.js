import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { Box, Fab, Fade, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledToTopButton = styled(Fab)({
  backgroundColor: 'var(--main-gray)',
  '&:hover': {
    opacity: '0.7',
    transition: 'all 0.4s',
  },
});

const ScrollBox = styled(Box)({
  position: 'fixed',
  bottom: 25,
  right: 16,
});

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 10,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Fade in={trigger}>
      <ScrollBox onClick={handleClick} role='presentation'>
        <StyledToTopButton size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon color='primary' />
        </StyledToTopButton>
      </ScrollBox>
    </Fade>
  );
};

export default ScrollToTop;
