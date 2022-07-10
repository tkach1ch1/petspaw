import { createSlice } from '@reduxjs/toolkit';

const favLikesDislikesReducer = createSlice({
  name: 'actions',
  initialState: {
    all: [],
    favourites: [],
    likes: [],
    dislikes: [],
  },
  reducers: {
    addToAll: (state, action) => {
      state.all.unshift(action.payload);
      state.all.length === 11 && state.all.pop()
    },
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    addToLikes: (state, action) => {
      state.likes.push(action.payload);
    },
    addToDislikes: (state, action) => {
      state.dislikes.push(action.payload);
    },
  },
});

export const { addToAll, addToDislikes, addToFavourites, addToLikes } =
  favLikesDislikesReducer.actions;

export default favLikesDislikesReducer.reducer;
