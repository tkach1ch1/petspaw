import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import '../styles/styles.css';
import arrow from '../img/Arrow.svg';
import arrowHov from '../img/ArrowHov.svg';
import PropTypes from 'prop-types';
import { useHover } from 'usehooks-ts';

const StyledBackButton = styled(Box)({
  padding: '10px 14px',
  backgroundColor: 'var(--light-red)',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'var(--main-red)',
    transition: 'all 0.3s'
  },
});

const StyledPageName = styled(Box)({
  padding: '5px 30px',
  backgroundColor: 'var(--main-red)',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: '500',
  borderRadius: '10px',
  letterSpacing: '2px',
});

const PageName = (props) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <Box display={'flex'} gap={'10px'} mb={'20px'}>
      <StyledBackButton ref={hoverRef}>
        {isHover ? (
          <img src={arrowHov} alt='arrowHov' />
        ) : (
          <img src={arrow} alt='arrow' />
        )}
      </StyledBackButton>
      <StyledPageName>{props.name}</StyledPageName>
    </Box>
  );
};

PageName.propTypes = {
  onHandleMouseEnter: PropTypes.func,
  onHandleMouseLeave: PropTypes.func,
  isHovering: PropTypes.bool,
};

export default PageName;
