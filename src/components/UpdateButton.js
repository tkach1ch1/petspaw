import React, { useContext, useRef } from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { useDispatch } from 'react-redux';
import { useHover } from 'usehooks-ts';
import { Box } from '@mui/material';
import update from '../img/update.svg';
import update_hov from '../img/update_hov.svg';
import { fetchImages } from '../redux/allImagesGalleryReducer';
import Context from './context';

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

//NOTE: Update button on GalleryPage in order to refresh images from API

const UpdateButton = ({ ...props }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const dispatch = useDispatch();

  const value = useContext(Context)

  return (
    <StyledBox
      ref={hoverRef}
      display={{ xs: props.displayXS, sm: props.displaySM }}
      width={props.width}
      height={props.height}
      padding={props.padding}
      onClick={() =>
        dispatch(fetchImages(value))
      }
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
