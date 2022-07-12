import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import notfound from '../img/notfound.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBreedsId } from '../redux/allBreedsReducer';
import {
  addToRemovedFav,
  removeFavourites,
} from '../redux/favLikesDislikesReducer';
import heart from '../img/heart.svg';

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

const StyledInfoButton = styled(Box)({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  border: 'none',
  color: 'var(--main-red)',
  textAlign: 'center',
  borderRadius: '10px',
});

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '20px',
});

const AddToFavourites = styled(Box)({
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

const GridItem = (props) => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(addBreedsId(props.id));
  };

  const nowDate = () => {
    let dateNow = new Date();
    let dateNowMinAndSec =
      dateNow.getMinutes() < 10
        ? dateNow.getHours() + ':' + 0 + dateNow.getMinutes()
        : dateNow.getHours() + ':' + dateNow.getMinutes();
    return dateNowMinAndSec.toString();
  };

  const removedFavInfo = {
    id: props.id,
    date: nowDate(),
  };

  const onHandleClickFav = () => {
    dispatch(removeFavourites(props.id));
    dispatch(addToRemovedFav(removedFavInfo));
  };

  return (
    <StyledItem key={props.id} sx={{ height: { xs: '205px', md: '100%' } }}>
      {props.imageUrl ? (
        <StyledImg src={props.imageUrl} alt={props.name || 'foto'} />
      ) : (
        <StyledImg src={notfound} alt='Not found' />
      )}

      {props.breedsValue && (
        <LinkToInfoPage to={props.id} onClick={onHandleClick}>
          <StyledInfoButton
            sx={{ padding: '5px 24px', width: '90%', bottom: '10px' }}
          >
            {props.name}
          </StyledInfoButton>
        </LinkToInfoPage>
      )}

      {props.favValue && (
        <AddToFavourites
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={onHandleClickFav}
        >
          <StyledInfoButton sx={{ padding: '10px' }}>
            <img src={heart} alt='heart' />
          </StyledInfoButton>
        </AddToFavourites>
      )}
    </StyledItem>
  );
};

export default GridItem;
