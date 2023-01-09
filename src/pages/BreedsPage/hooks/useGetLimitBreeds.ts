import { useEffect, useState } from 'react'
import { useAppDispatch } from 'src/hooks/reduxHooks'
import { fetchLimitBreeds } from 'src/redux/allBreedsReducer'

//State and anctions for limit select
const arrayLimit = [
    { name: 'Limit: 5', value: 5 },
    { name: 'Limit: 10', value: 10 },
    { name: 'Limit: 15', value: 15 },
    { name: 'Limit: 20', value: 20 },
]

export const useGetLimitBreeds = () => {
    const [limit, setLimit] = useState(5)

    const dispatch = useAppDispatch()

    const onHandleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setLimit(Number(value))
    }

    //Fetches limited breeds from API dependes on selected limit value
    useEffect(() => {
        dispatch(fetchLimitBreeds({ limit }))
    }, [dispatch, limit])

    return { limit, onHandleLimitChange, arrayLimit }
}
