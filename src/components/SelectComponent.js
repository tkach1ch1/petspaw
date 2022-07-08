import { Box, styled } from '@mui/system';
import React from 'react';
import arrow_down from '../img/ArrowDown.svg';

const StyledFormControl = styled('select')({
  appearance: 'none',
  width: '100%',
  border: '2px solid transparent',
  outline: 'none',
  borderRadius: '10px',
  padding: '7px 10px',
  backgroundColor: 'var(--main-gray)',
  fontSize: '16px',
  fontFamily: 'Jost',
  color: 'var(--gray)',
  cursor: 'pointer',
  '&:hover' : {
    border: '2px solid var(--light-red)',
    transition: 'all 0.3s'
  }
});

const StyledImg = styled('img')({
  position: 'absolute',
  top: '17px',
  right: '10px',
  cursor: 'pointer',
});

const SelectComponent = (props) => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <StyledFormControl
        sx={{
          width: {
            xs: '100%',
            md: props.widthmd,
            lg: '100%',
            xl: props.widthxl,
            xxl: props.widthxxl,
            xxxl: props.widthxxxl,
          },
        }}
      >
        {props.firstParam && <option>{props.firstParam}</option>}
        {props.arr.map((elem) => (
          <option key={Math.floor(Math.random(10) * 10000)}>{elem}</option>
        ))}
      </StyledFormControl>
      <StyledImg src={arrow_down} alt='arrow_down' />
    </Box>
  );
};

export default SelectComponent;
