import React, { useContext, useEffect } from 'react';
import { useHover } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/styles.css';
import { Box } from '@mui/material';
import MainStyledButton, {
  StyledTypography,
} from '../components/MainStyledButton';
import arrow_prev from '../img/arrow_prew.svg';
import arrow_next from '../img/arrow_next.svg';
import arrow_prev_hov from '../img/arrow_prew_hov.svg';
import arrow_next_hov from '../img/arrow_next_hov.svg';
import arrow_prev_dis from '../img/arrow_prev_dis.svg';
import arrow_next_dis from '../img/arrow_next_dis.svg';
import Context from './context';
import { fetchLimitBreeds } from '../redux/allBreedsReducer';
import usePrevious from '../hooks/usePrevious';
import {
  increaseBreedsPage,
  decreaseBreedsPage,
} from '../redux/breedsPageReducer';
import styled from '@emotion/styled';

const DisabledButton = styled(Box)({
  color: 'var(--gray)',
  backgroundColor: 'var(--main-gray)',
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  justifyContent: 'center',
  gap: '15px',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '500',
  borderRadius: '10px',
  letterSpacing: '2px',
});

const PrevNextButtonsBreeds = (props) => {
  // Buttons hover
  const hoverRefPrev = React.createRef();
  const isHoverPrev = useHover(hoverRefPrev);

  const hoverRefNext = React.createRef();
  const isHoverNext = useHover(hoverRefNext);

  const dispatch = useDispatch();

  const { limit } = useContext(Context);
  const limitedBreeds = useSelector((state) => state.allBreeds.limBreeds);

  //Current breed page
  const breedPage = useSelector((state) => state.breedPage.page);

  const prevAmount = usePrevious(breedPage);

  // Next page if there are still cat breeds that are filling a limit select condition user has chosen
  const onHandleNextClick = () => {
    if (limitedBreeds.length === Number(props.limit))
      dispatch(increaseBreedsPage());
  };

  // Prev page if there is not a first page already
  const onHandlePrevClick = () => {
    if (breedPage !== 0) {
      dispatch(decreaseBreedsPage());
    }
  };

  // If current page > prev page then next page with breeds will load
  // If current page < prev page then prev page will load
  useEffect(() => {
    if (breedPage > prevAmount) {
      dispatch(fetchLimitBreeds({ limit, breedPage }));
    } else if (breedPage < prevAmount) {
      dispatch(fetchLimitBreeds({ limit, breedPage }));
    }
  }, [dispatch, limit, breedPage, prevAmount]);

  return (
    <Box
      display={'flex'}
      mt={{xs: '50px', xxl: '130px', xxxl: '150px' }}
      justifyContent={'center'}
      gap={{ xs: '20px', sm: '40px' }}
    >
      {/* User can't click one more page backwards if it is already a first page */}
      {breedPage !== 0 ? (
        <MainStyledButton
          padding='11px 35px'
          ref={hoverRefPrev}
          onClick={onHandlePrevClick}
        >
          <Box display={'flex'} alignItems={'center'}>
            {isHoverPrev ? (
              <img src={arrow_prev_hov} alt='arrow_prev_hov' />
            ) : (
              <img src={arrow_prev} alt='arrow_prev' />
            )}
          </Box>
          <StyledTypography>Prev</StyledTypography>
        </MainStyledButton>
      ) : (
        <DisabledButton
          padding='11px 35px'
          ref={hoverRefPrev}
          onClick={onHandlePrevClick}
        >
          <Box display={'flex'} alignItems={'center'}>
            <img src={arrow_prev_dis} alt='disabled' />
          </Box>
          <StyledTypography>Prev</StyledTypography>
        </DisabledButton>
      )}

      {/* User can't click one more page forward if it is already a last page */}
      {limitedBreeds.length === Number(props.limit) ? (
        <MainStyledButton
          padding='11px 35px'
          ref={hoverRefNext}
          onClick={onHandleNextClick}
        >
          <StyledTypography>Next</StyledTypography>
          <Box display={'flex'} alignItems={'center'}>
            {isHoverNext ? (
              <img src={arrow_next_hov} alt='arrow_next_hov' />
            ) : (
              <img src={arrow_next} alt='arrow_next' />
            )}
          </Box>
        </MainStyledButton>
      ) : (
        <DisabledButton
          padding='11px 35px'
          ref={hoverRefNext}
          onClick={onHandleNextClick}
        >
          <StyledTypography>Next</StyledTypography>
          <Box display={'flex'} alignItems={'center'}>
            <img src={arrow_next_dis} alt='arrow_next_hov' />
          </Box>
        </DisabledButton>
      )}
    </Box>
  );
};

export default PrevNextButtonsBreeds;
