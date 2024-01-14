//configureStore ({reducer:{}})
//reducers object {}

import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
import FavReducer from './FavSlice';
import ApiReducer from './ApiCallSlice'
const MyStore = configureStore({
  reducer: {
    cart: CartReducer,
    fav: FavReducer,
    api:ApiReducer
  },
});

export default MyStore;

//{cart:{data:[]},orders:{data:[]}}
