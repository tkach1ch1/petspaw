import { useAppSelector } from 'src/hooks/reduxHooks'
import {
    addToFavourites,
    addToRemovedFav,
    removeFavourites,
} from 'src/redux/favLikesDislikesReducer'
import { useAppDispatch } from './reduxHooks'

export const useFavouritesAction = (id: string, imageUrl: string) => {
    const allFav = useAppSelector((state) => state.actions.favourites)

    const dispatch = useAppDispatch()

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
    return { onHandleClickFav }
}
