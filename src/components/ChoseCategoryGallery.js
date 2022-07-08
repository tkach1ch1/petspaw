import React from 'react';
import SelectComponent from '../components/SelectComponent';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import '../styles/styles.css';
import { InputLabel } from '@mui/material';
import UpdateButton from './UpdateButton';

const StyledBox = styled(Box)({
  backgroundColor: 'var(--main-gray)',
  borderRadius: '20px',
  width: '100%',
  padding: '10px 10px',
  marginBottom: '10px',
});

const StyledInputLabel = styled(InputLabel)({
  textTransform: 'uppercase',
  fontSize: '10px',
  fontWeight: '500',
  color: 'var(--gray)',
  padding: '3px 13px',
});

const ChoseCategoryGallery = () => {
  const order = ['Random', 'Desc', 'Asc'];

  const type = ['All', 'Static', 'Animated'];

  const breed = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const limit = [
    '5 items per page',
    '10 items per page',
    '15 items per page',
    '20 items per page',
  ];

  return (
    <StyledBox
      display={'flex'}
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap={{ xs: 0, sm: '20px' }}
    >
      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
        <StyledInputLabel>Order</StyledInputLabel>
        <SelectComponent
          arr={order}
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
        />
        <StyledInputLabel>Type</StyledInputLabel>
        <SelectComponent
          arr={type}
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
        />
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
        <StyledInputLabel>Breed</StyledInputLabel>
        <SelectComponent
          arr={breed}
          firstParam='None'
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
        />

        <StyledInputLabel>Limit</StyledInputLabel>
        <Box display={'flex'} gap={'10px'}>
          <SelectComponent
            arr={limit}
            backgroundColor='white'
            color='var(--black)'
            mb='10px'
          />
          <UpdateButton
            displayXS={'none'}
            displaySM={'flex'}
            width={'40px'}
            height={'40px'}
          />
        </Box>
      </Box>
      <UpdateButton displayXS={'flex'} displaySM={'none'} />
    </StyledBox>
  );
};

export default ChoseCategoryGallery;
