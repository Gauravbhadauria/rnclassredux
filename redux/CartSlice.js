//createSlice({})
//name-- slice ka name
//initialState ----
//reducers :{}
//actons==> (state,action)=>{}
//export reducer
//export all actions

import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      console.log('current state===>', state);
      console.log('current action===>', action);
      let ind = -1;
      state.data.map((item, index) => {
        if (item.id == action.payload.id) {
          ind = index;
        }
      });
      if (ind != -1) {
        state.data.map((item, index) => {
          if (item.id == action.payload.id) {
            item.qty = item.qty + 1;
          }
        });
      } else {
        state.data.push(action.payload);
      }
    },
    removeItemFromCart(state, action) {
      let ind = -1;
      state.data.map((item, index) => {
        if (item.id == action.payload.id) {
          ind = index;
        }
      });
      if (ind != -1) {
        state.data.map((item, index) => {
          if (item.id == action.payload.id) {
            item.qty = item.qty - 1;
          }
        });
      }
    },
    removeItem(state, action) {
      let temp = state.data.filter(item => {
        return item.id != action.payload;
      });
      state.data = temp;
    },
    emptyCart(state, action) {},
  },
});

export const {addItemToCart, removeItemFromCart, emptyCart, removeItem} =
  CartSlice.actions;
export default CartSlice.reducer;

//actions -- data change krne ke lie
//store====> Reducer (Multiple)
//actions ===> for densing data

//dispatch==>
