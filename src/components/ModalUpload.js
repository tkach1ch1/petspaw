import React, { useState } from 'react';
import { useHover } from 'usehooks-ts';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { Box, IconButton, Modal } from '@mui/material';
import MainStyledButton, {
  StyledTypography,
} from '../components/MainStyledButton';
import CloseIcon from '@mui/icons-material/Close';

import upload from '../img/upload.svg';
import upload_hov from '../img/upload_hov.svg';

const StyledModalBox = styled(Box)({
  outline: 'none',
  border: 'none',
  padding: '20px',
  position: 'absolute',
  backgroundColor: 'var(--main-gray)',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: '30px',
  padding: '10px',
  width: '60px',
  backgroundColor: 'white',
  borderRadius: '20px',
  marginBottom: '20px',
  '&:hover': {
    backgroundColor: 'var(--light-red)',
    transition: 'all 0.3s',
  },
});

const ModalUpload = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hoverRef = React.createRef();
  const isHover = useHover(hoverRef);

  return (
    <Box>
      <MainStyledButton padding='11px 35px' ref={hoverRef} onClick={handleOpen}>
        <Box display={'flex'}>
          {isHover ? (
            <img src={upload_hov} alt='upload_hov' />
          ) : (
            <img src={upload} alt='upload' />
          )}
        </Box>
        <StyledTypography>Upload</StyledTypography>
      </MainStyledButton>

      <Modal
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        open={open}
      >
        <StyledModalBox
          sx={{
            width: {
              md: '92%',
              lg: '500px',
              xl: '570px',
              xxl: '680px',
              xxxl: '750px',
            },
            height: {
              xs: '100%',
              md: 'auto',
              lg: '705px',
              xl: '660px',
              xxl: '840px',
              xxxl: '865px',
            },
            right: { xs: 0, lg: 0, xxxl: '210px' },
            left: { xs: 0, lg: 'auto' },
            margin: { md: '30px' },

            borderRadius: { md: '20px' },
          }}
        >
          <CloseButton onClick={handleClose}>
            <CloseIcon sx={{ fontSize: '38px', color: 'var(--main-red)' }} />
          </CloseButton>

          <Box display={'flex'} flexDirection={'column'}>
            
          </Box>
        </StyledModalBox>
      </Modal>
    </Box>
  );
};

export default ModalUpload;
