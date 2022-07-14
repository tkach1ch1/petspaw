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

  useEffect(() => {
    if (allBreeds.find((elem) => elem.name === searchInput)) {
      let foundResult = allBreeds.find((elem) => elem.name === searchInput);
      setResult([foundResult]);
    } else setResult([]);
  }, [allBreeds, searchInput]);

  console.log(result);

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
        <MainBox backgroundColor={'#ffffff'}>
          <PageName name='Search' />

          {result.map((elem) => (
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
                {elem.name}
              </Typography>
            </Box>
          ))}
          <GridPageLoyaut arr={result} />
        </MainBox>
      </Box>
    </PageWrapper>
  );
};

export default SearchPage;
