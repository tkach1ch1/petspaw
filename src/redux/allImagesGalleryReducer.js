import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getAllImages = 'https://api.thecatapi.com/v1/images/search';

const allImagesGalleryReducer = createSlice({
  name: 'gallery',
  initialState: {
    images: '',
    status: 'idle',
    error: 'null',
  },
  reducers: {},
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


export const fetchImages = createAsyncThunk(
  'gallery/fetchImages',
  async () => {
    const responce = await fetch(getAllImages, {
      headers: {
        'x-api-key': 'd9d3b448-0ba6-42b0-bc87-0efa97515132',
      },
    });
    return responce.json();
  }
);

export default allImagesGalleryReducer.reducer;
