import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

//action
export const FetchData = createAsyncThunk('fetchingData', async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const json = await res.json();
  json.map(item => {
    item.qty = 1;
  });
  return json;
});
export const FetchData2 = createAsyncThunk('fetchingData', async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const json = await res.json();
  return json;
});

const ApiCallSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: builder => {
    builder.addCase(FetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(FetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(FetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
  },
});

export default ApiCallSlice.reducer;
