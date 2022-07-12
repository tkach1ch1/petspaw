import React from 'react';
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import BurgerMenu from './BurgerMenu';
import SearchBar from './SearchBar';
import StyledNavLink from './StyledNavLink';
import heart from '../img/heart.svg';
import smile from '../img/smile.svg';
import sad_smile from '../img/sad_smile.svg';
import heart_act from '../img/heart_act.svg';
import smile_act from '../img/smile_act.svg';
import sad_smile_act from '../img/sad_smile_act.svg';

const StyledLinkHeader = styled(StyledNavLink)({
  padding: '15px',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '20px',
});

const Header = ({ ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        mb: { xs: '10px', md: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '10px',
          width: '100%',
        }}
      >
        <Box sx={{ ml: { xs: '10px', md: '10px', lg: 0 } }}>
          <BurgerMenu />
        </Box>

        <Box>
          <SearchBar display={{ xs: 'none', md: 'block' }} />
        </Box>

        {/* Like, Favourite, Dislike buttons */}
        <Box sx={{ display: 'flex', gap: '10px', ml: { lg: '10px' } }}>
          <StyledLinkHeader to='/likes'>
            {props.isActivedLike ? (
              <img src={smile_act} alt='smile_act' />
            ) : (
              <img src={smile} alt='smile' />
            )}
          </StyledLinkHeader>

          <StyledLinkHeader to='/favourites'>
            {props.isActivedFav ? (
              <img src={heart_act} alt='heart_act' />
            ) : (
              <img src={heart} alt='heart' />
            )}
          </StyledLinkHeader>
          <StyledLinkHeader to='/dislikes'>
            {props.isActivedDis ? (
              <img src={sad_smile_act} alt='heart_act' />
            ) : (
              <img src={sad_smile} alt='sad_smile' />
            )}
          </StyledLinkHeader>
        </Box>
      </Box>

      <Box>
        <SearchBar display={{ xs: 'block', md: 'none' }} />
      </Box>
    </Box>
  );
};

export default Header;
