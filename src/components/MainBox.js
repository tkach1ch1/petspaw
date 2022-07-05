import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const StyledMainBox = styled(Box)({
  borderRadius: '20px',
});

const useStyles = makeStyles({
  bgStyle: (props) => ({ backgroundColor: props.backgroundColor }),
});

const MainBox = ({ children, ...props }) => {
  const classes = useStyles(props);
  return (
    <StyledMainBox
      {...props}
      className={`${classes.bgStyle}`}
      sx={{
        width: { lg: '500px', xl: '570px', xxl: '680px', xxxl: '750px' },
        height: { lg: '637px', xl: '590px', xxl: '770px', xxxl: '795px' },
      }}
    >
      {children}
    </StyledMainBox>
  );
};

export default MainBox;