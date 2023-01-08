import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import allImagesGalleryReducer from './allImagesGalleryReducer'
import favLikesDislikesReducer from './favLikesDislikesReducer'
import votingPageReducer from './votingPageReducer'
import allBreedsReducer from './allBreedsReducer'
import searchReducer from './searchReducer'
import breedsPageReducer from './breedsPageReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    votingPage: votingPageReducer,
    actions: favLikesDislikesReducer,
    allBreeds: allBreedsReducer,
    allImages: allImagesGalleryReducer,
    search: searchReducer,
    breedPage: breedsPageReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['actions', 'allBreeds', 'search'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
