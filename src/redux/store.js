import { configureStore } from '@reduxjs/toolkit';
import favLikesDislikesReducer from './favLikesDislikesReducer';
import votingPageReducer from './votingPageReducer';
import allBreedsReducer from './allBreedsReducer'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  votingPage: votingPageReducer,
  actions: favLikesDislikesReducer,
  allBreeds: allBreedsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['actions', 'allBreeds']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
