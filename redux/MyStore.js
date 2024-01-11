//configureStore ({reducer:{}})
//reducers object {}

import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
import FavReducer from './FavSlice';
const MyStore = configureStore({
  reducer: {
    cart: CartReducer,
    fav: FavReducer,
  },
});

export default MyStore;

//{cart:{data:[]},orders:{data:[]}}
