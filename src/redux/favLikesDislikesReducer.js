import { createSlice } from '@reduxjs/toolkit';

const favLikesDislikesReducer = createSlice({
  name: 'actions',
  initialState: {
    all: [],
    favourites: [],
    removedFav: [],
    likes: [],
    dislikes: [],
  },
  reducers: {
    addToAll: (state, action) => {
      state.all.unshift(action.payload);
      state.all.length === 11 && state.all.pop();
    },
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourites: (state, action) => {
      state.favourites.splice(
        state.favourites.findIndex(() => action.payload),
        1
      );
    },
    addToRemovedFav: (state, action) => {
      state.removedFav.unshift(action.payload);
      state.removedFav.length === 6 && state.removedFav.pop();
    },

    addToLikes: (state, action) => {
      state.likes.push(action.payload);
    },
    addToDislikes: (state, action) => {
      state.dislikes.push(action.payload);
    },
  },
});

export const {
  addToAll,
  addToDislikes,
  addToFavourites,
  addToLikes,
  removeFavourites,
  addToRemovedFav,
} = favLikesDislikesReducer.actions;

export default favLikesDislikesReducer.reducer;
