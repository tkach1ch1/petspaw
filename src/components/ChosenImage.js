import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { fetchImage } from '../redux/votingPageReducer';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

export const StyledCircularProgress = styled(CircularProgress)({
  position: 'absolute',
  color: 'var(--light-red)',
});

const ChosenImage = () => {
  const dispatch = useDispatch();

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
      <StyledCircularProgress sx={{ top: { xs: '50px', md: '150px' } }} />
    );
  } else if (imageStatus === 'succeeded') {
    content = imageVoting.map((elem) => (
      <img
        src={elem.url}
        key={elem.id}
        alt='cat_photo'
        style={{
          width: '100%',
          height: '360px',
          objectFit: 'fill',
          borderRadius: '20px',
        }}
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
