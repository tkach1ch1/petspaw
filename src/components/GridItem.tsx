import notfound from '../img/notfound.png'
import { addBreedsId } from '../redux/allBreedsReducer'
import {
    addToFavourites,
    addToRemovedFav,
    removeFavourites,
} from '../redux/favLikesDislikesReducer'
import heart from 'src/img/svg/heart.svg'
import filled_heart from 'src/img/svg/filled_heart.svg'
import {
    AddToFavourites,
    LinkToInfoPage,
    StyledImg,
    StyledInfoButton,
    StyledItem,
} from './style/style'
import { nanoid } from 'nanoid'
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'

interface GridItemProps {
    id: string
    imageUrl: string
    name?: string
    favValue?: boolean
    breedsValue?: string
    galleryValue?: string
    searchValue?: string | undefined
}

//NOTE: Grid item in GridBox

export const GridItem = ({
    id,
    imageUrl,
    name,
    searchValue,
    favValue,
    breedsValue,
    galleryValue,
}: GridItemProps) => {
    const allFav = useAppSelector((state) => state.actions.favourites)

    const dispatch = useAppDispatch()

    const onHandleItemClick = () => {
        dispatch(addBreedsId(id))
    }

    const nowDate = () => {
        let dateNow = new Date()
        let dateNowMinAndSec =
            dateNow.getMinutes() < 10
                ? dateNow.getHours() + ':' + 0 + dateNow.getMinutes()
                : dateNow.getHours() + ':' + dateNow.getMinutes()
        return dateNowMinAndSec.toString()
    }

    const removedFavInfo = {
        id: id,
        date: nowDate(),
    }

    const addToFavBody = {
        id: id,
        url: imageUrl,
        value: 2,
    }

    //NOTE: Adding and removing image from Favourites page
    const onHandleClickFav = () => {
        let index = allFav.findIndex((elem) => elem.id === id)
        index > -1
            ? dispatch(removeFavourites(id)) && // if image already in Fav remove it
              dispatch(addToRemovedFav(removedFavInfo)) // shows action info about removed image on Fav page
            : dispatch(addToFavourites(addToFavBody)) // if image isn't in Fav adds it
    }

    return (
        <StyledItem
            key={nanoid()}
            sx={{ height: { xs: '205px', md: '100%' } }}
        >
            {imageUrl ? (
                // Grid item box image we are taking from API

                <StyledImg
                    src={imageUrl}
                    alt={name || 'foto'}
                    style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
            ) : (
                <StyledImg
                    src={notfound}
                    alt='Not found'
                />
            )}

            {/* NOTE: On Breeds or Search page user is able to go to BreedsInfoPage on grid item box
      click */}
            {(breedsValue || searchValue) && (
                <LinkToInfoPage
                    to={id}
                    onClick={onHandleItemClick}
                >
                    {' '}
                    <StyledInfoButton sx={{ padding: '5px 24px', width: '90%', bottom: '10px' }}>
                        {name}
                    </StyledInfoButton>
                </LinkToInfoPage>
            )}

            {/* NOTE: On Fav page or Gallery page user is able to add or remove image on grid
      item box click */}
            {(favValue || galleryValue) && (
                <AddToFavourites
                    sx={{ display: 'flex', alignItems: 'center' }}
                    onClick={onHandleClickFav}
                >
                    {allFav.find((elem) => elem.id === id) ? (
                        <StyledInfoButton sx={{ padding: '10px' }}>
                            <img
                                src={filled_heart}
                                alt='filled_heart'
                            />
                        </StyledInfoButton>
                    ) : (
                        <StyledInfoButton sx={{ padding: '10px' }}>
                            <img
                                src={heart}
                                alt='heart'
                            />
                        </StyledInfoButton>
                    )}
                </AddToFavourites>
            )}
        </StyledItem>
    )
}
