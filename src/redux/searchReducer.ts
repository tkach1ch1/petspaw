import { createSlice } from '@reduxjs/toolkit'

const searchReducer = createSlice({
    name: 'search',
    initialState: {
        searchInput: '',
    },
    reducers: {
        addSearchInput: (state, action) => {
            state.searchInput = action.payload
        },
    },
})

export const { addSearchInput } = searchReducer.actions

export default searchReducer.reducer
