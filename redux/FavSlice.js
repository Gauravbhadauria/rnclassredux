import {createSlice} from '@reduxjs/toolkit';

const FavSlice = createSlice({
  name: 'fav',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToFav(state, action) {
      state.data.push(action.payload);
    },
    removeItemFromFav(state, action) {
      let temp = state.data.filter(item => {
        return item.id != action.payload;
      });
      state.data = temp;
    },
  },
});

export const {removeItemFromFav, addItemToFav} = FavSlice.actions;
export default FavSlice.reducer;
