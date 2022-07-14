import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllBreeds = 'https://api.thecatapi.com/v1/breeds';

const getAllImagesById = 'https://api.thecatapi.com/v1/images/search';

const allBreedsReducer = createSlice({
  name: 'allBreeds',
  initialState: {
    breeds: '',
    limBreeds: '',
    breedsId: '',
    imagesById: '',
    status: 'idle',
    error: 'null',
  },
  reducers: {
    addBreedsId: (state, action) => {
      state.breedsId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLimitBreeds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLimitBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.limBreeds = action.payload;
      })
      .addCase(fetchLimitBreeds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAllBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.breeds = action.payload;
      })
      .addCase(fetchImagesByBreedsId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImagesByBreedsId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.imagesById = action.payload;
      });
  },
});

export const { addBreedsId } = allBreedsReducer.actions;

export const fetchAllBreeds = createAsyncThunk(
  'allBreeds/fetchAllBreeds',
  async () => {
    const response = await fetch(getAllBreeds, {
      headers: {
        'x-api-key': 'd9d3b448-0ba6-42b0-bc87-0efa97515132',
      },
    });
    return response.json();
  }
);

export const fetchLimitBreeds = createAsyncThunk(
  'allBreeds/fetchLimitBreeds',
  async ({ limit }) => {
    axios.defaults.headers.common['x-api-key'] =
      'd9d3b448-0ba6-42b0-bc87-0efa97515132';

    let query_params = {
      limit,
    };
    const response = await axios.get(getAllBreeds, { params: query_params });
    return response.data;
  }
);

export const fetchImagesByBreedsId = createAsyncThunk(
  'allBreeds/fetchImagesByBreedsId',
  async ({ breedId }) => {
    axios.defaults.headers.common['x-api-key'] =
      'd9d3b448-0ba6-42b0-bc87-0efa97515132';

    let query_params = {
      breed_ids: breedId,
      limit: 8,
    };
    const response = await axios.get(getAllImagesById, {
      params: query_params,
    });
    return response.data;
  }
);

export default allBreedsReducer.reducer;
