import React from 'react';
import Box from '@mui/material/Box';
import StyledNavLink from './StyledNavLink';
import heart from '../img/heart.svg';
import smile from '../img/smile.svg';
import sad_smile from '../img/sad_smile.svg';
import { styled } from '@mui/styles';
import BurgerMenu from './BurgerMenu';
import SearchBar from './SearchBar';

const StyledLinkHeader = styled(StyledNavLink)({
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
});

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
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
        <Box sx={{ display: 'flex', gap: '10px', ml: {lg: '10px'}}}>
          <StyledLinkHeader to='/favourites'>
            <img src={heart} alt='heart' />
          </StyledLinkHeader>
          <StyledLinkHeader to='/likes'>
            <img src={smile} alt='smile' />
          </StyledLinkHeader>
          <StyledLinkHeader to='/dislikes'>
            <img src={sad_smile} alt='sad_smile' />
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
