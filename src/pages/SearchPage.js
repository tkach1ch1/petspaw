import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/styles.css';
import Categories from '../components/Categories';
import Box from '@mui/material/Box';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import GridPageLoyaut from '../components/GridPageLoyaut';
import { Typography } from '@mui/material';

const SearchPage = () => {
  const [result, setResult] = useState([]);

  const allBreeds = useSelector((state) => state.allBreeds.breeds);
  const searchInput = useSelector((state) => state.search.searchInput);

  // Takes search input from search bar, looks for a match and then returns all found breeds
  useEffect(() => {
    if (searchInput !== '') {
      let foundResult = allBreeds.filter((elem) =>
        elem.name.toLowerCase().startsWith(searchInput.toLowerCase())
      );
      setResult(foundResult);
    } else if (searchInput === '') {
      setResult([]);
    }
  }, [allBreeds, searchInput]);

  return (
    <PageWrapper>
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Categories />
      </Box>
      <Box>
        <Header />
        <MainBox>
          <PageName name='Search' />

          <Box
            display={'flex'}
            gap={'5px'}
            mb={'20px'}
            key={Math.floor(Math.random(10) * 10000)}
          >
            <Typography sx={{ fontSize: '20px', color: 'var(--gray)' }}>
              Search result for:
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                color: 'var(--black)',
                fontWeight: '500',
              }}
            >
              {searchInput}
            </Typography>
          </Box>

          <GridPageLoyaut arr={result} searchValue={'search'} />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default SearchPage;
