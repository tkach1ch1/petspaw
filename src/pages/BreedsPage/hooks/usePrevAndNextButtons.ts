import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks'
import { increaseBreedsPage, decreaseBreedsPage } from 'src/redux/breedsPageReducer'
import { fetchLimitBreeds } from 'src/redux/allBreedsReducer'
import { useEffect } from 'react'
import { usePrevious } from 'src/hooks/usePrevious'

export const usePrevAndNextButtons = (limit: number) => {
    const dispatch = useAppDispatch()

    const limitedBreeds = useAppSelector((state) => state.allBreeds.limBreeds)

    //Current breed page
    const breedPage = useAppSelector((state) => state.breedPage.page)

    const { prevAmount } = usePrevious(breedPage)

    // Next page if there are still cat breeds that are filling a limit select condition user has chosen
    const onHandleNextClick = () => {
        if (limitedBreeds.length === Number(limit)) {
            dispatch(increaseBreedsPage())
        }
    }

    // Prev page if there is not a first page already
    const onHandlePrevClick = () => {
        if (breedPage !== 0) {
            dispatch(decreaseBreedsPage())
        }
    }

    // If current page > prev page then next page with breeds will load
    // If current page < prev page then prev page will load
    useEffect(() => {
        if (breedPage > prevAmount) {
            dispatch(fetchLimitBreeds({ limit, breedPage }))
        } else if (breedPage < prevAmount) {
            dispatch(fetchLimitBreeds({ limit, breedPage }))
        }
    }, [dispatch, limit, breedPage, prevAmount])

    return { onHandleNextClick, onHandlePrevClick }
}
