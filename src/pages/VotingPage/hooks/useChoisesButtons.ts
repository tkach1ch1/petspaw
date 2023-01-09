import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'
import {
    addToAll,
    addToDislikes,
    addToFavourites,
    addToLikes,
} from 'src/redux/favLikesDislikesReducer'
import { fetchImage } from 'src/redux/votingPageReducer'

export const useChoisesButtons = () => {
    const fetchImageInfo = useAppSelector((state) => state.votingPage.image)

    const dispatch = useAppDispatch()

    const nowDate = () => {
        let dateNow = new Date()
        let dateNowMinAndSec =
            dateNow.getMinutes() < 10
                ? dateNow.getHours() + ':' + 0 + dateNow.getMinutes()
                : dateNow.getHours() + ':' + dateNow.getMinutes()
        return dateNowMinAndSec.toString()
    }

    const getInfoFav = () => {
        const newFav = {
            id: fetchImageInfo[0].id,
            url: fetchImageInfo[0].url,
            value: 2,
            date: nowDate(),
        }

        return newFav
    }
    const getInfoLikes = () => {
        const newFav = {
            id: fetchImageInfo[0].id,
            url: fetchImageInfo[0].url,
            value: 1,
            date: nowDate(),
        }

        return newFav
    }
    const getInfoDislikes = () => {
        const newFav = {
            id: fetchImageInfo[0].id,
            url: fetchImageInfo[0].url,
            value: 0,
            date: nowDate(),
        }

        return newFav
    }

    //On one of three buttons click action
    //At first the image will be added to separate array in order to show it on certain page (likes/dis/fav)
    //Then the image will be added to main array where all actions are stacking to show them in the InfoCommentVoting component
    //The last one dispatch reloaded the image

    const handleClickFav = () => {
        dispatch(addToFavourites(getInfoFav()))
        dispatch(addToAll(getInfoFav()))
        dispatch(fetchImage())
    }
    const handleClickLikes = () => {
        dispatch(addToLikes(getInfoLikes()))
        dispatch(addToAll(getInfoLikes()))
        dispatch(fetchImage())
    }

    const handleClickDislikes = () => {
        dispatch(addToDislikes(getInfoDislikes()))
        dispatch(addToAll(getInfoDislikes()))
        dispatch(fetchImage())
    }

    return { handleClickFav, handleClickLikes, handleClickDislikes }
}
