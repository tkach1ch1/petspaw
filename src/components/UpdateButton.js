import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React, { useRef } from 'react';
import '../styles/styles.css';
import update from '../img/update.svg';
import update_hov from '../img/update_hov.svg';
import { useHover } from 'usehooks-ts';

const StyledBox = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '10px',
  justifyContent: 'center',
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'var(--main-red)',
    transition: 'all 0.4s',
  },
});

const UpdateButton = ({ ...props }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <StyledBox
      ref={hoverRef}
      display={{ xs: props.displayXS, sm: props.displaySM }}
      width={props.width}
      height={props.height}
      padding={props.padding}
    >
      {isHover ? (
        <img src={update_hov} alt='update_hov' />
      ) : (
        <img src={update} alt='update' />
      )}
    </StyledBox>
  );
};

export default UpdateButton;
