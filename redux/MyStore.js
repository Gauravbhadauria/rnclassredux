//configureStore ({reducer:{}})
//reducers object {}

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
import FavReducer from './FavSlice';
import ApiReducer from './ApiCallSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RTkDemoSlice from './RTkDemoSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  cart: CartReducer,
  fav: FavReducer,
  api: ApiReducer,
  [RTkDemoSlice.reducerPath]: RTkDemoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const MyStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RTkDemoSlice.middleware),
});

export const persistedStore = persistStore(MyStore);
export default MyStore;

//{cart:{data:[]},orders:{data:[]}}

// config ==> connect storage with Async Storage
// create root reducer with help of combineReducers({})
//create persist reducer with config and root reducer ,pass in persistReducer function
// pass that persisted reducer in store
//create persisted store using persistStore Function and pass store in this function as paramter
//pass persisted store in persistGate inside Provider
