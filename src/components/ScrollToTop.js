import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css'
import { Box, Fab, Fade, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const StyledToTopButton = styled(Fab)({
    backgroundColor: 'var(--main-gray)',
    '&:hover' : {
        opacity: '0.7',
        transition: 'all 0.4s'
    }
})

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 10,
  });

  const handleClick = () => {
    window.scrollTo(0, 0)
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 25, right: 16 }}
      >
        <StyledToTopButton size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon color='primary' />
        </StyledToTopButton>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
