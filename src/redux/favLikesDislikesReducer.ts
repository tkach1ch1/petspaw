import { ActionsElements } from './../assets/BreedTypes'
import { createSlice } from '@reduxjs/toolkit'

interface FavLikesDislikesReducerState {
    all: ActionsElements[]
    favourites: ActionsElements[]
    removedFav: ActionsElements[]
    likes: ActionsElements[]
    dislikes: ActionsElements[]
}

const initialState: FavLikesDislikesReducerState = {
    all: [],
    favourites: [],
    removedFav: [],
    likes: [],
    dislikes: [],
}

const favLikesDislikesReducer = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        addToAll: (state, action) => {
            state.all.unshift(action.payload)
            state.all.length === 11 && state.all.pop()
        },
        addToFavourites: (state, action) => {
            state.favourites.push(action.payload)
        },
        removeFavourites: (state, action) => {
            let index = state.favourites.findIndex((elem) => elem.id === action.payload)
            index > -1 && state.favourites.splice(index, 1)
        },
        addToRemovedFav: (state, action) => {
            state.removedFav.unshift(action.payload)
            state.removedFav.length === 6 && state.removedFav.pop()
        },

        addToLikes: (state, action) => {
            state.likes.push(action.payload)
        },
        addToDislikes: (state, action) => {
            state.dislikes.push(action.payload)
        },
    },
})

export const {
    addToAll,
    addToDislikes,
    addToFavourites,
    addToLikes,
    removeFavourites,
    addToRemovedFav,
} = favLikesDislikesReducer.actions

export default favLikesDislikesReducer.reducer
