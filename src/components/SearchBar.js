import React, { useState } from 'react';
import { styled } from '@mui/styles';
import '../styles/styles.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import search_sign from '../img/search.svg';
import { addSearchInput } from '../redux/searchReducer';

const StyledInput = styled('input')({
  padding: '17px 20px 16px 20px',
  borderRadius: '20px',
  width: '100%',
  border: '2px solid #ffffff',
  fontSize: '20px',

  '&::placeholder': {
    color: 'var(--gray)',
    fontFamily: 'Jost',
    fontSize: '20px',
    position: 'relative',
  },
  '&:hover': {
    border: '2px solid var(--light-red)',
    transition: 'all 0.2s',
  },
  '&:focus': {
    border: '2px solid #ff868e',
    outline: 'none',
  },
  '&:hover::placeholder': {
    color: 'transparent',
    transition: 'all 0.2s',
  },
  '&:focus::placeholder': {
    color: 'transparent',
  },
});

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('lg')]: {
    textFieldStyle: {
      '&::placeholder': {
        fontSize: '18px',
      },
    },
  },
  [theme.breakpoints.up('xl')]: {
    textFieldStyle: {
      '&::placeholder': {
        fontSize: '20px',
      },
    },
  },
}));

const StyleImg = styled('img')({
  position: 'absolute',
  right: '10px',
  top: '10px',
  padding: '10px 10px',
  borderRadius: '10px',
  backgroundColor: 'var(--light-red)',
  cursor: 'pointer',
});

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  //Form controll
  const onHandleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  let navigate = useNavigate();

  //On Enter click navigate to SearchPage and addes value from SearcBar to state
  const onHandleKeyPress = (target) => {
    if (target.charCode === 13) {
      navigate('/search');
    }
    dispatch(addSearchInput(search));
  };

  const classes = useStyles();
  return (
    <Box
      sx={{
        display: props.display,
        width: {
          md: '430px',
          lg: '290px',
          xl: '360px',
          xxl: '470px',
          xxxl: '540px',
        },
      }}
      position={'relative'}
      onChange={onHandleSearchChange}
      onKeyPress={onHandleKeyPress}
    >
      <StyledInput
        type='text'
        placeholder='Search for breeds by name'
        className={`${classes.textFieldStyle}`}
      />
      <Link to='/search' onClick={() => dispatch(addSearchInput(search))}>
        <StyleImg src={search_sign} alt='search_sign' />
      </Link>
    </Box>
  );
};

export default SearchBar;
