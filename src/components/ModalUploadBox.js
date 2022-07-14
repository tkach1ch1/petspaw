import React from 'react';
import '../styles/styles.css';
import { makeStyles, styled } from '@mui/styles';
import { Box, Button } from '@mui/material';
import { MainTypography, SubTypography } from './ModalUpload';
import unpload_bg from '../img/upload-bg.png';

const UploadBox = styled(Button)({
  position: 'absolute',
  left: 0,
  width: '100%',
  textTransform: 'none',
  border: '2px dashed var(--light-red)',
  borderRadius: '20px',

  backgroundColor: 'white',
  cursor: 'pointer',
});

const ImgBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const useStyles = makeStyles((theme) => ({
  imgSize: {
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    },
  },
}));

const ModalUploadBox = (props) => {
  const classes = useStyles();

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
          <UploadBox
            variant='raised'
            component='div'
            sx={{ padding: { xs: '10px 30px', sm: '20px 40px' } }}
          >
            {props.value === '' ? (
              <ImgBox
                sx={{
                  height: {
                    xs: '170px',
                    sm: '240px',
                    md: '320px',
                    lg: '240px',
                    xl: '240px',
                    xxl: '320px',
                  },
                }}
              >
                <img
                  src={unpload_bg}
                  alt={'foto'}
                  className={classes.imgSize}
                />
                <Box
                  display={'flex'}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  gap={'5px'}
                  position={'absolute'}
                >
                  <Box sx={{ display: 'flex', gap: '5px' }}>
                    <MainTypography sx={{ fontSize: '20px' }}>
                      Drag here
                    </MainTypography>
                    <SubTypography sx={{ fontSize: '20px' }}>
                      your file or
                    </SubTypography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '5px' }}>
                    <MainTypography sx={{ fontSize: '20px' }}>
                      Click here
                    </MainTypography>
                    <SubTypography sx={{ fontSize: '20px' }}>
                      to upload
                    </SubTypography>
                  </Box>
                </Box>{' '}
              </ImgBox>
            ) : (
              <ImgBox
                sx={{
                  height: {
                    xs: '170px',
                    sm: '240px',
                    md: '320px',
                    lg: '240px',
                    xl: '240px',
                    xxl: '320px',
                  },
                }}
              >
                <img src={props.value} alt={'uploaded_foto'} />
              </ImgBox>
            )}
          </UploadBox>
        </label>
      </Box>
    </Box>
  );
};

export default ModalUploadBox;
