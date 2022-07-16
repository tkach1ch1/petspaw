import React from 'react';
import { useSelector } from 'react-redux';
import { StyledCircularProgress } from './ChosenImage';
import { Box, styled } from '@mui/system';

import success from '../img/success-20.svg';
import error from '../img/error-20.svg';
import { Typography } from '@mui/material';

const InfoUploadBox = styled(Box)({
  width: '100%',
  padding: '18px 30px',
  backgroundColor: 'white',
  color: 'var(--gray)',
  borderRadius: '10px',
  marginTop: '20px',
  display: 'flex',
  gap: '10px',
});

const ModalUploadAsyncContent = (props) => {
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
  } else if (imageStatus === 'succeeded' && props.isUploaded) {
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
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      {content}
    </Box>
  );
};

export default ModalUploadAsyncContent;
