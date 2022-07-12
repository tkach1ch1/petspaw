import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import notfound from '../img/notfound.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBreedsId } from '../redux/allBreedsReducer';

const StyledInfoButton = styled(Box)({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  border: 'none',
  color: 'var(--main-red)',
  textAlign: 'center',
  borderRadius: '10px',
  padding: '5px 24px',
  width: '90%',
  bottom: '10px',
});

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '20px',
});

const LinkToInfoPage = styled(Link)({
  textDecoration: 'none',
  position: 'absolute',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 134, 142, 0.6)',
  opacity: 0,
  '&: hover': {
    opacity: 1,
    transition: 'all 0.4s',
  },
});

const StyledItem = styled(Box)({
  backgroundColor: '#C4C4C4',
  position: 'relative',
  borderRadius: '20px',
  cursor: 'pointer',
  '&:nth-of-type(10n+1)': {
    gridColumnEnd: 'span 1',
    gridRowEnd: 'span 2',
  },
  '&:nth-of-type(10n+8)': {
    gridColumnEnd: 'span 1',
    gridRowEnd: 'span 2',
  },
  '&:nth-of-type(10n+4)': {
    gridColumnEnd: 'span 2',
    gridRowEnd: 'span 2',
  },
  '&:nth-of-type(10n+9)': {
    gridColumnEnd: 'span 2',
    gridRowEnd: 'span 2',
  },
});

const GridItem = (props) => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(addBreedsId(props.id));
  };
  return (
    <StyledItem key={props.id} sx={{ height: { xs: '205px', md: '100%' } }}>
      {props.image ? (
        <StyledImg src={props.imageUrl} alt={props.name} />
      ) : (
        <StyledImg src={notfound} alt='Not found' />
      )}

      <LinkToInfoPage to={props.id} onClick={onHandleClick}>
        <StyledInfoButton>{props.name}</StyledInfoButton>
      </LinkToInfoPage>
    </StyledItem>
  );
};

export default GridItem;
