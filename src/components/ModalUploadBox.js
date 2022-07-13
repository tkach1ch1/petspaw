import React from 'react';
import '../styles/styles.css';
import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import { MainTypography, SubTypography } from './ModalUpload';
import unpload_bg from '../img/upload-bg.png';

const UploadBox = styled(Button)({
  position: 'absolute',
  left: 0,
  width: '100%',
  height: '320px',
  textTransform: 'none',
  border: '2px dashed var(--light-red)',
  borderRadius: '20px',
  padding: '20px 40px',

  backgroundColor: 'white',
  cursor: 'pointer',
});

const ModalUploadBox = (props) => {
  return (
    <Box>
      <Box onChange={props.onChange}>
        <input
          accept='image/*'
          style={{ display: 'none' }}
          id='raised-button-file'
          type='file'
        />
        <label htmlFor='raised-button-file' style={{ mb: '20px' }}>
          <UploadBox variant='raised' component='div'>
            {props.value === '' ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img src={unpload_bg} alt={'foto'} style={{ margin: '60px' }} />
                <Box
                  display={'flex'}
                  alignItems={'flex-start'}
                  gap={'5px'}
                  position={'absolute'}
                >
                  <MainTypography sx={{ fontSize: '20px' }}>
                    Drag here
                  </MainTypography>
                  <SubTypography>your file or</SubTypography>
                  <MainTypography sx={{ fontSize: '20px' }}>
                    Click here
                  </MainTypography>
                  <SubTypography>to upload</SubTypography>
                </Box>{' '}
              </Box>
            ) : (
              <img src={props.value} alt={'uploaded_foto'} />
            )}
          </UploadBox>
        </label>
      </Box>
    </Box>
  );
};

export default ModalUploadBox;
