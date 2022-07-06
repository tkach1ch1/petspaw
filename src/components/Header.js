import React, { useState } from 'react';
import Box from '@mui/material/Box';
import StyledNavLink from './StyledNavLink';
import heart from '../img/heart.svg';
import smile from '../img/smile.svg';
import sad_smile from '../img/sad_smile.svg';
import heart_act from '../img/heart_act.svg';
import smile_act from '../img/smile_act.svg';
import sad_smile_act from '../img/sad_smile_act.svg';
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
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(true);
  };

  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        mb: {xs: '10px', md: 0}
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
        <Box sx={{ display: 'flex', gap: '10px', ml: { lg: '10px' } }}>
          <StyledLinkHeader to='/favourites' onClick={onClick}>
            {isActive ? (
              <img src={smile} alt='heart' />
            ) : (
              <img src={smile_act} alt='heart_act' />
            )}
          </StyledLinkHeader>
          <StyledLinkHeader to='/likes' onClick={onClick}>
          {isActive ? (
              <img src={heart} alt='smile' />
            ) : (
              <img src={heart_act} alt='heart_act' />
            )}
            
          </StyledLinkHeader>
          <StyledLinkHeader to='/dislikes' onClick={onClick}>
          {isActive ? (
              <img src={sad_smile} alt='sad_smile' />
            ) : (
              <img src={sad_smile_act} alt='heart_act' />
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
