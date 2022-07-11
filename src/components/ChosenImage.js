import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { fetchImage } from '../redux/votingPageReducer';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('xs')]: {
    imgSize: {
      width: '100%',
      height: 'auto',
      borderRadius: '20px',
    },
  },
}));

export const StyledCircularProgress = styled(CircularProgress)({
  position: 'absolute',
  color: 'var(--light-red)',
});

const ChosenImage = () => {
  const dispatch = useDispatch();

  const imageVoting = useSelector((state) => state.votingPage.image);
  const imageStatus = useSelector((state) => state.votingPage.status);
  const imageError = useSelector((state) => state.votingPage.error);

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);

  let content;

  if (imageStatus === 'loading') {
    content = (
      <StyledCircularProgress sx={{ top: { xs: '50px', md: '150px' } }} />
    );
  } else if (imageStatus === 'succeeded') {
    content = imageVoting.map((elem) => (
      <img
        src={elem.url}
        key={elem.id}
        alt='cat_photo'
        className={`${classes.imgSize}`}
      />
    ));
  } else if (imageStatus === 'failed') {
    content = <div>{imageError}</div>;
  }

  return (
    <Box display={'flex'} justifyContent={'center'} position={'relative'}>
      {content}
    </Box>
  );
};

export default ChosenImage;
