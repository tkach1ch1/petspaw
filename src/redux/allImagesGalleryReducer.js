import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllImages = 'https://api.thecatapi.com/v1/images/search';

const uploadUrl = 'https://api.thecatapi.com/v1/images/upload';

const allImagesGalleryReducer = createSlice({
  name: 'gallery',
  initialState: {
    images: [],
    status: 'idle',
    error: 'null',
    limit: 5,
  },
  reducers: {
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
    changeType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { changeLimit, changeType } = allImagesGalleryReducer.actions;

export const fetchImages = createAsyncThunk(
  'gallery/fetchImages',
  async ({ limit, order, type, breedId }) => {
    axios.defaults.headers.common['x-api-key'] =
      'd9d3b448-0ba6-42b0-bc87-0efa97515132';

    let query_params = {
      limit: limit,
      order: order,
      mime_types: type,
      breed_ids: breedId,
    };
    const response = await axios.get(getAllImages, {
      params: query_params,
    });

    return response.data;
  }
);

export const uploadImage = createAsyncThunk(
  'gallery/uploadImage',
  async ({ file }) => {
    axios.defaults.headers.common['x-api-key'] =
      'd9d3b448-0ba6-42b0-bc87-0efa97515132';

    let formData = new FormData();
    formData.append('file', file);

    let response = await axios.post(uploadUrl, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data
  }
);

export default allImagesGalleryReducer.reducer;
