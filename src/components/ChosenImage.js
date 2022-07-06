import React from 'react';
import { Box } from '@mui/system';
import catPhoto from '../img/image 1.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    imgSize: {
      width: '100%',
      height: 'auto',
    },
  },
}));

const ChosenImage = () => {
  const classes = useStyles();
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <img src={catPhoto} alt='cat_photo' className={`${classes.imgSize}`} />
    </Box>
  );
};

export default ChosenImage;
