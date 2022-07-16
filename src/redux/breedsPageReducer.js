import { createSlice } from '@reduxjs/toolkit';

const breedsPageReducer = createSlice({
  name: 'page',
  initialState: {
    page: 0,
  },
  reducers: {
    increaseBreedsPage: (state) => {
      state.page = state.page + 1;
    },
    decreaseBreedsPage: (state) => {
      state.page = state.page - 1;
    },
  },
});

export const { increaseBreedsPage, decreaseBreedsPage } =
  breedsPageReducer.actions;

export default breedsPageReducer.reducer;
