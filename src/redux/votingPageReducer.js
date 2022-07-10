import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const urlGetImageRequest = 'https://api.thecatapi.com/v1/images/search';

const votingPageReducer = createSlice({
  name: 'voting',
  initialState: {
    image: '',
    status: 'idle',
    error: 'null',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchImage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.image = action.payload;
      })
      .addCase(fetchImage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const fetchImage = createAsyncThunk('voting/fetchImage', async () => {
  const response = await fetch(urlGetImageRequest, {
    headers: {
      'x-api-key': 'd9d3b448-0ba6-42b0-bc87-0efa97515132',
    },
  });
  return response.json();
});

export default votingPageReducer.reducer;
