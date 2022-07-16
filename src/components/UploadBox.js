import React from 'react';
import '../styles/styles.css';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';

const StyeldUploadBoxMain = styled(Button)({
  position: 'absolute',
  left: 0,
  width: '100%',
  textTransform: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
});

const StyledUploadBox = styled(StyeldUploadBoxMain)({
  backgroundColor: 'white',
  border: '4px dashed var(--light-red)',
});

const StyledUploadBoxFail = styled(StyeldUploadBoxMain)({
  backgroundColor: 'var(--light-red)',
  border: '4px dashed var(--main-red)',
});

const UploadBox = ({ children }) => {
  const imageStatus = useSelector((state) => state.allImages.statusUpload);

  return (
    <Box mt={'-10px'}>
      {imageStatus === 'failed' ? (
        <StyledUploadBoxFail variant='raised' component='div'>
          {children}
        </StyledUploadBoxFail>
      ) : (
        <StyledUploadBox variant='raised' component='div'>
          {children}
        </StyledUploadBox>
      )}
    </Box>
  );
};

export default UploadBox;
