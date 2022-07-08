import React from 'react';
import MainStyledButton, {
  StyledTypography,
} from '../components/MainStyledButton';
import { useHover } from 'usehooks-ts';
import arrow_prev from '../img/arrow_prew.svg';
import arrow_next from '../img/arrow_next.svg';
import arrow_prev_hov from '../img/arrow_prew_hov.svg';
import arrow_next_hov from '../img/arrow_next_hov.svg';
import { Box } from '@mui/material';

const PrevNextButtonsBreeds = () => {
  const hoverRefPrev = React.createRef();
  const isHoverPrev = useHover(hoverRefPrev);

  const hoverRefNext = React.createRef();
  const isHoverNext = useHover(hoverRefNext);
  return (
    <Box display={{xs: 'none', md: 'flex'}} justifyContent={'center'} gap={'40px'} mt={'15px'}>
      <MainStyledButton padding='11px 35px' ref={hoverRefPrev}>
        <Box display={'flex'} alignItems={'center'}>
          {isHoverPrev ? (
            <img src={arrow_prev_hov} alt='arrow_prev_hov' />
          ) : (
            <img src={arrow_prev} alt='arrow_prev' />
          )}
        </Box>
        <StyledTypography>Prev</StyledTypography>
      </MainStyledButton>

      <MainStyledButton padding='11px 35px' ref={hoverRefNext}>
        <StyledTypography>Next</StyledTypography>
        <Box display={'flex'} alignItems={'center'}>
          {isHoverNext ? (
            <img src={arrow_next_hov} alt='arrow_next_hov' />
          ) : (
            <img src={arrow_next} alt='arrow_next' />
          )}
        </Box>
      </MainStyledButton>
    </Box>
  );
};

export default PrevNextButtonsBreeds;
