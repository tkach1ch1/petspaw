import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getAllBreeds = 'https://api.thecatapi.com/v1/breeds';

const allBreedsReducer = createSlice({
  name: 'allBreeds',
  initialState: {
    breeds: '',
    status: 'idle',
    error: 'null',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const fetchBreeds = createAsyncThunk(
  'allBreeds/fetchBreeds',
  async () => {
    const responce = await fetch(getAllBreeds, {
      headers: {
        'x-api-key': 'd9d3b448-0ba6-42b0-bc87-0efa97515132',
      },
    });
    return responce.json();
  }
);

export default allBreedsReducer.reducer;
