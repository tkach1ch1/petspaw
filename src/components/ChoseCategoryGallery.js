import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { useSelector } from 'react-redux';
import SelectComponent from '../components/SelectComponent';
import Box from '@mui/material/Box';
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

const arrLimit = [
  { name: '5 items per page', value: 5 },
  { name: '10 items per page', value: 10 },
  { name: '15 items per page', value: 15 },
  { name: '20 items per page', value: 20 },
];

const arrOrder = [
  { name: 'Random', value: 'random' },
  { name: 'Desc', value: 'desc' },
  { name: 'Asc', value: 'asc' },
];

const arrayType = [
  { name: 'All', value: 'jpg,png,gif' },
  { name: 'Static', value: 'jpg,png' },
  { name: 'Animated', value: 'gif' },
];

//NOTE: Categories on Gallery page

//OnChange controll for all select categories states
const ChoseCategoryGallery = (props) => {
  const allBreeds = useSelector((state) => state.allBreeds.breeds);

  const onHandleLimitChange = (event) => {
    props.setLimit(event.target.value);
  };

  const onHandleOrderChange = (event) => {
    props.setOrder(event.target.value);
  };

  const onHandleTypeChange = (event) => {
    props.setType(event.target.value);
  };

  //To find in API images on certain breed, not breed name but breed id is needed
  //Comparing all breed names in array and onChange value to find a match and sending breed id from founded match breed.
  const onHandleBreedChange = (event) => {
    props.setBreed(event.target.value);
    if (allBreeds.find((elem) => elem.name === event.target.value)) {
      let foundBreed = allBreeds.find(
        (elem) => elem.name === event.target.value
      );
      props.setBreedId(foundBreed.id);
    } else props.setBreedId('');
  };

  return (
    <StyledBox
      display={'flex'}
      flexDirection={{ xs: 'column', sg: 'row' }}
      gap={{ xs: 0, sg: '20px' }}
    >
      <Box sx={{ width: { xs: '100%', sg: '50%' } }}>
        {/* Order categorie */}
        <StyledInputLabel>Order</StyledInputLabel>
        <SelectComponent
          arr={arrOrder}
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
          value={props.order}
          onChange={onHandleOrderChange}
        />
        {/* Breed categorie */}
        <StyledInputLabel>Breed</StyledInputLabel>
        <SelectComponent
          arr={allBreeds.length > 0 && allBreeds}
          firstParam='None'
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
          value={props.breed}
          onChange={onHandleBreedChange}
        />
      </Box>
      <Box sx={{ width: { xs: '100%', sg: '50%' } }}>
        {/* Type categorie */}
        <StyledInputLabel>Type</StyledInputLabel>
        <SelectComponent
          arr={arrayType}
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
          value={props.type}
          onChange={onHandleTypeChange}
        />
        {/* Limit categorie */}
        <StyledInputLabel>Limit</StyledInputLabel>
        <Box display={'flex'} gap={'10px'}>
          <SelectComponent
            arr={arrLimit}
            backgroundColor='white'
            color='var(--black)'
            mb='10px'
            value={props.limit}
            onChange={onHandleLimitChange}
          />
          {/* Button that refreshes images from API  */}
          <UpdateButton
            displayXS={'none'}
            displaySM={'flex'}
            width={'40px'}
            height={'40px'}
            limit={props.limit}
            type={props.type}
            order={props.order}
          />
        </Box>
      </Box>
      <UpdateButton displayXS={'flex'} displaySM={'none'} />
    </StyledBox>
  );
};

export default ChoseCategoryGallery;
