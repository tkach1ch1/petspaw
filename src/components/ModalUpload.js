import React, { useState } from 'react';
import { useHover } from 'usehooks-ts';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import MainStyledButton, {
  StyledTypography,
} from '../components/MainStyledButton';
import CloseIcon from '@mui/icons-material/Close';

import upload from '../img/upload.svg';
import upload_hov from '../img/upload_hov.svg';

import ModalUploadBox from './ModalUploadBox';
import { uploadImage } from '../redux/allImagesGalleryReducer';
import { StyledPageName } from './PageName';

const StyledModalBox = styled(Box)({
  outline: 'none',
  border: 'none',
  padding: '20px',
  position: 'absolute',
  backgroundColor: 'var(--main-gray)',
  overflow: 'hidden',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 0,
  },
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

export const MainTypography = styled(Typography)({
  fontWeight: '500',
  marginBottom: '10px',
});

export const SubTypography = styled(Typography)({
  fontSize: '20px',
  color: 'var(--gray)',
});

const StyledLink = styled('a')({
  color: 'var(--main-red)',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.6',
    transition: 'all 0.3s',
  },
});

const UploadButton = styled(StyledPageName)({
  width: 'fit-content',
  fontSize: '12px',
  padding: '12px 30px',
  borderRadius: '10px',
  fontWeight: '400',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.8',
    transition: 'all 0.4s'
  },
});

const ModalUpload = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hoverRef = React.createRef();
  const isHover = useHover(hoverRef);

  const [file, setFile] = useState('');

  const onHandleFileChange = (event) => {
    setFile(event.target.value);
  };

  const dispatch = useDispatch();

  const onHandleFileClick = () => {
    dispatch(uploadImage({ file }));
    setFile('')
  };

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

          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={'100px'}
            position={'relative'}
          >
            <Box mb={'40px'}>
              <MainTypography sx={{ fontSize: { md: '36px' } }}>
                Upload a .jpg or .png Cat Image
              </MainTypography>
              <SubTypography>
                Any uploads must comply with the{' '}
                <StyledLink
                  href='https://thecatapi.com/privacy'
                  target='_blank'
                >
                  upload guidelines
                </StyledLink>{' '}
                or face deletion.
              </SubTypography>
            </Box>

            <ModalUploadBox value={file} onChange={onHandleFileChange} />

            <Box mt={'340px'}>
              {file === '' ? (
                <SubTypography>No file selected</SubTypography>
              ) : (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'20px'}
                >
                  <SubTypography>Image File Name: {file} </SubTypography>
                  <UploadButton onClick={onHandleFileClick} style={{}}>
                    Upload photo
                  </UploadButton>
                </Box>
              )}
            </Box>
          </Box>
        </StyledModalBox>
      </Modal>
    </Box>
  );
};

export default ModalUpload;
