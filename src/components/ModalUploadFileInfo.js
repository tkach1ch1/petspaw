import { Box, styled } from '@mui/system';
import React from 'react';
import { SubTypography } from './ModalUpload';
import { StyledPageName } from './PageName';

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

const ModalUploadFileInfo = (props) => {
  return (
    <Box
      mt={{
        xs: '200px',
        sm: '270px',
        md: '340px',
        lg: '230px',
        xl: '240px',
        xxl: '340px',
      }}
    >
      {props.file === null ? (
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
                xxl: '20px'
              },
            }}
          >
            Image File Name: {props.file && props.file.name}
          </SubTypography>
          {props.imageStatus !== 'loading' && (
            <UploadButton
              sx={{ width: { xs: '100%', sm: 'fit-content' } }}
              onClick={props.onClick}
            >
              Upload photo
            </UploadButton>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ModalUploadFileInfo;
