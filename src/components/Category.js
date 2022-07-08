import React from 'react';
import Box from '@mui/material/Box';
import NavLinkText from './StyledNavLink';
import vote from '../img/vote-table.png';
import breeds from '../img/pet-breeds.png';
import search from '../img/images-search.png';
import NavLinkImg from './NavLinkImg';
import { styled } from '@mui/system';

const ImgBox = styled(Box)({
  width: '130px',
  height: '190px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CategoryWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',
});

// At first in this component and MenuDrawer component I want to output categories through the array iteration via .map method,
// but, wenn I tryed to do it I had some issue with react-router, I cannot fixed.
// Syne in this project there are not so many categories, I decided to do it via copy/paste.

const Category = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { sm: 'center' },
        gap: { xs: '20px', sm: '16px' },
      }}
    >
      <CategoryWrapper>
        <NavLinkImg
          to='/voting'
          backgroundcolor={'#B4B7FF'}
          border={'4px solid rgba(255, 255, 255, 0.6)'}
        >
          <ImgBox>
            <img src={vote} alt='vote-table' />
          </ImgBox>
        </NavLinkImg>

        <NavLinkText to='/voting' padding={'9px 0'} borderradius={'10px'}>
          Voting
        </NavLinkText>
      </CategoryWrapper>

      <CategoryWrapper>
        <NavLinkImg
          to='/breeds'
          backgroundcolor={'#97EAB9'}
          border={'4px solid rgba(255, 255, 255, 0.6)'}
        >
          <ImgBox>
            <img src={breeds} alt='vote-table' />
          </ImgBox>
        </NavLinkImg>

        <NavLinkText to='/breeds' padding={'9px 0'} borderradius={'10px'}>
          Breeds
        </NavLinkText>
      </CategoryWrapper>

      <CategoryWrapper>
        <NavLinkImg
          to='/gallery'
          backgroundcolor={'#FFD280'}
          border={'4px solid rgba(255, 255, 255, 0.6)'}
        >
          <ImgBox>
            <img src={search} alt='vote-table' />
          </ImgBox>
        </NavLinkImg>

        <NavLinkText to='/gallery' padding={'9px 0'} borderradius={'10px'}>
          Gallery
        </NavLinkText>
      </CategoryWrapper>
    </Box>
  );
};

export default Category;
