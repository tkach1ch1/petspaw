import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.svg';
import Typography from '@mui/material/Typography';
import '../styles/styles.css';
import Category from './Category';

const Categories = () => {
  return (
    <Box
      sx={{
        display: { sm: 'flex' },
        flexDirection: { sm: 'column' },
        alignItems: {sm: 'center'},
      }}
    >
      <Box
        sx={{
          display: { sm: 'flex' },
          flexDirection: { sm: 'column' },
          alignItems: 'flex-start',
        }}
      >
        <Box mb={10}>
          <Link to='/'>
            <img src={logo} alt={logo} />
          </Link>
        </Box>
        <Typography variant='h1' mb={'10px'}>
          Hi intern!
        </Typography>
        <Typography color='primary' mb={'60px'} sx={{ fontSize: '20px' }}>
          Welcome to MI 2022 Front-end test
        </Typography>
        <Typography mb={'20px'} sx={{ fontSize: '20px', fontWeight: 500 }}>
          Lets start using The Cat API
        </Typography>

        <Category />
      </Box>
    </Box>
  );
};

export default Categories;
