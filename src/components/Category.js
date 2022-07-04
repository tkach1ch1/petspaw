import React from 'react';
import Box from '@mui/material/Box';
import NavLinkText from './NavLinkText';
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

const Category = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
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

        <NavLinkText to='/voting'>Voting</NavLinkText>
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

        <NavLinkText to='/breeds'>Breeds</NavLinkText>
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

        <NavLinkText to='/gallery'>Gallery</NavLinkText>
      </CategoryWrapper>
    </Box>
  );
};

export default Category;
