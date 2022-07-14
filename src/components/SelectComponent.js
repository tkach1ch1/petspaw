import React from 'react';
import { Box, styled } from '@mui/system';
import arrow_down from '../img/ArrowDown.svg';

export const StyledFormControl = styled('select')({
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
  '&:hover': {
    border: '2px solid var(--light-red)',
    transition: 'all 0.3s',
  },
});

const StyledImg = styled('img')({
  position: 'absolute',
  top: '17px',
  right: '10px',
  cursor: 'pointer',
});

//NOTE: Select categories on Breeds- and GalleryPage

const SelectComponent = ({ ...props }) => {
  let content;

  // When taking categories value async from API
  if (props.status === 'succeeded') {
    content = props.arr.map((elem) => (
      <option key={elem.id}>{elem.name}</option>
    ));
  } else if (props.status === 'failed') {
    content = <div>{props.error}</div>;
  }
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <StyledFormControl
        onChange={props.onChange}
        value={props.value}
        sx={{
          width: {
            xs: '100%',
            md: props.widthmd,
            lg: '100%',
            xl: props.widthxl,
            xxl: props.widthxxl,
            xxxl: props.widthxxxl,
          },
          backgroundColor: props.backgroundColor,
          color: props.color,
          mb: props.mb,
        }}
      >
        {props.firstParam && <option>{props.firstParam}</option>}
        {props.status
          ? content
          : // When taking categories sync from self-written array
            props.arr.map((elem) => (
              <option
                key={Math.floor(Math.random(10) * 100000)}
                value={elem.value}
              >
                {elem.name}
              </option>
            ))}
      </StyledFormControl>
      <StyledImg src={arrow_down} alt='arrow_down' />
    </Box>
  );
};

export default SelectComponent;
