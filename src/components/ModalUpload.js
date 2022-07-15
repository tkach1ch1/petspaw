import React, { useEffect, useState } from 'react';
import { useHover } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import MainStyledButton, {
  StyledTypography,
} from '../components/MainStyledButton';
import CloseIcon from '@mui/icons-material/Close';
import ModalUploadBox from './ModalUploadBox';
import { StyledPageName } from './PageName';
import { StyledCircularProgress } from './ChosenImage';

import success from '../img/success-20.svg';
import error from '../img/error-20.svg';

import {
  loadImageAnaylsis,
  uploadImage,
} from '../redux/allImagesGalleryReducer';
import upload from '../img/upload.svg';
import upload_hov from '../img/upload_hov.svg';

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
});

export const SubTypography = styled(Typography)({
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
  fontSize: '12px',
  padding: '12px 30px',
  borderRadius: '10px',
  fontWeight: '400',
  cursor: 'pointer',
  '&:hover': {
    opacity: '0.8',
    transition: 'all 0.4s',
  },
});

const InfoUploadBox = styled(Box)({
  width: '100%',
  padding: '18px 30px',
  backgroundColor: 'white',
  color: 'var(--gray)',
  borderRadius: '10px',
  marginTop: '20px',
  display: 'flex',
  gap: '10px'
});

//NOTE: Modal window on GalleryPage by clicking Upload

const ModalUpload = () => {
  const dispatch = useDispatch();

  // Open / Close modal window
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hoverRef = React.createRef();
  const isHover = useHover(hoverRef);

  // File upload
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

  //Get image file
  const getFile = (event) => {
    let reader = new FileReader();
    reader.onload = function () {
      setFileURL(reader.result);
      setFile(event.target.files[0]);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // Get file form controll
  const onHandleFileChange = (event) => {
    getFile(event);
  };

  // This flag is useful in order to show or remove a success or fail upload message
  const [isUploaded, setIsUploaded] = useState(false);

  // Send image URL to API in order to API could proof, if it is a cat image or not
  const onHandleFileClick = () => {
    dispatch(uploadImage({ file }));
    setIsUploaded(true);
  };

  const uploadedImage = useSelector((state) => state.allImages.uploadedImage);

  // Taking from API an object with proofed image we have to send there and sending image_id for analysis in API
  let image_id = uploadedImage.id;

  useEffect(() => {
    dispatch(loadImageAnaylsis({ image_id }));
  }, [dispatch, image_id]);

  // The object with analysis info we can use for example to categorize our shared image in certain categories
  // But I'm using it to check a response from API and then show success or fail upload message
  const imageAnalysis = useSelector((state) => state.allImages.imageAnalysis);
  const imageStatus = useSelector((state) => state.allImages.statusUpload);

  let content;

  if (imageStatus === 'loading') {
    content = (
      <StyledCircularProgress
        sx={{
          top: {
            xs: '450px',
            sm: '500px',
            md: '550px',
            lg: '470px',
            xxl: '550px',
            xxxl: '550px',
          },
        }}
        size={'50px'}
        color='secondary'
      />
    );
  } else if (imageStatus === 'succeeded' && isUploaded) {
    content = (
      <InfoUploadBox>
        <img src={success} alt='success' />
        <Typography>Thanks for the Upload - Cat found!</Typography>
      </InfoUploadBox>
    );
  } else if (imageStatus === 'failed') {
    content = (
      <InfoUploadBox>
        <img src={error} alt='success' />
        <Typography>No Cat found - Try a different one</Typography>
      </InfoUploadBox>
    );
  }

  // Clear image upload box
  useEffect(() => {
    if (imageStatus === 'succeeded') {
      setFileURL(null);
      setFile(null);
    }
  }, [imageStatus]);

  // Remove success/fail upload message
  useEffect(() => {
    setTimeout(() => {
      if (imageAnalysis.length > 0) {
        setIsUploaded(false);
      }
    }, 4000);
  }, [imageAnalysis]);

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
              md: '970px',
              lg: '710px',
              xl: '660px',
              xxl: '840px',
              xxxl: '870px',
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
            justifyContent={'center'}
            mt={{ xs: '100px', md: '100px', xl: '60px', xxl: '100px' }}
            position={'relative'}
          >
            <Box mb={'40px'} textAlign={'center'}>
              <MainTypography
                sx={{
                  fontSize: { xs: '20px', md: '36px', lg: '26px', xxl: '36px' },
                  mb: '20px',
                }}
              >
                Upload a .jpg or .png Cat Image
              </MainTypography>
              <SubTypography
                sx={{ fontSize: { xs: '20px', lg: '18px', xxl: '20px' } }}
              >
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

            <ModalUploadBox files={fileURL} onChange={onHandleFileChange} />

            <Box
              mt={{
                xs: '200px',
                sm: '270px',
                md: '340px',
                lg: '270px',
                xl: '260px',
                xxl: '340px',
              }}
            >
              {file === null ? (
                <SubTypography sx={{ fontSize: '20px' }}>
                  No file selected
                </SubTypography>
              ) : (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gap={'20px'}
                  textAlign={'center'}
                >
                  <SubTypography
                    sx={{
                      fontSize: {
                        xs: '16px',
                        md: '20px',
                        lg: '16px',
                        xl: '16px',
                      },
                    }}
                  >
                    Image File Name: {file && file.name}
                  </SubTypography>
                  {imageStatus !== 'loading' && (
                    <UploadButton
                      sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                      onClick={onHandleFileClick}
                    >
                      Upload photo
                    </UploadButton>
                  )}
                </Box>
              )}
            </Box>
            {content}
          </Box>
        </StyledModalBox>
      </Modal>
    </Box>
  );
};

export default ModalUpload;
