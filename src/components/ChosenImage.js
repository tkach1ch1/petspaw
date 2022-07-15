import React, { useEffect } from 'react';
import { makeStyles, styled } from '@mui/styles';
import '../styles/styles.css';
import { fetchImage } from '../redux/votingPageReducer';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  imgSize: {
    [theme.breakpoints.up('xs')]: {
      height: '170px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '250px',
    },
    [theme.breakpoints.up('md')]: {
      height: '360px',
    },
  },
}));

export const StyledCircularProgress = styled(CircularProgress)({
  position: 'absolute',
});

const ChosenImage = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const imageVoting = useSelector((state) => state.votingPage.image);
  const imageStatus = useSelector((state) => state.votingPage.status);
  const imageError = useSelector((state) => state.votingPage.error);

  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);

  let content;

  //NOTE: Taking image from API and showing it on Voting page

  if (imageStatus === 'loading') {
    content = (
      <StyledCircularProgress
        sx={{ top: { xs: '90px', md: '90px' } }}
        size={'100px'}
        color='secondary'
      />
    );
  } else if (imageStatus === 'succeeded') {
    content = imageVoting.map((elem) => (
      <img
        src={elem.url}
        key={elem.id}
        alt='cat_photo'
        style={{
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: '20px',
        }}
        className={classes.imgSize}
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
