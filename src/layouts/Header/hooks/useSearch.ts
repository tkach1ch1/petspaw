import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/reduxHooks'
import { addSearchInput } from 'src/redux/searchReducer'

export const useSearch = () => {
    const [search, setSearch] = useState('')

    const dispatch = useAppDispatch()
    let navigate = useNavigate()

    //Form controll
    const onHandleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    // On Enter click if search bar input istn't empty navigate to SearchPage and addes value from SearchBar to state
    // Else if user is already on SearchPage only changes the value of the input state
    const onHandleKeyPress = (target: React.KeyboardEvent) => {
        if (target.key === 'Enter' && !!search) {
            navigate('/search')
            dispatch(addSearchInput(search.trim()))
        } else if (target.key === 'Enter') {
            dispatch(addSearchInput(search.trim()))
        }
    }

    const onHandleClick = () => {
        navigate('/search')
        dispatch(addSearchInput(search.trim()))
    }
    return { search, onHandleSearchChange, onHandleKeyPress, onHandleClick }
}
